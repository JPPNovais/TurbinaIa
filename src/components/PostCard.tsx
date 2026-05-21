import Link from 'next/link';
import { ArticleMetadata } from '@/lib/articles';

interface PostCardProps {
  article: ArticleMetadata;
}

export default function PostCard({ article }: PostCardProps) {
  const { title, description, date, category, coverImage, author, slug, readingTime } = article;

  // Format date nicely
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Assign category badge color class
  const getBadgeClass = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'tutoriais':
        return 'badge-secondary';
      case 'noticias':
        return 'badge-primary';
      case 'ferramentas':
        return 'badge-accent';
      default:
        return 'badge-primary';
    }
  };

  return (
    <article className="article-card">
      <Link href={`/blog/${slug}`} className="card-media">
        {coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverImage} alt={title} loading="lazy" />
        ) : (
          <div className="card-img-placeholder">
            <span>🌀 Turbina IA</span>
          </div>
        )}
      </Link>

      <div className="card-body">
        <span className={`badge ${getBadgeClass(category)}`}>
          {category}
        </span>

        <Link href={`/blog/${slug}`}>
          <h3 className="card-title">{title}</h3>
        </Link>

        <p className="card-excerpt">{description}</p>

        <div className="card-footer">
          <span>{author}</span>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
