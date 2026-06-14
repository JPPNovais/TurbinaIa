import type { Metadata } from 'next';
import Link from 'next/link';
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

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é um token em IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um token é a menor unidade de texto processada por um modelo de linguagem (LLM). Em inglês, 1 token equivale a cerca de 0,75 palavras. Em português, essa proporção é um pouco menor. Modelos de IA cobram pelo número de tokens processados na entrada (prompt) e na saída (resposta).',
      },
    },
    {
      '@type': 'Question',
      name: 'O que significa LLM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LLM significa Large Language Model (Modelo de Linguagem de Grande Porte). São modelos de IA treinados em grandes volumes de texto para entender e gerar linguagem natural. Exemplos: GPT-4 (OpenAI), Claude (Anthropic) e Gemini (Google).',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é RAG em inteligência artificial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAG (Retrieval-Augmented Generation) é uma técnica que combina busca em bases de dados externas com a geração de texto por um LLM. Em vez de depender apenas do conhecimento treinado, o modelo busca informações relevantes em documentos ou bancos de dados antes de gerar a resposta, tornando-a mais precisa e atualizada.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que são embeddings em IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Embeddings são representações numéricas (vetores) de textos, imagens ou outros dados que capturam seu significado semântico. Textos com significados semelhantes têm vetores próximos no espaço vetorial. São a base de sistemas de busca semântica, RAG e recomendações.',
      },
    },
  ],
};

export default function GlossarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GlossarioClient />

      <section className="container" style={{ marginTop: '3rem', marginBottom: '6rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '3rem 0' }} />

        <section style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Perguntas Frequentes sobre Termos de IA
          </h2>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            O que é um token em IA?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Um token é a menor unidade de texto processada por um modelo de linguagem. Em inglês, 1 token equivale a cerca de 0,75 palavras; em português, essa proporção é ligeiramente menor. Modelos de IA cobram pelo número de tokens na entrada e na saída — veja quanto isso custa na nossa <Link href="/calculadora">calculadora de custos de IA</Link>.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            O que significa LLM?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            LLM significa Large Language Model (Modelo de Linguagem de Grande Porte). São modelos de IA treinados em grandes volumes de texto para entender e gerar linguagem natural. Exemplos: GPT-4 (OpenAI), Claude (Anthropic) e Gemini (Google). Compare os principais LLMs no nosso <Link href="/comparador">comparador de IAs</Link>.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            O que é RAG em inteligência artificial?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            RAG (Retrieval-Augmented Generation) é uma técnica que combina busca em bases de dados externas com a geração de texto por um LLM. Em vez de depender apenas do conhecimento treinado, o modelo busca informações relevantes em documentos antes de responder, tornando as respostas mais precisas e atualizadas.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            O que são embeddings em IA?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Embeddings são representações numéricas (vetores) de textos ou outros dados que capturam seu significado semântico. Textos com significados semelhantes têm vetores próximos no espaço vetorial. São a base de sistemas de busca semântica, RAG e recomendações.
          </p>
        </section>
      </section>
    </>
  );
}
