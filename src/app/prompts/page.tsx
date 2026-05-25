import type { Metadata } from 'next';
import PromptsClient from './PromptsClient';

const OG_TITLE = 'Biblioteca de Prompts Prontos para IA';
const OG_DESC = '30 prompts profissionais para ChatGPT, Claude e Gemini em Marketing, Desenvolvimento, Carreira, Finanças e mais. Personalize e copie em segundos.';
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('30 Prompts Grátis')}`;

export const metadata: Metadata = {
  title: 'Biblioteca de Prompts Prontos para IA (ChatGPT, Claude, Gemini) | Turbina IA',
  description: OG_DESC,
  keywords: ['prompts ChatGPT', 'prompts Claude', 'prompts Gemini', 'prompt marketing', 'prompt programação', 'biblioteca prompts IA'],
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
  numberOfItems: 30,
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

export default function PromptsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ minHeight: '80vh' }}>
      {/* Prompts Client Component */}
      <PromptsClient />

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
        </article>
      </section>
    </main>
    </>
  );
}
