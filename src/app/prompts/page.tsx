import type { Metadata } from 'next';
import Link from 'next/link';
import PromptsClient from './PromptsClient';
import LeadMagnet from '@/components/LeadMagnet';
import { PROMPTS } from '@/data/prompts';

const PROMPT_COUNT = PROMPTS.length;

const OG_TITLE = 'Biblioteca de Prompts para IA: ChatGPT, Claude e Gemini';
const OG_DESC = `Banco com +${PROMPT_COUNT} prompts prontos e gratuitos para ChatGPT, Claude e Gemini em Marketing, Programação, Carreira e mais. Personalize e copie em segundos.`;
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent(`+${PROMPT_COUNT} Prompts Grátis`)}`;

export const metadata: Metadata = {
  title: `Biblioteca de Prompts para IA: +${PROMPT_COUNT} Grátis | Turbina IA`,
  description: OG_DESC,
  keywords: ['biblioteca de prompts', 'banco de prompts', 'prompts prontos', 'prompts ChatGPT', 'prompts Gemini', 'prompts Claude', 'prompt para gemini', 'prompt marketing', 'biblioteca prompts IA'],
  alternates: { canonical: '/prompts' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/prompts',
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
  '@type': 'ItemList',
  name: OG_TITLE,
  description: OG_DESC,
  url: 'https://www.turbinaia.com.br/prompts',
  numberOfItems: PROMPT_COUNT,
  inLanguage: 'pt-BR',
  publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Copy com Método AIDA', description: 'Gere textos de vendas persuasivos usando a estrutura AIDA.' },
    { '@type': 'ListItem', position: 2, name: 'Esboço de Artigo SEO', description: 'Crie esqueletos de artigos otimizados para ranquear no Google.' },
    { '@type': 'ListItem', position: 3, name: 'Roteiro de Carrossel Instagram', description: 'Monte carrosséis educativos para Instagram e LinkedIn.' },
    { '@type': 'ListItem', position: 4, name: 'Refatoração de Código', description: 'Receba sugestões de melhoria para qualquer trecho de código.' },
    { '@type': 'ListItem', position: 5, name: 'Plano de Aprendizado 80/20', description: 'Aprenda qualquer assunto focando nos 20% que geram 80% do resultado.' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Os prompts são gratuitos?',
      acceptedAnswer: { '@type': 'Answer', text: `Sim. Todos os ${PROMPT_COUNT} prompts desta biblioteca são gratuitos e não exigem cadastro. Basta personalizar as variáveis e copiar.` },
    },
    {
      '@type': 'Question',
      name: 'Esses prompts funcionam no Gemini e no Claude?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. Os comandos são neutros e funcionam em ChatGPT, Gemini, Claude e na maioria dos modelos de linguagem. Pequenos ajustes de tom podem otimizar o resultado em cada um.' },
    },
    {
      '@type': 'Question',
      name: 'Como personalizar um prompt?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cada prompt traz campos entre colchetes (como [Público-Alvo] ou [Nome do Produto]). Substitua-os pelas informações reais do seu projeto antes de enviar à IA.' },
    },
  ],
};

export default function PromptsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main style={{ minHeight: '80vh' }}>
      {/* Prompts Client Component */}
      <PromptsClient />

      {/* Captura de leads — baixar o pack completo de prompts */}
      <section className="container" style={{ maxWidth: '800px' }}>
        <LeadMagnet
          title="📥 Baixe o Pack Completo com +160 Prompts"
          subtitle="Leve toda a biblioteca em um arquivo único para usar offline. Cadastre seu e-mail e baixe agora, de graça."
        />
      </section>

      {/* SEO content at the bottom */}
      <section className="container" style={{ marginTop: '3rem', marginBottom: '6rem', maxWidth: '800px' }}>
        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '4rem 0' }} />
        
        <article style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Como tirar o máximo proveito de um Prompt de Inteligência Artificial?
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            A engenharia de prompt (<em>prompt engineering</em>) é a prática de estruturar comandos de forma que os modelos de IA entendam perfeitamente o contexto e o objetivo final. Um bom prompt economiza tempo de refinamento e evita alucinações das ferramentas.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            A anatomia de um prompt de alta conversão
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Nossos prompts prontos foram modelados seguindo a estrutura recomendada pelos principais laboratórios de IA (como OpenAI e Anthropic):
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Papel/Persona:</strong> Definir quem a IA representa (ex: "Você é um Copywriter Sênior" ou "Especialista em SEO").
              Isso ativa as conexões de pesos do modelo ligadas àquela área específica.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Instrução Clara:</strong> O que exatamente o modelo precisa realizar, de forma assertiva e sem ambiguidade.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Contexto e Variáveis:</strong> As informações únicas que mudam a cada execução (como o público-alvo ou nome do seu produto), que você pode configurar na nossa ferramenta interativa.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Formato de Saída:</strong> Exigir que a IA retorne o texto estruturado com subtítulos, markdown ou em uma tabela para facilitar sua leitura.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            Por que usar comandos customizáveis?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Copiar e colar prompts genéricos gera respostas genéricas. Ao preencher os campos dinâmicos da nossa biblioteca, você personaliza o comando com os dados reais do seu negócio ou projeto antes do envio, resultando em respostas muito mais precisas, criativas e prontas para uso.
          </p>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '3rem', marginBottom: '1.25rem' }}>
            Um banco de prompts para ChatGPT, Claude e Gemini
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Esta é uma biblioteca de prompts pensada para os três principais assistentes de IA do mercado. Os comandos são compatíveis com o <strong>ChatGPT</strong> (OpenAI), o <strong>Claude</strong> (Anthropic) e o <strong>Gemini</strong> (Google) — basta colar no modelo de sua preferência. Se você ainda está decidindo qual usar, vale conferir o nosso <Link href="/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026">comparativo ChatGPT vs Gemini vs Claude</Link> e o <Link href="/comparador">comparador de modelos de IA</Link>.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            Prompts para o Gemini do Google
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            O Gemini se destaca em tarefas multimodais e na integração com o Google Workspace. Todos os prompts desta página funcionam perfeitamente nele — desde comandos de marketing e programação até estudo e finanças. Para se aprofundar, veja o <Link href="/blog/guia-prompts-chatgpt-como-criar-prompts-perfeitos-para-qualquer-tarefa">guia de engenharia de prompt</Link> e a coletânea de <Link href="/blog/prompts-prontos-para-chatgpt">+50 prompts prontos para ChatGPT</Link> (que também servem para o Gemini).
          </p>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '3rem', marginBottom: '1.25rem' }}>
            Perguntas Frequentes sobre Prompts de IA
          </h2>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Os prompts são gratuitos?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Sim. Todos os {PROMPT_COUNT} prompts desta biblioteca são gratuitos e não exigem cadastro. Basta personalizar as variáveis e copiar.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Esses prompts funcionam no Gemini e no Claude?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Sim. Os comandos são neutros e funcionam em ChatGPT, Gemini, Claude e na maioria dos modelos de linguagem. Pequenos ajustes de tom podem otimizar o resultado em cada um.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Como personalizar um prompt?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Cada prompt traz campos entre colchetes (como [Público-Alvo] ou [Nome do Produto]). Substitua-os pelas informações reais do seu projeto antes de enviar à IA para obter respostas precisas.
          </p>
        </article>
      </section>
    </main>
    </>
  );
}
