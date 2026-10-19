import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HoverPrefetchLink from '@/components/HoverPrefetchLink';
import ArticlesGrid from '@/components/ArticlesGrid';
import Sidebar from '@/components/Sidebar';
import AdSense from '@/components/AdSense';
import { getAllArticlesMetadata } from '@/lib/articles';
import { formatDateLong } from '@/lib/date';
import { SITE_URL, DEFAULT_OG_IMAGE, jsonLd } from '@/lib/seo';
import { HUBS, HUB_ORDER, getHubArticles, getPrimaryHub, isPromptArticle, isRankingArticle, type HubSlug } from '@/lib/taxonomy';
import { POPULAR_POST_SLUGS } from '@/data/popular-posts';
import { withAspectRatio } from '@/lib/unsplash';

const HOME_TITLE = 'Turbina IA: Prompts Prontos, Rankings de IAs e Tutoriais';
const HOME_DESCRIPTION = 'Prompts prontos para ChatGPT e Gemini, rankings das melhores IAs, tutoriais e ferramentas grátis para usar inteligência artificial no dia a dia.';

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

// A home é estática (gerada no build a cada deploy). Antes ela lia
// ?category= e por isso era renderizada a cada visita, sem cache de CDN; os
// filtros agora são páginas próprias e indexáveis (/categoria/<slug>, /prompts)
// e o ?category= antigo redireciona com 301 (next.config.ts).
export default async function Home() {
  // Get articles
  const allArticles = await getAllArticlesMetadata();

  // Find all articles marked as featured.
  const featuredPool = allArticles.filter(art => art.isFeatured);

  // The featured article is always the latest published article (index 0)
  const featuredArticle = allArticles.length > 0 ? allArticles[0] : null;

  // Articles for the grid (excluding the featured one if showing)
  const gridArticles = featuredArticle
    ? allArticles.filter(art => art.slug !== featuredArticle.slug)
    : allArticles;

  // Mais lidos: lista curada (src/data/popular-posts.ts), na ordem definida
  const bySlug = new Map(allArticles.map((art) => [art.slug, art]));
  const popularArticles = POPULAR_POST_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (art): art is NonNullable<typeof art> => Boolean(art)
  );
  const popularRank = new Map(POPULAR_POST_SLUGS.map((slug, index) => [slug, index]));

  // Hub da home: os três temas que trazem leitores de busca. Em cada um, os
  // mais lidos primeiro e depois os mais recentes; tutoriais sem repetir os
  // que já aparecem em Prompts e Melhores IAs.
  const homeHubSlugs: HubSlug[] = ['prompts', 'melhores-ias', 'tutoriais'];
  const homeHubs = homeHubSlugs.map((slug) => {
    const articles = getHubArticles(allArticles, slug);
    const pool = slug === 'tutoriais'
      ? articles.filter((art) => !isPromptArticle(art) && !isRankingArticle(art))
      : articles;
    const top = [...pool]
      .sort((a, b) => (popularRank.get(a.slug) ?? 999) - (popularRank.get(b.slug) ?? 999))
      .slice(0, 3);
    return { hub: HUBS[slug], count: articles.length, top };
  });

  // Abas de navegação por tema
  const categories = [
    { label: 'Todos', href: '/' },
    ...HUB_ORDER.map((slug) => ({ label: HUBS[slug].label, href: HUBS[slug].href })),
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
                    src={withAspectRatio(featuredArticle.coverImage, '16:10')}
                    alt={featuredArticle.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    style={{ objectFit: 'cover' }}
                    loading="eager"
                    fetchPriority="high"
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
        <HoverPrefetchLink href="/verificador-ia" className="tool-feature">
          <span className="tool-feature-ic" aria-hidden="true">🔍</span>
          <span className="tool-feature-body">
            <span className="tool-feature-badge">Novo · Ferramenta grátis</span>
            <span className="tool-feature-title">Seu site aparece nas respostas do ChatGPT e Gemini?</span>
            <span className="tool-feature-desc">Analise sua página em segundos e descubra o que melhorar para ser citado pelas IAs.</span>
          </span>
          <span className="tool-feature-cta">Analisar grátis →</span>
        </HoverPrefetchLink>

        {/* Cards das ferramentas */}
        <ul className="tool-cards">
          <li>
            <HoverPrefetchLink href="/comparador" className="tool-card">
              <span className="tool-card-ic ic-cyan" aria-hidden="true">⚖️</span>
              <span className="tool-card-tt">Comparador de IAs</span>
              <span className="tool-card-sub">ChatGPT vs Gemini vs Claude</span>
            </HoverPrefetchLink>
          </li>
          <li>
            <HoverPrefetchLink href="/calculadora" className="tool-card">
              <span className="tool-card-ic ic-green" aria-hidden="true">🧮</span>
              <span className="tool-card-tt">Calculadora de Custos</span>
              <span className="tool-card-sub">Quanto custa a API de cada IA</span>
            </HoverPrefetchLink>
          </li>
          <li>
            <HoverPrefetchLink href="/prompts" className="tool-card">
              <span className="tool-card-ic ic-purple" aria-hidden="true">💬</span>
              <span className="tool-card-tt">Biblioteca de Prompts</span>
              <span className="tool-card-sub">+160 prompts prontos e grátis</span>
            </HoverPrefetchLink>
          </li>
          <li>
            <HoverPrefetchLink href="/gerador" className="tool-card">
              <span className="tool-card-ic ic-orange" aria-hidden="true">✍️</span>
              <span className="tool-card-tt">Gerador de Prompts</span>
              <span className="tool-card-sub">Monte o prompt perfeito</span>
            </HoverPrefetchLink>
          </li>
          <li>
            <HoverPrefetchLink href="/ferramentas" className="tool-card">
              <span className="tool-card-ic ic-blue" aria-hidden="true">🧰</span>
              <span className="tool-card-tt">Guia de Ferramentas</span>
              <span className="tool-card-sub">+70 IAs por categoria</span>
            </HoverPrefetchLink>
          </li>
          <li>
            <HoverPrefetchLink href="/glossario" className="tool-card">
              <span className="tool-card-ic ic-pink" aria-hidden="true">📖</span>
              <span className="tool-card-tt">Glossário de IA</span>
              <span className="tool-card-sub">Termos explicados de forma simples</span>
            </HoverPrefetchLink>
          </li>
        </ul>
      </section>

      {/* Hub por tema: Prompts, Melhores IAs e Tutoriais */}
      <section className="container home-hubs" aria-labelledby="home-temas">
        <h2 id="home-temas" className="section-title">Explore por tema</h2>
        <ul className="hub-cards">
          {homeHubs.map(({ hub, count, top }) => (
            <li key={hub.slug} className="hub-card">
              <HoverPrefetchLink href={hub.href} className="hub-card-head">
                <span className="hub-card-ic" aria-hidden="true">{hub.icon}</span>
                <span className="hub-card-name">
                  <strong>{hub.label}</strong>
                  <small>{count} publicações</small>
                </span>
              </HoverPrefetchLink>
              <p className="hub-card-tagline">{hub.tagline}</p>
              <ul className="hub-card-links">
                {top.map((art) => (
                  <li key={art.slug}>
                    <HoverPrefetchLink href={`/blog/${art.slug}`}>{art.title}</HoverPrefetchLink>
                  </li>
                ))}
              </ul>
              <HoverPrefetchLink href={hub.href} className="hub-card-more">
                Ver tudo em {hub.label} →
              </HoverPrefetchLink>
            </li>
          ))}
        </ul>
      </section>

      {/* Mais lidos (curadoria a partir do GA4) */}
      {popularArticles.length > 0 && (
        <section className="container home-popular" aria-labelledby="home-mais-lidos">
          <h2 id="home-mais-lidos" className="section-title">Mais lidos</h2>
          <ol className="popular-ranking">
            {popularArticles.map((art, index) => (
              <li key={art.slug}>
                <HoverPrefetchLink href={`/blog/${art.slug}`} className="popular-ranking-item">
                  <span className="popular-ranking-pos" aria-hidden="true">{index + 1}</span>
                  <span className="popular-ranking-body">
                    <span className="popular-ranking-title">{art.title}</span>
                    <span className="popular-ranking-meta">{getPrimaryHub(art).label} · {art.readingTime}</span>
                  </span>
                </HoverPrefetchLink>
              </li>
            ))}
          </ol>
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
              href={cat.href}
              className={`filter-btn ${cat.href === '/' ? 'active' : ''}`}
              prefetch={false}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="main-layout">
          {/* Articles Grid Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="section-title">Últimas Publicações</h2>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(homeFaqLd) }} />
    </main>
  );
}
