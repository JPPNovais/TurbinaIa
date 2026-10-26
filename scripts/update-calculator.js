const fs = require('fs');
const path = require('path');

// Load .env without external dependency
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        if (!process.env[key]) process.env[key] = value;
      }
    });
  }
} catch (e) {
  console.log('Aviso: Não foi possível carregar o arquivo .env.');
}

const { safeWriteDataFile, withRetry } = require('./data-update-utils');
const ai = require('./llm');
const apiKey = process.env.CLAUDE_CODE_OAUTH_TOKEN || process.env.GEMINI_API_KEY;

if (!apiKey && !process.argv.includes('--only-exchange-rate')) {
  console.error('❌ Erro: defina CLAUDE_CODE_OAUTH_TOKEN (Claude/plano) ou GEMINI_API_KEY (fallback).');
  process.exit(1);
}


function cleanMarkdownResponse(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('```typescript')) cleaned = cleaned.substring(13);
  else if (cleaned.startsWith('```javascript')) cleaned = cleaned.substring(13);
  else if (cleaned.startsWith('```')) cleaned = cleaned.substring(3);
  if (cleaned.endsWith('```')) cleaned = cleaned.substring(0, cleaned.length - 3);
  return cleaned.trim();
}

// Câmbio de referência da calculadora: PTAX de venda do Banco Central (último
// dia útil dos últimos 10 dias). Determinístico, sem LLM. Se o BCB falhar,
// mantém o valor anterior.
async function updateExchangeRate() {
  const ratePath = path.resolve(process.cwd(), 'src/data/exchange-rate.ts');
  const fmt = (d) => `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}-${d.getFullYear()}`;
  const end = new Date();
  const start = new Date(end.getTime() - 10 * 24 * 60 * 60 * 1000);
  const url =
    'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/' +
    'CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)' +
    `?@dataInicial='${fmt(start)}'&@dataFinalCotacao='${fmt(end)}'&$format=json&$select=cotacaoVenda,dataHoraCotacao`;
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const quotes = (await response.json()).value || [];
    const last = quotes[quotes.length - 1];
    const rate = Number(last && last.cotacaoVenda);
    if (!(rate > 1 && rate < 20)) throw new Error('cotação ausente ou fora da faixa esperada');
    const date = String(last.dataHoraCotacao).slice(0, 10);
    const content = `// Câmbio de referência da calculadora de custos (PTAX de venda do Banco Central).
// Atualizado por scripts/update-calculator.js — não editar à mão.
export const USD_BRL = {
  rate: ${rate},
  date: '${date}',
};
`;
    fs.writeFileSync(ratePath, content);
    console.log(`💱 Câmbio de referência: R$ ${rate} (PTAX de ${date})`);
  } catch (error) {
    console.warn('⚠️ Não foi possível atualizar o câmbio (mantido o anterior):', error.message);
  }
}

async function run() {
  await updateExchangeRate();
  if (process.argv.includes('--only-exchange-rate')) return;

  console.log('💰 Iniciando atualização dos preços da Calculadora de APIs...');

  const filePath = path.resolve(process.cwd(), 'src/data/calculator-models.ts');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Arquivo src/data/calculator-models.ts não encontrado.');
    process.exit(1);
  }

  const currentContent = fs.readFileSync(filePath, 'utf8');

  const prompt = `Você é o engenheiro de dados da Turbina IA. Sua tarefa é pesquisar os preços atuais de APIs de modelos de IA e atualizar o arquivo TypeScript da calculadora de custos.

Aqui está o conteúdo atual do arquivo:
\`\`\`typescript
${currentContent}
\`\`\`

Instruções:
1. Pesquise na internet os preços atuais de API para CADA modelo listado no arquivo. Consulte as páginas oficiais de pricing:
   - OpenAI: platform.openai.com/docs/pricing
   - Anthropic: platform.claude.com/docs/en/about-claude/pricing
   - Google: ai.google.dev/pricing
   - DeepSeek: platform.deepseek.com/docs/pricing
   - Meta (via Together): together.ai/pricing
2. Atualize os campos inputPricePerM e outputPricePerM (USD por 1 milhão de tokens) com os valores corretos e atuais (tier padrão, sem batch e sem cache).
3. Se o modelo cobra mais caro acima de um tamanho de prompt (ex.: Gemini Pro acima de 200K tokens, GPT-6 acima de 272K, Claude Haiku acima de 100K), preencha longContext com aboveTokens e os preços dessa faixa; se o preço é único, omita longContext.
4. Se um modelo listado já foi desligado (shut down) na API, remova-o ou troque pelo sucessor direto. Se só tem desligamento anunciado, mantenha e cite a data na description. Promoções com data de fim: use o preço vigente hoje e cite na description quando muda.
5. Se houver um novo modelo relevante que não está na lista e vale incluir (ex: nova versão principal de GPT, Claude ou Gemini), adicione-o. Limite total: 22 modelos.
6. Atualize o campo contextWindow se houver mudança (janela total do modelo, não a faixa de preço).
7. Mantenha exatamente a mesma estrutura TypeScript (export interface CalculatorModel, export const AI_MODELS, etc.).
8. Retorne APENAS o código TypeScript completo, sem markdown envolvendo o arquivo.`;

  try {
    const response = await withRetry(() =>
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      })
    );

    const updatedContent = cleanMarkdownResponse(response.text);

    if (
      updatedContent.includes('export interface CalculatorModel') &&
      updatedContent.includes('export const AI_MODELS')
    ) {
      if (!safeWriteDataFile(fs, filePath, currentContent, updatedContent)) return;
      console.log('✅ src/data/calculator-models.ts atualizado com preços em tempo real!');
    } else {
      console.error('❌ Resposta da IA não contém a estrutura esperada. Arquivo não alterado.');
      console.log('Prévia da resposta:', updatedContent.substring(0, 500));
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar calculadora:', error);
  }
}

run();
