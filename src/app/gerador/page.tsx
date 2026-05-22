import type { Metadata } from 'next';
import GeradorClient from './GeradorClient';

const OG_TITLE = 'Gerador de Prompts Interativo para IA';
const OG_DESC = 'Preencha um formulário simples e receba um prompt profissional pronto para ChatGPT, Claude ou Gemini. Grátis, sem cadastro.';
const OG_IMAGE = `https://turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Gerador Grátis')}`;

export const metadata: Metadata = {
  title: 'Gerador de Prompts Interativo para IA | Turbina IA',
  description: OG_DESC,
  keywords: ['gerador de prompts', 'criar prompts IA', 'prompts chatgpt', 'prompt engineering', 'como fazer prompts'],
  alternates: { canonical: '/gerador' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://turbinaia.com.br/gerador',
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
  url: 'https://turbinaia.com.br/gerador',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://turbinaia.com.br' },
  featureList: [
    'Geração de prompts para 8 tipos de tarefas',
    'Personalização de tom, formato e público-alvo',
    'Compatível com ChatGPT, Claude e Gemini',
    'Sem cadastro necessário',
  ],
};

export default function GeradorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GeradorClient />
    </>
  );
}
