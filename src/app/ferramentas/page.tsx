import type { Metadata } from 'next';
import FerramentasClient from './FerramentasClient';
import { AI_TOOLS } from '@/data/ai-tools';

export const metadata: Metadata = {
  title: 'Guia de Ferramentas de IA 2026: Qual IA usar para cada tarefa? | Turbina IA',
  description:
    'Descubra as melhores ferramentas de inteligência artificial organizadas por finalidade. Compare ChatGPT, Claude, Midjourney, GitHub Copilot e mais de 30 IAs por categoria.',
  keywords: [
    'ferramentas de IA',
    'inteligência artificial',
    'melhores IAs 2026',
    'ChatGPT',
    'Claude',
    'Midjourney',
    'GitHub Copilot',
    'geração de imagens IA',
    'IA para programação',
    'IA para marketing',
    'comparar ferramentas IA',
    'qual IA usar',
  ],
  openGraph: {
    title: 'Guia de Ferramentas de IA 2026: Qual IA usar para cada tarefa?',
    description:
      'Descubra as melhores ferramentas de inteligência artificial organizadas por finalidade. Compare ChatGPT, Claude, Midjourney, GitHub Copilot e mais de 30 IAs.',
    url: 'https://turbinaia.com.br/ferramentas',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guia de Ferramentas de IA 2026: Qual IA usar para cada tarefa?',
    description:
      'Descubra as melhores ferramentas de inteligência artificial organizadas por finalidade. Compare mais de 30 IAs por categoria de uso.',
  },
  alternates: {
    canonical: 'https://turbinaia.com.br/ferramentas',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://turbinaia.com.br/ferramentas',
      url: 'https://turbinaia.com.br/ferramentas',
      name: 'Guia de Ferramentas de IA 2026 | Turbina IA',
      description:
        'Descubra as melhores ferramentas de inteligência artificial organizadas por finalidade.',
      inLanguage: 'pt-BR',
      isPartOf: { '@id': 'https://turbinaia.com.br' },
    },
    {
      '@type': 'ItemList',
      name: 'Melhores Ferramentas de IA 2026',
      description:
        'Lista curada das melhores ferramentas de inteligência artificial organizadas por categoria de uso.',
      numberOfItems: AI_TOOLS.length,
      itemListElement: AI_TOOLS.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.name,
        url: tool.url,
        description: tool.tagline,
      })),
    },
  ],
};

export default function FerramentasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FerramentasClient />
    </>
  );
}
