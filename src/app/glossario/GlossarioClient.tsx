'use client';

import { useState, useMemo } from 'react';
import { GLOSSARIO, GLOSSARIO_CATEGORIES, type GlossarioTerm } from '@/data/glossario';
import { useProgressiveReveal } from '@/hooks/useProgressiveReveal';

export default function GlossarioClient() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedTerm, setSelectedTerm] = useState<GlossarioTerm | null>(null);

  const filtered = useMemo(() => {
    return GLOSSARIO.filter((item) => {
      const matchCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory]);

  // Busca/filtro rodam sobre TODA a base (filtered). A revelação progressiva
  // apenas recorta quantos termos do resultado são exibidos por vez.
  const { visibleItems: visibleTerms, hasMore, remaining, sentinelRef, loadMore } =
    useProgressiveReveal(filtered, 40, 40);

  const grouped = useMemo(() => {
    const map: Record<string, GlossarioTerm[]> = {};
    visibleTerms.forEach((item) => {
      const letter = item.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(item);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [visibleTerms]);

  const impactColor: Record<string, string> = {
    'Fundamentos': '#6366f1',
    'Modelos & Arquitetura': '#8b5cf6',
    'Treinamento': '#ec4899',
    'Aplicações': '#0ea5e9',
    'Segurança & Ética': '#f59e0b',
    'Ferramentas & APIs': '#10b981',
  };

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Glossário de IA
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {GLOSSARIO.length} termos de Inteligência Artificial explicados em português simples.
            De iniciante a avançado — sem jargão desnecessário.
          </p>
        </div>

        {/* Search + Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 280px', position: 'relative' }}>
            <svg
              style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar termos (ex: token, RAG, LLM)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem 0.65rem 2.25rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {GLOSSARIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-color)',
                  background: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat ? '#fff' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          {filtered.length} termo{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Terms Grid */}
        {grouped.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.1rem' }}>Nenhum termo encontrado para &quot;{search}&quot;</p>
          </div>
        ) : (
          grouped.map(([letter, terms]) => (
            <div key={letter} style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  minWidth: '2rem',
                  fontFamily: 'var(--font-display)',
                }}>
                  {letter}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }} />
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '0.75rem',
              }}>
                {terms.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => setSelectedTerm(term)}
                    style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      cursor: 'pointer',
                      transition: 'border-color 0.15s, transform 0.1s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.3 }}>
                        {term.term}
                      </span>
                      <span style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '999px',
                        background: `${impactColor[term.category] ?? 'var(--primary)'}22`,
                        color: impactColor[term.category] ?? 'var(--primary)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        fontWeight: 600,
                      }}>
                        {term.category}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', margin: 0, lineHeight: 1.5,
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {term.definition}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}

        {hasMore && (
          <div ref={sentinelRef} className="load-more-wrapper">
            <button type="button" className="btn btn-secondary load-more-btn" onClick={loadMore}>
              Carregar mais termos ({remaining})
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedTerm && (
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
            }}
            onClick={() => setSelectedTerm(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius)',
                padding: '2rem',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '999px',
                    background: `${impactColor[selectedTerm.category] ?? 'var(--primary)'}22`,
                    color: impactColor[selectedTerm.category] ?? 'var(--primary)',
                    fontWeight: 600,
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                  }}>
                    {selectedTerm.category}
                  </span>
                  <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>
                    {selectedTerm.term}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedTerm(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: '0.25rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
                {selectedTerm.definition}
              </p>

              {selectedTerm.example && (
                <div style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderLeft: '3px solid var(--primary)',
                  borderRadius: '0 var(--border-radius-sm) var(--border-radius-sm) 0',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.25rem',
                }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.35rem' }}>
                    EXEMPLO PRÁTICO
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {selectedTerm.example}
                  </p>
                </div>
              )}

              {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Termos relacionados
                  </p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {selectedTerm.relatedTerms.map((t) => (
                      <span key={t} style={{
                        padding: '0.25rem 0.6rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
