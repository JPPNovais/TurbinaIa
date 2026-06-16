// Camada de LLM "drop-in" para os scripts de automação de conteúdo.
//
// Substitui o cliente do Google Gemini por uma chamada ao Claude Code CLI em modo
// headless (autenticado pela ASSINATURA via CLAUDE_CODE_OAUTH_TOKEN, sem gastar token
// de API). Mantém EXATAMENTE a mesma interface que os scripts já usam:
//
//     const ai = require('./llm');
//     const res = await ai.models.generateContent({ model, contents, config });
//     res.text  // -> string
//
// Resiliência: se o Claude falhar (limite do plano / auth / timeout / CLI ausente),
// a chamada cai automaticamente para o Gemini, desde que GEMINI_API_KEY esteja definida.
//
// O grounding por busca web do Gemini (config.tools: [{ googleSearch: {} }]) é mapeado
// para as ferramentas embutidas WebSearch/WebFetch do Claude.

const { execFileSync } = require('child_process');

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_TIMEOUT_MS = parseInt(process.env.CLAUDE_TIMEOUT_MS || '600000', 10); // 10 min
const MAX_BUFFER = 64 * 1024 * 1024; // artigos longos + saída JSON

// Sanitiza o token de OAuth: ao colar o secret é comum vir com espaços ou quebras de
// linha invisíveis, que tornam o header HTTP de autenticação inválido
// ("API Error: Header ... has invalid value"). Removemos apenas espaços e caracteres
// de controle — um token OAuth válido não contém nenhum deles (mas contém hífens!).
if (process.env.CLAUDE_CODE_OAUTH_TOKEN) {
  const raw = process.env.CLAUDE_CODE_OAUTH_TOKEN;
  const cleaned = raw.replace(/\s/g, "");
  if (cleaned !== raw) {
    console.log('🧹 [llm] CLAUDE_CODE_OAUTH_TOKEN continha espaços/quebras de linha — sanitizado.');
  }
  process.env.CLAUDE_CODE_OAUTH_TOKEN = cleaned;
}

// Quando o Claude falha por motivo "permanente" (limite do plano, auth, CLI ausente),
// desligamos o Claude para o resto desta execução e passamos a usar só o fallback,
// evitando desperdiçar tempo tentando algo que vai falhar de novo a cada chamada.
let claudeDisabled = false;

function isPermanentClaudeError(message = '') {
  const m = message.toLowerCase();
  return (
    m.includes('usage limit') ||
    m.includes('rate limit') ||
    m.includes('quota') ||
    m.includes('credit balance') ||
    m.includes('authentication') ||
    m.includes('unauthorized') ||
    m.includes('401') ||
    m.includes('403') ||
    m.includes('not logged in') ||
    m.includes('invalid value') ||
    m.includes('enoent') ||
    m.includes('command not found')
  );
}

// Converte o campo `contents` do formato Gemini (string ou array de partes) em texto puro.
function contentsToPrompt(contents) {
  if (typeof contents === 'string') return contents;
  if (Array.isArray(contents)) {
    return contents
      .map((c) => {
        if (typeof c === 'string') return c;
        if (c && typeof c.text === 'string') return c.text;
        if (c && Array.isArray(c.parts)) return c.parts.map((p) => p.text || '').join('\n');
        return '';
      })
      .join('\n');
  }
  return String(contents || '');
}

// Detecta se a chamada original pedia grounding por busca web (googleSearch).
function wantsWebSearch(config) {
  const tools = config && config.tools;
  if (!Array.isArray(tools)) return false;
  return tools.some((t) => t && t.googleSearch);
}

function callClaude({ contents, config }) {
  const prompt = contentsToPrompt(contents);
  const useWeb = wantsWebSearch(config);

  // O `model` recebido é sempre do Gemini (ex.: "gemini-2.5-flash"); ignoramos e usamos o do Claude.
  const args = ['-p', '--output-format', 'json', '--model', CLAUDE_MODEL];

  // System prompt: reforça resposta direta (facilita o parsing/validação determinístico
  // que os scripts já fazem) e, quando há grounding, orienta o uso das ferramentas de web.
  const sys = [];
  if (config && config.systemInstruction) {
    const si = config.systemInstruction;
    sys.push(typeof si === 'string' ? si : contentsToPrompt(si));
  }
  sys.push(
    'Responda diretamente com o conteúdo solicitado, sem preâmbulos, comentários ou explicações fora do que foi pedido.'
  );
  if (useWeb) {
    sys.push(
      'Você tem acesso às ferramentas WebSearch e WebFetch. Pesquise fontes atuais e confiáveis na web antes de responder, usando apenas informações reais e verificáveis.'
    );
    args.push('--allowedTools', 'WebSearch,WebFetch');
    args.push('--max-turns', '8');
  } else {
    args.push('--max-turns', '2');
  }
  args.push('--append-system-prompt', sys.join(' '));

  if (process.env.CLAUDE_EXTRA_ARGS) {
    args.push(...process.env.CLAUDE_EXTRA_ARGS.split(' ').filter(Boolean));
  }

  // O prompt vai por stdin (não como argumento) para não esbarrar no limite de tamanho
  // de argumentos do sistema operacional — os prompts de artigo são grandes.
  let stdout;
  try {
    stdout = execFileSync('claude', args, {
      input: prompt,
      encoding: 'utf8',
      maxBuffer: MAX_BUFFER,
      timeout: CLAUDE_TIMEOUT_MS,
      env: process.env,
    });
  } catch (e) {
    // execFileSync esconde a causa em e.stderr/e.stdout; expomos para diagnóstico.
    const detail = (e.stderr || e.stdout || e.message || '').toString().trim();
    throw new Error('claude CLI: ' + (detail || 'falha desconhecida').slice(0, 600));
  }

  let parsed;
  try {
    parsed = JSON.parse(stdout);
  } catch (e) {
    throw new Error('Claude: resposta não-JSON (' + String(stdout).slice(0, 200) + ')');
  }
  if (parsed.is_error || typeof parsed.result !== 'string') {
    throw new Error('Claude: ' + (parsed.result || parsed.subtype || 'resposta inválida'));
  }
  return parsed.result;
}

function callGeminiFallback({ model, contents, config }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Claude indisponível e não há GEMINI_API_KEY para fallback.');
  }
  // Lazy require: não exige o pacote quando só o Claude é usado.
  const { GoogleGenAI } = require('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  return ai.models
    .generateContent({ model: model || 'gemini-2.5-flash', contents, config })
    .then((res) => ({ text: res.text }));
}

async function generateContent({ model, contents, config }) {
  if (!claudeDisabled && process.env.CLAUDE_CODE_OAUTH_TOKEN) {
    try {
      const text = await Promise.resolve().then(() => callClaude({ contents, config }));
      console.log('🤖 [llm] resposta via Claude (' + CLAUDE_MODEL + ')');
      return { text };
    } catch (err) {
      const msg = err && err.message ? err.message : String(err);
      console.log('⚠️  [llm] Claude falhou: ' + msg.slice(0, 200));
      if (isPermanentClaudeError(msg)) {
        claudeDisabled = true;
        console.log('⛔ [llm] Claude desativado nesta execução (limite/auth/CLI). Usando Gemini.');
      }
      // segue para o fallback
    }
  }

  const result = await callGeminiFallback({ model, contents, config });
  console.log('🔁 [llm] resposta via Gemini (fallback)');
  return result;
}

module.exports = { models: { generateContent } };
