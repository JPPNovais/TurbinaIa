'use client';

import { useState, type FormEvent } from 'react';
import { track } from '@/lib/analytics';

export type NewsletterSource = 'post_end' | 'post_inline' | 'sidebar' | 'prompts_page' | 'other';
export type NewsletterStatus = 'idle' | 'loading' | 'success' | 'exists' | 'error';

/**
 * Envio do formulário de newsletter compartilhado por todos os pontos de
 * captura. Dispara `newsletter_signup` no GA4 só quando a inscrição é nova.
 */
export function useNewsletterSignup(source: NewsletterSource, context: { postSlug?: string } = {}) {
  const [email, setEmail] = useState('');
  // Honeypot: campo escondido que só robôs preenchem (ver /api/newsletter)
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [message, setMessage] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, website }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data?.success !== false) {
        setStatus('success');
        setMessage(data?.message || 'Inscrição realizada com sucesso! ⚡');
        setEmail('');
        track('newsletter_signup', {
          form_location: source,
          post_slug: context.postSlug,
          page_path: window.location.pathname,
        });
      } else if (/cadastrad/i.test(data?.message || '')) {
        setStatus('exists');
        setMessage(data.message);
      } else {
        setStatus('error');
        setMessage(data?.message || 'Não foi possível concluir. Tente novamente.');
      }
    } catch {
      setStatus('error');
      setMessage('Erro de conexão. Tente novamente.');
    }
  };

  return { email, setEmail, website, setWebsite, status, message, submit };
}
