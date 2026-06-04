'use client';

import PostCard from '@/components/PostCard';
import { ArticleMetadata } from '@/lib/articles';
import { useProgressiveReveal } from '@/hooks/useProgressiveReveal';

interface ArticlesGridProps {
  articles: ArticleMetadata[];
  initial?: number;
  step?: number;
}

/**
 * Grade de artigos com carregamento progressivo: renderiza um lote inicial e
 * revela mais conforme a rolagem, deixando a home mais leve no primeiro paint.
 */
export default function ArticlesGrid({ articles, initial = 12, step = 9 }: ArticlesGridProps) {
  const { visibleItems, hasMore, remaining, sentinelRef, loadMore } =
    useProgressiveReveal(articles, initial, step);

  return (
    <>
      <div className="articles-grid">
        {visibleItems.map((article) => (
          <PostCard key={article.slug} article={article} />
        ))}
      </div>
      {hasMore && (
        <div ref={sentinelRef} className="load-more-wrapper">
          <button type="button" className="btn btn-secondary load-more-btn" onClick={loadMore}>
            Carregar mais artigos ({remaining})
          </button>
        </div>
      )}
    </>
  );
}
