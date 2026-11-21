'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' }
}: AdSenseProps) {
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-placeholder';

  // Interruptor de exibição dos blocos. Enquanto o site está em revisão pelo
  // Google, mantenha desligado (variável ausente) para não exibir caixas vazias.
  // Ligue (NEXT_PUBLIC_ADS_ENABLED=true) só depois da conta ser aprovada.
  // O script de aprovação carrega no layout independentemente disto.
  const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true';
  const isActive = adClientId !== 'ca-pub-placeholder' && adsEnabled;

  // O <ins> já vem no HTML do servidor (com a altura reservada abaixo), então o
  // push roda depois de ele existir. Antes o bloco só aparecia após a hidratação:
  // empurrava o conteúdo para baixo (CLS) e o push acontecia antes do <ins>.
  useEffect(() => {
    if (!isActive || process.env.NODE_ENV === 'development') return;
    try {
      const win = window as typeof window & { adsbygoogle?: object[] };
      (win.adsbygoogle = win.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense placement failed, script might be blocked or not loaded yet', e);
    }
  }, [isActive]);

  // Sem cliente real ou com os blocos desligados, não ocupa espaço nenhum.
  if (!isActive) {
    return null;
  }

  // If in development mode (with a real key), render a simulated ad slot for previewing
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="ad-container" style={{ minHeight: '120px' }}>
      {isDev ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
          <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem' }}>Espaço de Anúncio Google AdSense</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Slot ID: {adSlot} | Client ID: {adClientId}
          </p>
        </div>
      ) : (
        <div className="ad-box">
          <ins
            className="adsbygoogle"
            style={style}
            data-ad-client={adClientId}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
          />
        </div>
      )}
    </div>
  );
}
