import type { Metadata } from 'next';
import ChangelogClient from './ChangelogClient';

export const metadata: Metadata = {
  title: 'Monitor de Modelos de IA - Lançamentos e Atualizações | Turbina IA',
  description: 'Acompanhe o histórico completo de lançamentos e atualizações dos principais modelos de IA: ChatGPT, Claude, Gemini, DeepSeek e outros. Cronologia atualizada.',
  keywords: ['lançamentos IA', 'novidades modelos IA', 'atualização chatgpt', 'histórico claude', 'timeline inteligência artificial'],
  alternates: { canonical: '/changelog' },
  openGraph: {
    title: 'Monitor de Modelos de IA - Lançamentos e Atualizações | Turbina IA',
    description: 'Cronologia completa dos principais lançamentos e atualizações de modelos de IA.',
    url: 'https://turbinaia.com.br/changelog',
  },
};

export default function ChangelogPage() {
  return <ChangelogClient />;
}
