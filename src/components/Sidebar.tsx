'use client';

import Link from 'next/link';
import Image from 'next/image';
import AdSense from './AdSense';
import { ArticleMetadata } from '@/lib/articles';
import { formatDateShort } from '@/lib/date';

interface SidebarProps {
  recentArticles: ArticleMetadata[];
  featuredArticles?: ArticleMetadata[];
}

export default function Sidebar({ recentArticles, featuredArticles = [] }: SidebarProps) {
  return (
    <aside className="sidebar">
      {/* Newsletter Widget */}
      <div className="widget">
        <h3 className="widget-title">Assine a Newsletter</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          Receba os novos tutoriais de IA e resumos semanais de tecnologia direto na sua caixa de entrada.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required 
              className="input-field"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Inscrever Turbina ⚡
          </button>
        </form>
      </div>

      {/* AdSense Widget */}
      <AdSense adSlot="sidebar-vertical-ad" adFormat="vertical" />

      {/* Featured Recommendations Widget */}
      {featuredArticles.length > 0 && (
        <div className="widget">
          <h3 className="widget-title">Nossas Recomendações 🌟</h3>
          <div className="popular-posts-list">
            {featuredArticles.slice(0, 3).map((article) => {
              const formattedDate = formatDateShort(article.date);

              return (
                <Link href={`/blog/${article.slug}`} key={`featured-${article.slug}`} className="popular-post-item">
                  <div className="popular-post-thumb" style={{ position: 'relative' }}>
                    {article.coverImage ? (
                      <Image 
                        src={article.coverImage} 
                        alt={article.title} 
                        fill
                        sizes="60px"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="card-img-placeholder" style={{ fontSize: '0.6rem' }}>
                        <span>Turbina</span>
                      </div>
                    )}
                  </div>
                  <div className="popular-post-info">
                    <h4 className="popular-post-title">{article.title}</h4>
                    <div className="popular-post-meta">
                      <span>{formattedDate}</span>
                      <span style={{ margin: '0 0.25rem' }}>•</span>
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Popular/Recent Posts Widget */}
      <div className="widget">
        <h3 className="widget-title">Mais Recentes</h3>
        <div className="popular-posts-list">
          {recentArticles.slice(0, 3).map((article) => {
            const formattedDate = formatDateShort(article.date);

            return (
              <Link href={`/blog/${article.slug}`} key={article.slug} className="popular-post-item">
                <div className="popular-post-thumb" style={{ position: 'relative' }}>
                  {article.coverImage ? (
                    <Image 
                      src={article.coverImage} 
                      alt={article.title} 
                      fill
                      sizes="60px"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="card-img-placeholder" style={{ fontSize: '0.6rem' }}>
                      <span>Turbina</span>
                    </div>
                  )}
                </div>
                <div className="popular-post-info">
                  <h4 className="popular-post-title">{article.title}</h4>
                  <div className="popular-post-meta">
                    <span>{formattedDate}</span>
                    <span style={{ margin: '0 0.25rem' }}>•</span>
                    <span>{article.readingTime}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
