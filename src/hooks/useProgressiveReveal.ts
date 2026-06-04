'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Revela uma lista longa de forma gradual para manter o DOM e a pintura
 * iniciais leves. Renderiza `initial` itens e carrega mais `step` sempre que
 * o sentinela entra na viewport (com botão "Carregar mais" como fallback).
 * O recorte é reiniciado quando `items` muda (ex.: novo filtro ou busca).
 */
export function useProgressiveReveal<T>(items: T[], initial = 24, step = 24) {
  const [count, setCount] = useState(initial);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Reinicia a janela sempre que a lista de origem muda (filtro/busca).
  useEffect(() => {
    setCount(initial);
  }, [items, initial]);

  useEffect(() => {
    if (count >= items.length) return;
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setCount((c) => Math.min(c + step, items.length));
        }
      },
      { rootMargin: '800px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, items.length, step]);

  return {
    visibleItems: items.slice(0, count),
    hasMore: count < items.length,
    remaining: Math.max(0, items.length - count),
    sentinelRef,
    loadMore: () => setCount((c) => Math.min(c + step, items.length)),
  };
}
