import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre o Turbina IA - Missão, Equipe e Transparência Editorial',
  description: 'Conheça o Turbina IA: nossa missão de democratizar o conhecimento sobre inteligência artificial no Brasil, quem produz o conteúdo e como trabalhamos com transparência editorial.',
  alternates: {
    canonical: 'https://turbinaia.com.br/sobre',
  },
};

const h2Style = {
  fontSize: '1.75rem',
  marginTop: '2.5rem',
  marginBottom: '1rem',
  color: 'var(--text-primary)',
} as const;

const linkStyle = { color: 'var(--primary)' } as const;

const cardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1rem',
} as const;

export default function SobrePage() {
  return (
    <main
      className="container"
      style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '800px' }}
    >
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Sobre o Turbina IA
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Acelerando a sua jornada no universo da inteligência artificial.
        </p>
      </header>

      <article className="prose" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>

        {/* Intro */}
        <p>
          O <strong>Turbina IA</strong> nasceu com a missão de democratizar o acesso e o conhecimento sobre
          inteligência artificial no Brasil. Em um cenário tecnológico que se transforma em velocidade
          exponencial, acreditamos que a IA não deve ser apenas uma ferramenta para especialistas, mas sim
          um catalisador de produtividade, inovação e oportunidades para todos os profissionais.
        </p>

        {/* Missão */}
        <h2 style={h2Style}>Nossa Missão</h2>
        <p>
          Nossa missão é guiar nossos leitores através do complexo ecossistema da inteligência artificial,
          oferecendo conteúdos de altíssima qualidade, explicados de forma simples, direta e prática.
          Queremos munir você das informações necessárias para otimizar suas tarefas diárias, automatizar
          processos e criar novos fluxos de receita com o uso inteligente de ferramentas baseadas em IA.
        </p>
        <p>
          Acreditamos que o conhecimento sobre IA não pode ser um privilégio de quem lê inglês fluentemente
          ou tem acesso a conteúdo técnico denso. Por isso, escrevemos em <strong>português brasileiro</strong>,
          com linguagem acessível, sem abrir mão da precisão técnica.
        </p>

        {/* O que você encontra */}
        <h2 style={h2Style}>O Que Você Encontra Aqui</h2>
        <ul>
          <li>
            <strong>Tutoriais Práticos:</strong> guias passo a passo sobre como integrar ferramentas de IA
            na sua rotina profissional, automatizar tarefas e explorar o potencial de plataformas como
            ChatGPT, Claude, Gemini e outras.
          </li>
          <li>
            <strong>Notícias e Tendências:</strong> cobertura editorial dos eventos mais relevantes no campo
            da IA generativa no Brasil e no mundo — novos modelos, atualizações de plataformas, regulação
            e impactos econômicos.
          </li>
          <li>
            <strong>Comparador de IAs (/comparador):</strong> uma ferramenta dedicada para confrontar as
            principais especificações técnicas, capacidades, preços e limites dos principais LLMs do mercado,
            como GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro e outros.
          </li>
          <li>
            <strong>Calculadora de Custos (/calculadora):</strong> estime quanto vai gastar ao usar APIs de
            IA conforme o volume de tokens do seu projeto.
          </li>
          <li>
            <strong>Biblioteca de Prompts (/prompts):</strong> coleção curada de prompts organizados por
            área de atuação, para você usar imediatamente no seu dia a dia profissional.
          </li>
        </ul>

        {/* Equipe */}
        <h2 style={h2Style}>Nossa Redação</h2>
        <p>
          O conteúdo do Turbina IA é produzido por uma equipe de <strong>jornalistas e especialistas em
          tecnologia</strong> com interesse profundo no ecossistema de inteligência artificial. Nossos
          colaboradores acompanham diariamente as publicações científicas, lançamentos de modelos, fóruns
          técnicos e movimentações do setor para entregar cobertura relevante e atualizada.
        </p>
        <p>
          Para ampliar a cobertura e agilizar a produção editorial, utilizamos ferramentas de{' '}
          <strong>inteligência artificial generativa</strong> — como o Google Gemini — como auxílio na
          redação de rascunhos e na estruturação de conteúdo. Contudo, <strong>todo artigo publicado passa
          por revisão editorial humana</strong> antes de ir ao ar. A responsabilidade pelo que é publicado
          é sempre da equipe do Turbina IA.
        </p>
        <p>
          Adotamos essa abordagem de forma transparente porque acreditamos que a combinação de expertise
          humana com ferramentas de IA, quando bem aplicada e devidamente revisada, permite produzir
          conteúdo mais completo e ágil — sem comprometer a qualidade editorial.
        </p>

        {/* Transparência editorial */}
        <h2 style={h2Style}>Transparência Editorial</h2>
        <p>
          A credibilidade do Turbina IA depende da confiança dos nossos leitores. Por isso, seguimos
          princípios claros de transparência em toda a nossa operação editorial:
        </p>

        <div style={cardStyle}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
            Independencia Editorial
          </strong>
          <p style={{ margin: 0 }}>
            Nossas análises, comparativos e recomendações são elaborados de forma independente pela equipe
            editorial, sem influência de fabricantes, fornecedores ou anunciantes. A presença de publicidade
            no site não afeta o conteúdo dos artigos.
          </p>
        </div>

        <div style={cardStyle}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
            Publicidade e Google AdSense
          </strong>
          <p style={{ margin: 0 }}>
            Para manter o site gratuito e sustentável, exibimos anúncios veiculados pelo{' '}
            <strong>Google AdSense</strong>. Os anúncios são selecionados algoritmicamente pelo Google e
            não representam endosso do Turbina IA aos produtos ou serviços anunciados. Sinalizamos
            claramente qualquer conteúdo patrocinado com o indicador <em>"Conteúdo Patrocinado"</em> ou
            <em>"Publicidade"</em>.
          </p>
        </div>

        <div style={cardStyle}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
            Links de Afiliados
          </strong>
          <p style={{ margin: 0 }}>
            Eventualmente podemos incluir links de afiliados em artigos e reviews de ferramentas. Quando
            isso ocorrer, indicaremos de forma explícita no texto. As comissões de afiliados, quando
            existirem, ajudam a custear a operação do portal, mas não determinam nem influenciam nossas
            avaliações editoriais.
          </p>
        </div>

        <div style={cardStyle}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
            Conteúdo com Auxílio de IA
          </strong>
          <p style={{ margin: 0 }}>
            Quando um artigo for inteiramente ou majoritariamente produzido com auxílio de IA generativa,
            indicaremos essa informação no rodapé do artigo. Todo conteúdo passa por checagem e revisão
            editorial antes da publicação, independentemente do método de produção.
          </p>
        </div>

        <div style={cardStyle}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
            Correções e Atualizações
          </strong>
          <p style={{ margin: 0 }}>
            Erros acontecem. Quando identificados — por nossa equipe ou por leitores — corrigimos o
            conteúdo prontamente e, quando a imprecisão for relevante, indicamos a correção no próprio
            artigo. Se você encontrar uma informação incorreta, entre em contato conosco.
          </p>
        </div>

        {/* Compromisso */}
        <h2 style={h2Style}>Compromisso com a Qualidade</h2>
        <p>
          Toda a nossa redação é orientada por princípios de <strong>clareza</strong>,{' '}
          <strong>veracidade de dados</strong> e <strong>ética jornalística</strong>. Atualizamos nossos
          comparativos e análises regularmente para garantir que você tome as melhores decisões
          tecnológicas baseadas em informações corretas e recentes.
        </p>
        <p>
          O Turbina IA é um projeto de <strong>longo prazo</strong>. Não buscamos viralidade efêmera —
          buscamos ser a referência mais confiável em conteúdo sobre IA em língua portuguesa.
        </p>

        {/* Contato */}
        <h2 style={h2Style}>Entre em Contato</h2>
        <p>
          Tem uma sugestão de pauta? Encontrou um erro? Quer propor uma parceria editorial? A equipe do
          Turbina IA está aberta ao diálogo.
        </p>
        <p>
          Acesse nossa página de contato em{' '}
          <a href="/contato" style={linkStyle}>
            turbinaia.com.br/contato
          </a>{' '}
          ou escreva diretamente para{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>
            contato@turbinaia.com.br
          </a>
          . Respondemos todas as mensagens em até 3 dias úteis.
        </p>

      </article>
    </main>
  );
}
