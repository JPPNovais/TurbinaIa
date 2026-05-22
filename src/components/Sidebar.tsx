'use client';

import { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Ocorreu um erro ao processar a inscrição.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Ocorreu um erro de rede. Tente novamente mais tarde.');
    }
  };

  return (
    <aside className="sidebar">
      {/* Newsletter Widget */}
      <div className="widget">
        <h3 className="widget-title">Assine a Newsletter</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
          Receba os novos tutoriais de IA e resumos semanais de tecnologia direto na sua caixa de entrada.
        </p>

        {status === 'success' ? (
          <div style={{
            padding: '1rem',
            background: 'rgba(var(--accent-rgb), 0.1)',
            border: '1px solid var(--accent)',
            borderRadius: 'var(--border-radius-sm)',
            color: 'var(--accent)',
            fontSize: '0.9rem',
            lineHeight: '1.4',
            textAlign: 'center'
          }}>
            {message}
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group" style={{ marginBottom: '0.75rem' }}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                required 
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                style={{ width: '100%' }}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status === 'loading'}
              style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {status === 'loading' ? 'Inscrevendo...' : 'Inscrever Turbina ⚡'}
            </button>

            {status === 'error' && (
              <p style={{ 
                color: '#ef4444', 
                fontSize: '0.8rem', 
                marginTop: '0.5rem', 
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                {message}
              </p>
            )}
          </form>
        )}
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
