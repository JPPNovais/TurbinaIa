'use client';

import { useNewsletterSignup } from '@/hooks/useNewsletterSignup';

interface NewsletterInlineProps {
  postSlug?: string;
  /** Tema do post, para o texto conversar com o assunto. */
  topic?: string;
}

const PITCH: Record<string, string> = {
  prompts: 'Receba toda semana novos prompts testados para ChatGPT, Gemini e Claude.',
  'melhores-ias': 'Receba toda semana os rankings atualizados e as IAs que valem a pena testar.',
  noticias: 'Receba toda semana um resumo do que mudou no mundo da IA — sem ruído.',
};

/**
 * Captura de newsletter compacta para o meio do artigo. Liga/desliga com
 * NEXT_PUBLIC_NEWSLETTER_INLINE (padrão: ligado).
 */
export default function NewsletterInline({ postSlug, topic = '' }: NewsletterInlineProps) {
  const { email, setEmail, website, setWebsite, status, message, submit } = useNewsletterSignup('post_inline', { postSlug });
  const pitch = PITCH[topic] || 'Receba toda semana os melhores prompts, ferramentas e novidades de IA em português.';

  return (
    <aside className="newsletter-inline" aria-label="Assine a newsletter">
      <p className="newsletter-inline-title">📬 Newsletter do Turbina IA</p>
      {status === 'success' ? (
        <p className="newsletter-inline-text">{message}</p>
      ) : (
        <>
          <p className="newsletter-inline-text">{pitch}</p>
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
              {status === 'loading' ? 'Enviando…' : 'Assinar grátis'}
            </button>
          </form>
          {(status === 'error' || status === 'exists') && <p className="lead-magnet-error">{message}</p>}
        </>
      )}
    </aside>
  );
}
