import type { Metadata } from 'next';
import Link from 'next/link';
import GeradorClient from './GeradorClient';

const OG_TITLE = 'Gerador de Prompts Interativo para IA';
const OG_DESC = 'Preencha um formulário simples e receba um prompt profissional pronto para ChatGPT, Claude ou Gemini. Grátis, sem cadastro.';
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Gerador Grátis')}`;

export const metadata: Metadata = {
  title: 'Gerador de Prompts Interativo para IA | Turbina IA',
  description: OG_DESC,
  keywords: ['gerador de prompts', 'criar prompts IA', 'prompts chatgpt', 'prompt engineering', 'como fazer prompts'],
  alternates: { canonical: '/gerador' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/gerador',
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
  url: 'https://www.turbinaia.com.br/gerador',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
  featureList: [
    'Geração de prompts para 8 tipos de tarefas',
    'Personalização de tom, formato e público-alvo',
    'Compatível com ChatGPT, Claude e Gemini',
    'Sem cadastro necessário',
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como criar um bom prompt para IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um bom prompt define claramente o papel da IA (ex: "Você é um especialista em..."), a tarefa a executar, o formato esperado da resposta e o público-alvo. Quanto mais contexto e especificidade, melhor o resultado. Use o gerador do Turbina IA para montar prompts profissionais em segundos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O gerador de prompts é gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O gerador de prompts do Turbina IA é 100% gratuito e não exige cadastro. Preencha o formulário e copie o prompt gerado para usar em qualquer IA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quais IAs posso usar os prompts gerados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os prompts gerados funcionam com qualquer LLM de texto, incluindo ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) e modelos open-source como Llama. O formato adotado segue as melhores práticas de prompt engineering compatíveis com todos esses modelos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é prompt engineering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prompt engineering é a prática de escrever e otimizar instruções (prompts) para modelos de IA a fim de obter respostas mais precisas, úteis e no formato desejado. Envolve técnicas como definição de papel, few-shot examples e chain-of-thought.',
      },
    },
  ],
};

export default function GeradorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GeradorClient />

      <section className="container" style={{ marginTop: '3rem', marginBottom: '6rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '3rem 0' }} />

        <section style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Perguntas Frequentes sobre o Gerador de Prompts
          </h2>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Como criar um bom prompt para IA?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Um bom prompt define claramente o papel da IA, a tarefa a executar, o formato esperado da resposta e o público-alvo. Quanto mais contexto e especificidade, melhor o resultado. Use o gerador acima para montar prompts profissionais em segundos.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            O gerador de prompts é gratuito?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Sim. É 100% gratuito e não exige cadastro. Preencha o formulário e copie o prompt gerado para usar em qualquer IA.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Para quais IAs posso usar os prompts gerados?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Os prompts funcionam com qualquer LLM de texto, incluindo ChatGPT, Claude e Gemini. O formato segue as melhores práticas de prompt engineering compatíveis com todos esses modelos. Para uma biblioteca de prompts prontos por categoria, veja a nossa <Link href="/prompts">biblioteca de prompts</Link>.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            O que é prompt engineering?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Prompt engineering é a prática de escrever e otimizar instruções para modelos de IA a fim de obter respostas mais precisas e no formato desejado. Envolve técnicas como definição de papel, exemplos (few-shot) e raciocínio em cadeia (chain-of-thought).
          </p>
        </section>
      </section>
    </>
  );
}
