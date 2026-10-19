'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps } from 'react';

type HoverPrefetchLinkProps = Omit<ComponentProps<typeof Link>, 'prefetch' | 'href'> & { href: string };

/**
 * Link que só faz prefetch quando o leitor demonstra intenção (hover, foco ou
 * toque). O prefetch padrão dispara assim que o link aparece na tela: os
 * links do menu para comparador, calculadora e changelog baixavam ~200 KB de
 * JS (com os dados dessas páginas) em toda visita, mesmo sem clique.
 */
export default function HoverPrefetchLink({ href, onMouseEnter, onFocus, onTouchStart, ...rest }: HoverPrefetchLinkProps) {
  const router = useRouter();
  const prefetch = () => router.prefetch(href);

  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={(event) => {
        prefetch();
        onMouseEnter?.(event);
      }}
      onFocus={(event) => {
        prefetch();
        onFocus?.(event);
      }}
      onTouchStart={(event) => {
        prefetch();
        onTouchStart?.(event);
      }}
      {...rest}
    />
  );
}
