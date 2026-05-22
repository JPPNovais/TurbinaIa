'use client';

import { useState, useMemo } from 'react';
import { AI_TOOLS, CATEGORIES, type AITool } from '@/data/ai-tools';
import './ferramentas.css';

const ICON_COLORS = [
  '#6366f1',
  '#8b5cf6',
  '#ec4899',
  '#0ea5e9',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#14b8a6',
];

function getIconColor(index: number): string {
  return ICON_COLORS[index % ICON_COLORS.length];
}

function getInitials(name: string): string {
  const words = name.split(' ').filter((w) => w.length > 0);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function getPricingClass(pricing: AITool['pricing']): string {
  if (pricing === 'Grátis') return 'pricing-badge pricing-badge-free';
  if (pricing === 'Freemium') return 'pricing-badge pricing-badge-freemium';
  return 'pricing-badge pricing-badge-paid';
}

function ToolCard({ tool, index }: { tool: AITool; index: number }) {
  const color = getIconColor(index);
  const initials = getInitials(tool.name);

  return (
    <article className="tool-card">
      <div className="tool-card-top">
        <div className="tool-card-icon" style={{ backgroundColor: color }}>
          {initials}
        </div>
        <div className="tool-card-meta">
          <div className="tool-card-name-row">
            <span className="tool-card-name">{tool.name}</span>
            {tool.isNew && <span className="tool-card-new-badge">Novo</span>}
          </div>
          <span className="tool-card-developer">{tool.developer}</span>
        </div>
      </div>

      <p className="tool-card-tagline">{tool.tagline}</p>

      <ul className="use-case-list">
        {tool.useCases.map((uc) => (
          <li key={uc} className="use-case-item">
            <span className="use-case-check">✓</span>
            <span>{uc}</span>
          </li>
        ))}
      </ul>

      <div className="tool-card-footer">
        <span className={getPricingClass(tool.pricing)}>{tool.pricing}</span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-visit-btn"
          aria-label={`Conhecer ${tool.name}`}
        >
          Conhecer ferramenta →
        </a>
      </div>
    </article>
  );
}

export default function FerramentasClient() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return AI_TOOLS.filter((tool) => {
      const matchCategory =
        selectedCategory === 'Todas' || tool.category === selectedCategory;
      const matchSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.developer.toLowerCase().includes(q) ||
        tool.tagline.toLowerCase().includes(q) ||
        tool.tags.some((t) => t.toLowerCase().includes(q)) ||
        tool.useCases.some((uc) => uc.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory]);

  return (
    <main className="ferramentas-section">
      <div className="container">
        <header className="ferramentas-header">
          <h1>Guia de Ferramentas de IA</h1>
          <p>
            {AI_TOOLS.length}+ ferramentas organizadas por finalidade para você escolher a certa
          </p>
          <div className="ferramentas-badges">
            <span className="ferramentas-badge">{AI_TOOLS.length} ferramentas</span>
            <span className="ferramentas-badge">{CATEGORIES.length} categorias</span>
            <span className="ferramentas-badge">Atualizado maio 2026</span>
          </div>
        </header>

        <div className="ferramentas-controls">
          <div className="search-wrapper">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por nome, caso de uso ou palavra-chave..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar ferramentas"
            />
          </div>

          <nav className="category-tabs" aria-label="Filtrar por categoria">
            <button
              className={`category-tab${selectedCategory === 'Todas' ? ' active' : ''}`}
              onClick={() => setSelectedCategory('Todas')}
            >
              <span className="category-tab-emoji">🤖</span>
              Todas
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab${selectedCategory === cat.name ? ' active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <span className="category-tab-emoji">{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </nav>
        </div>

        <p className="ferramentas-count">
          Mostrando {filtered.length} de {AI_TOOLS.length} ferramentas
        </p>

        <div className="tools-grid">
          {filtered.length === 0 ? (
            <div className="tools-empty">
              <p>Nenhuma ferramenta encontrada para &quot;{search}&quot;</p>
            </div>
          ) : (
            filtered.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
