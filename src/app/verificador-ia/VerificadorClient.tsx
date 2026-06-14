'use client';

import { useState } from 'react';
import LeadMagnet from '@/components/LeadMagnet';

interface Check {
  id: string;
  label: string;
  ok: boolean;
  weight: number;
  tip: string;
}
interface Result {
  url: string;
  score: number;
  wordCount: number;
  title: string;
  checks: Check[];
}

function scoreColor(score: number) {
  if (score >= 80) return '#10b981';
  if (score >= 50) return '#f59e0b';
  return '#ef4444';
}
function scoreLabel(score: number) {
  if (score >= 80) return 'Ótimo — pronto para ser citado pela IA';
  if (score >= 50) return 'Razoável — dá para melhorar bastante';
  return 'Precisa de ajustes para aparecer nas IAs';
}

export default function VerificadorClient() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setStatus('loading');
    setMessage('');
    setResult(null);
    try {
      const res = await fetch('/api/aeo-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data);
        setStatus('done');
      } else {
        setStatus('error');
        setMessage(data.message || 'Não foi possível analisar.');
      }
    } catch {
      setStatus('error');
      setMessage('Erro de conexão. Tente novamente.');
    }
  };

  return (
    <div className="aeo-tool">
      <form className="aeo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          inputMode="url"
          placeholder="Cole o link da sua página (ex.: seusite.com.br/artigo)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="aeo-input"
          aria-label="URL para analisar"
          disabled={status === 'loading'}
        />
        <button type="submit" className="aeo-btn" disabled={status === 'loading'}>
          {status === 'loading' ? 'Analisando…' : 'Analisar grátis'}
        </button>
      </form>

      {status === 'error' && <p className="aeo-error">{message}</p>}

      {status === 'done' && result && (
        <div className="aeo-result">
          <div className="aeo-score-card">
            <div
              className="aeo-score-circle"
              style={{
                ['--score-color' as string]: scoreColor(result.score),
                ['--score' as string]: `${result.score}%`,
              }}
            >
              <span className="aeo-score-num">{result.score}</span>
              <span className="aeo-score-max">/100</span>
            </div>
            <div>
              <strong className="aeo-score-status" style={{ color: scoreColor(result.score) }}>
                {scoreLabel(result.score)}
              </strong>
              <p className="aeo-score-url">{result.title || result.url}</p>
              <p className="aeo-score-meta">{result.wordCount} palavras analisadas</p>
            </div>
          </div>

          {result.wordCount < 30 && (
            <div className="aeo-note">
              <strong>😉 Quase lá!</strong> Não conseguimos ler o conteúdo desta página — ela
              provavelmente é carregada por JavaScript (site dinâmico), então o texto não vem no
              HTML inicial. Isso também atrapalha as IAs! Dica: garanta que o conteúdo principal
              apareça no HTML (renderização no servidor) e teste o link de um artigo com bastante texto.
            </div>
          )}

          {/* CTA no meio do resultado */}
          <LeadMagnet
            title="📥 Quer o checklist completo de AEO?"
            subtitle="Receba o passo a passo para o seu site aparecer nas respostas da IA — e o pack com +160 prompts. É grátis."
          />

          <h2 className="aeo-checklist-title">O que está bom e o que melhorar</h2>
          <ul className="aeo-checklist">
            {result.checks.map((c) => (
              <li key={c.id} className={`aeo-check ${c.ok ? 'ok' : 'fail'}`}>
                <span className="aeo-check-icon" aria-hidden="true">{c.ok ? '✓' : '✕'}</span>
                <div>
                  <span className="aeo-check-label">{c.label}</span>
                  {!c.ok && <span className="aeo-check-tip">{c.tip}</span>}
                </div>
              </li>
            ))}
          </ul>

          <LeadMagnet
            title="📥 Pegue o checklist + pack de +160 prompts"
            subtitle="Tudo pronto para você aplicar hoje. Cadastre seu e-mail e baixe agora, grátis."
          />
        </div>
      )}
    </div>
  );
}
