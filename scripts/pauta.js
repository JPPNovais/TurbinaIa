/**
 * Pauta do gerador automático.
 *
 * O cron continua seg/qua/sex (3 artigos por semana). O que muda é o mix:
 * em 3 meses, 103 notícias trouxeram 4 cliques e 37 guias trouxeram 35.
 * Por isso notícia só entra depois de 3 publicações que não sejam
 * `category: noticias`. O resto da fila prioriza o backlog evergreen.
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
 * Os quatro primeiros são os pendentes de docs/PLANO-AEO-GEO.md.
 * Os seguintes são pedidos com demanda de busca e ainda sem página própria.
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
    id: 'aeo-vs-seo',
    title: 'AEO vs SEO na prática: o que muda na página quando o objetivo é ser citado por uma IA',
    seoHint: 'AEO vs SEO: o que muda na página',
    coveredBy: /aeo-vs-seo|aeo-versus-seo/i,
    note: 'Comparativo. SEO continua valendo; AEO muda o formato da resposta (definição no início, FAQ, fontes). Linkar o pilar de AEO e o guia de aparecer no ChatGPT.',
  },
  {
    id: 'aparecer-gemini-copilot',
    title: 'Como aparecer nas respostas do Gemini e do Copilot (e do Perplexity)',
    seoHint: 'Como aparecer nas respostas do Gemini e do Copilot',
    coveredBy: /aparecer-nas-respostas-do-gemini|aparecer-nas-respostas-do-copilot|otimizar-para-o-perplexity/i,
    note: 'Guia de AEO. O post de aparecer no ChatGPT já existe: diferencie Gemini, Copilot e Perplexity e linke aquele guia em vez de repeti-lo. Não invente um “algoritmo” desses produtos.',
  },
  {
    id: 'prompts-chatgpt-atendimento',
    title: 'Prompts para ChatGPT de atendimento: modelos para e-mail, chat e objeção',
    seoHint: 'Prompts para ChatGPT de atendimento ao cliente',
    coveredBy: /prompts-para-chatgpt-de-atendimento|prompts-atendimento-ao-cliente/i,
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
      return { slug, title: title.replace(/^"|"$/g, ''), category, date };
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
 * seg/qua/sex continuam sendo os dias do cron. Notícia só quando já houve
 * 3 guias (qualquer categoria que não seja noticias) desde a última notícia.
 * ARTICLE_TYPE=noticia|guia|ferramenta|uso ainda força o tipo.
 */
function pickArticleType(articles, env = process.env, now = new Date()) {
  const override = String(env.ARTICLE_TYPE || '').trim().toLowerCase();
  if (override === 'rodizio' || override === '') {
    if (guidesSinceLastNews(articles) >= 3) return 'noticia';
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
function suggestInternalPosts(articles, limit = 18) {
  const preferred = [
    'prompts-prontos-para-chatgpt',
    'melhores-ias-gratuitas-2026',
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
  ];
  const bySlug = new Map(articles.map((article) => [article.slug, article]));
  const picked = [];
  const seen = new Set();
  for (const slug of preferred) {
    const article = bySlug.get(slug);
    if (!article || seen.has(slug)) continue;
    seen.add(slug);
    picked.push(article);
  }
  const guides = [...articles]
    .filter((article) => article.category !== 'noticias' && !seen.has(article.slug))
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
