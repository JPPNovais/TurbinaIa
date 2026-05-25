import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso - Turbina IA',
  description: 'Leia os Termos de Uso do portal Turbina IA. Condições de acesso, propriedade intelectual, conteúdo gerado por IA, newsletter e limitação de responsabilidade.',
  alternates: {
    canonical: 'https://www.turbinaia.com.br/termos-de-uso',
  },
};

const h2Style = {
  fontSize: '1.75rem',
  marginTop: '2rem',
  marginBottom: '1rem',
  color: 'var(--text-primary)',
} as const;

const linkStyle = { color: 'var(--primary)' } as const;

export default function TermosUsoPage() {
  return (
    <main
      className="container"
      style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '800px' }}
    >
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Termos de Uso</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Última atualização: 22 de maio de 2026
        </p>
      </header>

      <article className="prose" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>

        {/* 1. Aceitação */}
        <h2 style={h2Style}>1. Aceitação dos Termos</h2>
        <p>
          Bem-vindo ao <strong>Turbina IA</strong> (<strong>turbinaia.com.br</strong>). Ao acessar, navegar ou
          utilizar qualquer recurso deste site — incluindo a leitura de artigos, o uso do comparador de IAs,
          a inscrição na newsletter ou o envio de mensagens pelo formulário de contato —, você declara ter
          lido, compreendido e concordado integralmente com estes Termos de Uso e com nossa{' '}
          <a href="/politica-de-privacidade" style={linkStyle}>Política de Privacidade</a>.
        </p>
        <p>
          Caso não concorde com qualquer disposição destes Termos, solicitamos que se abstenha de utilizar
          o site. O uso continuado após a publicação de eventuais alterações implica aceitação tácita dos
          termos revisados.
        </p>

        {/* 2. Descrição do serviço */}
        <h2 style={h2Style}>2. Descrição do Serviço</h2>
        <p>
          O Turbina IA é um portal editorial independente dedicado a notícias, tutoriais, análises e
          comparativos sobre inteligência artificial, com foco no mercado brasileiro. O site oferece,
          gratuitamente, os seguintes recursos:
        </p>
        <ul>
          <li><strong>Blog:</strong> artigos editoriais sobre IA generativa, LLMs, tendências e casos de uso.</li>
          <li>
            <strong>Comparador de IAs (/comparador):</strong> tabela comparativa com especificações técnicas,
            preços e capacidades dos principais modelos de linguagem disponíveis no mercado.
          </li>
          <li>
            <strong>Calculadora de Custos (/calculadora):</strong> ferramenta para estimar o custo de uso de
            APIs de IA conforme o volume de tokens.
          </li>
          <li>
            <strong>Biblioteca de Prompts (/prompts):</strong> coleção de prompts organizados por categoria
            para auxiliar profissionais no uso de ferramentas de IA.
          </li>
          <li>
            <strong>Newsletter:</strong> envio periódico de curadoria de conteúdo por e-mail para assinantes.
          </li>
        </ul>
        <p>
          Nos reservamos o direito de alterar, suspender ou descontinuar qualquer funcionalidade do site
          a qualquer momento, sem aviso prévio, quando necessário.
        </p>

        {/* 3. Conteúdo gerado por IA */}
        <h2 style={h2Style}>3. Conteúdo Gerado com Auxílio de Inteligência Artificial</h2>
        <p>
          Parte dos artigos publicados no Turbina IA é produzida ou assistida por ferramentas de inteligência
          artificial (como o Google Gemini), com revisão editorial humana antes da publicação. Ao ler nossos
          conteúdos, você deve ter ciência de que:
        </p>
        <ul>
          <li>
            Modelos de linguagem podem produzir informações imprecisas, desatualizadas ou incorretas — fenômeno
            conhecido como <em>alucinação</em> — mesmo após revisão editorial.
          </li>
          <li>
            O ecossistema de IA evolui em velocidade acelerada. Preços de APIs, limites de contexto, recursos
            de modelos e disponibilidade de ferramentas mudam frequentemente. As informações publicadas refletem
            o estado do mercado na data de publicação do artigo.
          </li>
          <li>
            <strong>Nenhum conteúdo publicado neste site deve ser interpretado como aconselhamento jurídico,
            financeiro, médico ou profissional de qualquer natureza.</strong> Decisões estratégicas ou de
            negócio devem ser tomadas com base em fontes primárias e, quando necessário, com o apoio de
            profissionais habilitados.
          </li>
        </ul>
        <p>
          Incentivamos o uso do <strong>senso crítico</strong> na leitura de todos os nossos conteúdos.
          Se você identificar uma imprecisão, entre em contato pelo{' '}
          <a href="/contato" style={linkStyle}>formulário de contato</a> ou pelo e-mail{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>contato@turbinaia.com.br</a>.
        </p>

        {/* 4. Propriedade intelectual */}
        <h2 style={h2Style}>4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo original publicado no Turbina IA — incluindo textos, análises, layouts, logotipo,
          ícones, código-fonte e a seleção e organização dos dados apresentados nas ferramentas —, é de
          propriedade do Turbina IA ou de seus colaboradores e está protegido pela{' '}
          <strong>Lei de Direitos Autorais (Lei n.º 9.610/1998)</strong> e pela legislação de propriedade
          intelectual aplicável.
        </p>
        <p>
          As imagens de capa dos artigos são provenientes do{' '}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Unsplash
          </a>{' '}
          e estão sujeitas à{' '}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Licença Unsplash
          </a>
          , que permite uso gratuito com os créditos aplicáveis.
        </p>
        <p>
          Reprodução, distribuição, modificação ou publicação de qualquer parte do conteúdo original deste
          site sem autorização prévia e por escrito é expressamente proibida.
        </p>

        {/* 5. Uso do conteúdo */}
        <h2 style={h2Style}>5. Uso Permitido do Conteúdo</h2>
        <p>
          É permitido ao usuário:
        </p>
        <ul>
          <li>
            Ler, salvar e compartilhar links diretos para os artigos publicados no Turbina IA para fins
            pessoais, educacionais ou não comerciais.
          </li>
          <li>
            Citar trechos de artigos em trabalhos acadêmicos, posts e conteúdos digitais, desde que seja
            feita referência explícita ao <strong>Turbina IA</strong> como fonte, com link para o artigo
            original.
          </li>
          <li>
            Utilizar as ferramentas interativas do site (comparador, calculadora, biblioteca de prompts)
            para fins pessoais e profissionais.
          </li>
        </ul>
        <p>
          É expressamente vedado:
        </p>
        <ul>
          <li>Reproduzir artigos completos em outros sites, blogs ou publicações sem autorização escrita.</li>
          <li>Utilizar o conteúdo do Turbina IA para treinar modelos de inteligência artificial sem consentimento.</li>
          <li>Usar scrapers, bots ou qualquer meio automatizado para copiar conteúdo em escala.</li>
          <li>Remover marcas d'água, créditos de autoria ou qualquer identificação de origem do conteúdo.</li>
        </ul>

        {/* 6. Newsletter */}
        <h2 style={h2Style}>6. Newsletter</h2>
        <p>
          Ao se inscrever na newsletter do Turbina IA, você autoriza o envio periódico de e-mails com
          curadoria de conteúdo sobre inteligência artificial, novidades do blog e comunicações editoriais.
          A inscrição é voluntária e gratuita.
        </p>
        <p>
          <strong>Como se inscrever:</strong> preencha o formulário de newsletter disponível no site com
          seu endereço de e-mail e confirme sua inscrição.
        </p>
        <p>
          <strong>Como cancelar:</strong> envie um e-mail para{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>contato@turbinaia.com.br</a> com o
          assunto <strong>"Cancelar Newsletter"</strong>. Processar emos a remoção do seu e-mail em até
          5 dias úteis. Após o cancelamento, seus dados serão excluídos conforme detalhado na nossa{' '}
          <a href="/politica-de-privacidade" style={linkStyle}>Política de Privacidade</a>.
        </p>
        <p>
          Não utilizamos o e-mail dos assinantes para fins comerciais, venda de produtos ou envio de
          comunicações de terceiros.
        </p>

        {/* 7. Conduta proibida */}
        <h2 style={h2Style}>7. Conduta Proibida</h2>
        <p>
          Ao utilizar este site, o usuário compromete-se a não:
        </p>
        <ul>
          <li>Utilizar o site para fins ilegais ou que violem direitos de terceiros.</li>
          <li>
            Enviar, por meio do formulário de contato, mensagens de spam, phishing, conteúdo difamatório,
            ameaçador, ofensivo ou que viole a legislação brasileira.
          </li>
          <li>Tentar acessar ou interferir nos sistemas de backend, banco de dados ou infraestrutura do site.</li>
          <li>
            Realizar ataques de negação de serviço (DDoS), injeções de código ou qualquer outra ação que
            comprometa a segurança ou disponibilidade do site.
          </li>
          <li>
            Criar ou distribuir conteúdo que imite o Turbina IA de forma a induzir terceiros em erro.
          </li>
        </ul>

        {/* 8. Isenção de responsabilidade */}
        <h2 style={h2Style}>8. Isenção de Responsabilidade</h2>
        <p>
          O conteúdo do Turbina IA é fornecido <strong>"no estado em que se encontra"</strong>, para fins
          informativos e educacionais. Embora nos esforcemos para garantir a precisão e a atualidade das
          informações, não oferecemos qualquer garantia, expressa ou implícita, sobre:
        </p>
        <ul>
          <li>A exatidão, integridade ou atualidade dos dados publicados (especialmente preços e especificações técnicas de modelos de IA).</li>
          <li>A disponibilidade contínua e ininterrupta do site.</li>
          <li>A ausência de erros, vírus ou outros elementos danosos no conteúdo ou na infraestrutura do site.</li>
        </ul>
        <p>
          O uso de qualquer informação, ferramenta, técnica ou método aprendido neste site é de exclusiva
          responsabilidade do usuário.
        </p>

        {/* 9. Links de terceiros */}
        <h2 style={h2Style}>9. Links para Terceiros e Conteúdo Patrocinado</h2>
        <p>
          O Turbina IA pode conter links para sites externos, ferramentas de IA e plataformas de terceiros.
          Esses links são fornecidos como referência editorial e de conveniência. O Turbina IA não tem controle
          sobre o conteúdo, políticas de privacidade ou práticas de sites externos, e não se responsabiliza
          por eles.
        </p>
        <p>
          O site exibe anúncios veiculados pelo <strong>Google AdSense</strong>. Esses anúncios são
          selecionados algoritmicamente pelo Google e não representam endosso do Turbina IA aos produtos ou
          serviços anunciados. Conteúdos ou links que representem parcerias comerciais ou patrocinados serão
          identificados de forma clara.
        </p>
        <p>
          Podemos incluir links de afiliados em artigos e reviews. Quando o fizermos, indicaremos explicitamente
          essa condição no conteúdo. O uso de links de afiliados não afeta a independência editorial das
          análises publicadas.
        </p>

        {/* 10. Limitação de responsabilidade */}
        <h2 style={h2Style}>10. Limitação de Responsabilidade</h2>
        <p>
          Na máxima extensão permitida pela legislação brasileira, o Turbina IA e seus colaboradores não
          serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes
          decorrentes do uso ou da impossibilidade de uso do site, incluindo — mas não se limitando a —
          perdas de dados, lucros cessantes, interrupção de negócios ou danos à reputação, ainda que o
          Turbina IA tenha sido previamente informado da possibilidade de tais danos.
        </p>

        {/* 11. Alterações nos termos */}
        <h2 style={h2Style}>11. Alterações nestes Termos</h2>
        <p>
          O Turbina IA reserva-se o direito de modificar estes Termos de Uso a qualquer momento. A data da
          última atualização estará sempre indicada no topo desta página. Recomendamos a leitura periódica
          deste documento. O uso continuado do site após a publicação de alterações implica aceitação dos
          novos termos.
        </p>

        {/* 12. Legislação e foro */}
        <h2 style={h2Style}>12. Legislação Aplicável e Foro</h2>
        <p>
          Estes Termos de Uso são regidos e interpretados de acordo com a <strong>legislação brasileira</strong>,
          em especial o <strong>Código de Defesa do Consumidor (Lei n.º 8.078/1990)</strong>, o{' '}
          <strong>Marco Civil da Internet (Lei n.º 12.965/2014)</strong>, a{' '}
          <strong>LGPD (Lei n.º 13.709/2018)</strong> e o{' '}
          <strong>Código Civil Brasileiro (Lei n.º 10.406/2002)</strong>.
        </p>
        <p>
          Fica eleito o foro da <strong>Comarca de São Paulo, Estado de São Paulo</strong>, como competente
          para dirimir quaisquer litígios decorrentes destes Termos, com renúncia expressa a qualquer outro,
          por mais privilegiado que seja.
        </p>

        {/* 13. Contato */}
        <h2 style={h2Style}>13. Contato</h2>
        <p>
          Dúvidas, sugestões ou reclamações relacionadas a estes Termos de Uso podem ser encaminhadas para:
        </p>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:contato@turbinaia.com.br" style={linkStyle}>
            contato@turbinaia.com.br
          </a>
          <br />
          <strong>Formulário:</strong>{' '}
          <a href="/contato" style={linkStyle}>turbinaia.com.br/contato</a>
        </p>

      </article>
    </main>
  );
}
