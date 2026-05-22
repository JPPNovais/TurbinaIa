import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Turbina IA',
  description: 'Conheça os termos de privacidade, políticas de cookies e diretrizes do portal Turbina IA.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Política de Privacidade</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Última atualização: 21 de maio de 2026
        </p>
      </header>

      <article className="prose">
        <p>
          No <strong>Turbina IA</strong>, acessível a partir de <strong>turbinaia.com.br</strong>, uma de nossas principais prioridades é a privacidade dos nossos visitantes. Este documento de Política de Privacidade contém tipos de informações que são coletadas e registradas pelo Turbina IA e como as usamos.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Consentimento</h2>
        <p>
          Ao utilizar nosso site, você consente com nossa Política de Privacidade e concorda com seus termos.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Informações que Coletamos</h2>
        <p>
          As informações pessoais que lhe são solicitadas e os motivos pelos quais lhe é solicitado que as forneça ficarão claros no momento em que lhe solicitarmos que forneça as suas informações pessoais (por exemplo, ao assinar a nossa newsletter ou preencher o formulário de contato).
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Como Usamos suas Informações</h2>
        <p>
          Usamos as informações que coletamos de várias maneiras, incluindo para:
        </p>
        <ul>
          <li>Fornecer, operar e manter nosso site.</li>
          <li>Melhorar, personalizar e expandir nosso site.</li>
          <li>Compreender e analisar como você usa nosso site.</li>
          <li>Desenvolver novos produtos, serviços, recursos e funcionalidades.</li>
          <li>Comunicar com você, diretamente ou através de um dos nossos parceiros, inclusive para atendimento ao cliente, para lhe fornecer atualizações e outras informações relacionadas ao site, e para fins de marketing e promocionais.</li>
          <li>Enviar e-mails (como newsletters semanais).</li>
          <li>Encontrar e prevenir fraudes.</li>
        </ul>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Arquivos de Log (Log Files)</h2>
        <p>
          O Turbina IA segue um procedimento padrão de uso de arquivos de log. Esses arquivos registram os visitantes quando eles visitam sites. Todas as empresas de hospedagem fazem isso e uma parte dos serviços de análise das empresas de hospedagem. As informações coletadas pelos arquivos de log incluem endereços de protocolo de internet (IP), tipo de navegador, provedor de serviços de internet (ISP), carimbo de data e hora, páginas de referência/saída e, possivelmente, o número de cliques. Estes não estão vinculados a nenhuma informação que seja pessoalmente identificável.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Cookies do Google DoubleClick DART</h2>
        <p>
          O Google é um dos fornecedores terceiros no nosso site. Ele também usa cookies, conhecidos como cookies DART, para veicular anúncios aos visitantes do nosso site com base na sua visita a turbinaia.com.br e outros sites na internet. No entanto, os visitantes podem optar por recusar o uso de cookies DART visitando a Política de Privacidade da rede de anúncios e conteúdo do Google no seguinte URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>https://policies.google.com/technologies/ads</a>.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>6. Nossos Parceiros de Publicidade</h2>
        <p>
          Alguns dos anunciantes em nosso site podem usar cookies e web beacons. Nosso parceiro de publicidade principal é o <strong>Google AdSense</strong>. Cada um dos nossos parceiros de publicidade tem a sua própria Política de Privacidade para as suas políticas sobre dados do utilizador.
        </p>
      </article>
    </main>
  );
}
