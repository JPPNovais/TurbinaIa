import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre - Turbina IA',
  description: 'Conheça o Turbina IA, o seu portal definitivo para notícias, tutoriais de monetização e comparativos de Inteligência Artificial.',
  alternates: {
    canonical: '/sobre',
  },
};

export default function SobrePage() {
  return (
    <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Sobre o Turbina IA</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Acelerando a sua jornada no universo da inteligência artificial.
        </p>
      </header>

      <article className="prose" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
        <p>
          O <strong>Turbina IA</strong> nasceu com a missão de democratizar o acesso e o conhecimento sobre inteligência artificial no Brasil. Em um cenário tecnológico que se transforma em velocidade exponencial, acreditamos que a IA não deve ser apenas uma ferramenta para especialistas, mas sim um catalisador de produtividade, inovação e oportunidades para todos os profissionais.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Nossa Missão</h2>
        <p>
          Nossa missão é guiar nossos leitores através do complexo ecossistema da inteligência artificial, oferecendo conteúdos de altíssima qualidade, explicados de forma simples, direta e prática. Queremos munir você das informações necessárias para otimizar suas tarefas diárias, automatizar processos e criar novos fluxos de receita.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>O Que Você Encontra Aqui?</h2>
        <ul>
          <li><strong>Tutoriais Práticos:</strong> Guias passo a passo sobre como integrar IAs na sua rotina profissional e como monetizar blogs, sites e canais utilizando ferramentas inteligentes e Google AdSense.</li>
          <li><strong>Notícias e Tendências:</strong> O que está acontecendo de mais relevante no Brasil e no mundo no campo da IA Generativa, novos modelos de linguagem e a economia de hardware e software.</li>
          <li><strong>Comparador de IAs:</strong> Uma ferramenta dedicada para você confrontar as principais especificações técnicas, prós, contras e preços dos principais LLMs do mercado (como GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, e mais).</li>
        </ul>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Compromisso com a Qualidade</h2>
        <p>
          Toda a nossa redação é orientada por princípios de clareza, veracidade de dados e ética jornalística. Atualizamos nossos comparativos e análises diariamente para garantir que você tome as melhores decisões tecnológicas baseadas em informações corretas e recentes.
        </p>
      </article>
    </main>
  );
}
