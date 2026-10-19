import { MetadataRoute } from 'next';
import { getAllArticlesMetadata, getLastModified } from '@/lib/articles';
import { getGitLastModified, latestDate } from '@/lib/page-dates';
import { SITE_URL } from '@/lib/seo';
import { CATEGORY_PAGE_SLUGS, HUBS, getHubArticles } from '@/lib/taxonomy';

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

interface StaticPage {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Arquivos que compõem a página: o último commit neles vira o lastmod. */
  sources: string[];
}

const STATIC_PAGES: StaticPage[] = [
  { path: '/prompts', changeFrequency: 'weekly', priority: 0.95, sources: ['src/app/prompts', 'src/data/prompts.ts'] },
  { path: '/comparador', changeFrequency: 'weekly', priority: 0.95, sources: ['src/app/comparador', 'src/data/ai-models.ts'] },
  { path: '/ferramentas', changeFrequency: 'weekly', priority: 0.9, sources: ['src/app/ferramentas', 'src/data/ai-tools.ts'] },
  { path: '/calculadora', changeFrequency: 'weekly', priority: 0.9, sources: ['src/app/calculadora', 'src/data/calculator-models.ts'] },
  { path: '/verificador-ia', changeFrequency: 'monthly', priority: 0.85, sources: ['src/app/verificador-ia', 'src/app/api/aeo-check'] },
  { path: '/gerador', changeFrequency: 'monthly', priority: 0.85, sources: ['src/app/gerador'] },
  { path: '/glossario', changeFrequency: 'monthly', priority: 0.85, sources: ['src/app/glossario', 'src/data/glossario.ts'] },
  { path: '/changelog', changeFrequency: 'weekly', priority: 0.8, sources: ['src/app/changelog', 'src/data/changelog.ts'] },
  { path: '/sobre', changeFrequency: 'monthly', priority: 0.6, sources: ['src/app/sobre'] },
  { path: '/contato', changeFrequency: 'yearly', priority: 0.5, sources: ['src/app/contato'] },
  { path: '/politica-de-privacidade', changeFrequency: 'yearly', priority: 0.3, sources: ['src/app/politica-de-privacidade'] },
  { path: '/termos-de-uso', changeFrequency: 'yearly', priority: 0.3, sources: ['src/app/termos-de-uso'] },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticlesMetadata();
  const newestArticle = latestDate(...articles.map(getLastModified));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: getLastModified(article),
    changeFrequency: 'monthly',
    priority: article.category === 'noticias' ? 0.6 : 0.8,
    ...(article.coverImage ? { images: [article.coverImage] } : {}),
  }));

  // Páginas de tema: mudam quando entra um post novo nelas.
  const categoryEntries: MetadataRoute.Sitemap = CATEGORY_PAGE_SLUGS.map((slug) => {
    const lastModified = latestDate(...getHubArticles(articles, slug).map(getLastModified));
    return {
      url: `${SITE_URL}${HUBS[slug].href}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: slug === 'noticias' ? 'daily' : 'weekly',
      priority: slug === 'melhores-ias' ? 0.9 : 0.8,
    };
  });

  const promptArticlesDate = latestDate(...getHubArticles(articles, 'prompts').map(getLastModified));

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => {
    // /prompts também lista os posts do tema: vale a data mais recente das duas fontes.
    const lastModified = latestDate(
      getGitLastModified(page.sources),
      page.path === '/prompts' ? promptArticlesDate : undefined,
    );
    return {
      url: `${SITE_URL}${page.path}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });

  return [
    {
      url: SITE_URL,
      ...(newestArticle ? { lastModified: newestArticle } : {}),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...staticEntries,
    ...categoryEntries,
    ...articleEntries,
  ];
}
