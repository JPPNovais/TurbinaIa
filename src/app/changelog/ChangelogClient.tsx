'use client';

import { useState, useMemo } from 'react';
import { CHANGELOG, type ChangelogEntry } from '@/data/changelog';

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  'Lançamento': { bg: '#10b98120', text: '#10b981', dot: '#10b981' },
  'Atualização': { bg: '#6366f120', text: '#6366f1', dot: '#6366f1' },
  'Descontinuado': { bg: '#ef444420', text: '#ef4444', dot: '#ef4444' },
  'Pesquisa': { bg: '#f59e0b20', text: '#f59e0b', dot: '#f59e0b' },
};

const DEVELOPER_COLORS: Record<string, string> = {
  'OpenAI': '#10a37f',
  'Anthropic': '#c4692e',
  'Google DeepMind': '#4285f4',
  'Meta': '#1877f2',
  'DeepSeek': '#0a84ff',
  'Mistral AI': '#ff6b35',
};

const ALL_DEVELOPERS = ['Todos', ...Array.from(new Set(CHANGELOG.map((e) => e.developer)))];
const ALL_CATEGORIES = ['Todos', 'Lançamento', 'Atualização', 'Pesquisa', 'Descontinuado'];

export default function ChangelogClient() {
  const [selectedDev, setSelectedDev] = useState('Todos');
  const [selectedCat, setSelectedCat] = useState('Todos');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return CHANGELOG.filter((entry) => {
      const matchDev = selectedDev === 'Todos' || entry.developer === selectedDev;
      const matchCat = selectedCat === 'Todos' || entry.category === selectedCat;
      return matchDev && matchCat;
    });
  }, [selectedDev, selectedCat]);

  const grouped = useMemo(() => {
    const map: Record<string, ChangelogEntry[]> = {};
    filtered.forEach((entry) => {
      const year = entry.date.split('-')[0];
      if (!map[year]) map[year] = [];
      map[year].push(entry);
    });
    return Object.entries(map).sort(([a], [b]) => parseInt(b) - parseInt(a));
  }, [filtered]);

  const highImpactCount = CHANGELOG.filter((e) => e.impact === 'Alto').length;

  return (
    <main style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Monitor de Modelos de IA
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Cronologia dos principais lançamentos e atualizações de IA.{' '}
            {highImpactCount} eventos de alto impacto rastreados.
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          justifyContent: 'center',
        }}>
          {[
            { label: 'Total de eventos', value: CHANGELOG.length },
            { label: 'Alto impacto', value: CHANGELOG.filter((e) => e.impact === 'Alto').length, color: '#10b981' },
            { label: 'Empresas rastreadas', value: new Set(CHANGELOG.map((e) => e.developer)).size },
            { label: 'Anos cobertos', value: new Set(CHANGELOG.map((e) => e.date.split('-')[0])).size },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              padding: '0.75rem 1.25rem',
              textAlign: 'center',
              minWidth: '120px',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: stat.color ?? 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Empresa:</span>
          {ALL_DEVELOPERS.map((dev) => (
            <button
              key={dev}
              onClick={() => setSelectedDev(dev)}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: selectedDev === dev
                  ? (DEVELOPER_COLORS[dev] ?? 'var(--primary)')
                  : 'var(--border-color)',
                background: selectedDev === dev
                  ? (DEVELOPER_COLORS[dev] ?? 'var(--primary)') + '22'
                  : 'var(--bg-secondary)',
                color: selectedDev === dev
                  ? (DEVELOPER_COLORS[dev] ?? 'var(--primary)')
                  : 'var(--text-secondary)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontWeight: selectedDev === dev ? 600 : 400,
                transition: 'all 0.15s',
              }}
            >
              {dev}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Tipo:</span>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: selectedCat === cat ? 'var(--primary)' : 'var(--border-color)',
                background: selectedCat === cat ? 'var(--primary)' : 'var(--bg-secondary)',
                color: selectedCat === cat ? '#fff' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {cat === 'Todos' ? cat : (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: CATEGORY_COLORS[cat]?.dot ?? 'var(--primary)',
                    display: 'inline-block',
                  }} />
                  {cat}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>Nenhum evento encontrado para os filtros selecionados.</p>
          </div>
        ) : (
          grouped.map(([year, entries]) => (
            <div key={year} style={{ marginBottom: '3rem' }}>
              {/* Year header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  background: 'var(--primary)',
                  color: '#fff',
                  padding: '0.3rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}>
                  {year}
                </div>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {entries.length} evento{entries.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Entries */}
              <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                {/* Timeline line */}
                <div style={{
                  position: 'absolute',
                  left: '7px',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: 'var(--border-color)',
                }} />

                {entries.map((entry) => {
                  const colors = CATEGORY_COLORS[entry.category] ?? CATEGORY_COLORS['Lançamento'];
                  const devColor = DEVELOPER_COLORS[entry.developer] ?? 'var(--primary)';
                  const isOpen = expanded === entry.id;

                  return (
                    <div key={entry.id} style={{ marginBottom: '1rem', position: 'relative' }}>
                      {/* Timeline dot */}
                      <div style={{
                        position: 'absolute',
                        left: '-1.55rem',
                        top: '1.1rem',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: colors.dot,
                        border: '2px solid var(--bg-primary)',
                        zIndex: 1,
                      }} />

                      <div
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--border-radius)',
                          overflow: 'hidden',
                          transition: 'border-color 0.15s',
                        }}
                        onMouseEnter={(e) => !isOpen && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)')}
                        onMouseLeave={(e) => !isOpen && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)')}
                      >
                        {/* Card Header */}
                        <button
                          onClick={() => setExpanded(isOpen ? null : entry.id)}
                          style={{
                            width: '100%',
                            background: 'none',
                            border: 'none',
                            padding: '1rem 1.25rem',
                            cursor: 'pointer',
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.4rem', alignItems: 'center' }}>
                              <span style={{
                                fontSize: '0.7rem',
                                padding: '0.2rem 0.55rem',
                                borderRadius: '999px',
                                background: colors.bg,
                                color: colors.text,
                                fontWeight: 700,
                              }}>
                                {entry.category}
                              </span>
                              <span style={{
                                fontSize: '0.7rem',
                                padding: '0.2rem 0.55rem',
                                borderRadius: '999px',
                                background: devColor + '22',
                                color: devColor,
                                fontWeight: 600,
                              }}>
                                {entry.developer}
                              </span>
                              {entry.impact === 'Alto' && (
                                <span style={{
                                  fontSize: '0.65rem',
                                  padding: '0.15rem 0.45rem',
                                  borderRadius: '999px',
                                  background: '#f59e0b22',
                                  color: '#f59e0b',
                                  fontWeight: 700,
                                }}>
                                  Alto impacto
                                </span>
                              )}
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
                                {entry.date.replace('-', '/')}
                              </span>
                            </div>
                            <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                              {entry.title}
                            </h3>
                          </div>
                          <svg
                            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            style={{ flexShrink: 0, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', color: 'var(--text-secondary)' }}
                          >
                            <polyline points="6 9 12 15 18 9"/>
                          </svg>
                        </button>

                        {/* Expanded Content */}
                        {isOpen && (
                          <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid var(--border-color)' }}>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem', marginTop: '1rem' }}>
                              {entry.description}
                            </p>
                            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              Destaques
                            </p>
                            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                              {entry.highlights.map((h, i) => (
                                <li key={i} style={{ color: 'var(--text-primary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
