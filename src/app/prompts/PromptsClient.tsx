'use client';

import { useState, useMemo, useEffect } from 'react';
import { PROMPTS, Prompt } from '@/data/prompts';
import './prompts.css';

export default function PromptsClient() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [placeholderValues, setPlaceholderValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  // Get all unique categories for the filters
  const categories = useMemo(() => {
    const cats = new Set(PROMPTS.map((p) => p.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  // Filter prompts based on search and category
  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter((p) => {
      const matchesCategory =
        !selectedCategory ||
        selectedCategory === 'Todos' ||
        p.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  // Extract placeholders from template whenever selectedPrompt changes
  const placeholders = useMemo(() => {
    if (!selectedPrompt) return [];
    // Match anything between brackets e.g. [Público-Alvo] or [Tom: Ex: amigável]
    const matches = selectedPrompt.template.match(/\[([^\]]+)\]/g);
    if (!matches) return [];
    // Deduplicate placeholders
    return Array.from(new Set(matches));
  }, [selectedPrompt]);

  // Initialize placeholder inputs when a prompt is opened
  useEffect(() => {
    if (selectedPrompt) {
      const initialValues: Record<string, string> = {};
      placeholders.forEach((ph) => {
        // Strip outer brackets for label/key, check if there is an example
        const cleanName = ph.slice(1, -1);
        initialValues[ph] = ''; // start empty or could default
      });
      setPlaceholderValues(initialValues);
      setCopied(false);
    }
  }, [selectedPrompt, placeholders]);

  // Generate finalized prompt text
  const customizedPromptText = useMemo(() => {
    if (!selectedPrompt) return '';
    let result = selectedPrompt.template;
    placeholders.forEach((ph) => {
      const val = placeholderValues[ph];
      if (val) {
        result = result.replaceAll(ph, val);
      }
    });
    return result;
  }, [selectedPrompt, placeholders, placeholderValues]);

  // Handle Copy to Clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(customizedPromptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPrompt(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="prompts-section container">
      {/* Header */}
      <div className="prompts-header">
        <h1>Biblioteca de Prompts Prontos ⚡</h1>
        <p>
          Encontre e personalize comandos avançados para ChatGPT, Claude, Gemini e outros modelos. 
          Basta preencher as variáveis e copiar o prompt ideal otimizado para suas necessidades.
        </p>
      </div>

      {/* Control Bar */}
      <div className="prompts-controls">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Pesquisar prompts por título, tag ou descrição..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <nav className="category-chips">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === 'Todos' ? '' : cat)}
              className={`chip-btn ${
                (cat === 'Todos' && !selectedCategory) || selectedCategory === cat
                  ? 'active'
                  : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="prompts-grid">
          {filteredPrompts.map((prompt) => (
            <article key={prompt.id} className="prompt-card">
              <div>
                <div className="prompt-card-header">
                  <span className="prompt-category-badge">{prompt.category}</span>
                </div>
                <h3>{prompt.title}</h3>
                <p>{prompt.description}</p>
                <div className="prompt-tags">
                  {prompt.tags.map((tag) => (
                    <span key={tag} className="prompt-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPrompt(prompt)}
                className="btn btn-primary use-prompt-btn"
              >
                Customizar e Usar ⚙️
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '3rem' }}>🔍</span>
          <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Nenhum prompt encontrado</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Experimente mudar os filtros ou refinar o termo de busca.
          </p>
        </div>
      )}

      {/* Customizer Modal */}
      {selectedPrompt && (
        <div className="modal-overlay" onClick={() => setSelectedPrompt(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedPrompt(null)}
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="modal-body">
              <h2>{selectedPrompt.title}</h2>
              <p className="subtitle">{selectedPrompt.description}</p>

              <div className="modal-layout">
                {/* Inputs Form */}
                <form className="customizer-form" onSubmit={(e) => e.preventDefault()}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Variáveis do Prompt
                  </h3>
                  {placeholders.length > 0 ? (
                    placeholders.map((ph) => {
                      const cleanLabel = ph.slice(1, -1);
                      // Check for specific instruction style input vs normal
                      const isLongInput = cleanLabel.toLowerCase().includes('código') || cleanLabel.toLowerCase().includes('texto') || cleanLabel.length > 25;
                      
                      return (
                        <div key={ph} className="placeholder-input-group">
                          <label htmlFor={`ph-${ph}`}>
                            {cleanLabel} <span>*</span>
                          </label>
                          {isLongInput ? (
                            <textarea
                              id={`ph-${ph}`}
                              rows={3}
                              placeholder={`Insira ${cleanLabel.split(':')[0]}...`}
                              value={placeholderValues[ph] || ''}
                              onChange={(e) =>
                                setPlaceholderValues((prev) => ({
                                  ...prev,
                                  [ph]: e.target.value,
                                }))
                              }
                              className="text-number-input"
                              style={{ resize: 'vertical', fontFamily: 'inherit' }}
                            />
                          ) : (
                            <input
                              id={`ph-${ph}`}
                              type="text"
                              placeholder={`Ex: ${cleanLabel.split(': Ex: ')[1] || 'digite aqui...'}`}
                              value={placeholderValues[ph] || ''}
                              onChange={(e) =>
                                setPlaceholderValues((prev) => ({
                                  ...prev,
                                  [ph]: e.target.value,
                                }))
                              }
                              className="text-number-input"
                            />
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      Este prompt não possui variáveis. Pronto para copiar!
                    </p>
                  )}
                </form>

                {/* Prompt Preview */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Visualização do Prompt
                  </h3>
                  <div className="preview-container">
                    <div className="preview-header">
                      <span>PROMPT PRONTO</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>
                        {placeholders.filter(ph => placeholderValues[ph]).length} / {placeholders.length} preenchidos
                      </span>
                    </div>
                    <pre className="preview-content">{customizedPromptText}</pre>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`btn btn-primary copy-btn ${copied ? 'success' : ''}`}
                  >
                    {copied ? 'Copiado para Área de Transferência! ✓' : 'Copiar Prompt Customizado 📋'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
