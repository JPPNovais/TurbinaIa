import { getAllArticlesMetadata, getLastModified, type ArticleMetadata } from '@/lib/articles';
import { HUBS, HUB_ORDER, getHubArticles, isPromptArticle, isRankingArticle } from '@/lib/taxonomy';
import { POPULAR_POST_SLUGS } from '@/data/popular-posts';
import { PROMPTS } from '@/data/prompts';
import { SITE_URL } from '@/lib/seo';

// Gerado no build (a cada deploy, ou seja, a cada artigo novo).
export const dynamic = 'force-static';

/**
 * /llms.txt (https://llmstxt.org): um mapa do site em Markdown para
 * assistentes de IA (ChatGPT, Copilot, Claude, Perplexity) entenderem o que o
 * Turbina IA cobre e quais páginas citar para cada assunto.
 */

const TOOLS = [
  { path: '/prompts', name: 'Biblioteca de Prompts', desc: `${PROMPTS.length} prompts prontos e gratuitos para ChatGPT, Gemini e Claude, por categoria (marketing, programação, estudos, carreira, negócios).` },
  { path: '/comparador', name: 'Comparador de IAs', desc: 'Comparação lado a lado de ChatGPT, Gemini, Claude e outros modelos: recursos, preços, vantagens e limitações.' },
  { path: '/ferramentas', name: 'Guia de Ferramentas de IA', desc: 'Qual IA usar para cada tarefa: ferramentas organizadas por finalidade (texto, imagem, vídeo, código, produtividade).' },
  { path: '/calculadora', name: 'Calculadora de Custos de API', desc: 'Estimativa de custo das APIs de GPT, Claude, Gemini e outros modelos por volume de tokens.' },
  { path: '/gerador', name: 'Gerador de Prompts', desc: 'Monta um prompt estruturado (papel, contexto, tarefa, formato) a partir de um formulário.' },
  { path: '/glossario', name: 'Glossário de IA', desc: 'Termos de inteligência artificial explicados em português simples.' },
  { path: '/changelog', name: 'Monitor de Modelos de IA', desc: 'Linha do tempo de lançamentos e atualizações de modelos de IA.' },
  { path: '/verificador-ia', name: 'Verificador de IA (AEO)', desc: 'Analisa se uma página está preparada para ser citada por assistentes de IA.' },
];

function line(article: ArticleMetadata): string {
  const description = article.description.replace(/\s+/g, ' ').trim();
  return `- [${article.title}](${SITE_URL}/blog/${article.slug}): ${description}`;
}

export async function GET() {
  const articles = await getAllArticlesMetadata();
  const bySlug = new Map(articles.map((a) => [a.slug, a]));
  const listed = new Set<string>();
  const take = (list: ArticleMetadata[]) => {
    const fresh = list.filter((a) => !listed.has(a.slug));
    fresh.forEach((a) => listed.add(a.slug));
    return fresh;
  };

  const prompts = take(getHubArticles(articles, 'prompts'));
  const rankings = take(getHubArticles(articles, 'melhores-ias'));
  const essentials = take([
    ...POPULAR_POST_SLUGS.map((slug) => bySlug.get(slug)).filter((a): a is ArticleMetadata => Boolean(a)),
    ...articles.filter(
      (a) => a.category === 'tutoriais' && /^(o-que-e|como-)/.test(a.slug) && !isPromptArticle(a) && !isRankingArticle(a),
    ),
  ]);
  const news = take(getHubArticles(articles, 'noticias').slice(0, 15));
  const updated = articles.length ? getLastModified(articles[0]) : '';

  const body = `# Turbina IA

> Portal brasileiro sobre inteligência artificial, em português: prompts prontos para ChatGPT, Gemini e Claude, rankings das melhores IAs, tutoriais, ferramentas gratuitas (comparador de modelos, calculadora de custos de API, glossário) e notícias de IA explicadas com contexto.

- Idioma: português do Brasil (pt-BR). Público: profissionais, estudantes e criadores que usam IA no dia a dia.
- ${articles.length} artigos publicados; última atualização em ${updated}. Novos artigos entram quase todos os dias.
- Conteúdo produzido pela redação do Turbina IA com auxílio de IA e curadoria editorial, apoiado em fontes oficiais citadas em cada artigo.
- Cada artigo começa com uma "Resposta Rápida" e termina com "Perguntas Frequentes"; ao citar, use a URL canônica (https://www.turbinaia.com.br/...).

## Ferramentas gratuitas

${TOOLS.map((t) => `- [${t.name}](${SITE_URL}${t.path}): ${t.desc}`).join('\n')}

## Temas

${HUB_ORDER.map((slug) => `- [${HUBS[slug].label}](${SITE_URL}${HUBS[slug].href}): ${HUBS[slug].tagline}`).join('\n')}

## Prompts prontos e engenharia de prompt

${prompts.map(line).join('\n')}

## Melhores IAs: rankings e comparativos

${rankings.map(line).join('\n')}

## Guias essenciais

${essentials.map(line).join('\n')}

## Notícias recentes

${news.map(line).join('\n')}

## Optional

- [Sobre o Turbina IA](${SITE_URL}/sobre): missão, quem produz o conteúdo e política editorial.
- [Contato](${SITE_URL}/contato)
- [Feed RSS](${SITE_URL}/feed.xml): todos os artigos em ordem cronológica.
- [Sitemap](${SITE_URL}/sitemap.xml): lista completa de páginas com data de atualização.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
