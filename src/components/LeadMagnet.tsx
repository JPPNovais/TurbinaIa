'use client';

import { useNewsletterSignup, type NewsletterSource } from '@/hooks/useNewsletterSignup';

const PACK_URL = '/pack-de-prompts-turbina-ia.txt';

interface LeadMagnetProps {
  /** Texto do título (opcional) */
  title?: string;
  /** Subtítulo/descrição (opcional) */
  subtitle?: string;
  /** Onde o formulário está (vai para o evento newsletter_signup). */
  source?: NewsletterSource;
  postSlug?: string;
}

/**
 * Captura de leads com isca digital: o usuário informa o e-mail (salvo na
 * newsletter) e libera o download imediato do Pack de Prompts. Pensado para
 * ser embutido dentro/no fim dos artigos e na página /prompts.
 */
export default function LeadMagnet({
  title = '📥 Pack com +160 Prompts de IA (grátis)',
  subtitle = 'Receba nossa coletânea de prompts prontos para ChatGPT, Claude e Gemini. Cadastre seu e-mail e baixe agora — sem custo.',
  source = 'post_end',
  postSlug,
}: LeadMagnetProps) {
  const { email, setEmail, website, setWebsite, status, message, submit } = useNewsletterSignup(source, { postSlug });
  // Sucesso OU e-mail já cadastrado → libera o download de qualquer forma.
  const unlocked = status === 'success' || status === 'exists';

  return (
    <aside className="lead-magnet" aria-label="Baixe o pack de prompts">
      <div className="lead-magnet-body">
        <h3 className="lead-magnet-title">{title}</h3>
        {unlocked ? (
          <>
            <p className="lead-magnet-subtitle">Tudo certo! Seu pack está liberado. ⚡</p>
            <a href={PACK_URL} download className="lead-magnet-btn lead-magnet-download">
              ⬇️ Baixar o Pack de Prompts
            </a>
          </>
        ) : (
          <>
            <p className="lead-magnet-subtitle">{subtitle}</p>
            <form className="lead-magnet-form" onSubmit={submit}>
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
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hp-field"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
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
