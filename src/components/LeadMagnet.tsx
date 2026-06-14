'use client';

import { useState } from 'react';

const PACK_URL = '/pack-de-prompts-turbina-ia.txt';

interface LeadMagnetProps {
  /** Texto do título (opcional) */
  title?: string;
  /** Subtítulo/descrição (opcional) */
  subtitle?: string;
}

/**
 * Captura de leads com isca digital: o usuário informa o e-mail (salvo na
 * newsletter) e libera o download imediato do Pack de Prompts. Pensado para
 * ser embutido dentro/no fim dos artigos e na página /prompts.
 */
export default function LeadMagnet({
  title = '📥 Pack com +160 Prompts de IA (grátis)',
  subtitle = 'Receba nossa coletânea de prompts prontos para ChatGPT, Claude e Gemini. Cadastre seu e-mail e baixe agora — sem custo.',
}: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'unlocked' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      // Sucesso OU e-mail já cadastrado → libera o download de qualquer forma.
      if (res.ok || /cadastrad/i.test(data?.message || '')) {
        setStatus('unlocked');
      } else {
        setStatus('error');
        setMessage(data?.message || 'Não foi possível concluir. Tente novamente.');
      }
    } catch {
      setStatus('error');
      setMessage('Erro de conexão. Tente novamente.');
    }
  };

  return (
    <aside className="lead-magnet" aria-label="Baixe o pack de prompts">
      <div className="lead-magnet-body">
        <h3 className="lead-magnet-title">{title}</h3>
        {status === 'unlocked' ? (
          <>
            <p className="lead-magnet-subtitle">Tudo certo! Seu pack está liberado. ⚡</p>
            <a href={PACK_URL} download className="lead-magnet-btn lead-magnet-download">
              ⬇️ Baixar o Pack de Prompts
            </a>
          </>
        ) : (
          <>
            <p className="lead-magnet-subtitle">{subtitle}</p>
            <form className="lead-magnet-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="lead-magnet-input"
                aria-label="Seu e-mail"
                disabled={status === 'loading'}
              />
              <button type="submit" className="lead-magnet-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando…' : 'Quero o pack grátis'}
              </button>
            </form>
            {status === 'error' && <p className="lead-magnet-error">{message}</p>}
            <p className="lead-magnet-note">Sem spam. Cancele quando quiser.</p>
          </>
        )}
      </div>
    </aside>
  );
}
