import type { ArticleMetadata } from '@/lib/articles';

/**
 * Temas (hubs) do portal. Um artigo pertence à sua categoria do frontmatter
 * (tutoriais | noticias | ferramentas) e, conforme o assunto, também a um
 * tema transversal: "prompts" ou "melhores-ias". O tema transversal vence na
 * hora de escolher o breadcrumb e o "Leia também", porque é por ele que o
 * leitor chega (busca por "prompts para gemini", "melhores ias gratuitas").
 *
 * /prompts já existia como a Biblioteca de Prompts (página mais forte do
 * site), então ela mesma é o hub do tema; os demais vivem em /categoria/<slug>.
 */

export type HubSlug = 'prompts' | 'melhores-ias' | 'tutoriais' | 'noticias' | 'ferramentas';

export interface HubTool {
  href: string;
  label: string;
  description: string;
}

export interface Hub {
  slug: HubSlug;
  /** Nome curto (menu, breadcrumb, filtros). */
  label: string;
  href: string;
  icon: string;
  /** <title> da página (até 60 caracteres). */
  title: string;
  /** H1 da página. */
  heading: string;
  /** meta description (até 155 caracteres). */
  description: string;
  /** Resposta direta no topo da página (citável por assistentes de IA). */
  intro: string;
  /** Uma linha para os cards do hub na home. */
  tagline: string;
  tools: HubTool[];
}

const TOOL_PROMPTS = { href: '/prompts', label: 'Biblioteca de Prompts', description: 'Centenas de prompts prontos para copiar.' };
const TOOL_GERADOR = { href: '/gerador', label: 'Gerador de Prompts', description: 'Monte um prompt profissional em segundos.' };
const TOOL_COMPARADOR = { href: '/comparador', label: 'Comparador de IAs', description: 'ChatGPT, Gemini e Claude lado a lado.' };
const TOOL_FERRAMENTAS = { href: '/ferramentas', label: 'Guia de Ferramentas', description: 'Qual IA usar para cada tarefa.' };
const TOOL_CALCULADORA = { href: '/calculadora', label: 'Calculadora de Custos', description: 'Quanto custa a API de cada modelo.' };
const TOOL_CHANGELOG = { href: '/changelog', label: 'Monitor de Modelos', description: 'Lançamentos e atualizações de IA.' };
const TOOL_GLOSSARIO = { href: '/glossario', label: 'Glossário de IA', description: 'Termos de IA explicados sem jargão.' };

export const HUBS: Record<HubSlug, Hub> = {
  prompts: {
    slug: 'prompts',
    label: 'Prompts',
    href: '/prompts',
    icon: '💬',
    title: 'Biblioteca de Prompts para IA',
    heading: 'Prompts prontos para ChatGPT, Gemini e Claude',
    description: 'Prompts prontos para copiar e guias de engenharia de prompt para ChatGPT, Gemini e Claude.',
    intro: 'Coleções de prompts prontos por área e guias de engenharia de prompt.',
    tagline: 'Coleções prontas para copiar e guias de engenharia de prompt.',
    tools: [TOOL_PROMPTS, TOOL_GERADOR],
  },
  'melhores-ias': {
    slug: 'melhores-ias',
    label: 'Melhores IAs',
    href: '/categoria/melhores-ias',
    icon: '🏆',
    title: 'Melhores IAs de 2026: Rankings e Comparativos',
    heading: 'Melhores IAs: rankings e comparativos',
    description: 'Rankings das melhores IAs gratuitas e pagas, comparativos entre ChatGPT, Gemini e Claude e as ferramentas certas para cada tarefa em 2026.',
    intro: 'Qual é a melhor IA? Depende da tarefa. Aqui reunimos os rankings das melhores IAs gratuitas e pagas, os comparativos diretos entre ChatGPT, Gemini e Claude e as ferramentas que testamos para produtividade, imagens e programação.',
    tagline: 'Rankings de IAs grátis e pagas e comparativos diretos.',
    tools: [TOOL_COMPARADOR, TOOL_FERRAMENTAS, TOOL_CALCULADORA],
  },
  tutoriais: {
    slug: 'tutoriais',
    label: 'Tutoriais',
    href: '/categoria/tutoriais',
    icon: '🎓',
    title: 'Tutoriais de IA: Guias Práticos em Português',
    heading: 'Tutoriais de Inteligência Artificial',
    description: 'Tutoriais de IA em português: como usar ChatGPT, Gemini e Claude, prompts, produtividade, agentes e os conceitos essenciais explicados passo a passo.',
    intro: 'Guias práticos, em português, para usar inteligência artificial no trabalho e nos estudos: do primeiro uso do ChatGPT a técnicas avançadas de prompt, agentes e produtividade.',
    tagline: 'Guias passo a passo para usar IA no trabalho e nos estudos.',
    tools: [TOOL_PROMPTS, TOOL_GLOSSARIO, TOOL_GERADOR],
  },
  noticias: {
    slug: 'noticias',
    label: 'Notícias',
    href: '/categoria/noticias',
    icon: '📰',
    title: 'Notícias de Inteligência Artificial Hoje',
    heading: 'Notícias de Inteligência Artificial',
    description: 'Notícias de IA explicadas em português: lançamentos da OpenAI, Google, Anthropic e Meta, novos modelos, regulação e o impacto no Brasil.',
    intro: 'O que mudou no mundo da inteligência artificial, explicado em português e com contexto: lançamentos de modelos, movimentos da OpenAI, Google, Anthropic e Meta, regulação e impacto no mercado brasileiro.',
    tagline: 'Lançamentos e movimentos do mercado de IA, com contexto.',
    tools: [TOOL_CHANGELOG, TOOL_COMPARADOR],
  },
  ferramentas: {
    slug: 'ferramentas',
    label: 'Ferramentas',
    href: '/categoria/ferramentas',
    icon: '🧰',
    title: 'Ferramentas de IA: Guias, Recursos e Novidades',
    heading: 'Ferramentas de IA: guias e novidades',
    description: 'Como funcionam os novos recursos de ChatGPT, Gemini, Claude e outras ferramentas de IA, com passo a passo, preços e o que muda para você.',
    intro: 'Como funcionam, na prática, os novos recursos de ChatGPT, Gemini, Claude, Copilot e outras ferramentas de IA — com passo a passo, preços e o que muda para quem usa.',
    tagline: 'Novos recursos de ChatGPT, Gemini e cia., na prática.',
    tools: [TOOL_FERRAMENTAS, TOOL_COMPARADOR],
  },
};

/** Ordem de exibição (home, rodapé, llms.txt). */
export const HUB_ORDER: HubSlug[] = ['prompts', 'melhores-ias', 'tutoriais', 'noticias', 'ferramentas'];

/** Hubs servidos por /categoria/[slug] (o de prompts é a própria /prompts). */
export const CATEGORY_PAGE_SLUGS: HubSlug[] = ['melhores-ias', 'tutoriais', 'noticias', 'ferramentas'];

const PROMPT_TAG = /^(prompts?|engenharia de prompt|prompt engineering)$/i;
const RANKING_TITLE = /^(as |os )?\d+ melhores|melhores (ias|ferramentas)|ranking|comparativo|\svs\.?\s/i;

export function isPromptArticle(article: ArticleMetadata): boolean {
  if (article.category === 'noticias') return false;
  return (
    /^prompts-|guia-prompts|prompt-engineering|engenharia-de-prompt/.test(article.slug) ||
    article.tags.some((tag) => PROMPT_TAG.test(String(tag)))
  );
}

export function isRankingArticle(article: ArticleMetadata): boolean {
  if (article.category === 'noticias') return false;
  return /(^|-)melhores-|(^|-)vs-|ranking|comparativo/.test(article.slug) || RANKING_TITLE.test(article.title);
}

export function articleInHub(article: ArticleMetadata, slug: HubSlug): boolean {
  if (slug === 'prompts') return isPromptArticle(article);
  if (slug === 'melhores-ias') return isRankingArticle(article);
  return article.category === slug;
}

/** Tema principal do artigo: o transversal, se houver; senão a categoria. */
export function getPrimaryHub(article: ArticleMetadata): Hub {
  if (isPromptArticle(article)) return HUBS.prompts;
  if (isRankingArticle(article)) return HUBS['melhores-ias'];
  return HUBS[article.category as HubSlug] || HUBS.noticias;
}

export function getHubArticles(articles: ArticleMetadata[], slug: HubSlug): ArticleMetadata[] {
  return articles.filter((article) => articleInHub(article, slug));
}

/**
 * Artigos relacionados: mesmo tema primeiro, depois mesma categoria, com
 * desempate por tags em comum e por data (mais recentes primeiro).
 */
export function getRelatedArticles(
  article: ArticleMetadata,
  articles: ArticleMetadata[],
  limit = 4,
): ArticleMetadata[] {
  const primary = getPrimaryHub(article).slug;
  const tags = new Set(article.tags.map((t) => String(t).toLowerCase()));
  const scored = articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate, index) => {
      let score = 0;
      if (articleInHub(candidate, primary)) score += 100;
      if (candidate.category === article.category) score += 40;
      for (const tag of candidate.tags) if (tags.has(String(tag).toLowerCase())) score += 8;
      // artigos já vêm ordenados por data; o índice desempata a favor dos recentes
      return { candidate, score, index };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index);
  return scored.slice(0, limit).map(({ candidate }) => candidate);
}
