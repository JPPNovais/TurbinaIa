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

  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-placeholder';
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
        {adClientId !== 'ca-pub-placeholder' && (
          // Tag <script> crua (não o <Script> do Next): o crawler do AdSense não
          // executa JS, então precisa da tag literal no HTML do servidor. O React 19
          // renderiza scripts async nativamente como tag real no SSR.
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
            crossOrigin="anonymous"
          />
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
