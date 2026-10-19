'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

interface ArticleInteractionsProps {
  /** id do elemento que contém o HTML do artigo. */
  containerId: string;
  postTitle: string;
  postSlug: string;
  /** Tema principal do post (prompts, melhores-ias, ...). */
  postTopic: string;
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback para navegadores sem Clipboard API (ou fora de HTTPS)
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

/**
 * Botões "Copiar" dos prompts. Os botões já vêm no HTML do servidor
 * (src/lib/articles.ts → addCopyButtons); aqui fica só um listener delegado
 * que copia o texto do bloco e dispara o evento copy_prompt no GA4.
 */
export default function ArticleInteractions({ containerId, postTitle, postSlug, postTopic }: ArticleInteractionsProps) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const total = container.querySelectorAll('[data-copy-prompt]').length;

    const onClick = async (event: MouseEvent) => {
      const button = (event.target as Element | null)?.closest?.('[data-copy-prompt]') as HTMLButtonElement | null;
      if (!button) return;
      const code = button.closest('.prompt-block')?.querySelector('pre');
      if (!code) return;

      const ok = await copyText((code.textContent || '').trim());
      const label = button.textContent;
      button.textContent = ok ? 'Copiado ✓' : 'Não foi possível copiar';
      button.classList.toggle('is-copied', ok);
      window.setTimeout(() => {
        button.textContent = label;
        button.classList.remove('is-copied');
      }, 2000);

      if (ok) {
        track('copy_prompt', {
          post_title: postTitle,
          post_slug: postSlug,
          post_topic: postTopic,
          prompt_number: Number(button.dataset.copyPrompt),
          prompt_total: total,
        });
      }
    };

    container.addEventListener('click', onClick);
    return () => container.removeEventListener('click', onClick);
  }, [containerId, postTitle, postSlug, postTopic]);

  return null;
}
