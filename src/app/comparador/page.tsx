import type { Metadata } from 'next';
import ComparatorClient from './ComparatorClient';

export const metadata: Metadata = {
  title: 'Comparador de Inteligências Artificiais - Turbina IA',
  description: 'Compare as principais inteligências artificiais do mercado (ChatGPT, Claude, Gemini, Midjourney e mais) lado a lado. Veja preços, prós, contras e notas em programação, escrita e raciocínio.',
  keywords: ['Comparador de IA', 'ChatGPT vs Claude', 'Gemini vs ChatGPT', 'Melhor IA para programar', 'Inteligência Artificial'],
  openGraph: {
    title: 'Comparador de Inteligências Artificiais - Turbina IA',
    description: 'Compare as principais inteligências artificiais do mercado lado a lado em recursos, preços, prós e contras.',
    url: 'https://turbinaia.com.br/comparador',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function ComparadorPage() {
  return (
    <main className="container comparador-section">
      <div className="comparador-header">
        <h1>Comparador de Inteligências Artificiais</h1>
        <p>
          Compare lado a lado as capacidades, preços, vantagens e limitações das ferramentas de inteligência artificial mais populares do mercado. Tome a decisão certa para o seu projeto ou trabalho.
        </p>
      </div>

      <ComparatorClient />
    </main>
  );
}
