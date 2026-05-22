import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import AdSense from '@/components/AdSense';
import PostCard from '@/components/PostCard';
import { getArticleData, getAllArticlesMetadata } from '@/lib/articles';
import { formatDateLong } from '@/lib/date';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
  const articles = await getAllArticlesMetadata();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Dynamic SEO Metadata for each article
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticleData(resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'Artigo não encontrado - Turbina IA',
    };
  }

  return {
    title: `${article.title} - Turbina IA`,
    description: article.description,
    openGraph: {
      title: `${article.title} - Turbina IA`,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - Turbina IA`,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = await getArticleData(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get other articles for recommendations
  const allArticles = await getAllArticlesMetadata();
  const relatedArticles = allArticles
    .filter((art) => art.slug !== article.slug && art.category === article.category)
    .slice(0, 2);

  // Fallback recommendations if we don't have enough in the same category
  const fallbackArticles = relatedArticles.length < 2
    ? allArticles.filter((art) => art.slug !== article.slug && art.category !== article.category).slice(0, 2 - relatedArticles.length)
    : [];

  const recommendations = [...relatedArticles, ...fallbackArticles];

  // Format date nicely
  const formattedDate = formatDateLong(article.date);

  return (
    <main>
      {/* Scroll indicator */}
      <ReadingProgressBar />

      {/* 1. Article Header */}
      <header className="article-header container">
        <span className="badge badge-secondary">{article.category}</span>
        <h1 className="article-header-title">{article.title}</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {article.description}
        </p>

        <div className="article-header-meta">
          <span>Por <strong>{article.author}</strong></span>
          <span>•</span>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>
      </header>

      {/* 2. Hero Image or Placeholder */}
      <div className="container">
        <div className="article-hero-media">
          {article.coverImage ? (
            <Image 
              src={article.coverImage} 
              alt={article.title} 
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: 'cover' }}
              priority
            />
          ) : (
            <div className="card-img-placeholder" style={{ fontSize: '2rem' }}>
              <span>🌀 Turbina IA</span>
            </div>
          )}
        </div>
      </div>

      {/* Top Article Ad (AdSense block before content) */}
      <div className="container" style={{ maxWidth: '760px' }}>
        <AdSense adSlot="article-top-banner" adFormat="horizontal" />
      </div>

      {/* 3. Main Article Content */}
      <article className="article-container">
        <div 
          className="prose" 
          dangerouslySetInnerHTML={{ __html: article.contentHtml }} 
        />

        {/* Bottom Article Ad (AdSense block after content) */}
        <AdSense adSlot="article-bottom-banner" adFormat="horizontal" />

        {/* Share buttons and post footer actions */}
        <div className="article-footer-tools">
          <div className="share-buttons">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              COMPARTILHAR:
            </span>
            <button className="share-btn" title="Compartilhar no Twitter / X" aria-label="Twitter">
              X
            </button>
            <button className="share-btn" title="Compartilhar no LinkedIn" aria-label="LinkedIn">
              In
            </button>
            <button className="share-btn" title="Compartilhar no WhatsApp" aria-label="WhatsApp">
              Wa
            </button>
          </div>

          <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
            ← Voltar para a Home
          </Link>
        </div>
      </article>

      {/* 4. Recommendation Section (Read Also) */}
      {recommendations.length > 0 && (
        <section style={{ background: 'var(--bg-secondary)', padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.75rem' }}>
              Leia Também Recomendados
            </h2>
            <div className="articles-grid">
              {recommendations.map((rec) => (
                <PostCard key={rec.slug} article={rec} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
