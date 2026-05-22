import type { Metadata } from 'next';
import GeradorClient from './GeradorClient';

export const metadata: Metadata = {
  title: 'Gerador de Prompts Interativo para IA | Turbina IA',
  description: 'Crie prompts profissionais para ChatGPT, Claude e Gemini em segundos. Preencha um formulário simples e receba um prompt completo e otimizado para qualquer tarefa.',
  keywords: ['gerador de prompts', 'criar prompts IA', 'prompts chatgpt', 'prompt engineering', 'como fazer prompts'],
  alternates: { canonical: '/gerador' },
  openGraph: {
    title: 'Gerador de Prompts Interativo para IA | Turbina IA',
    description: 'Crie prompts profissionais para ChatGPT, Claude e Gemini em segundos.',
    url: 'https://turbinaia.com.br/gerador',
  },
};

export default function GeradorPage() {
  return <GeradorClient />;
}
