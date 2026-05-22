import type { Metadata } from 'next';
import ComparatorClient from './ComparatorClient';

const OG_TITLE = 'Comparador de Inteligências Artificiais';
const OG_DESC = 'Compare ChatGPT, Claude, Gemini e mais lado a lado: preços, prós, contras e notas em programação, escrita e raciocínio.';
const OG_IMAGE = `https://turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Ferramenta Gratuita')}`;

export const metadata: Metadata = {
  title: 'Comparador de IAs - ChatGPT vs Claude vs Gemini | Turbina IA',
  description: OG_DESC,
  keywords: ['Comparador de IA', 'ChatGPT vs Claude', 'Gemini vs ChatGPT', 'Melhor IA para programar', 'Inteligência Artificial'],
  alternates: { canonical: '/comparador' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://turbinaia.com.br/comparador',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: OG_TITLE,
  description: OG_DESC,
  url: 'https://turbinaia.com.br/comparador',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://turbinaia.com.br' },
  featureList: [
    'Comparação lado a lado de modelos de IA',
    'Avaliação de raciocínio, escrita e programação',
    'Preços e planos atualizados',
    'Prós e contras detalhados',
  ],
};

export default function ComparadorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container comparador-section">
        <div className="comparador-header">
          <h1>Comparador de Inteligências Artificiais</h1>
          <p>
            Compare lado a lado as capacidades, preços, vantagens e limitações das ferramentas de inteligência artificial mais populares do mercado. Tome a decisão certa para o seu projeto ou trabalho.
          </p>
        </div>
        <ComparatorClient />
      </main>
    </>
  );
}
