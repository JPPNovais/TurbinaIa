import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso - Turbina IA',
  description: 'Leia os termos de uso e condições para utilização do portal Turbina IA.',
};

export default function TermosUsoPage() {
  return (
    <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '4rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Termos de Uso</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Última atualização: 21 de maio de 2026
        </p>
      </header>

      <article className="prose">
        <p>
          Seja bem-vindo ao <strong>Turbina IA</strong> (turbinaia.com.br). Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Caso não concorde com alguma parte destes termos, por favor, não utilize o nosso site.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo publicado neste blog, incluindo, mas não se limitando a, textos, gráficos, imagens, logotipos, ícones e código-fonte, é de propriedade exclusiva do Turbina IA ou de seus respectivos licenciadores, e está protegido pelas leis de direitos autorais brasileiras e internacionais. A reprodução, distribuição ou modificação não autorizada de qualquer material deste site é estritamente proibida sem consentimento prévio por escrito.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Uso do Conteúdo</h2>
        <p>
          O conteúdo do Turbina IA é fornecido apenas para fins informativos e educacionais. Você pode visualizar, baixar e imprimir partes do site para uso pessoal e não comercial, desde que preserve todos os avisos de direitos autorais originais. O uso comercial ou redistribuição do conteúdo sem a devida atribuição e autorização é proibido.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Isenção de Responsabilidade</h2>
        <p>
          Trabalhamos diligentemente para garantir que as informações fornecidas em nossos tutoriais, análises e comparativos sejam corretas, atualizadas e úteis. No entanto, o ecossistema de Inteligência Artificial evolui rapidamente. Não garantimos a integridade, exatidão ou aplicabilidade absoluta de qualquer conselho, tutorial ou dados (como preços e limites de modelos) expostos. O uso de qualquer ferramenta ou método ensinado no blog é de sua inteira responsabilidade.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Links para Terceiros</h2>
        <p>
          Nosso site contém links para sites externos, ferramentas de IA e parceiros de publicidade (como o Google AdSense). Esses links são fornecidos para sua conveniência e referência. O Turbina IA não tem controle sobre o conteúdo, políticas de privacidade ou práticas de sites de terceiros, e não assume qualquer responsabilidade por eles.
        </p>

        <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Alterações nos Termos</h2>
        <p>
          O Turbina IA reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. Ao continuar a usar o site após a publicação de quaisquer alterações, você aceita e concorda com os termos revisados. Recomendamos que você visite esta página periodicamente para se manter informado.
        </p>
      </article>
    </main>
  );
}
