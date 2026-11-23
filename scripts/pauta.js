/**
 * Pauta do gerador automático.
 *
 * Em 3 meses, 103 notícias trouxeram 4 cliques e 37 guias trouxeram 35.
 * Desde 07/11/2026 o rodízio não gera mais notícia: só guias, ferramentas e
 * "uso", com o backlog evergreen na frente. As notícias antigas sem acesso
 * saíram do índice (`noindex: true` no frontmatter). Notícia só com
 * ARTICLE_TYPE=noticia e ALLOW_NEWS=1, por decisão manual.
 *
 * Uso programático (o generate-article.js importa daqui):
 *   const { pickArticleType, nextBacklogItem, loadArticles } = require('./pauta');
 */

const fs = require('fs');
const path = require('path');

/**
 * Fila evergreen. Um item sai da fila quando `coveredBy` casa com o slug
 * ou o título de um artigo já publicado — assim a rotina não reescreve
 * o que já existe.
 *
 * Ordem (revisão de 09/11/2026, Search Console 11/10–07/11): listas de
 * prompts por área e recortes de "melhor IA" vêm antes, porque são o tipo de
 * post que recebe clique (prompts-para-gemini, copywriting, marketing,
 * programação). Os guias de AEO pendentes de docs/PLANO-AEO-GEO.md ficam no
 * fim: o pilar de AEO teve 14 impressões e 0 clique no mesmo período.
 *
 * Revisão de 16/11/2026 (Search Console 08–14/11): os itens de prompts e de
 * "melhor IA gratuita" acima já saíram. Entra o custo de API em reais, que
 * tem busca ("valor api claude", posição 10; "consumo api gemini") e aponta
 * para a /calculadora, que está entre as páginas com clique. O guia de AEO
 * restante continua no fim.
 *
 * Revisão de 21/11/2026 (Search Console 28d até 16/11): a fila tinha zerado
 * (todos os itens publicados). Entram 9 temas para as próximas 4 semanas, só
 * guias e listas, sem notícia. Prioridade: (1) listas de prompts, o tipo de
 * post com mais clique (prompts-para-gemini, marketing, copywriting); (2)
 * recortes "melhor IA para X" que alimentam o ranking e o /comparador, com
 * busca vista no GSC ("ia gratuita para criar imagens" e variações, ~15
 * consultas em posição 50–148, sem página de escolha de ferramenta); (3) um
 * guia de economia na API que aponta para a /calculadora. Já publicados em
 * 21/11 e fora da fila: qual-ia-assinar-… e melhor-ia-para-escrever-textos-….
 *
 * Revisão de 23/11/2026 (Search Console 15–21/11): apareceram ~30 buscas de
 * preço de plano do Claude ("quanto custa o claude", "claude valores",
 * "claude mensalidade em reais", "planos claude code"), várias em posição
 * 3–11, caindo no claude-gratis-em-2026 (que ganhou tabela em reais). O
 * gemini-gratis passa a pedir a mesma seção de preço, e entra logo depois um
 * guia de planos do ChatGPT no mesmo formato. Os dois passam à frente das
 * listas de prompts de Excel e de imagens.
 */
const BACKLOG = [
  {
    id: 'aeo-schema',
    title: 'Dados estruturados (Schema) para iniciantes: como FAQ, Article e HowTo ajudam o Google e as IAs a citar uma página',
    seoHint: 'Schema para iniciantes: FAQ, Article e HowTo',
    coveredBy: /schema|dados-estruturados|dados estruturados/i,
    note: 'Guia prático de AEO. Mostre o JSON-LD mínimo (Article, FAQPage, HowTo) e o que cada um faz. Não prometa que o schema sozinho faz a página ser citada.',
  },
  {
    id: 'aeo-faq',
    title: 'FAQ que a IA cita: como escrever perguntas e respostas para o Google e para os assistentes',
    seoHint: 'FAQ que a IA cita: como escrever as respostas',
    coveredBy: /faq-que-a-ia|perguntas-que-(a-ia|o-chatgpt)-cita/i,
    note: 'Guia de AEO. Explique o formato H3 + resposta direta, o que entra no FAQPage e o que não deve ir para a FAQ. Aponte o verificador de IA do site.',
  },
  {
    id: 'prompts-chatgpt-atendimento',
    title: 'Prompts para ChatGPT de atendimento: modelos para e-mail, chat e objeção',
    seoHint: 'Prompts para ChatGPT de atendimento ao cliente',
    coveredBy: /prompts-para-chatgpt-de-atendimento|prompts-de-chatgpt-para-atendimento|prompts-(para-)?atendimento-ao-cliente/i,
    note: 'Lista de prompts por área, no mesmo formato dos posts prompts-para-… (blocos de código copiáveis, variáveis em colchetes). Linkar a lista geral de prompts para ChatGPT.',
  },
  {
    id: 'prompts-chatgpt-rh',
    title: 'Prompts para ChatGPT de RH: descrição de vaga, triagem e feedback',
    seoHint: 'Prompts para ChatGPT de RH e recrutamento',
    coveredBy: /prompts-para-chatgpt-de-rh|prompts-para-rh/i,
    note: 'Lista de prompts por área. Deixe claro que a IA não substitui a decisão de contratação nem deve receber dado sensível de candidato.',
  },
  {
    id: 'prompts-vendas-ecommerce',
    title: 'Prompts de vendas para e-commerce: ficha, carrinho abandonado e anúncio de loja virtual',
    seoHint: 'Prompts de vendas para e-commerce',
    coveredBy: /prompts-de-vendas-para-e-commerce|prompts-vendas-ecommerce/i,
    note: 'O post prompts-para-negocios-e-empreendedores já tem uma seção curta com esse H2. Este guia aprofunda (Mercado Livre, Shopee, ficha, anúncio) e linka aquela seção. Não copie os mesmos quatro prompts.',
  },
  {
    id: 'prompts-whatsapp-vendas',
    title: 'Prompts para WhatsApp de vendas: prospecção, follow-up e resposta a objeção',
    seoHint: 'Prompts para WhatsApp de vendas e prospecção',
    coveredBy: /prompts?-(para|de)-whatsapp|prospeccao-(de-clientes-)?(via|no|pelo)-whatsapp/i,
    note: 'Busca vista no Search Console em 01–07/11/2026 ("prompt para prospecção de clientes via whatsapp"). Mensagens curtas, com variáveis em colchetes. Lembre de pedir consentimento antes de mandar mensagem a quem não é cliente e de não colar dado pessoal no chat. Linkar prompts-para-negocios-e-empreendedores e o guia de atendimento.',
  },
  {
    id: 'melhor-ia-gratuita',
    title: 'Melhor IA gratuita em 2026: ChatGPT, Gemini, Claude e o que o plano grátis inclui',
    seoHint: 'Melhor IA Gratuita em 2026: ChatGPT, Gemini e Claude',
    coveredBy: /melhores-ias-gratuitas-2026/i,
    note: 'Coberto pela revisão de novembro de 2026 desse slug. Não republicar. Os recortes por tarefa (estudar, programar) seguem na fila.',
  },
  {
    id: 'melhor-ia-gratuita-estudar',
    title: 'Melhor IA gratuita para estudar: ChatGPT, Gemini e Claude no resumo e no simulado',
    seoHint: 'Melhor IA gratuita para estudar',
    coveredBy: /melhor-ia-gratuita-para-estudar/i,
    note: 'Comparativo “melhor IA para X”. Linkar melhores-ias-gratuitas-2026 e prompts-para-estudos-e-concursos. Preços e modelos só com fonte oficial da data da pesquisa.',
  },
  {
    id: 'melhor-ia-gratuita-programar',
    title: 'Melhor IA gratuita para programar: Copilot, ChatGPT, Claude e Gemini no código',
    seoHint: 'Melhor IA gratuita para programar',
    coveredBy: /melhor-ia-gratuita-para-programar/i,
    note: 'Comparativo. Linkar melhores-ias-gratuitas-2026 e prompts-para-programacao. Não copie limite de plano sem a página oficial.',
  },
  {
    id: 'aeo-vs-seo',
    title: 'AEO vs SEO na prática: o que muda na página quando o objetivo é ser citado por uma IA',
    seoHint: 'AEO vs SEO: o que muda na página',
    coveredBy: /aeo-vs-seo|aeo-versus-seo/i,
    note: 'Comparativo. SEO continua valendo; AEO muda o formato da resposta (definição no início, FAQ, fontes). Linkar o pilar de AEO e o guia de aparecer no ChatGPT.',
  },
  {
    id: 'custo-api-reais',
    title: 'Quanto custa a API do ChatGPT, do Claude e do Gemini em reais: exemplos por tarefa',
    seoHint: 'Quanto custa a API do Claude, GPT e Gemini em R$',
    coveredBy: /quanto-custa-a-api|custo-da-api|preco-da-api|api-.*em-reais/i,
    note: 'Buscas vistas no Search Console em 08–14/11/2026: "valor api claude" (posição 10), "consumo api gemini", "gemini consumo de tokens". Use só os preços de src/data/calculator-models.ts e o câmbio de src/data/exchange-rate.ts, citando a data. Mostre 3 ou 4 tarefas comuns (resumir PDF, atendimento por chat, gerar post) com tokens de entrada e saída estimados e o custo em R$. Explique token em uma frase e linke a /calculadora e o /comparador. Não invente preço nem limite de plano.',
  },
  {
    id: 'aparecer-gemini-copilot',
    title: 'Como aparecer nas respostas do Gemini e do Copilot (e do Perplexity)',
    seoHint: 'Como aparecer nas respostas do Gemini e do Copilot',
    coveredBy: /aparecer-nas-respostas-do-gemini|aparecer-nas-respostas-do-copilot|otimizar-para-o-perplexity/i,
    note: 'Guia de AEO. O post de aparecer no ChatGPT já existe: diferencie Gemini, Copilot e Perplexity e linke aquele guia em vez de repeti-lo. Não invente um “algoritmo” desses produtos.',
  },
  // --- Revisão de 21/11/2026: próximas 4 semanas ---
  {
    id: 'prompts-para-claude',
    title: 'Prompts para Claude: modelos para texto longo, análise de documento e código',
    seoHint: 'Prompts para Claude: modelos prontos para copiar',
    coveredBy: /prompts-para-(o-)?claude/i,
    note: 'Lista no formato dos posts prompts-para-… (blocos de código copiáveis, variáveis em colchetes), espelhando prompts-para-gemini, que tem clique. Foque no que o Claude faz bem: documento longo, revisão, código. Plano e modelo só com src/data/ai-models.ts. Linkar prompts-para-gemini, prompts-prontos-para-chatgpt, claude-gratis-em-2026 e o /comparador.',
  },
  {
    id: 'melhor-ia-imagens',
    title: 'Melhor IA para criar imagens em 2026: ChatGPT, Gemini, Midjourney e Stable Diffusion',
    seoHint: 'Melhor IA para criar imagens em 2026 (grátis e paga)',
    coveredBy: /melhor-ia-para-(criar-|gerar-)?image/i,
    note: 'Busca vista no Search Console (28d até 16/11/2026): "ia gratuita para criar imagens", "melhor ia para criar imagens gratuitos", "ias gratuitas para gerar imagens", em posição 50–148. Comparativo de ferramenta (qual usar), não tutorial: o passo a passo já está em como-criar-imagens-com-ia-gratis — linke em vez de repetir. Tabela com plano grátis e preço só de src/data/ai-models.ts (ChatGPT Images, Midjourney, Stable Diffusion, Gemini), citando a data de pricesCheckedAt. Linkar o ranking e o /comparador.',
  },
  {
    id: 'gemini-gratis',
    title: 'Gemini grátis em 2026: o que o plano sem custo do Google inclui e quando vale o AI Plus',
    seoHint: 'Gemini grátis em 2026: o que inclui e quando pagar',
    coveredBy: /gemini-gratis-em-|gemini-gratuito-em-|plano-gratis-do-gemini/i,
    note: 'Espelha claude-gratis-em-2026. Use só o que src/data/ai-models.ts e a página oficial dizem (gratuito: Flash-Lite e 15 GB; AI Plus R$ 24,99; AI Pro R$ 96,99), com a data de pricesCheckedAt. Inclua uma seção "Quanto custa o Gemini em reais" com a tabela dos planos (o Google publica preço em R$ no Brasil, então não converta) e uma pergunta de FAQ "Quanto custa o Gemini Pro?". Linkar melhores-ias-gratuitas-2026, claude-gratis-em-2026-o-que-o-plano-sem-custo-da-anthropic-permite-fazer, qual-ia-assinar-chatgpt-plus-claude-pro-ou-google-ai-pro e prompts-para-gemini.',
  },
  {
    id: 'chatgpt-planos',
    title: 'Planos do ChatGPT em 2026: o que o grátis, o Go, o Plus e o Pro incluem e quanto custam em reais',
    seoHint: 'Planos do ChatGPT: Grátis, Go, Plus e Pro em reais',
    coveredBy: /planos-do-chatgpt|chatgpt-go-plus-pro|quanto-custa-o-chatgpt/i,
    note: 'Mesmo formato do claude-gratis-em-2026 (que recebe buscas de preço de plano em posição 3–11): tabela plano a plano e uma tabela em reais. Use só src/data/ai-models.ts (pricing e pricesCheckedAt) e converta pelo câmbio de src/data/exchange-rate.ts citando a data da PTAX e avisando que IOF e impostos ficam de fora; se o plano tiver preço oficial em R$, use esse. Não repita o comparativo de qual-ia-assinar: aqui é só o ChatGPT, com o que cada plano libera (modelos, limites, Codex). FAQ com "Quanto custa o ChatGPT Plus em reais?" e "O ChatGPT Go vale a pena?". Linkar qual-ia-assinar-chatgpt-plus-claude-pro-ou-google-ai-pro, claude-gratis-em-2026-o-que-o-plano-sem-custo-da-anthropic-permite-fazer, chatgpt-gratis-sem-limite-de-mensagens-de-texto-o-que-muda-com-o-gpt-56-luna e o /comparador.',
  },
  {
    id: 'prompts-excel-planilhas',
    title: 'Prompts para Excel e planilhas no ChatGPT: fórmulas, tabela dinâmica e análise de dados',
    seoHint: 'Prompts para Excel no ChatGPT: fórmulas e análise',
    coveredBy: /prompts-para-(excel|planilha)/i,
    note: 'Lista de prompts por tarefa (PROCV/XLOOKUP, SOMASES, tabela dinâmica, limpeza de dados, gráfico, Google Sheets). Cada prompt pede a fórmula e a explicação. Avise para não colar dado pessoal ou sigiloso. Linkar prompts-prontos-para-chatgpt e prompts-para-negocios-e-empreendedores.',
  },
  {
    id: 'prompts-imagens',
    title: 'Prompts para gerar imagens com IA: 30 modelos por estilo para ChatGPT e Gemini',
    seoHint: 'Prompts para gerar imagens com IA: 30 modelos',
    coveredBy: /prompts-para-(gerar-|criar-)?imagens?/i,
    note: 'Lista de prompts copiáveis por estilo (foto de produto, retrato, ilustração, logo, post de rede social), com a estrutura sujeito + estilo + luz + enquadramento. Não repita os prompts de foto que já estão em como-criar-imagens-com-ia-gratis; linke aquele guia e o de melhor IA para imagens.',
  },
  {
    id: 'melhor-ia-resumir-pdf',
    title: 'Melhor IA para resumir PDF e documentos longos: ChatGPT, Claude, Gemini e NotebookLM',
    seoHint: 'Melhor IA para resumir PDF e documentos longos',
    coveredBy: /melhor-ia-para-resumir|resumir-pdf/i,
    note: 'Comparativo “melhor IA para X”. Critérios: tamanho do arquivo, contexto (só os números de src/data/ai-models.ts), limite do plano grátis, citação da página de origem. Inclua 3 prompts de resumo copiáveis. Linkar o ranking, melhor-ia-gratuita-para-estudar e a /calculadora (para quem resume em volume pela API).',
  },
  {
    id: 'economizar-api',
    title: 'Como reduzir o custo da API de IA: modelo menor, cache, Batch e prompt mais curto',
    seoHint: 'Como reduzir o custo da API de IA (cache e Batch)',
    coveredBy: /reduzir-o-custo-da-api|economizar-na-api|baratear-a-api/i,
    note: 'Complementa quanto-custa-a-api-do-chatgpt-do-claude-e-do-gemini-em-reais (não repita a tabela de preços). Use só o que está em src/data/ai-models.ts e calculator-models.ts: Batch com 50% de desconto (OpenAI e Anthropic), Flex pela metade (OpenAI), leitura de cache do Claude, faixa de contexto longo que encarece o prompt acima do limite. Exemplos com src/lib/api-cost.ts e câmbio de src/data/exchange-rate.ts. Linkar a /calculadora em cada exemplo.',
  },
  {
    id: 'prompts-professores',
    title: 'Prompts para professores: plano de aula, atividade, avaliação e correção com IA',
    seoHint: 'Prompts para professores: plano de aula e avaliação',
    coveredBy: /prompts-para-professor/i,
    note: 'Lista por tarefa com blocos copiáveis (plano de aula pela BNCC, atividade por nível, rubrica, feedback ao aluno, comunicado aos pais). Lembre de não colar dado de aluno. Linkar prompts-para-estudos-e-concursos e melhor-ia-gratuita-para-estudar.',
  },
  {
    id: 'alternativas-chatgpt',
    title: 'Alternativas ao ChatGPT em 2026: Gemini, Claude, Copilot, Perplexity e DeepSeek',
    seoHint: 'Alternativas ao ChatGPT em 2026 (grátis e pagas)',
    coveredBy: /alternativas-ao-chatgpt|concorrentes-do-chatgpt/i,
    note: 'Busca vista no Search Console: "ias como claude", "concorrente do chatgpt gratuito". Não repita a ficha de melhores-ias-gratuitas-2026 nem o comparativo triplo: organize por motivo da troca (preço, privacidade, documento longo, pesquisa com fonte, código). Plano e preço só de src/data/ai-models.ts. Linkar o ranking, o /comparador e qual-ia-assinar-chatgpt-plus-claude-pro-ou-google-ai-pro.',
  },
];

function loadArticles(articlesDir) {
  const dir = articlesDir || path.resolve(process.cwd(), 'content', 'articles');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const slug = file.replace(/\.md$/, '');
      const title = (raw.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1] || slug;
      const category = ((raw.match(/^category:\s*(\S+)/m) || [])[1] || '').replace(/["']/g, '');
      const date = (raw.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})"?/m) || [])[1] || '';
      const noindex = /^noindex:\s*true\s*$/m.test(raw.split(/\n---/)[0]);
      return { slug, title: title.replace(/^"|"$/g, ''), category, date, noindex };
    });
}

/** Publicações que não são notícia desde a última notícia (as mais novas primeiro). */
function guidesSinceLastNews(articles) {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
  let count = 0;
  for (const article of sorted) {
    if (article.category === 'noticias') break;
    count += 1;
  }
  return count;
}

/**
 * Rodízio sem notícia: quarta é ferramenta, sexta é "uso", os outros dias são
 * guia. ARTICLE_TYPE=noticia|guia|ferramenta|uso ainda força o tipo (notícia
 * também exige ALLOW_NEWS=1 no finalize-article.js).
 */
function pickArticleType(articles, env = process.env, now = new Date()) {
  const override = String(env.ARTICLE_TYPE || '').trim().toLowerCase();
  if (override === 'rodizio' || override === '') {
    const day = now.getUTCDay();
    if (day === 3) return 'ferramenta';
    if (day === 5) return 'uso';
    return 'guia';
  }
  if (override === 'noticia' || override === 'guia' || override === 'ferramenta' || override === 'uso') {
    return override;
  }
  return 'guia';
}

function isCovered(item, articles) {
  return articles.some((article) => item.coveredBy.test(`${article.slug} ${article.title}`));
}

function pendingBacklog(articles) {
  return BACKLOG.filter((item) => !isCovered(item, articles));
}

function nextBacklogItem(articles) {
  return pendingBacklog(articles)[0] || null;
}

/** Lista curta de posts reais para o modelo linkar. Só entram slugs que existem. */
function suggestInternalPosts(articles, limit = 24) {
  const preferred = [
    'prompts-prontos-para-chatgpt',
    'melhores-ias-2026-ranking',
    'melhores-ias-gratuitas-2026',
    'qual-ia-assinar-chatgpt-plus-claude-pro-ou-google-ai-pro',
    'melhor-ia-para-escrever-textos-chatgpt-claude-ou-gemini',
    'quanto-custa-a-api-do-chatgpt-do-claude-e-do-gemini-em-reais-exemplos-por-tarefa',
    'como-aparecer-nas-respostas-do-chatgpt',
    'o-que-e-aeo-geo-como-aparecer-nas-respostas-de-ia',
    'guia-prompts-chatgpt-como-criar-prompts-perfeitos-para-qualquer-tarefa',
    'chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026',
    'como-usar-chatgpt-guia-completo-para-iniciantes',
    'prompts-para-gemini',
    'prompts-para-marketing-digital',
    'prompts-para-copywriting-e-redacao',
    'prompts-para-programacao',
    'prompts-para-negocios-e-empreendedores',
    'prompts-para-estudos-e-concursos',
    '20-prompts-de-chatgpt-para-atendimento-ao-cliente-e-mail-chat-e-reclamacoes-2026',
    'prompts-para-whatsapp-de-vendas-prospeccao-follow-up-e-resposta-a-objecao',
    'prompts-de-vendas-para-e-commerce-ficha-de-produto-carrinho-abandonado-e-anuncio-de-marketplace',
    'prompts-para-chatgpt-de-rh-descricao-de-vaga-triagem-de-curriculos-e-feedback',
    'melhor-ia-gratuita-para-estudar-chatgpt-gemini-e-claude-no-resumo-e-no-simulado',
    'melhor-ia-gratuita-para-programar-em-2026-copilot-chatgpt-claude-e-gemini-no-codigo',
  ];
  const bySlug = new Map(articles.filter((article) => !article.noindex).map((article) => [article.slug, article]));
  const picked = [];
  const seen = new Set();
  for (const slug of preferred) {
    const article = bySlug.get(slug);
    if (!article || seen.has(slug)) continue;
    seen.add(slug);
    picked.push(article);
  }
  const guides = [...articles]
    .filter((article) => article.category !== 'noticias' && !article.noindex && !seen.has(article.slug))
    .sort((a, b) => b.date.localeCompare(a.date));
  for (const article of guides) {
    if (picked.length >= limit) break;
    picked.push(article);
  }
  return picked.slice(0, limit);
}

function formatPostList(articles) {
  return suggestInternalPosts(articles)
    .map((article) => `- [${article.title}](/blog/${article.slug})`)
    .join('\n');
}

module.exports = {
  BACKLOG,
  loadArticles,
  guidesSinceLastNews,
  pickArticleType,
  pendingBacklog,
  nextBacklogItem,
  suggestInternalPosts,
  formatPostList,
};
