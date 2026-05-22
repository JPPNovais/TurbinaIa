import type { Metadata } from 'next';
import PromptsClient from './PromptsClient';

export const metadata: Metadata = {
  title: 'Biblioteca de Prompts Prontos para IA (ChatGPT, Claude, Gemini) | Turbina IA',
  description: 'Acesse prompts avançados e prontos para uso em marketing, desenvolvimento, redação e produtividade. Insira suas variáveis e copie na hora!',
  alternates: {
    canonical: '/prompts',
  },
  openGraph: {
    title: 'Biblioteca de Prompts Prontos para IA | Turbina IA',
    description: 'Comandos avançados personalizáveis para ChatGPT, Claude e Gemini.',
    url: 'https://turbinaia.com.br/prompts',
    type: 'website',
  },
};

export default function PromptsPage() {
  return (
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
  );
}
