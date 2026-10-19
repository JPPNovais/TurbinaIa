import Link from 'next/link';
import { SITE_URL, jsonLd } from '@/lib/seo';

export interface Crumb {
  name: string;
  /** Caminho interno ("/prompts"). O último item é a página atual e não precisa de href. */
  href?: string;
}

interface BreadcrumbsProps {
  /** Itens depois de "Início"; o último é a página atual. */
  items: Crumb[];
  /** URL da página atual, para o último item do BreadcrumbList. */
  currentPath: string;
  className?: string;
}

/**
 * Trilha de navegação visível + BreadcrumbList (JSON-LD) a partir da mesma
 * lista, para que o que o Google lê seja exatamente o que o leitor vê.
 */
export default function Breadcrumbs({ items, currentPath, className }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: 'Início', href: '/' }, ...items];
  const last = trail.length - 1;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${index === last ? currentPath : crumb.href || currentPath}`.replace(/(\.br)\/$/, '$1'),
    })),
  };

  return (
    <>
      <nav className={`article-breadcrumb${className ? ` ${className}` : ''}`} aria-label="Trilha de navegação">
        {trail.map((crumb, index) => (
          <span key={`${crumb.name}-${index}`} className="article-breadcrumb-item">
            {index > 0 && <span aria-hidden="true"> / </span>}
            {index === last || !crumb.href ? (
              <span className="article-breadcrumb-current" aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} prefetch={false}>{crumb.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
    </>
  );
}
