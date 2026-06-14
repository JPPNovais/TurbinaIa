import type { Metadata } from 'next';
import Link from 'next/link';
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
    url: 'https://www.turbinaia.com.br/ferramentas',
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
    canonical: 'https://www.turbinaia.com.br/ferramentas',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.turbinaia.com.br/ferramentas',
      url: 'https://www.turbinaia.com.br/ferramentas',
      name: 'Guia de Ferramentas de IA 2026 | Turbina IA',
      description:
        'Descubra as melhores ferramentas de inteligência artificial organizadas por finalidade.',
      inLanguage: 'pt-BR',
      isPartOf: { '@id': 'https://www.turbinaia.com.br' },
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

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual a melhor ferramenta de IA em 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende da tarefa. Para escrita e código, ChatGPT e Claude lideram. Para geração de imagens, Midjourney e DALL-E são referência. Para programação assistida, GitHub Copilot é o mais adotado. Este guia organiza mais de 30 ferramentas por categoria para ajudar você a escolher a certa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais ferramentas de IA são gratuitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Várias ferramentas oferecem planos gratuitos: ChatGPT (plano free com GPT-4o mini), Gemini (integrado ao Google), Copilot da Microsoft e o Claude (plano gratuito com Claude Sonnet). A disponibilidade de recursos no plano gratuito varia — consulte o diretório acima para ver o status de cada uma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual IA é melhor para criar imagens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Midjourney produz os resultados mais estéticos e artísticos. DALL-E 3 (integrado ao ChatGPT) é o mais fácil de usar. Stable Diffusion é a opção open-source para quem quer controle total e uso local.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual IA usar para programação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GitHub Copilot é o padrão da indústria para autocompletar código no editor. Para tarefas de maior complexidade, arquitetura e revisão de código, Claude e ChatGPT (via interface ou API) oferecem respostas mais detalhadas e contextuais.',
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <FerramentasClient />

      <section className="container" style={{ marginTop: '3rem', marginBottom: '6rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '3rem 0' }} />

        <section style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Perguntas Frequentes sobre Ferramentas de IA
          </h2>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Qual a melhor ferramenta de IA em 2026?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Depende da tarefa. Para escrita e código, ChatGPT e Claude lideram. Para geração de imagens, Midjourney e DALL-E são referência. Para programação assistida, GitHub Copilot é o mais adotado. Use o diretório acima para filtrar por categoria e encontrar a ferramenta certa para o seu caso. Você também pode comparar modelos lado a lado no nosso <Link href="/comparador">comparador de IAs</Link>.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Quais ferramentas de IA são gratuitas?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Várias ferramentas oferecem planos gratuitos: ChatGPT (com GPT-4o mini), Gemini (integrado ao Google), Copilot da Microsoft e Claude (plano gratuito com Claude Sonnet). A disponibilidade de recursos no plano gratuito varia — consulte o diretório acima para ver o status de cada uma.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Qual IA é melhor para criar imagens?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Midjourney produz os resultados mais estéticos e artísticos. DALL-E 3 (integrado ao ChatGPT) é o mais fácil de usar. Stable Diffusion é a opção open-source para quem quer controle total e uso local.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Qual IA usar para programação?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            GitHub Copilot é o padrão da indústria para autocompletar código no editor. Para tarefas de maior complexidade, Claude e ChatGPT oferecem respostas mais detalhadas. Se você usa APIs diretamente, compare os custos na nossa <Link href="/calculadora">calculadora de custos de IA</Link>.
          </p>
        </section>
      </section>
    </>
  );
}
