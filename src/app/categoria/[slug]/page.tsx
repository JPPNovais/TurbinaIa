import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PostCard from '@/components/PostCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getAllArticlesMetadata, getLastModified } from '@/lib/articles';
import { formatDateMedium } from '@/lib/date';
import { CATEGORY_PAGE_SLUGS, HUBS, getHubArticles, type HubSlug } from '@/lib/taxonomy';
import { SITE_URL, DEFAULT_OG_IMAGE, jsonLd } from '@/lib/seo';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

// Quantos posts aparecem como card; o restante vira uma lista de links logo
// abaixo — todos no HTML do servidor, sem depender de "carregar mais" em JS.
const CARD_COUNT = 12;

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_PAGE_SLUGS.map((slug) => ({ slug }));
}

function getHub(slug: string) {
  return (CATEGORY_PAGE_SLUGS as string[]).includes(slug) ? HUBS[slug as HubSlug] : null;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) return {};
  const ogImage = {
    ...DEFAULT_OG_IMAGE,
    url: `/api/og?title=${encodeURIComponent(hub.heading)}&desc=${encodeURIComponent(hub.tagline)}&badge=${encodeURIComponent(hub.label)}`,
    alt: hub.heading,
  };
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: hub.href },
    openGraph: {
      title: hub.title,
      description: hub.description,
      url: `${SITE_URL}${hub.href}`,
      siteName: 'Turbina IA',
      locale: 'pt_BR',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: hub.title,
      description: hub.description,
      images: [ogImage.url],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();

  const allArticles = await getAllArticlesMetadata();
  const articles = getHubArticles(allArticles, hub.slug);
  const cards = articles.slice(0, CARD_COUNT);
  const archive = articles.slice(CARD_COUNT);
  const pageUrl = `${SITE_URL}${hub.href}`;

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    url: pageUrl,
    name: hub.heading,
    description: hub.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    ...(articles[0] ? { dateModified: getLastModified(articles[0]) } : {}),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <main className="hub-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(collectionLd) }} />

      <header className="hub-header container">
        <Breadcrumbs items={[{ name: hub.label }]} currentPath={hub.href} />
        <span className="badge badge-secondary">{hub.icon} {articles.length} publicações</span>
        <h1 className="hub-title">{hub.heading}</h1>
        <p className="hub-intro">{hub.intro}</p>

        {hub.tools.length > 0 && (
          <ul className="hub-tools" aria-label="Ferramentas relacionadas">
            {hub.tools.map((tool) => (
              <li key={tool.href}>
                <Link href={tool.href} className="hub-tool">
                  <strong>{tool.label} →</strong>
                  <span>{tool.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      <section className="container hub-section" aria-labelledby="hub-recentes">
        <h2 id="hub-recentes" className="section-title">Publicações mais recentes</h2>
        <div className="articles-grid">
          {cards.map((article) => (
            <PostCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {archive.length > 0 && (
        <section className="container hub-section" aria-labelledby="hub-arquivo">
          <h2 id="hub-arquivo" className="section-title">Todas as publicações em {hub.label}</h2>
          <ul className="hub-archive">
            {archive.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} prefetch={false}>{article.title}</Link>
                <time dateTime={article.date}>{formatDateMedium(article.date)}</time>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="container hub-section hub-others" aria-label="Outros temas">
        <h2 className="section-title">Explore outros temas</h2>
        <ul className="hub-chips">
          {Object.values(HUBS)
            .filter((other) => other.slug !== hub.slug)
            .map((other) => (
              <li key={other.slug}>
                <Link href={other.href} className="filter-btn">{other.icon} {other.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </main>
  );
}
