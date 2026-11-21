import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import { preconnect } from 'react-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import AnalyticsListeners from '@/components/AnalyticsListeners';
import { SITE_URL, ORGANIZATION_ID, WEBSITE_ID, DEFAULT_OG_IMAGE, jsonLd } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-placeholder';
const hasAdClient = adClientId !== 'ca-pub-placeholder';

// O script do AdSense entra só depois do evento `load` (no ocioso seguinte), para
// não disputar CPU e rede com o LCP. A fila `adsbygoogle` já existe antes, então
// pushes feitos antes do script carregar são processados quando ele chegar.
// O flag global impede injeção dupla.
const adsenseDeferScript = `(function(){
  window.adsbygoogle = window.adsbygoogle || [];
  function inject(){
    if (window.__tiaAdsInjected) return;
    window.__tiaAdsInjected = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}';
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }
  function schedule(){
    if ('requestIdleCallback' in window) window.requestIdleCallback(inject, { timeout: 2000 });
    else setTimeout(inject, 200);
  }
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
})();`;

export const metadata: Metadata = {
  title: 'Turbina IA - O Portal Definitivo de Inteligência Artificial',
  description: 'Notícias diárias, tutoriais de monetização, guias práticos e tendências sobre Inteligência Artificial. Turbine seus conhecimentos e produtividade.',
  keywords: ['Inteligência Artificial', 'IA', 'AdSense', 'Tecnologia', 'Produtividade', 'Automatização'],
  authors: [{ name: 'Turbina IA Team' }],
  creator: 'Turbina IA',
  metadataBase: new URL('https://www.turbinaia.com.br'),
  verification: {
    google: 'EP3JHK-_xrYKdBTEfycV8vruws7Y3O9Mj71XlhAOBGQ',
  },
  // O crawler do AdSense não executa JS e o script do AdSense só é injetado após
  // o `load`: esta meta mantém o pub ID no HTML estático para a verificação.
  ...(hasAdClient && { other: { 'google-adsense-account': adClientId } }),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'Turbina IA - O Portal Definitivo de Inteligência Artificial',
    description: 'Notícias diárias, tutoriais de monetização, guias práticos e tendências sobre Inteligência Artificial.',
    url: 'https://www.turbinaia.com.br',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turbina IA - O Portal Definitivo de Inteligência Artificial',
    description: 'Notícias diárias, tutoriais de monetização, guias práticos e tendências sobre Inteligência Artificial.',
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // As imagens vêm direto do CDN do Unsplash: abre a conexão junto com o HTML.
  preconnect('https://images.unsplash.com');

  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Turbina IA',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.png`,
      width: 512,
      height: 512,
    },
    description: 'Portal brasileiro de Inteligência Artificial: prompts prontos, rankings de ferramentas, tutoriais, comparador de modelos e notícias de IA.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial',
      url: `${SITE_URL}/contato`,
      availableLanguage: 'Portuguese',
    },
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Turbina IA',
    alternateName: 'TurbinaIA',
    url: SITE_URL,
    inLanguage: 'pt-BR',
    publisher: { '@id': ORGANIZATION_ID },
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd([organizationLd, websiteLd]) }}
        />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        {hasAdClient && (
          // Anúncios automáticos e blocos manuais dependem deste script; ver adsenseDeferScript.
          <script id="adsense-defer" dangerouslySetInnerHTML={{ __html: adsenseDeferScript }} />
        )}
        {gaMeasurementId && (
          <>
            {/* outbound_click e scroll_depth (os demais eventos saem dos componentes) */}
            <AnalyticsListeners />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
