const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Pure JS function to load .env variables without external dependency
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  console.log('Aviso: Não foi possível carregar o arquivo .env automaticamente.');
}

const { postprocessArticle } = require('./article-postprocess');
const { enhanceSeo } = require('./seo-enhance');
const ai = require('./llm');

const apiKey = process.env.CLAUDE_CODE_OAUTH_TOKEN || process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Erro: defina CLAUDE_CODE_OAUTH_TOKEN (Claude/plano Max) ou GEMINI_API_KEY (fallback).');
  console.error('Local: crie um .env na raiz com CLAUDE_CODE_OAUTH_TOKEN=... (gere o token com: claude setup-token)');
  console.error('Ou rode inline: CLAUDE_CODE_OAUTH_TOKEN=... node scripts/generate-article.js "Tema"');
  process.exit(1);
}

// Helper to clean markdown block wrappers from LLM response
function cleanMarkdownResponse(text) {
  let cleaned = text.trim();

  const startMatch = cleaned.match(/^```([a-zA-Z0-9+-]+)?/);
  if (startMatch) {
    const fenceLength = startMatch[0].length;
    cleaned = cleaned.substring(fenceLength).trim();
  }

  if (cleaned.endsWith('```')) {
    cleaned = cleaned.substring(0, cleaned.length - 3).trim();
  }

  if (cleaned.toLowerCase().startsWith('yaml\n')) {
    cleaned = cleaned.substring(5).trim();
  } else if (cleaned.toLowerCase().startsWith('markdown\n')) {
    cleaned = cleaned.substring(9).trim();
  }

  return cleaned.trim();
}

// Helper to slugify strings for filenames
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Fetch a relevant image from Unsplash API (free tier: 50 req/hour)
// Requires UNSPLASH_ACCESS_KEY in .env — register at unsplash.com/developers
function fetchUnsplashImage(query, usedImages) {
  return new Promise((resolve) => {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) {
      resolve(null);
      return;
    }

    const searchQuery = encodeURIComponent(`${query} artificial intelligence technology`);
    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=15&orientation=landscape&client_id=${accessKey}`;

    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = json.results || [];
          // Find the first result whose URL hasn't been used yet
          const available = results.find(r => {
            const imgUrl = r.urls.regular;
            return !usedImages.has(imgUrl);
          });
          if (available) {
            console.log(`🖼️  Imagem Unsplash encontrada para o tema: "${available.description || available.alt_description || query}"`);
            resolve(available.urls.regular);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

// Strip HTML tags and boilerplate, return clean plain text
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s{2,}/g, ' ')
    .trim()
    .substring(0, 5000);
}

// Fetch plain text content from a URL, following up to 3 redirects
function fetchPageContent(url, redirectCount = 0) {
  return new Promise((resolve) => {
    if (redirectCount > 3) { resolve(null); return; }

    let protocol;
    try {
      protocol = new URL(url).protocol === 'https:' ? https : http;
    } catch {
      resolve(null);
      return;
    }

    const req = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TurbinaIA/1.0; +https://turbinaia.com.br)',
        'Accept': 'text/html,application/xhtml+xml,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      timeout: 12000,
    }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        resolve(fetchPageContent(next, redirectCount + 1));
        return;
      }

      if (res.statusCode !== 200) { resolve(null); return; }

      const ct = res.headers['content-type'] || '';
      if (!ct.includes('text/html') && !ct.includes('text/plain')) { resolve(null); return; }

      let data = '';
      let truncated = false;
      res.on('data', (chunk) => {
        if (truncated) return;
        data += chunk;
        if (data.length > 400000) { truncated = true; res.destroy(); }
      });
      const finish = () => {
        const text = stripHtml(data);
        resolve(text.length > 150 ? text : null);
      };
      res.on('end', finish);
      res.on('close', () => { if (truncated) finish(); });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

// Ask Gemini (with search) for the best source URLs on the topic, then fetch them
async function researchSources(topic) {
  console.log('🔍 Pesquisando fontes confiáveis sobre o tema...');
  let urls = [];
  try {
    const res = await withRetry(() => ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Pesquise em inglês E em português sobre "${topic}" e retorne de 6 a 8 URLs de artigos originais de fontes altamente confiáveis. Inclua fontes de diferentes regiões do mundo para ter perspectivas variadas. Priorize (nesta ordem):
1) Blogs e releases oficiais dos laboratórios de IA: anthropic.com, openai.com, blog.google/technology/ai, deepmind.google, ai.meta.com, mistral.ai, x.ai
2) Revistas científicas e acadêmicas: arxiv.org, technologyreview.com (MIT), nature.com, science.org
3) Jornalismo tecnológico internacional de referência: techcrunch.com, theverge.com, wired.com, arstechnica.com, ars.electronica.art, reuters.com, bloomberg.com, apnews.com, bbc.com/news/technology, theguardian.com/technology, ft.com, economist.com
4) Relatórios de analistas: gartner.com, mckinsey.com, statista.com
Tente trazer ao menos 2 fontes que confirmem os mesmos fatos principais para permitir cruzamento de informações.
Retorne SOMENTE as URLs completas, uma por linha, sem texto adicional, bullet points ou numeração.`,
      config: { tools: [{ googleSearch: {} }] },
    }));
    urls = res.text
      .split('\n')
      .map(l => l.replace(/^[-*\d.)\s]+/, '').trim())
      .filter(l => /^https?:\/\/.+\..+/.test(l))
      .slice(0, 8);
  } catch (err) {
    console.log('⚠️  Não foi possível obter URLs de fontes:', err.message);
  }

  if (urls.length === 0) return '';

  console.log(`📡 Baixando conteúdo de ${urls.length} fonte(s) em paralelo...`);
  const fetched = await Promise.all(urls.map(async (url) => {
    const content = await fetchPageContent(url);
    if (content) {
      console.log(`  ✅ ${url}`);
      return `### Fonte: ${url}\n${content}`;
    } else {
      console.log(`  ⚠️  Não acessível: ${url}`);
      return null;
    }
  }));

  const valid = fetched.filter(Boolean);
  if (valid.length === 0) return '';

  console.log(`📄 ${valid.length} fonte(s) carregada(s) com sucesso.`);
  return valid.join('\n\n---\n\n');
}

async function withRetry(fn, maxRetries = 4, baseDelayMs = 20000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isSpendingCap = error?.message && error.message.includes('spending cap');
      if (isSpendingCap) {
        error.isSpendingCap = true;
        throw error;
      }
      const isRetryable = error?.status === 503 || error?.status === 429 ||
        (error?.message && (error.message.includes('503') || error.message.includes('UNAVAILABLE') || error.message.includes('high demand')));
      if (isRetryable && attempt < maxRetries) {
        const delay = baseDelayMs * attempt;
        console.log(`⏳ Gemini indisponível (tentativa ${attempt}/${maxRetries}). Aguardando ${delay / 1000}s antes de tentar novamente...`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw error;
      }
    }
  }
}

function getRecentArticleTitles(daysBack = 30) {
  const articlesDir = path.resolve(process.cwd(), 'content/articles');
  if (!fs.existsSync(articlesDir)) return [];
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysBack);
  const titles = [];
  for (const file of fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'))) {
    const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
    const dateMatch = content.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})"?/m);
    const titleMatch = content.match(/^title:\s*"?(.+?)"?\s*$/m);
    if (dateMatch && titleMatch && new Date(dateMatch[1]) >= cutoff) {
      titles.push(titleMatch[1].replace(/^"|"$/g, ''));
    }
  }
  return titles;
}

// Rodízio de tipos de pauta — diversifica o blog para além de hard news de
// laboratórios/empresas (que dominavam 100% das publicações):
//   segunda  → notícia quente (comportamento original)
//   quarta   → novidade de ferramenta de IA que as pessoas usam no dia a dia
//   sexta    → uso prático / metodologia / tendência de adoção (evergreen, tráfego orgânico)
// Override manual: ARTICLE_TYPE=noticia|ferramenta|uso (env) ou rodízio pelo dia.
const ARTICLE_TYPES = {
  noticia: {
    label: 'Notícia quente',
    category: 'noticias',
    suggestion: (today, avoidBlock) => `Pesquise na internet as notícias mais importantes, recentes e impactantes de hoje (${today}) sobre Inteligência Artificial, tecnologia ou novas ferramentas de IA, priorizando publicações de fontes de alta credibilidade como: blogs oficiais dos laboratórios de IA (anthropic.com, openai.com, deepmind.google, ai.meta.com, mistral.ai, blog.google/technology/ai), revistas especializadas (technologyreview.com, wired.com, nature.com, science.org), veículos de jornalismo tecnológico com editorial reconhecido (techcrunch.com, theverge.com, reuters.com, bloomberg.com, apnews.com) ou papers do arxiv.org. Com base nas notícias reais encontradas nessas fontes, sugira um único título/tema ESPECÍFICO para um artigo de blog focado em atrair tráfego e otimizado para SEO. O tema deve ter um fato ou notícia concreta como gancho — EVITE temas genéricos como "evolução da IA em 2026" ou resumos semanais do tipo "a semana da IA". Prefira temas como "OpenAI lança X", "Google anuncia Y", "estudo revela Z".${avoidBlock}\n\nRetorne APENAS o título sugerido em uma única linha, sem aspas, explicações, markdown ou comentários adicionais.`,
    angle: `## PAUTA DESTA EDIÇÃO: NOTÍCIA
Este artigo é uma notícia quente. Vá direto ao fato, contextualize com profundidade jornalística e explique o que muda na prática para o leitor brasileiro. Use \`category: noticias\` no frontmatter.`,
  },
  ferramenta: {
    label: 'Novidade de ferramenta',
    category: 'ferramentas',
    suggestion: (today, avoidBlock) => `Pesquise na internet (${today}) as novidades mais recentes e relevantes em FERRAMENTAS DE IA que pessoas comuns e profissionais usam no dia a dia — lançamentos, atualizações importantes ou recursos novos de produtos como ChatGPT, Gemini, Claude, Copilot, NotebookLM, Midjourney, Canva, CapCut, ElevenLabs, Notion AI, Perplexity, cursores de código com IA, apps de produtividade com IA, ou ferramentas novas que estejam ganhando tração real (rankings de apps, dados de adoção). Priorize fontes confiáveis: blogs oficiais dos produtos, techcrunch.com, theverge.com, wired.com, arstechnica.com, technologyreview.com. EVITE pautas corporativas de bastidor (chips, aquisições, rodadas de investimento, data centers) — o foco é utilidade prática para quem USA as ferramentas. Sugira um único título/tema ESPECÍFICO com gancho concreto (recurso lançado, mudança de preço/plano, funcionalidade viral) e apelo de busca orgânica — algo que uma pessoa realmente pesquisaria no Google, como "X ganha recurso Y: como funciona e para quem vale a pena".${avoidBlock}\n\nRetorne APENAS o título sugerido em uma única linha, sem aspas, explicações, markdown ou comentários adicionais.`,
    angle: `## PAUTA DESTA EDIÇÃO: FERRAMENTA
Este artigo é sobre uma novidade de ferramenta de IA de uso cotidiano. Além de noticiar o fato, seja ÚTIL: explique como o recurso funciona na prática, quem se beneficia, quanto custa (planos/preços no Brasil quando existirem), limitações reais e como o leitor testa hoje. Uma seção curta de passo a passo ou "como experimentar" é bem-vinda quando fizer sentido. Use \`category: ferramentas\` no frontmatter.`,
  },
  uso: {
    label: 'Uso prático / metodologia',
    category: 'tutoriais',
    suggestion: (today, avoidBlock) => `Pesquise na internet (${today}) tendências REAIS e recentes de COMO as pessoas estão usando Inteligência Artificial no trabalho, nos estudos, na criação de conteúdo ou na vida pessoal — metodologias, técnicas e hábitos em alta (ex.: técnicas de prompt que viraram padrão, "vibe coding", IA para estudar para provas e concursos, agentes de IA em rotinas de trabalho, automação pessoal, pesquisa profunda com IA). A pauta DEVE estar ancorada em pelo menos um fato concreto e verificável de fonte confiável: pesquisa/survey (Pew, Gallup, McKinsey, Stanford HAI, gartner.com), reportagem de veículo reconhecido (technologyreview.com, wired.com, theverge.com, economist.com, ft.com, reuters.com) ou dados de adoção divulgados oficialmente. EVITE listicles genéricos ("10 formas de usar IA") e temas sem gancho factual. Sugira um único título/tema ESPECÍFICO com forte apelo de busca orgânica — do tipo que responde a uma pergunta que as pessoas pesquisam ("o que é X e por que todo mundo está usando", "como a técnica Y funciona").${avoidBlock}\n\nRetorne APENAS o título sugerido em uma única linha, sem aspas, explicações, markdown ou comentários adicionais.`,
    angle: `## PAUTA DESTA EDIÇÃO: USO PRÁTICO / METODOLOGIA
Este artigo explica uma forma de usar IA que está em alta, com valor evergreen (deve continuar útil por meses). Estruture para intenção de busca: defina o conceito logo no início, mostre como aplicar na prática (com exemplo concreto ou mini passo a passo), o que dizem os dados/pesquisas sobre adoção, erros comuns e para quem faz sentido. Use \`category: tutoriais\` no frontmatter (ou \`ferramentas\` se o tema for centrado num produto específico).`,
  },
};

function pickArticleType() {
  const override = (process.env.ARTICLE_TYPE || '').trim().toLowerCase();
  if (ARTICLE_TYPES[override]) return override;
  const day = new Date().getUTCDay(); // 0=dom ... 6=sáb (cron roda seg/qua/sex 16h UTC)
  if (day === 1) return 'noticia';
  if (day === 3) return 'ferramenta';
  if (day === 5) return 'uso';
  return ['noticia', 'ferramenta', 'uso'][day % 3];
}

async function run() {
  let topic = process.argv[2];
  const today = new Date().toISOString().split('T')[0];
  const manualTopic = Boolean(topic);
  const articleType = pickArticleType();
  const typeSpec = ARTICLE_TYPES[articleType];

  console.log('⚡ Iniciando o Gerador de Artigos Turbina IA ⚡');
  console.log(`🗞️  Tipo de pauta desta edição: ${typeSpec.label} (${articleType})`);

  // Step 1: Suggest a trend topic if none is supplied
  if (!topic) {
    console.log('Nenhum tema foi fornecido. Solicitando uma sugestão de tendência à IA via busca na internet...');

    const recentTitles = getRecentArticleTitles(30);
    const avoidBlock = recentTitles.length > 0
      ? `\n\nTEMAS JÁ COBERTOS (NÃO repita nem aborde de ângulo similar — canibalizariam o conteúdo existente):\n${recentTitles.map(t => `- ${t}`).join('\n')}\n\nEscolha um tema DIFERENTE, com fato ou notícia nova que não se sobreponha aos listados acima.`
      : '';

    try {
      const suggestResponse = await withRetry(() => ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: typeSpec.suggestion(today, avoidBlock),
        config: {
          tools: [{ googleSearch: {} }]
        }
      }));
      topic = suggestResponse.text.trim();
      console.log(`🤖 Tema sugerido pela IA (baseado em buscas reais): "${topic}"`);
    } catch (error) {
      if (error.isSpendingCap) {
        console.error('❌ Limite de gastos da API Gemini atingido. Nenhum artigo foi publicado.');
        process.exit(1);
      }
      console.error('Erro ao obter sugestão de tema:', error);
      process.exit(1);
    }
  }

  // Step 2: Research — fetch actual content from trusted sources
  const sourceContext = await researchSources(topic);

  console.log(`📝 Gerando artigo completo sobre: "${topic}" (com busca em tempo real + fontes verificadas)...`);

  // Step 3: Generate the article using Gemini 2.5 Flash with search tools + pre-fetched source content
  const sourceBlock = sourceContext
    ? `\n\n## CONTEÚDO REAL EXTRAÍDO DAS FONTES PRIMÁRIAS\n\nOs textos abaixo foram baixados diretamente dos sites das fontes originais. Use-os como base principal das informações do artigo. Ao cruzar informações que aparecem em múltiplas fontes, você pode afirmar com mais confiança — indique isso com expressões como "confirmado por X e Y" ou "tanto a [Fonte A] quanto a [Fonte B] relatam que...".\n\n${sourceContext}\n\n---\n`
    : '';

  const angleBlock = manualTopic ? '' : `\n${typeSpec.angle}\n`;

  const prompt = `Você é o redator-chefe do blog Turbina IA (turbinaia.com.br), especializado em Inteligência Artificial, ferramentas de produtividade e tendências tecnológicas.

Sua missão é escrever um artigo em português impecável, com jornalismo de qualidade, sobre o tema: "${topic}".${sourceBlock}
${angleBlock}
## ESTILO DE ESCRITA — TEXTO HUMANO (tão importante quanto as fontes)

O texto precisa soar como um jornalista brasileiro experiente escrevendo para gente de verdade — nunca como texto de IA. Regras:

- **Abertura concreta:** comece com um fato, uma cena, um número ou uma pergunta específica. PROIBIDO abrir com generalidades ("A inteligência artificial está transformando o mundo...", "Nos últimos anos...").
- **Ritmo variado:** alterne frases curtas com longas; parágrafos de 1 a 5 frases, tamanhos irregulares. Texto em que todos os parágrafos têm o mesmo tamanho parece máquina.
- **Clichês de IA PROIBIDOS:** "no cenário atual", "em constante evolução", "é importante ressaltar/destacar/notar", "vale destacar", "nesse sentido", "além disso" mais de 1x, "em resumo", "concluindo", "revolucionário", "divisor de águas", "game-changer", "desbloquear o potencial", "impulsionar sua produtividade", "não é mais ficção científica".
- **Menos listas, mais prosa:** prefira parágrafos corridos com transições naturais. Bullets só quando o conteúdo é genuinamente enumerativo (specs, preços, passos).
- **Negrito com parcimônia:** reserve para termos-chave, nunca para frases inteiras de ênfase retórica.
- **Fechamento com substância:** termine com a consequência prática ou a pergunta que fica em aberto — nunca com resumo genérico ou "só o tempo dirá".
- **Voz editorial:** um toque de análise própria claramente sinalizada é bem-vindo ("na prática, o que muda é...", "o detalhe que passou despercebido é..."), sem editorialismo disfarçado de fato.
- **Título honesto (política AdSense):** o título deve prometer EXATAMENTE o que o corpo entrega. Se o corpo relativiza ("ainda é rumor", "só em preview"), o título não pode afirmar como fato consumado. Sensacionalismo com desmentido no corpo = conteúdo enganoso.

## REGRAS DE QUALIDADE DAS FONTES (OBRIGATÓRIO)

Você tem acesso à pesquisa Google em tempo real E ao conteúdo real extraído das fontes acima. Use ambos, mas siga estas regras:

**Fontes PERMITIDAS:**
- Conteúdo extraído das fontes primárias fornecidas acima (prioridade máxima)
- Blogs e anúncios oficiais dos laboratórios de IA: anthropic.com, openai.com, blog.google/technology/ai, deepmind.google, ai.meta.com, mistral.ai, x.ai, cohere.com
- Revistas científicas: arxiv.org, nature.com, science.org, technologyreview.com (MIT)
- Jornalismo internacional reconhecido: techcrunch.com, theverge.com, wired.com, arstechnica.com, reuters.com, bloomberg.com, apnews.com, bbc.com/news/technology, theguardian.com/technology, ft.com, economist.com
- Relatórios de analistas: gartner.com, mckinsey.com, statista.com, idc.com
- Documentação técnica oficial: developers.google.com, platform.openai.com, docs.anthropic.com

**Fontes PROIBIDAS:**
- Blogs pessoais, Medium, Substack, LinkedIn Articles sem autoria verificada
- Sites de agregação sem editorial (makeuseof.com, beebom.com e similares)
- Fóruns (Reddit, Quora) como fonte primária de afirmações factuais
- Sites que apenas reproduzem conteúdo sem análise original

**Regra de ouro:** Se não encontrou a informação em uma fonte confiável — incluindo as fontes já extraídas — NÃO a inclua. Prefira um artigo com menos dados, porém 100% verificados.

## CITAÇÕES INLINE OBRIGATÓRIAS (regra mais importante deste documento)

Não basta listar as fontes ao final — o texto principal precisa estar ancorado em links. Use esta regra como métrica de qualidade: **se um parágrafo cita uma pessoa, uma empresa, um número ou um fato verificável e não tem nenhum link Markdown, o parágrafo está incompleto e precisa ser reescrito.**

- Toda afirmação factual deve ter citação inline como link Markdown: \`[nome da fonte](URL real)\`.
- Quando você atribuir uma fala ("Sundar Pichai disse...", "Tim Gowers qualificou...", "a OpenAI anunciou..."), o nome ou o veículo que reportou DEVE estar como link na própria frase.
- Quando citar um número ou benchmark ("o modelo atinge 87%", "consumo de 945 TWh", "investimento de US$ 5 bi"), a fonte do número DEVE estar como link inline.
- Quando o mesmo fato aparecer em 2+ fontes, indique o cruzamento: "tanto a [Guardian](URL) quanto a [MIT Technology Review](URL) confirmam que...".
- **Meta mínima: 1 link inline a cada 2 parágrafos do corpo.** Se ficar abaixo disso, o artigo será rejeitado.
- **Meta máxima: NUNCA repita a mesma URL em links consecutivos dentro do mesmo parágrafo.** Se um parágrafo cita 5 fatos vindos da mesma fonte, use \`[Nome da Fonte](URL)\` UMA vez logo no início ("De acordo com a [Fonte X](URL), ...") e depois apenas mencione o nome sem link (ou use pronomes: "a empresa", "o estudo", "o relatório"). Encadear \`[X](url) ... [X](url) ... [X](url)\` no mesmo parágrafo é spam de links e será rejeitado.
- Ao final, inclua "## Fontes e Referências" listando todos os links no formato: \`- [Título](URL)\`. As URLs aqui devem ser as MESMAS já usadas inline — não uma lista paralela. Cada URL aparece UMA vez na lista (sem repetição).

## QUALIDADE MÍNIMA DAS FONTES (rejeição automática se não cumprir)

A lista de Referências DEVE conter pelo menos 3 fontes do "tier 1" abaixo. Artigos cuja lista de fontes seja composta apenas por blogs pessoais, newsletters anônimas ou sites desconhecidos serão **automaticamente despublicados** (\`isFeatured: false\`) pelo pós-processamento até revisão humana.

**Tier 1 (priorize ao máximo, repita a busca se necessário):**
- Blogs e releases oficiais dos laboratórios: \`anthropic.com\`, \`openai.com\`, \`cdn.openai.com\`, \`blog.google\`, \`deepmind.google\`, \`ai.meta.com\`, \`mistral.ai\`, \`x.ai\`, \`cohere.com\`, \`huggingface.co\`
- Pesquisa científica: \`arxiv.org\`, \`nature.com\`, \`science.org\`
- Jornalismo de referência: \`technologyreview.com\` (MIT), \`wired.com\`, \`theverge.com\`, \`techcrunch.com\`, \`arstechnica.com\`, \`reuters.com\`, \`bloomberg.com\`, \`apnews.com\`, \`bbc.com\`, \`theguardian.com\`, \`ft.com\`, \`economist.com\`, \`nytimes.com\`, \`wsj.com\`, \`forbes.com\`
- Análise e relatórios: \`gartner.com\`, \`mckinsey.com\`, \`statista.com\`, \`idc.com\`
- Brasil: \`folha.uol.com.br\`, \`globo.com\`, \`estadao.com.br\`, \`cnnbrasil.com.br\`, \`mittechreview.com.br\`

**Se a busca inicial só retornou blogs desconhecidos**, refaça a busca priorizando explicitamente os domínios acima — não publique com fontes fracas só porque foi mais fácil encontrá-las.

**Temas especulativos (rumores, vazamentos, modelos não lançados):** ancore o artigo em jornalismo estabelecido (\`theinformation.com\`, \`reuters.com\`, \`bloomberg.com\`, \`theverge.com\`, \`techcrunch.com\`) sempre que existir, e deixe o status de rumor EXPLÍCITO no texto ("ainda não confirmado oficialmente", "segundo fontes não oficiais"). Não construa o artigo majoritariamente sobre blogs de tecnologia menores ou sites de criptomoeda — eles podem aparecer como apoio, nunca como espinha dorsal.

**Domínios fracos que NÃO contam como fonte** (e serão removidos automaticamente pelo postprocess): \`ajeet.me\`, \`automely.com\`, \`clawpod.com\`, \`stackdecode.com\`, \`genaicoding.com\`, \`aisuperskills.com\`, \`therundown.ai\`, \`letsdatascience.com\`, \`quantumzeitgeist.com\`, \`startuphub.ai\`, \`kucoin.com\`, \`cryptobriefing.com\`, \`incrypted.com\`, \`digg.com\`, \`biggo.finance\`, \`pasqualepillitteri.it\`, \`vietnam.vn\`, \`ocafezinho.com\`, \`yourstory.com\`, qualquer \`*.medium.com\` ou \`*.substack.com\` sem autoria reconhecida.

## ESTRUTURA DE HEADINGS (obrigatório)

- O \`title\` do frontmatter já vira o H1 da página automaticamente. **NÃO repita o título como \`##\` no início do corpo** — comece direto pela introdução (parágrafo de texto), seguida do TL;DR, e só depois use \`##\` para a primeira seção.
- Use \`##\` para seções de primeiro nível e \`###\` para subseções. Não use \`#\` em lugar nenhum.

## PROIBIÇÕES ABSOLUTAS NO TEXTO PUBLICADO

Estes padrões NÃO podem aparecer no Markdown final em nenhuma hipótese — eles são artefatos internos da ferramenta de grounding e quebram a confiança do leitor:

- **NUNCA escreva marcadores tipo \`[cite: 1, 5, 23]\`, \`[cite: 27]\` ou similares.** Se quiser indicar a fonte, use sempre um link Markdown completo: \`[nome da fonte](URL)\`.
- **NUNCA escreva \`[Fonte: Nome do Veículo]\` como anotação seca.** Em vez disso, transforme em link inline: \`segundo a [Nome do Veículo](URL)\`.
- **NUNCA use URLs intermediárias** do tipo \`vertexaisearch.cloud.google.com/grounding-api-redirect/...\`. Sempre use a URL canônica final do site original (ex.: \`https://www.reuters.com/technology/...\`, \`https://blog.google/...\`).
- **NUNCA cite agregadores de conteúdo, exchanges de criptomoeda, newsletters anônimas ou blogs pessoais.** Domínios proibidos incluem (mas não se limitam a): \`kucoin.com\`, \`cryptobriefing.com\`, \`incrypted.com\`, \`digg.com\`, \`biggo.finance\`, \`therundown.ai\`, \`letsdatascience.com\`, \`quantumzeitgeist.com\`, \`startuphub.ai\`, qualquer subdomínio \`*.medium.com\` ou \`*.substack.com\` sem autoria reconhecida, qualquer site que pareça tradução automática (\`vietnam.vn\`, etc.), e blogs com nome de pessoa (\`pasqualepillitteri.it\` e similares). Esses domínios diluem a credibilidade da lista de Referências.
- **NUNCA termine uma frase com pontuação dupla** como \`?.\`, \`!.\`, \`.?\`, \`?,\`. Use exatamente um sinal terminal por frase.
- Se você não tem a URL canônica de uma fonte, **não inclua a citação** — prefira omitir o link a deixar um marcador interno visível.

## FORMATO DO ARQUIVO

Retorne APENAS o Markdown cru com frontmatter YAML no topo. Sem blocos de código envolvendo o arquivo inteiro.

---
title: [Título chamativo e otimizado para SEO]
description: [Meta descrição com menos de 160 caracteres]
category: [tutoriais | noticias | ferramentas]
tags:
  - [Tag 1]
  - [Tag 2]
  - [Tag 3]
author: Redação Turbina IA
isFeatured: false
date: "${today}"
---

## DIRETRIZES DE CONTEÚDO (GEO — Otimização para Mecanismos de IA)

1. **TL;DR obrigatório:** Após a introdução, insira:
   > **Resposta Rápida (TL;DR):** [2–3 frases diretas respondendo à principal pergunta do tema. Buscadores de IA priorizam esse bloco.]

2. **Cabeçalhos:** Use apenas ## e ### para organizar seções.

3. **Tabelas:** Para dados comparativos (preços, benchmarks, recursos, prós/contras), crie tabelas Markdown limpas.

4. **Densidade factual:** Nomes exatos, datas, versões, números e estatísticas — sempre com a fonte citada.

5. **Perspectiva internacional:** Quando houver diferentes pontos de vista de veículos de diferentes países ou regiões, inclua-os para enriquecer a análise.

6. **FAQ:** Seção "## Perguntas Frequentes" com 3 perguntas e respostas ultra-diretas. FORMATO OBRIGATÓRIO: cada pergunta é um heading H3 (\`### Pergunta aqui?\`) seguido da resposta em parágrafo normal. NUNCA use \`**negrito**\` para as perguntas — o site só extrai o schema FAQPage (rich snippet do Google) de perguntas em \`###\`.

7. **Links internos (OBRIGATÓRIO — mínimo 2, ideal 3):** Distribua ao longo do corpo de 2 a 3 links internos contextuais, integrados naturalmente às frases (nunca numa lista solta). Use as páginas do próprio site e escolha pela relevância: [Comparador de IAs](/comparador) (ao comparar modelos), [Calculadora de Custos](/calculadora) (ao falar de preços/tokens), [Prompts](/prompts) e [Gerador de Prompts](/gerador) (ao falar de uso prático), [Glossário de IA](/glossario) (ao introduzir um termo técnico) ou [Monitor de Modelos](/changelog) (ao falar de versões/lançamentos). Menos de 2 links internos no corpo = artigo incompleto, reescreva.

8. **Fontes:** Seção "## Fontes e Referências" ao final com todos os links.

Escreva um artigo longo (mínimo de 1500 palavras, idealmente entre 1800 e 2500 palavras), com profundidade jornalística real, baseado nas fontes primárias fornecidas e em pesquisa adicional verificada.

**PROIBIDO:** artigos no estilo "resumo da semana", "as melhores notícias de IA desta semana" ou qualquer compilação de múltiplos eventos sem aprofundamento. Cada artigo deve ter UM tema central concreto e aprofundá-lo com análise, dados e contexto.`;

  try {
    const response = await withRetry(() => ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    }));

    const rawContent = response.text;
    let cleanContent = cleanMarkdownResponse(rawContent);

    // Ensure frontmatter starts with '---'
    if (!cleanContent.startsWith('---')) {
      const firstDashIndex = cleanContent.indexOf('---');
      if (firstDashIndex > 0) {
        const headerPart = cleanContent.substring(0, firstDashIndex);
        if (headerPart.includes('title:') || headerPart.includes('description:')) {
          cleanContent = '---\n' + cleanContent;
        }
      }
    }

    // Ensure title and description are wrapped in quotes to prevent YAML parse errors
    let lines = cleanContent.split('\n');
    let inFrontmatter = false;
    let frontmatterBoundaries = 0;

    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed === '---') {
        frontmatterBoundaries++;
        if (frontmatterBoundaries === 1) inFrontmatter = true;
        if (frontmatterBoundaries === 2) inFrontmatter = false;
      }

      if (inFrontmatter) {
        // Normaliza antes de re-escapar: o modelo às vezes já entrega aspas
        // escapadas (\") — re-escapar sem desfazer gera \\" e quebra o YAML
        // (título truncado; incidente do artigo J-Space em 13/07).
        if (lines[i].startsWith('title:')) {
          let value = lines[i].replace('title:', '').trim();
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          value = value.replace(/\\+"/g, '"');
          lines[i] = `title: "${value.replace(/"/g, '\\"')}"`;
        } else if (lines[i].startsWith('description:')) {
          let value = lines[i].replace('description:', '').trim();
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          value = value.replace(/\\+"/g, '"');
          lines[i] = `description: "${value.replace(/"/g, '\\"')}"`;
        }
      }
    }
    cleanContent = lines.join('\n');

    // Guard de qualidade: aborta se a saída do modelo não for um artigo válido
    // (ex.: vazou chamada de ferramenta como `print(google_search...)`,
    // frontmatter ausente, sem título, ou corpo curto demais). Evita publicar
    // arquivos quebrados (sem título/imagem) como já ocorreu.
    const hasFrontmatter = cleanContent.startsWith('---') && /\n---/.test(cleanContent.slice(3));
    const hasTitle = /^title:\s*\S/m.test(cleanContent);
    const bodyAfterFm = cleanContent.replace(/^---[\s\S]*?\n---/, '').trim();
    if (!hasFrontmatter || !hasTitle || bodyAfterFm.length < 800) {
      console.error('❌ Conteúdo gerado é inválido (sem frontmatter/título ou muito curto). Artigo NÃO será salvo.');
      console.error('   Prévia do que veio do modelo:', JSON.stringify(cleanContent.slice(0, 180)));
      return; // sai sem gravar — o workflow segue e não comita lixo
    }

    // Parse title and category from frontmatter
    let titleLine = cleanContent.split('\n').find(line => line.startsWith('title:'));
    let titleVal = topic;
    if (titleLine) {
      titleVal = titleLine.replace('title:', '').replace(/['"]/g, '').trim();
    }

    let categoryLine = cleanContent.split('\n').find(line => line.startsWith('category:'));
    let categoryVal = 'noticias';
    if (categoryLine) {
      categoryVal = categoryLine.replace('category:', '').replace(/['"]/g, '').trim().toLowerCase();
    }

    // Curated Unsplash images as fallback (used when UNSPLASH_ACCESS_KEY is not set)
    const curatedImages = {
      noticias: [
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1680474569854-81216b34417a?auto=format&fit=crop&w=1200&q=80'
      ],
      tutoriais: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1516116211223-5c359a36298a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
      ],
      ferramentas: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?auto=format&fit=crop&w=1200&q=80'
      ]
    };

    // Scan existing articles to collect all cover images already in use
    const articlesDir = path.resolve(process.cwd(), 'content/articles');
    const usedImages = new Set();
    if (fs.existsSync(articlesDir)) {
      const files = fs.readdirSync(articlesDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const filePath = path.join(articlesDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const match = content.match(/coverImage:\s*["']([^"']+)["']/);
          if (match) usedImages.add(match[1].trim());
        }
      }
    }

    // Try Unsplash API first; fall back to curated list
    let coverImageUrl = await fetchUnsplashImage(titleVal, usedImages);

    if (!coverImageUrl) {
      if (process.env.UNSPLASH_ACCESS_KEY) {
        console.log('⚠️  Unsplash API não retornou imagem disponível, usando lista curada.');
      }
      const imagesList = curatedImages[categoryVal] || curatedImages.noticias;
      let available = imagesList.filter(img => !usedImages.has(img));

      if (available.length === 0) {
        const allCurated = Object.values(curatedImages).flat();
        available = allCurated.filter(img => !usedImages.has(img));
      }
      if (available.length === 0) {
        available = curatedImages[categoryVal] || curatedImages.noticias;
      }

      coverImageUrl = available[Math.floor(Math.random() * available.length)];
    }

    // Inject coverImage into frontmatter before the closing ---
    const frontmatterEndIndex = cleanContent.indexOf('---', 4);
    if (frontmatterEndIndex !== -1) {
      let beforeEnd = cleanContent.substring(0, frontmatterEndIndex);
      const afterEnd = cleanContent.substring(frontmatterEndIndex);
      // Drop any coverImage the model may have emitted in the frontmatter,
      // otherwise injecting ours produces a duplicated YAML key (build error).
      beforeEnd = beforeEnd.replace(/^coverImage:.*(\r?\n)?/gim, '');
      cleanContent = `${beforeEnd}coverImage: "${coverImageUrl}"\n${afterEnd}`;
    }

    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

    // Strip Gemini grounding artifacts ([cite:], [Fonte:]), fix common typos,
    // and resolve vertexaisearch.cloud.google.com redirects to canonical URLs.
    console.log('🧼 Pós-processando artigo (limpeza + resolução de redirects)...');
    cleanContent = await postprocessArticle(cleanContent, { verbose: true });

    const slug = slugify(titleVal);

    // Enriquecimento de SEO determinístico: description <=160, 2 imagens inline
    // e links internos contextuais (apenas para slugs existentes).
    console.log('🎯 Aplicando pacote SEO (description, imagens inline, links internos)...');
    cleanContent = enhanceSeo(cleanContent, { articlesDir, coverImageUrl, currentSlug: slug });

    const filePath = path.join(articlesDir, `${slug}.md`);
    fs.writeFileSync(filePath, cleanContent, 'utf8');

    console.log(`\n✅ Artigo gerado com sucesso!`);
    console.log(`📁 Salvo em: ${filePath}`);
    console.log(`🔗 Slug gerado: ${slug}`);
    console.log(`📌 Título final: "${titleVal}"`);

  } catch (error) {
    console.error('❌ Erro durante a geração do artigo:', error);
  }
}

run();
