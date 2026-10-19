/**
 * Eventos do GA4 disparados pelo site. A lista completa (nomes, parâmetros e
 * como marcá-los como eventos principais) está no README.
 */

export type AnalyticsEvent =
  | 'copy_prompt'
  | 'newsletter_signup'
  | 'outbound_click'
  | 'scroll_depth';

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envia um evento ao GA4. Seguro de chamar antes do gtag.js terminar de
 * carregar: o comando entra na fila do dataLayer, como no snippet oficial.
 * Sem GA configurado (dev, preview), só registra no console em desenvolvimento.
 */
export function track(name: AnalyticsEvent, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;

  const clean = Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));

  if (process.env.NODE_ENV !== 'production') {
    console.info('[analytics]', name, clean);
  }

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    // O gtag.js só processa entradas no formato `arguments` (não arrays).
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag('event', name, clean);
}
