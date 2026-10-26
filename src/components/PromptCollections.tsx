import Link from 'next/link';
import { getAllArticlesMetadata } from '@/lib/articles';
import { PROMPT_COLLECTIONS, type PromptCollection } from '@/lib/taxonomy';

// "+50 Prompts para o Gemini" → "+50"
const COUNT_IN_TITLE = /(\+?\d{1,3})\s+prompts\b/i;

const GUIDE_SLUG = 'guia-prompts-chatgpt-como-criar-prompts-perfeitos-para-qualquer-tarefa';

const GROUPS: { key: PromptCollection['group']; title: string }[] = [
  { key: 'ferramenta', title: 'Por ferramenta' },
  { key: 'area', title: 'Por área' },
];

interface PromptCollectionsProps {
  /** Post atual: aparece marcado, sem link para si mesmo. */
  currentSlug?: string;
  /** Na própria /prompts o link para a biblioteca sai do rodapé do bloco. */
  showLibraryLink?: boolean;
}

/**
 * Bloco "Prompts por ferramenta e área": links para todas as coleções de
 * prompts do blog. Vai no fim de cada post de prompts e na /prompts.
 */
export default async function PromptCollections({ currentSlug, showLibraryLink = true }: PromptCollectionsProps) {
  const articles = await getAllArticlesMetadata();
  const bySlug = new Map(articles.map((article) => [article.slug, article]));

  const items = PROMPT_COLLECTIONS.flatMap((collection) => {
    const article = bySlug.get(collection.slug);
    if (!article) return [];
    const count = article.title.match(COUNT_IN_TITLE)?.[1];
    return [{ ...collection, count }];
  });
  if (items.length === 0) return null;

  return (
    <nav className="prompt-collections" aria-labelledby="prompts-por-ferramenta-e-area">
      <h2 id="prompts-por-ferramenta-e-area" className="prompt-collections-title">
        Prompts por ferramenta e área
      </h2>
      {GROUPS.map((group) => (
        <div key={group.key} className="prompt-collections-group">
          <h3 className="prompt-collections-group-title">{group.title}</h3>
          <ul className="hub-tools">
            {items
              .filter((item) => item.group === group.key)
              .map((item) => {
                const name = `Prompts para ${item.group === 'ferramenta' ? 'o ' : ''}${item.label}`;
                const detail = `${item.count ? `${item.count} prompts · ` : ''}${item.covers}`;
                return (
                  <li key={item.slug}>
                    {item.slug === currentSlug ? (
                      <span className="hub-tool prompt-collections-current" aria-current="page">
                        <strong>{name}</strong>
                        <span>Você está aqui · {detail}</span>
                      </span>
                    ) : (
                      <Link href={`/blog/${item.slug}`} className="hub-tool" prefetch={false}>
                        <strong>{name}</strong>
                        <span>{detail}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
      <p className="prompt-collections-more">
        {showLibraryLink && (
          <>
            Quer filtrar por tarefa? A <Link href="/prompts" prefetch={false}>biblioteca de prompts</Link> reúne todos em um só
            lugar.{' '}
          </>
        )}
        {currentSlug !== GUIDE_SLUG && (
          <>
            Para escrever os seus, veja o{' '}
            <Link href={`/blog/${GUIDE_SLUG}`} prefetch={false}>guia de engenharia de prompt</Link>.
          </>
        )}
      </p>
    </nav>
  );
}
