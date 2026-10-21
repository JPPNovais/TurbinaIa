import type { Metadata } from 'next';
import Link from 'next/link';
import ComparatorClient from './ComparatorClient';
import Breadcrumbs from '@/components/Breadcrumbs';

const OG_TITLE = 'Comparador de IAs: Comparação de Inteligências Artificiais';
const OG_DESC = 'Comparação de IAs lado a lado em 2026: ChatGPT, Claude, Gemini e mais. Compare preços, prós, contras e notas em programação, escrita e raciocínio.';
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Ferramenta Gratuita')}`;

export const metadata: Metadata = {
  title: 'Comparador de IAs Grátis: ChatGPT vs Gemini vs Claude (2026)',
  description: OG_DESC,
  keywords: ['comparador de IA', 'comparação de IAs', 'comparativo de IA', 'ChatGPT vs Claude', 'Gemini vs ChatGPT', 'melhor IA', 'melhor IA para programar', 'qual a melhor inteligência artificial'],
  alternates: { canonical: '/comparador' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/comparador',
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
  url: 'https://www.turbinaia.com.br/comparador',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
  featureList: [
    'Comparação lado a lado de modelos de IA',
    'Avaliação de raciocínio, escrita e programação',
    'Preços e planos atualizados',
    'Prós e contras detalhados',
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a melhor IA em 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Não existe uma única "melhor IA" — depende do uso. O ChatGPT é o mais versátil, o Gemini se integra ao Google e tem contexto longo, e o Claude se destaca em código e textos extensos. Use o comparador para avaliar lado a lado segundo a sua necessidade.' },
    },
    {
      '@type': 'Question',
      name: 'Qual a melhor IA para programar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Claude e ChatGPT lideram em programação, com Gemini bem próximo. Para projetos grandes, modelos com janela de contexto maior (como o Gemini e o Claude) ajudam a lidar com bases de código extensas.' },
    },
    {
      '@type': 'Question',
      name: 'Quais IAs o comparador compara?',
      acceptedAnswer: { '@type': 'Answer', text: 'Os assistentes ChatGPT, Claude e Gemini, os modelos Llama e Muse da Meta, os geradores de imagem ChatGPT Images, Midjourney e Stable Diffusion e a plataforma de automação Make.com.' },
    },
    {
      '@type': 'Question',
      name: 'Como usar o comparador de IAs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Escolha um modelo em cada lado da comparação. A ferramenta mostra as notas de 0 a 5 em raciocínio, escrita, programação, velocidade e custo-benefício, além de preços, prós e contras de cada opção.' },
    },
    {
      '@type': 'Question',
      name: 'O comparador de IAs é gratuito?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. O comparador do Turbina IA é 100% gratuito e não exige cadastro. Selecione dois modelos e veja a comparação lado a lado na hora.' },
    },
  ],
};

export default function ComparadorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="container comparador-section">
        <Breadcrumbs items={[{ name: 'Comparador de IAs' }]} currentPath="/comparador" />
        <div className="comparador-header">
          <h1>Comparador de IAs: Comparação de Inteligências Artificiais</h1>
          <p>
            Faça a comparação de IAs lado a lado: capacidades, preços, vantagens e limitações dos modelos de inteligência artificial mais populares de 2026. Selecione dois e tome a decisão certa para o seu projeto ou trabalho.
          </p>
        </div>

        {/* Introdução no HTML do servidor, acima da ferramenta (indexável) */}
        <section className="comparador-intro" aria-label="Sobre o comparador de IAs">
          <p>
            O <strong>comparador de IAs</strong> do Turbina IA coloca dois modelos lado a lado para você decidir qual usar
            sem precisar testar tudo. Estão na comparação os assistentes mais usados no Brasil — <strong>ChatGPT</strong>,{' '}
            <strong>Claude</strong> e <strong>Gemini</strong>, além dos modelos Llama e Muse, da Meta —, os geradores de
            imagem ChatGPT Images, Midjourney e Stable Diffusion e a plataforma de automação Make.com.
          </p>
          <p>
            Cada opção recebe uma nota de 0 a 5 em cinco critérios: raciocínio lógico, escrita criativa, programação,
            velocidade de resposta e custo-benefício. Junto das notas aparecem os planos e preços, os principais prós e
            contras e um resumo de para quem cada ferramenta faz mais sentido.
          </p>
          <p>
            Para usar, escolha um modelo em cada lado — por exemplo, ChatGPT x Claude — e veja onde cada um se destaca.
            Se a decisão envolve o custo de uso via API, complemente com a{' '}
            <Link href="/calculadora" prefetch={false}>calculadora de custos de IA</Link>; para uma análise escrita dos três
            assistentes mais populares, leia o{' '}
            <Link href="/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026" prefetch={false}>comparativo ChatGPT vs Gemini vs Claude</Link>.
            As informações são revisadas periodicamente, conforme os modelos ganham novas versões.
          </p>
        </section>

        <ComparatorClient />

        {/* Conteúdo SEO rastreável abaixo da ferramenta */}
        <section style={{ marginTop: '3rem', marginBottom: '5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          <hr style={{ border: 0, height: 1, background: 'var(--border-color)', margin: '3rem 0' }} />

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Comparação de IAs: como escolher a inteligência artificial certa
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Com tantos modelos disponíveis, a pergunta "qual a melhor IA?" não tem resposta única — a escolha depende do que você precisa fazer. Este comparador reúne os principais modelos de IA do mercado para você avaliar, lado a lado, pontos como preço, raciocínio, escrita, programação e multimodalidade. Para uma análise mais aprofundada, leia também o nosso <Link href="/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026">comparativo ChatGPT vs Gemini vs Claude</Link>.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            Os principais modelos comparados
          </h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>ChatGPT (OpenAI):</strong> o mais versátil e popular, forte em uso geral, criatividade e ecossistema de recursos.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Gemini (Google):</strong> destaque em contexto longo, multimodalidade e integração com o Google Workspace.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Claude (Anthropic):</strong> referência em programação, análise e textos longos com respostas detalhadas.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Modelos de imagem:</strong> DALL-E, Midjourney e Stable Diffusion para geração visual.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Depois de comparar, vale estimar quanto cada API vai custar no seu volume de uso com a nossa <Link href="/calculadora">calculadora de custos de IA</Link>, e turbinar os resultados com a <Link href="/prompts">biblioteca de prompts</Link>.
          </p>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '3rem', marginBottom: '1.25rem' }}>
            Perguntas Frequentes sobre Comparação de IAs
          </h2>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>Qual é a melhor IA em 2026?</h3>
          <p style={{ marginBottom: '1rem' }}>Não existe uma única "melhor IA" — depende do uso. O ChatGPT é o mais versátil, o Gemini se integra ao Google e tem contexto longo, e o Claude se destaca em código e textos extensos. Use o comparador acima para avaliar lado a lado.</p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>Qual a melhor IA para programar?</h3>
          <p style={{ marginBottom: '1rem' }}>Claude e ChatGPT lideram em programação, com o Gemini bem próximo. Para bases de código grandes, modelos com janela de contexto maior levam vantagem.</p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>Quais IAs o comparador compara?</h3>
          <p style={{ marginBottom: '1rem' }}>Os assistentes ChatGPT, Claude e Gemini, os modelos Llama e Muse da Meta, os geradores de imagem ChatGPT Images, Midjourney e Stable Diffusion e a plataforma de automação Make.com.</p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>Como usar o comparador de IAs?</h3>
          <p style={{ marginBottom: '1rem' }}>Escolha um modelo em cada lado da comparação. A ferramenta mostra as notas de 0 a 5 em raciocínio, escrita, programação, velocidade e custo-benefício, além de preços, prós e contras de cada opção.</p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>O comparador de IAs é gratuito?</h3>
          <p style={{ marginBottom: '1rem' }}>Sim. É 100% gratuito e não exige cadastro. Selecione dois modelos e veja a comparação na hora.</p>
        </section>
      </main>
    </>
  );
}
