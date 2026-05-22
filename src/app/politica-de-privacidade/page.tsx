import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Turbina IA',
  description: 'Entenda como o Turbina IA coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018) e as políticas do Google AdSense.',
  alternates: {
    canonical: 'https://turbinaia.com.br/politica-de-privacidade',
  },
};

const h2Style = {
  fontSize: '1.75rem',
  marginTop: '2rem',
  marginBottom: '1rem',
  color: 'var(--text-primary)',
} as const;

const h3Style = {
  fontSize: '1.2rem',
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
  color: 'var(--text-primary)',
  fontWeight: 700,
} as const;

const linkStyle = { color: 'var(--primary)' } as const;

export default function PoliticaPrivacidadePage() {
  return (
    <main
      className="container"
      style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '800px' }}
    >
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Política de Privacidade
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Última atualização: 22 de maio de 2026
        </p>
      </header>

      <article className="prose" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>

        {/* 1. Introdução */}
        <h2 style={h2Style}>1. Quem somos e a quem se aplica esta Política</h2>
        <p>
          O <strong>Turbina IA</strong> (<strong>turbinaia.com.br</strong>) é um portal editorial independente dedicado a
          notícias, tutoriais e análises sobre inteligência artificial. O responsável pelo tratamento dos dados pessoais
          dos visitantes e usuários deste site é o próprio veículo, com ponto de contato disponível no endereço
          eletrônico <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>contato@turbinaia.com.br</a>.
        </p>
        <p>
          Esta Política de Privacidade foi elaborada em conformidade com a{' '}
          <strong>Lei Geral de Proteção de Dados Pessoais — LGPD (Lei Federal n.º 13.709/2018)</strong>, com o{' '}
          <strong>Marco Civil da Internet (Lei n.º 12.965/2014)</strong> e com os requisitos do{' '}
          <strong>Google AdSense</strong>. Ela descreve quais dados coletamos, por qual base legal, como os usamos,
          com quem os compartilhamos e quais direitos você possui como titular.
        </p>
        <p>
          Ao utilizar o site, você declara ter lido e compreendido este documento. Quando solicitarmos seu
          consentimento de forma expressa — como na inscrição da newsletter —, coletaremos sua confirmação ativa.
        </p>

        {/* 2. Dados coletados */}
        <h2 style={h2Style}>2. Dados Pessoais Coletados</h2>

        <h3 style={h3Style}>2.1 Newsletter</h3>
        <p>
          Quando você se inscreve para receber nossa newsletter, coletamos exclusivamente o seu{' '}
          <strong>endereço de e-mail</strong>. Esse dado é armazenado de forma segura no{' '}
          <strong>Supabase</strong> (banco de dados em nuvem). A coleta ocorre exclusivamente mediante ação
          voluntária e positiva do usuário (preenchimento do formulário).
        </p>

        <h3 style={h3Style}>2.2 Formulário de Contato</h3>
        <p>
          Ao enviar uma mensagem pelo formulário de contato disponível em <strong>/contato</strong>, coletamos:{' '}
          <strong>nome completo</strong>, <strong>endereço de e-mail</strong>, <strong>assunto</strong> e{' '}
          <strong>mensagem</strong>. Esses dados são armazenados no Supabase e utilizados unicamente para
          responder à sua solicitação.
        </p>

        <h3 style={h3Style}>2.3 Dados de Navegação (Google Analytics 4)</h3>
        <p>
          Utilizamos o <strong>Google Analytics 4 (GA4)</strong> para compreender como os visitantes interagem
          com o site. O GA4 coleta dados automaticamente por meio de cookies, incluindo:{' '}
          <strong>endereço IP anonimizado</strong>, tipo de dispositivo e navegador, sistema operacional, páginas
          visitadas, tempo de permanência, origem do tráfego (busca orgânica, direto, redes sociais) e eventos
          de interação (cliques, rolagem de página). Esses dados são coletados de forma agregada e não permitem
          a identificação individual do usuário.
        </p>

        <h3 style={h3Style}>2.4 Cookies de Publicidade (Google AdSense)</h3>
        <p>
          O <strong>Google AdSense</strong> utiliza cookies — inclusive os cookies <strong>DART</strong> — para
          exibir anúncios personalizados com base nas suas visitas anteriores a este e a outros sites da internet.
          Você pode desativar o uso de cookies DART acessando a{' '}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Política de Privacidade para Publicidade do Google
          </a>
          .
        </p>

        <h3 style={h3Style}>2.5 Cookies de Sessão e Funcionais</h3>
        <p>
          O site pode utilizar cookies de sessão estritamente necessários para o funcionamento correto das
          páginas (por exemplo, para manter preferências de tema). Esses cookies não coletam dados pessoais
          identificáveis e são apagados ao fechar o navegador.
        </p>

        {/* 3. Base legal */}
        <h2 style={h2Style}>3. Base Legal para o Tratamento (LGPD, art. 7.º)</h2>
        <p>
          O Turbina IA fundamenta cada atividade de tratamento em uma base legal específica da LGPD:
        </p>
        <ul>
          <li>
            <strong>Newsletter (e-mail):</strong> <em>Consentimento</em> (art. 7.º, I) — você fornece o e-mail
            voluntariamente e pode revogar esse consentimento a qualquer momento.
          </li>
          <li>
            <strong>Formulário de contato (nome, e-mail, assunto, mensagem):</strong>{' '}
            <em>Execução de procedimentos preliminares a contrato ou atendimento de solicitação do titular</em>{' '}
            (art. 7.º, V) — usamos seus dados exclusivamente para responder à mensagem que você nos enviou.
          </li>
          <li>
            <strong>Google Analytics 4 (dados agregados de navegação):</strong>{' '}
            <em>Legítimo interesse do controlador</em> (art. 7.º, IX) — o interesse legítimo consiste em
            compreender o comportamento dos visitantes para melhorar a qualidade editorial do site. Os dados
            são coletados de forma anonimizada e agregada, minimizando o impacto à privacidade individual.
          </li>
          <li>
            <strong>Google AdSense (cookies de publicidade):</strong> <em>Consentimento</em> (art. 7.º, I) —
            a exibição de anúncios personalizados requer seu consentimento, que pode ser gerenciado nas
            configurações do seu navegador ou via opt-out do Google.
          </li>
        </ul>

        {/* 4. Cookies */}
        <h2 style={h2Style}>4. Política de Cookies</h2>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo pelo navegador. Utilizamos os
          seguintes tipos:
        </p>
        <ul>
          <li>
            <strong>Cookies estritamente necessários:</strong> Essenciais para o funcionamento básico do site
            (sessão, preferências de tema). Não requerem consentimento.
          </li>
          <li>
            <strong>Cookies analíticos (GA4):</strong> Coletam informações sobre como você usa o site
            (páginas visitadas, tempo de sessão). Os dados são enviados ao Google de forma anonimizada.
          </li>
          <li>
            <strong>Cookies de publicidade (AdSense/DART):</strong> Utilizados pelo Google para exibir
            anúncios relevantes para o seu perfil de navegação.
          </li>
        </ul>
        <p>
          Você pode controlar e/ou excluir cookies a qualquer momento nas configurações do seu navegador. A
          desativação de cookies de publicidade não elimina os anúncios exibidos — apenas os torna não
          personalizados.
        </p>

        {/* 5. Compartilhamento */}
        <h2 style={h2Style}>5. Compartilhamento com Terceiros</h2>
        <p>
          O Turbina IA não vende, aluga nem comercializa dados pessoais de usuários. Compartilhamos dados
          apenas na medida necessária para a operação do site, com os seguintes parceiros:
        </p>
        <ul>
          <li>
            <strong>Supabase Inc.:</strong> Plataforma de banco de dados em nuvem onde armazenamos os dados
            de newsletter e de formulário de contato. Os servidores do Supabase utilizados podem estar
            localizados fora do Brasil; nesse caso, aplicamos as salvaguardas previstas no art. 33 da LGPD.
            Política de privacidade:{' '}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              supabase.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Google LLC (Google Analytics 4):</strong> Recebe dados anônimos de navegação para fins
            analíticos. Política de privacidade:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Google LLC (Google AdSense):</strong> Exibe anúncios no site e pode coletar dados de
            navegação para personalização. Política de publicidade:{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              policies.google.com/technologies/ads
            </a>
            .
          </li>
          <li>
            <strong>Unsplash (Unsplash Inc.):</strong> Imagens utilizadas como capas dos artigos são
            hospedadas nos servidores do Unsplash. O acesso a essas imagens pode registrar o seu IP nos
            servidores da Unsplash.
          </li>
        </ul>
        <p>
          Em nenhuma hipótese compartilhamos seus dados com terceiros para fins de marketing sem seu
          consentimento expresso.
        </p>

        {/* 6. Direitos do titular */}
        <h2 style={h2Style}>6. Seus Direitos como Titular (LGPD, art. 18)</h2>
        <p>
          A LGPD garante a você, como titular de dados pessoais, os seguintes direitos, que podem ser
          exercidos a qualquer momento mediante solicitação para{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>
            contato@turbinaia.com.br
          </a>
          :
        </p>
        <ul>
          <li>
            <strong>Acesso:</strong> Confirmar se tratamos seus dados e obter uma cópia das informações que
            temos sobre você.
          </li>
          <li>
            <strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.
          </li>
          <li>
            <strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar que dados desnecessários ou
            tratados em desconformidade com a LGPD sejam anonimizados, bloqueados ou eliminados.
          </li>
          <li>
            <strong>Portabilidade:</strong> Receber seus dados em formato estruturado para transferência a
            outro fornecedor de serviço.
          </li>
          <li>
            <strong>Eliminação dos dados tratados com consentimento:</strong> Solicitar a exclusão dos dados
            coletados mediante seu consentimento (como o e-mail de newsletter).
          </li>
          <li>
            <strong>Informação sobre compartilhamento:</strong> Saber com quais entidades públicas e privadas
            compartilhamos seus dados.
          </li>
          <li>
            <strong>Revogação do consentimento:</strong> Retirar o consentimento a qualquer momento, sem
            prejuízo da licitude do tratamento realizado anteriormente.
          </li>
          <li>
            <strong>Oposição:</strong> Opor-se ao tratamento realizado com base em hipóteses diversas do
            consentimento, quando houver descumprimento da LGPD.
          </li>
        </ul>
        <p>
          Responderemos às solicitações em até <strong>15 dias úteis</strong>. Em casos complexos, esse prazo
          pode ser estendido mediante comunicação justificada.
        </p>

        {/* 7. Retenção */}
        <h2 style={h2Style}>7. Retenção de Dados</h2>
        <ul>
          <li>
            <strong>E-mail de newsletter:</strong> mantido enquanto você permanecer inscrito. Ao cancelar a
            inscrição, seu e-mail é excluído da base ativa em até 5 dias úteis.
          </li>
          <li>
            <strong>Dados do formulário de contato</strong> (nome, e-mail, assunto, mensagem): retidos por{' '}
            <strong>2 anos</strong> a partir da data do envio, para fins de histórico de atendimento, após os
            quais são eliminados.
          </li>
          <li>
            <strong>Dados analíticos (GA4):</strong> armazenados de forma agregada e anonimizada sem prazo
            determinado de exclusão, pois não permitem a identificação individual.
          </li>
          <li>
            <strong>Cookies de publicidade (AdSense):</strong> gerenciados pelo Google conforme a política de
            retenção da empresa, disponível em{' '}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              policies.google.com/technologies/cookies
            </a>
            .
          </li>
        </ul>

        {/* 8. Newsletter */}
        <h2 style={h2Style}>8. Como Cancelar a Newsletter</h2>
        <p>
          Para cancelar a sua inscrição na newsletter do Turbina IA e ter seu e-mail removido da nossa base
          de dados, basta enviar um e-mail para{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>
            contato@turbinaia.com.br
          </a>{' '}
          com o assunto <strong>"Cancelar Newsletter"</strong>, informando o endereço de e-mail que deseja
          remover. Processar emos o cancelamento em até <strong>5 dias úteis</strong>.
        </p>
        <p>
          Após o cancelamento, você não receberá mais nenhuma comunicação nossa por e-mail, exceto eventuais
          respostas a mensagens de contato que você tenha enviado.
        </p>

        {/* 9. Segurança */}
        <h2 style={h2Style}>9. Segurança dos Dados</h2>
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra
          acesso não autorizado, alteração, divulgação ou destruição. Entre as medidas implementadas:
        </p>
        <ul>
          <li>Transmissão de dados protegida por <strong>TLS/HTTPS</strong> em todo o site.</li>
          <li>
            Armazenamento de dados no Supabase com controle de acesso por variáveis de ambiente e políticas
            de Row Level Security (RLS).
          </li>
          <li>Acesso administrativo ao banco de dados restrito a colaboradores autorizados.</li>
          <li>
            Não armazenamos senhas nem dados financeiros dos usuários — o site não possui sistema de login
            para visitantes.
          </li>
        </ul>
        <p>
          Embora adotemos boas práticas de segurança, nenhum sistema é 100% inviolável. Em caso de incidente
          de segurança que comprometa seus dados, notificaremos a Autoridade Nacional de Proteção de Dados
          (ANPD) e os titulares afetados conforme exige a LGPD.
        </p>

        {/* 10. Conteúdo gerado por IA */}
        <h2 style={h2Style}>10. Conteúdo Gerado com Auxílio de Inteligência Artificial</h2>
        <p>
          Parte dos artigos publicados no Turbina IA é redigida ou assistida por ferramentas de inteligência
          artificial (como o Google Gemini), sempre com revisão editorial humana. Os dados inseridos nessas
          ferramentas para geração de conteúdo não incluem informações pessoais dos nossos visitantes ou
          assinantes.
        </p>

        {/* 11. Alterações */}
        <h2 style={h2Style}>11. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças legais,
          operacionais ou tecnológicas. A data da última atualização constará sempre no topo desta página.
          Recomendamos que você revise este documento regularmente. Alterações substanciais serão comunicadas
          de forma destacada no site ou, quando aplicável, por e-mail aos assinantes da newsletter.
        </p>

        {/* 12. DPO */}
        <h2 style={h2Style}>12. Encarregado de Proteção de Dados (DPO) e Contato</h2>
        <p>
          O encarregado pelo tratamento de dados pessoais do Turbina IA (função correspondente ao Data
          Protection Officer previsto na LGPD, art. 41) pode ser contatado pelo endereço:
        </p>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>
            contato@turbinaia.com.br
          </a>
          <br />
          <strong>Assunto sugerido:</strong> "Proteção de Dados — [sua solicitação]"
        </p>
        <p>
          Você também pode registrar reclamações perante a{' '}
          <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>, disponível em{' '}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            gov.br/anpd
          </a>
          .
        </p>

      </article>
    </main>
  );
}
