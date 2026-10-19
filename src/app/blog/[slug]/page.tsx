import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import AdSense from '@/components/AdSense';
import PostCard from '@/components/PostCard';
import LeadMagnet from '@/components/LeadMagnet';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getArticleData, getAllArticlesMetadata, getLastModified } from '@/lib/articles';
import { formatDateLong } from '@/lib/date';
import { SITE_URL, ORGANIZATION_ID, WEBSITE_ID, buildArticleTitle, clampDescription, jsonLd } from '@/lib/seo';
import { getPrimaryHub } from '@/lib/taxonomy';
import { withAspectRatio } from '@/lib/unsplash';

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

  const imageUrl = article.coverImage || `${SITE_URL}/icon.png`;

  // <title> com no máximo ~60 caracteres (seoTitle do frontmatter ou corte
  // automático); o título completo continua no H1 e no Open Graph.
  const pageTitle = buildArticleTitle(article.title, article.seoTitle);
  const description = clampDescription(article.description);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: article.title,
      description,
      type: 'article',
      url: `${SITE_URL}/blog/${resolvedParams.slug}`,
      siteName: 'Turbina IA',
      locale: 'pt_BR',
      publishedTime: article.date,
      modifiedTime: getLastModified(article),
      section: article.category,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [imageUrl],
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

  // Social sharing links
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const shareText = `Confira este artigo no Turbina IA: ${article.title}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(articleUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} - ${articleUrl}`)}`;

  // Structured Data JSON-LD — BlogPosting + Breadcrumbs + FAQ rich results
  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    image: [article.coverImage || `${SITE_URL}/icon.png`],
    datePublished: article.date,
    dateModified: getLastModified(article),
    inLanguage: 'pt-BR',
    keywords: article.tags.join(', '),
    articleSection: article.category,
    wordCount: article.wordCount,
    timeRequired: `PT${Math.max(1, Math.ceil(article.wordCount / 200))}M`,
    url: articleUrl,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: `${SITE_URL}/sobre`,
    },
    editor: {
      '@type': 'Person',
      name: 'Rafael Menezes',
      jobTitle: 'Editor',
      url: `${SITE_URL}/sobre`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Turbina IA',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
      },
    },
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  const hub = getPrimaryHub(article);

  const faqLd = article.faqs && article.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

  const structuredData = [blogPostingLd, ...(faqLd ? [faqLd] : [])];

  return (
    <main>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      {/* Scroll indicator */}
      <ReadingProgressBar />

      {/* 1. Article Header */}
      <header className="article-header container">
        <Breadcrumbs
          items={[{ name: hub.label, href: hub.href }, { name: article.title }]}
          currentPath={`/blog/${article.slug}`}
        />
        <Link href={hub.href} className="badge badge-secondary" prefetch={false}>{hub.label}</Link>
        <h1 className="article-header-title">{article.title}</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {article.description}
        </p>

        <div className="article-header-meta">
          <span>Por <strong>{article.author}</strong></span>
          <span>•</span>
          <span>{formattedDate}</span>
          {article.updatedAt && article.updatedAt !== article.date && (
            <>
              <span>•</span>
              <span>Atualizado em {formatDateLong(article.updatedAt)}</span>
            </>
          )}
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>
      </header>

      {/* 2. Hero Image or Placeholder */}
      <div className="container">
        <div className="article-hero-media">
          {article.coverImage ? (
            <Image 
              src={withAspectRatio(article.coverImage, '16:9')}
              alt={article.title} 
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: 'cover' }}
              loading="eager"
              fetchPriority="high"
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
        {/* Table of Contents (Sumário) */}
        {article.headings && article.headings.length > 0 && (
          <nav className="table-of-contents" aria-label="Sumário do artigo">
            <p className="toc-title">🌀 Sumário do Artigo</p>
            <ul className="toc-list">
              {article.headings.map((heading) => (
                <li 
                  key={heading.slug} 
                  className={`toc-item toc-depth-${heading.depth}`}
                  style={{ paddingLeft: `${(heading.depth - 2) * 1.25}rem` }}
                >
                  <a href={`#${heading.slug}`} className="toc-link">
                    {heading.depth === 3 && <span className="toc-sub-indicator">•</span>}
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div 
          className="prose" 
          dangerouslySetInnerHTML={{ __html: article.contentHtml }} 
        />

        {/* Captura de leads — pack de prompts em troca do e-mail */}
        <LeadMagnet />

        {/* Bottom Article Ad (AdSense block after content) */}
        <AdSense adSlot="article-bottom-banner" adFormat="horizontal" />

        {/* Share buttons and post footer actions */}
        <div className="article-footer-tools">
          <div className="share-buttons">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              COMPARTILHAR:
            </span>
            <a 
              href={twitterShareUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="share-btn" 
              title="Compartilhar no Twitter / X" 
              aria-label="Twitter"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href={linkedinShareUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="share-btn" 
              title="Compartilhar no LinkedIn" 
              aria-label="LinkedIn"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href={whatsappShareUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="share-btn" 
              title="Compartilhar no WhatsApp" 
              aria-label="WhatsApp"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.114-2.877-6.974-1.858-1.859-4.337-2.88-6.971-2.881-5.439 0-9.865 4.42-9.87 9.865-.001 1.702.443 3.361 1.292 4.811l-.994 3.63 3.731-.978zm11.23-7.293c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.199.3-.777.976-.952 1.176-.176.2-.351.225-.651.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.176-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.632-.927-2.232-.244-.588-.492-.51-.677-.52-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.276.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.11 4.525.714.31 1.27.495 1.705.633.717.228 1.37.196 1.887.119.577-.087 1.771-.724 2.021-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
              </svg>
            </a>
          </div>

          <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
            ← Voltar para a Home
          </Link>
        </div>

        {/* Author box (E-E-A-T) */}
        <div className="author-box">
          <div className="author-box-avatar" aria-hidden="true">RM</div>
          <div className="author-box-info">
            <span className="author-box-label">Editor responsável</span>
            <strong className="author-box-name">Rafael Menezes</strong>
            <p className="author-box-bio">
              Editor do Turbina IA. Acompanha diariamente os lançamentos de modelos, ferramentas
              e tendências de Inteligência Artificial para explicar o tema de forma acessível em
              português. O conteúdo é produzido pela redação com auxílio de IA e curadoria
              editorial, sempre apoiado em fontes oficiais. <Link href="/sobre">Conheça a redação</Link>.
            </p>
          </div>
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
