import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArticlesGrid from '@/components/ArticlesGrid';
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

  // Find all articles marked as featured.
  const featuredPool = allArticles.filter(art => art.isFeatured);

  // The featured article is always the latest published article (index 0)
  const featuredArticle = !selectedCategory && allArticles.length > 0
    ? allArticles[0]
    : null;

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

  const homeFaqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'O que é o Turbina IA?', acceptedAnswer: { '@type': 'Answer', text: 'O Turbina IA é um portal brasileiro de Inteligência Artificial com notícias diárias, tutoriais e ferramentas gratuitas como comparador de modelos, calculadora de custos de API, biblioteca de prompts e verificador de IA.' } },
      { '@type': 'Question', name: 'O conteúdo do Turbina IA é gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Todos os artigos e ferramentas do Turbina IA são gratuitos e não exigem cadastro.' } },
      { '@type': 'Question', name: 'Quais ferramentas o Turbina IA oferece?', acceptedAnswer: { '@type': 'Answer', text: 'Comparador de modelos de IA, calculadora de custos de API, biblioteca de prompts, gerador de conteúdo, glossário de IA e o verificador de IA (AEO).' } },
    ],
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

      {/* Ferramentas gratuitas — ações claras + resposta direta (AEO) */}
      <section className="container home-tools" aria-label="Ferramentas gratuitas do Turbina IA">
        <p className="home-intro">
          <strong>Em resumo:</strong> o Turbina IA é o portal brasileiro de Inteligência Artificial —
          notícias diárias, tutoriais e ferramentas gratuitas para você usar IA com mais resultado.
        </p>

        {/* Destaque maior: Verificador de IA (ferramenta de avaliação) */}
        <Link href="/verificador-ia" className="tool-feature">
          <span className="tool-feature-ic" aria-hidden="true">🔍</span>
          <span className="tool-feature-body">
            <span className="tool-feature-badge">Novo · Ferramenta grátis</span>
            <span className="tool-feature-title">Seu site aparece nas respostas do ChatGPT e Gemini?</span>
            <span className="tool-feature-desc">Analise sua página em segundos e descubra o que melhorar para ser citado pelas IAs.</span>
          </span>
          <span className="tool-feature-cta">Analisar grátis →</span>
        </Link>

        {/* Cards das ferramentas */}
        <ul className="tool-cards">
          <li>
            <Link href="/comparador" className="tool-card">
              <span className="tool-card-ic ic-cyan" aria-hidden="true">⚖️</span>
              <span className="tool-card-tt">Comparador de IAs</span>
              <span className="tool-card-sub">ChatGPT vs Gemini vs Claude</span>
            </Link>
          </li>
          <li>
            <Link href="/calculadora" className="tool-card">
              <span className="tool-card-ic ic-green" aria-hidden="true">🧮</span>
              <span className="tool-card-tt">Calculadora de Custos</span>
              <span className="tool-card-sub">Quanto custa a API de cada IA</span>
            </Link>
          </li>
          <li>
            <Link href="/prompts" className="tool-card">
              <span className="tool-card-ic ic-purple" aria-hidden="true">💬</span>
              <span className="tool-card-tt">Biblioteca de Prompts</span>
              <span className="tool-card-sub">+160 prompts prontos e grátis</span>
            </Link>
          </li>
          <li>
            <Link href="/gerador" className="tool-card">
              <span className="tool-card-ic ic-orange" aria-hidden="true">✍️</span>
              <span className="tool-card-tt">Gerador de Prompts</span>
              <span className="tool-card-sub">Monte o prompt perfeito</span>
            </Link>
          </li>
          <li>
            <Link href="/ferramentas" className="tool-card">
              <span className="tool-card-ic ic-blue" aria-hidden="true">🧰</span>
              <span className="tool-card-tt">Guia de Ferramentas</span>
              <span className="tool-card-sub">+70 IAs por categoria</span>
            </Link>
          </li>
          <li>
            <Link href="/glossario" className="tool-card">
              <span className="tool-card-ic ic-pink" aria-hidden="true">📖</span>
              <span className="tool-card-tt">Glossário de IA</span>
              <span className="tool-card-sub">Termos explicados de forma simples</span>
            </Link>
          </li>
        </ul>
      </section>

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
              <ArticlesGrid articles={gridArticles} />
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

        {/* FAQ da home (AEO) */}
        <section className="home-faq">
          <h2>Perguntas Frequentes</h2>
          <h3>O que é o Turbina IA?</h3>
          <p>O Turbina IA é um portal brasileiro de Inteligência Artificial com notícias diárias, tutoriais e ferramentas gratuitas como comparador de modelos, calculadora de custos de API, biblioteca de prompts e verificador de IA.</p>
          <h3>O conteúdo do Turbina IA é gratuito?</h3>
          <p>Sim. Todos os artigos e ferramentas do Turbina IA são gratuitos e não exigem cadastro.</p>
          <h3>Quais ferramentas o Turbina IA oferece?</h3>
          <p>Comparador de modelos de IA, calculadora de custos de API, biblioteca de prompts, gerador de conteúdo, glossário de IA e o verificador de IA (AEO).</p>
        </section>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }} />
    </main>
  );
}
