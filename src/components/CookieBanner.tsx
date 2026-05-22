'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        boxShadow: '0 -4px 24px var(--shadow-color)',
        padding: '1rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <p style={{ flex: 1, minWidth: '260px', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
          🍪 Usamos cookies para análise de tráfego (Google Analytics) e exibição de anúncios (Google AdSense).
          Ao continuar navegando, você concorda com nossa{' '}
          <Link href="/politica-de-privacidade" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
            Política de Privacidade
          </Link>
          .
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: '0.5rem 1.25rem',
              background: 'transparent',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius-sm)',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
