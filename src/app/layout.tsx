import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  metadataBase: new URL('https://turbinaia.com.br'),
  verification: {
    google: 'EP3JHK-_xrYKdBTEfycV8vruws7Y3O9Mj71XlhAOBGQ',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Turbina IA - O Portal Definitivo de Inteligência Artificial',
    description: 'Notícias diárias, tutoriais de monetização, guias práticos e tendências sobre Inteligência Artificial.',
    url: 'https://turbinaia.com.br',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Turbina IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turbina IA - O Portal Definitivo de Inteligência Artificial',
    description: 'Notícias diárias, tutoriais de monetização, guias práticos e tendências sobre Inteligência Artificial.',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-placeholder';
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        {adClientId !== 'ca-pub-placeholder' && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {gaMeasurementId && (
          <>
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
