'use client';

import { useEffect, useState } from 'react';

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 0);

    try {
      const win = window as typeof window & { adsbygoogle?: object[] };
      if (typeof window !== 'undefined' && win.adsbygoogle) {
        (win.adsbygoogle = win.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.warn('AdSense placement failed, script might be blocked or not loaded yet', e);
    }

    return () => clearTimeout(timer);
  }, []);

  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-placeholder';

  // If there's no active AdSense client ID, hide the ad blocks completely to reclaim space
  if (adClientId === 'ca-pub-placeholder') {
    return null;
  }

  if (!isClient) {
    return null; // Return null during hydration to avoid CLS while checking environment
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
