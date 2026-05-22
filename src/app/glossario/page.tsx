import type { Metadata } from 'next';
import GlossarioClient from './GlossarioClient';

export const metadata: Metadata = {
  title: 'Glossário de IA - Termos de Inteligência Artificial em Português | Turbina IA',
  description: 'Dicionário completo de termos de Inteligência Artificial em português. De LLM a RAG, de Transformer a Embeddings — entenda o vocabulário da IA sem complicação.',
  keywords: ['glossário IA', 'termos inteligência artificial', 'dicionário IA', 'LLM significado', 'o que é token IA'],
  alternates: { canonical: '/glossario' },
  openGraph: {
    title: 'Glossário de IA - Termos de Inteligência Artificial em Português',
    description: 'Dicionário completo de termos de Inteligência Artificial explicados em português simples.',
    url: 'https://turbinaia.com.br/glossario',
  },
};

export default function GlossarioPage() {
  return <GlossarioClient />;
}
