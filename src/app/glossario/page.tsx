import type { Metadata } from 'next';
import GlossarioClient from './GlossarioClient';
import { GLOSSARIO } from '@/data/glossario';

const OG_TITLE = 'Glossário de IA — Termos de Inteligência Artificial';
const OG_DESC = `${GLOSSARIO.length} termos de Inteligência Artificial explicados em português. De LLM a RAG, de Token a Embeddings — sem jargão desnecessário.`;
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent(`${GLOSSARIO.length} Termos Grátis`)}`;

export const metadata: Metadata = {
  title: 'Glossário de IA - Termos de Inteligência Artificial em Português | Turbina IA',
  description: OG_DESC,
  keywords: ['glossário IA', 'termos inteligência artificial', 'dicionário IA', 'LLM significado', 'o que é token IA', 'o que é RAG'],
  alternates: { canonical: '/glossario' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/glossario',
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
  '@type': 'DefinedTermSet',
  name: 'Glossário de Inteligência Artificial',
  description: OG_DESC,
  url: 'https://www.turbinaia.com.br/glossario',
  inLanguage: 'pt-BR',
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
  hasDefinedTerm: GLOSSARIO.slice(0, 15).map((term) => ({
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    url: `https://www.turbinaia.com.br/glossario#${term.id}`,
    inDefinedTermSet: 'https://www.turbinaia.com.br/glossario',
  })),
};

export default function GlossarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlossarioClient />
    </>
  );
}
