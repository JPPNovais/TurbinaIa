import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

const OG_TITLE = 'Calculadora de Custos de APIs de IA';
const OG_DESC = 'Simule e compare os custos de tokens das principais APIs: Gemini 2.5, GPT-4.1, Claude Sonnet e DeepSeek. Encontre a mais barata para seu projeto.';
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Calculadora Gratuita')}`;

export const metadata: Metadata = {
  title: 'Calculadora de Custos de APIs de IA (Gemini, Claude, GPT, DeepSeek) | Turbina IA',
  description: OG_DESC,
  keywords: ['calculadora custo IA', 'preço API GPT', 'custo token Claude', 'API Gemini preço', 'DeepSeek custo'],
  alternates: { canonical: '/calculadora' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/calculadora',
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
  url: 'https://www.turbinaia.com.br/calculadora',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
  featureList: [
    'Simulação de custo por volume de tokens',
    'Comparação de 13+ modelos de IA',
    'Conversão automática USD/BRL',
    'Preços atualizados automaticamente',
  ],
};

export default function CalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ minHeight: '80vh' }}>
      {/* Interactive Calculator */}
      <CalculatorClient />

      {/* SEO Explanations Content */}
      <section className="container" style={{ marginTop: '3rem', marginBottom: '6rem', maxWidth: '800px' }}>
        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '4rem 0' }} />
        
        <article style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Como funciona a precificação de APIs de Inteligência Artificial?
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            A maioria das provedoras de modelos de linguagem de grande porte (LLMs) como OpenAI, Google, Anthropic e DeepSeek
            utiliza um modelo de cobrança baseado em <strong>tokens</strong>. Você paga uma tarifa por milhão (1M) de tokens enviados para a API (entrada/prompt) e outra tarifa por milhão de tokens gerados pelo modelo (saída/resposta).
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            O que é um Token?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Um token é uma fração de palavra. Em média, <strong>100 tokens equivalem a aproximadamente 75 palavras</strong> em inglês.
            Em português e outros idiomas latinos, a contagem de tokens costuma ser ligeiramente maior por conta de acentuações e estrutura silábica.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Tokens de Entrada:</strong> Incluem o prompt que você digita, instruções do sistema, histórico anterior do chat e quaisquer arquivos ou imagens anexados.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Tokens de Saída:</strong> É o texto bruto produzido pela IA como resposta final. Geralmente, os tokens de saída são significativamente mais caros do que os de entrada devido ao poder computacional necessário para a geração autorregressiva.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            Dicas para economizar custos de API
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Se você está desenvolvendo um aplicativo ou integrando IA em seus sistemas internos, os custos podem escalar rapidamente.
            Aqui estão algumas das melhores práticas para otimização de orçamento:
          </p>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'decimal' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Use Modelos Compactos (como Gemini 2.5 Flash ou GPT-4o mini):</strong> Modelos menores são de 10x a 20x mais baratos que seus equivalentes "Pro/Sonnet" e são excelentes para 90% das tarefas cotidianas de classificação, resumo e formatação de dados.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Implemente Caching de Contexto:</strong> Provedoras como DeepSeek e Anthropic oferecem descontos significativos (de até 90%) em tokens de entrada repetidos quando você ativa o cache para prompts longos ou bases de conhecimento estáticas.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Limite o tamanho da resposta:</strong> Use o parâmetro <code>max_tokens</code> nas requisições da API para evitar que o modelo se estenda desnecessariamente na resposta, poupando tokens de saída.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Otimize o histórico do chat:</strong> Em chats contínuos, limpe ou sumarize as mensagens antigas para evitar reenviar um histórico gigantesco a cada nova interação.
            </li>
          </ol>
        </article>
      </section>
    </main>
    </>
  );
}
