'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics';

const SCROLL_THRESHOLD = 75;

function pageType(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/blog/')) return 'post';
  if (pathname.startsWith('/categoria/') || pathname === '/prompts') return 'hub';
  return 'page';
}

/**
 * Medição global: cliques em links externos (outbound_click, com o domínio) e
 * leitura de 75% da página (scroll_depth). Um único listener por tipo no
 * documento, então vale para links renderizados em qualquer lugar, inclusive
 * dentro do HTML dos artigos.
 */
export default function AnalyticsListeners() {
  const pathname = usePathname();

  // Cliques em links para outros domínios
  useEffect(() => {
    const ownHost = window.location.hostname.replace(/^www\./, '');

    const handle = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) return; // só o clique do meio
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (!/^https?:$/.test(url.protocol)) return;
      const domain = url.hostname.replace(/^www\./, '');
      if (domain === ownHost) return;
      track('outbound_click', {
        link_domain: domain,
        link_url: url.href.slice(0, 300),
        link_text: (anchor.textContent || '').trim().slice(0, 100) || undefined,
        page_path: window.location.pathname,
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', handle, { capture: true });
    document.addEventListener('auxclick', handle, { capture: true });
    return () => {
      document.removeEventListener('click', handle, { capture: true });
      document.removeEventListener('auxclick', handle, { capture: true });
    };
  }, []);

  // Profundidade de rolagem: 75%, uma vez por página (reinicia a cada navegação)
  useEffect(() => {
    let fired = false;
    let frame = 0;

    const check = () => {
      frame = 0;
      if (fired) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
      if (percent >= SCROLL_THRESHOLD) {
        fired = true;
        track('scroll_depth', {
          percent_scrolled: SCROLL_THRESHOLD,
          page_path: pathname,
          page_type: pageType(pathname),
        });
      }
    };

    const onScroll = () => {
      if (!fired && !frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
