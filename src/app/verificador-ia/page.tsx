import type { Metadata } from 'next';
import Link from 'next/link';
import VerificadorClient from './VerificadorClient';

const OG_TITLE = 'Verificador de IA: Seu Site Aparece nas Respostas do ChatGPT?';
const OG_DESC = 'Ferramenta grátis de AEO: analise se o seu conteúdo está pronto para ser citado pelo ChatGPT, Gemini e Google. Receba sua nota e o que melhorar.';
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent('Verificador de IA (AEO)')}&desc=${encodeURIComponent('Seu site aparece nas respostas do ChatGPT e Gemini?')}&badge=${encodeURIComponent('Ferramenta Grátis')}`;

export const metadata: Metadata = {
  title: 'Verificador de IA (AEO): Seu Site Aparece nas Respostas do ChatGPT e Gemini? | Turbina IA',
  description: OG_DESC,
  keywords: ['verificador de IA', 'AEO', 'GEO', 'aparecer no ChatGPT', 'otimização para IA', 'answer engine optimization', 'ser citado pela IA', 'visibilidade em IA'],
  alternates: { canonical: '/verificador-ia' },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/verificador-ia',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

const appLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Verificador de IA (AEO) — Turbina IA',
  description: OG_DESC,
  url: 'https://www.turbinaia.com.br/verificador-ia',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o Verificador de IA?',
      acceptedAnswer: { '@type': 'Answer', text: 'É uma ferramenta gratuita que analisa uma página e mostra o quanto ela está otimizada para ser citada pelas IAs (ChatGPT, Gemini, Google AI). Você recebe uma nota de 0 a 100 e uma lista do que melhorar.' },
    },
    {
      '@type': 'Question',
      name: 'O que é AEO (Answer Engine Optimization)?',
      acceptedAnswer: { '@type': 'Answer', text: 'AEO é a prática de otimizar o conteúdo para aparecer nas respostas diretas das IAs e dos buscadores, em vez de só nos links azuis. É a evolução do SEO para a era da busca com inteligência artificial.' },
    },
    {
      '@type': 'Question',
      name: 'A ferramenta é gratuita?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim, é 100% gratuita e não exige cadastro. Basta colar o link da sua página e clicar em analisar.' },
    },
    {
      '@type': 'Question',
      name: 'Como faço meu site aparecer nas respostas do ChatGPT?',
      acceptedAnswer: { '@type': 'Answer', text: 'Responda de forma direta no início, use FAQ, dados estruturados (schema), títulos claros e fontes confiáveis. O verificador aponta exatamente o que falta na sua página.' },
    },
  ],
};

export default function VerificadorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 2.5rem)', paddingBottom: '4rem', maxWidth: '820px' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge badge-secondary">Ferramenta Grátis · AEO</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', margin: '0.75rem 0 0.75rem' }}>
            Seu site aparece nas respostas do ChatGPT e Gemini?
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
            As pessoas estão deixando de clicar em links e perguntando direto à IA. Descubra,
            em segundos e de graça, se o seu conteúdo está pronto para ser <strong>citado</strong>{' '}
            pelo ChatGPT, Gemini e pelos resumos de IA do Google — e o que melhorar.
          </p>
        </header>

        <VerificadorClient />

        {/* Conteúdo SEO (rankeável) */}
        <section style={{ marginTop: '3.5rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            O que é AEO e por que importa em 2026
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            <strong>AEO (Answer Engine Optimization)</strong> é a otimização de conteúdo para
            aparecer nas <strong>respostas diretas das IAs</strong> — ChatGPT, Gemini, Perplexity
            e os resumos de IA do Google. É o próximo passo do SEO: em vez de só disputar os links
            azuis, você disputa o espaço da <em>resposta</em> que a IA entrega ao usuário. Para
            entender a fundo, leia <Link href="/blog/o-que-e-aeo-geo-como-aparecer-nas-respostas-de-ia">o que é AEO e GEO</Link>.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Com mais gente perguntando à IA em vez de clicar, aparecer nessas respostas virou
            essencial. Nosso guia <Link href="/blog/como-aparecer-nas-respostas-do-chatgpt">como aparecer nas respostas do ChatGPT</Link>{' '}
            mostra as técnicas, e este verificador aponta o que falta na sua página agora.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: '2rem 0 1rem' }}>
            O que o Verificador de IA analisa
          </h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.4rem' }}>Se há uma <strong>resposta direta no início</strong> (TL;DR) — o que a IA mais cita.</li>
            <li style={{ marginBottom: '0.4rem' }}>Presença de <strong>FAQ</strong> e <strong>dados estruturados (schema)</strong>.</li>
            <li style={{ marginBottom: '0.4rem' }}>Estrutura de <strong>títulos (H1/H2/H3)</strong>, listas e tabelas.</li>
            <li style={{ marginBottom: '0.4rem' }}>Profundidade do conteúdo e sinais de <strong>autoria/atualização (E-E-A-T)</strong>.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: '2rem 0 1rem' }}>
            Perguntas Frequentes
          </h2>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.4rem' }}>A ferramenta é gratuita?</h3>
          <p style={{ marginBottom: '1rem' }}>Sim, 100% grátis e sem cadastro. Cole o link e analise quantas vezes quiser.</p>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.4rem' }}>AEO substitui o SEO?</h3>
          <p style={{ marginBottom: '1rem' }}>Não — eles se complementam. O SEO te coloca no Google; o AEO te coloca nas respostas da IA. Em 2026 você precisa dos dois.</p>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.4rem' }}>Como faço meu site aparecer nas respostas do ChatGPT?</h3>
          <p style={{ marginBottom: '1rem' }}>Responda direto no início, use FAQ, schema, títulos claros e fontes confiáveis. Rode a análise acima para ver o que falta na sua página.</p>
        </section>
      </main>
    </>
  );
}
