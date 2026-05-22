import type { Metadata } from 'next';
import ChangelogClient from './ChangelogClient';
import { CHANGELOG } from '@/data/changelog';

const OG_TITLE = 'Monitor de Modelos de IA — Lançamentos e Atualizações';
const OG_DESC = `Cronologia completa dos principais lançamentos de IA: ChatGPT, Claude, Gemini, DeepSeek e mais. ${CHANGELOG.length} eventos rastreados.`;
const OG_IMAGE = `https://turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Atualizado Automaticamente')}`;

export const metadata: Metadata = {
  title: 'Monitor de Modelos de IA - Lançamentos e Atualizações | Turbina IA',
  description: OG_DESC,
  keywords: ['lançamentos IA', 'novidades modelos IA', 'atualização chatgpt', 'histórico claude', 'timeline inteligência artificial'],
  alternates: { canonical: '/changelog' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://turbinaia.com.br/changelog',
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
  '@type': 'ItemList',
  name: 'Monitor de Modelos de IA — Lançamentos e Atualizações',
  description: OG_DESC,
  url: 'https://turbinaia.com.br/changelog',
  numberOfItems: CHANGELOG.length,
  inLanguage: 'pt-BR',
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://turbinaia.com.br' },
  itemListElement: CHANGELOG.slice(0, 10).map((entry, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: entry.title,
    description: entry.description,
  })),
};

export default function ChangelogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChangelogClient />
    </>
  );
}
