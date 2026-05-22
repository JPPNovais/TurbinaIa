'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    let initialTheme: 'dark' | 'light' = 'light';
    
    if (savedTheme) {
      initialTheme = savedTheme;
    }

    document.documentElement.setAttribute('data-theme', initialTheme);
    
    const timer = setTimeout(() => {
      setTheme(initialTheme);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Close menu on path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Link href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-icon">🌀</span>
            <span>Turbina IA</span>
          </Link>

          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/comparador" className={`nav-link ${pathname === '/comparador' ? 'active' : ''}`}>
              Comparador
            </Link>
            <Link href="/calculadora" className={`nav-link ${pathname === '/calculadora' ? 'active' : ''}`}>
              Calculadora
            </Link>
            <Link href="/prompts" className={`nav-link ${pathname === '/prompts' ? 'active' : ''}`}>
              Prompts
            </Link>
            <Link href="/?category=tutoriais" className={`nav-link ${pathname === '/?category=tutoriais' ? 'active' : ''}`}>
              Tutoriais
            </Link>
            <Link href="/?category=noticias" className={`nav-link ${pathname === '/?category=noticias' ? 'active' : ''}`}>
              Notícias
            </Link>
            <Link href="/?category=ferramentas" className={`nav-link ${pathname === '/?category=ferramentas' ? 'active' : ''}`}>
              Ferramentas
            </Link>
          </nav>

          <div className="header-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Alternar tema"
              title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {theme === 'dark' ? (
                // Sun Icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                // Moon Icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle"
              aria-label="Alternar menu"
              title="Alternar menu"
            >
              {isMenuOpen ? (
                // Close (X) Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Menu (Hamburger) Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
