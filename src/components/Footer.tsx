import Link from 'next/link';
import LogoIcon from './LogoIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ fontSize: '1.75rem' }}>
              <LogoIcon size={32} className="logo-icon" />
              <span>Turbina IA</span>
            </Link>
            <p className="footer-desc">
              O seu portal definitivo de inteligência artificial. Notícias, tutoriais práticos e análises aprofundadas sobre o que há de mais inovador no mercado tecnológico.
            </p>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-title">Categorias</h3>
            <ul className="footer-links">
              <li>
                <Link href="/?category=tutoriais" className="footer-link">
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link href="/?category=noticias" className="footer-link">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/?category=ferramentas" className="footer-link">
                  Ferramentas
                </Link>
              </li>
              <li>
                <Link href="/comparador" className="footer-link" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                  Comparador de IAs ⚡
                </Link>
              </li>
              <li>
                <Link href="/calculadora" className="footer-link" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                  Calculadora de Custos ⚡
                </Link>
              </li>
              <li>
                <Link href="/prompts" className="footer-link" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                  Biblioteca de Prompts ⚡
                </Link>
              </li>
              <li>
                <Link href="/gerador" className="footer-link" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                  Gerador de Prompts ⚡
                </Link>
              </li>
              <li>
                <Link href="/glossario" className="footer-link" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                  Glossário de IA ⚡
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="footer-link" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                  Monitor de Modelos ⚡
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-title">Legal e Informações</h3>
            <ul className="footer-links">
              <li>
                <Link href="/sobre" className="footer-link">
                  Sobre o Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="footer-link">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="footer-link">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="footer-link">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Turbina IA (turbinaia.com.br). Todos os direitos reservados.</p>
          <p>
            Desenvolvido com ⚡ e IA para a comunidade de tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
}
