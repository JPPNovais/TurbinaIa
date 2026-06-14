'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoIcon from './LogoIcon';

const RECURSOS_ITEMS = [
  { href: '/verificador-ia', label: 'Verificador de IA', icon: '🔍' },
  { href: '/prompts', label: 'Prompts', icon: '💬' },
  { href: '/gerador', label: 'Gerador de Artigos', icon: '✍️' },
  { href: '/glossario', label: 'Glossário de IA', icon: '📖' },
];

function RecursosDropdown({
  pathname,
  isMobile,
  onNavigate,
}: {
  pathname: string;
  isMobile: boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = RECURSOS_ITEMS.some((item) => pathname === item.href);

  useEffect(() => {
    if (!isMobile) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isMobile]);

  return (
    <div
      ref={ref}
      className={`nav-dropdown${open ? ' open' : ''}`}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <button
        className={`nav-dropdown-trigger${isActive ? ' active' : ''}`}
        onClick={() => isMobile && setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Recursos
        <svg
          className="nav-dropdown-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className="nav-dropdown-menu" role="menu">
        {RECURSOS_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-dropdown-item${pathname === item.href ? ' active' : ''}`}
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onNavigate();
            }}
          >
            <span className="nav-dropdown-item-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme: 'dark' | 'light' = savedTheme ?? 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    const timer = setTimeout(() => setTheme(initialTheme), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Link href="/" className="logo" onClick={closeMenu}>
            <LogoIcon size={28} className="logo-icon" />
            <span>Turbina IA</span>
          </Link>

          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/comparador" className={`nav-link ${pathname === '/comparador' ? 'active' : ''}`} onClick={closeMenu}>
              Comparador
            </Link>
            <Link href="/calculadora" className={`nav-link ${pathname === '/calculadora' ? 'active' : ''}`} onClick={closeMenu}>
              Calculadora
            </Link>
            <Link href="/ferramentas" className={`nav-link ${pathname === '/ferramentas' ? 'active' : ''}`} onClick={closeMenu}>
              Guia de IAs
            </Link>
            <RecursosDropdown pathname={pathname} isMobile={isMobile} onNavigate={closeMenu} />
            <Link href="/changelog" className={`nav-link ${pathname === '/changelog' ? 'active' : ''}`} onClick={closeMenu}>
              Novidades
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
