import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import AdSense from '@/components/AdSense';
import { getAllArticlesMetadata } from '@/lib/articles';
import { formatDateLong } from '@/lib/date';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

interface HomeProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams;
  const selectedCategory = resolvedSearchParams.category || '';

  // Get articles
  const allArticles = await getAllArticlesMetadata();

  // Filter articles by category if selected
  const filteredArticles = selectedCategory
    ? allArticles.filter(art => art.category.toLowerCase() === selectedCategory.toLowerCase())
    : allArticles;

  // Rotation logic for the featured article:
  // Find all articles marked as featured.
  const featuredPool = allArticles.filter(art => art.isFeatured);

  // We rotate daily. Day index is calculated deterministically based on days since Unix Epoch.
  const daysSinceEpoch = Math.floor(Date.now() / 86400000);

  // Pick the featured article from the pool based on the day index
  const featuredArticle = !selectedCategory && featuredPool.length > 0
    ? featuredPool[daysSinceEpoch % featuredPool.length]
    : (!selectedCategory && allArticles.length > 0 ? allArticles[0] : null);

  // Articles for the grid (excluding the featured one if showing)
  const gridArticles = featuredArticle
    ? filteredArticles.filter(art => art.slug !== featuredArticle.slug)
    : filteredArticles;

  // Categories list for tabs
  const categories = [
    { label: 'Todos', value: '' },
    { label: 'Tutoriais', value: 'tutoriais' },
    { label: 'Notícias', value: 'noticias' },
    { label: 'Ferramentas', value: 'ferramentas' },
  ];

  // Helper for formatting hero date
  const formatHeroDate = (dateStr: string) => {
    return formatDateLong(dateStr);
  };

  return (
    <main>
      {/* Acessibilidade e SEO: H1 oculto para identificar a página inicial do portal */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        Turbina IA - O Portal Definitivo de Inteligência Artificial
      </h1>

      {/* 1. Hero Section for Featured Article */}
      {featuredArticle && (
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <span className="badge badge-secondary">Artigo em Destaque</span>
                <h2 className="hero-title">{featuredArticle.title}</h2>
                <p className="hero-description">{featuredArticle.description}</p>
                <div className="hero-meta">
                  <span>Por {featuredArticle.author}</span>
                  <span>•</span>
                  <span>{formatHeroDate(featuredArticle.date)}</span>
                  <span>•</span>
                  <span>{featuredArticle.readingTime}</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary" style={{ width: 'auto', display: 'inline-flex' }}>
                    Ler Artigo Completo ⚡
                  </Link>
                </div>
              </div>

              <Link href={`/blog/${featuredArticle.slug}`} className="hero-card">
                {featuredArticle.coverImage ? (
                  <Image 
                    src={featuredArticle.coverImage} 
                    alt={featuredArticle.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                ) : (
                  <div className="card-img-placeholder" style={{ fontSize: '1.5rem' }}>
                    <span>🌀 Turbina IA</span>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Top Banner Ad */}
      <div className="container">
        <AdSense adSlot="homepage-top-banner" adFormat="horizontal" />
      </div>

      {/* 2. Main Content Section */}
      <section className="container" style={{ marginTop: '2rem' }}>
        {/* Category Navigation Bar */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.value ? `/?category=${cat.value}` : '/'}
              className={`filter-btn ${
                (cat.value === '' && !selectedCategory) || selectedCategory === cat.value
                  ? 'active'
                  : ''
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="main-layout">
          {/* Articles Grid Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="section-title">
              {selectedCategory 
                ? `Publicações em ${categories.find(c => c.value === selectedCategory.toLowerCase())?.label || selectedCategory}` 
                : 'Últimas Publicações'}
            </h2>
            {gridArticles.length > 0 ? (
              <div className="articles-grid">
                {gridArticles.map((article) => (
                  <PostCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '3rem' }}>🔍</span>
                <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Nenhum artigo encontrado</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Ainda não há publicações nesta categoria. Fique atento!</p>
              </div>
            )}

            {/* In-feed Ad banner (renders inside feed) */}
            {gridArticles.length > 2 && (
              <AdSense adSlot="homepage-infeed-ad" adFormat="fluid" />
            )}
          </div>

          {/* Sidebar Column */}
          <Sidebar 
            recentArticles={allArticles} 
            featuredArticles={featuredPool.filter(art => !featuredArticle || art.slug !== featuredArticle.slug)}
          />
        </div>
      </section>
    </main>
  );
}
