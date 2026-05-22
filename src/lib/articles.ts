import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface ArticleHeading {
  text: string;
  slug: string;
  depth: number;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
  author: string;
  slug: string;
  readingTime: string;
  isFeatured?: boolean;
}

export interface Article extends ArticleMetadata {
  contentHtml: string;
  headings: ArticleHeading[];
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractHeadings(markdownContent: string): ArticleHeading[] {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const headings: ArticleHeading[] = [];
  let match;
  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const depth = match[1].length;
    const text = match[2].trim();
    // remove markdown links and bold formatting from the heading text for cleaner display
    const cleanText = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '');
    const slug = slugifyHeading(cleanText);
    headings.push({ text: cleanText, slug, depth });
  }
  return headings;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

// Helper to calculate reading time
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min de leitura`;
}

// Ensure the directory exists
function ensureDirectoryExists() {
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory, { recursive: true });
  }
}

export async function getAllArticlesMetadata(): Promise<ArticleMetadata[]> {
  ensureDirectoryExists();
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      
      const metadata: ArticleMetadata = {
        title: data.title || 'Sem título',
        description: data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category || 'Geral',
        tags: Array.isArray(data.tags) ? data.tags : [],
        coverImage: data.coverImage || '',
        author: data.author || 'Redator Turbina IA',
        slug,
        readingTime: calculateReadingTime(content),
        isFeatured: !!data.isFeatured,
      };
      
      return metadata;
    });

  // Sort articles by date descending
  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleData(slug: string): Promise<Article | null> {
  ensureDirectoryExists();
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Configure renderer to add custom ID attributes to H2 and H3 tags
  const renderer = new marked.Renderer();
  renderer.heading = function({ text, depth }) {
    if (depth === 2 || depth === 3) {
      const slug = slugifyHeading(text);
      return `<h${depth} id="${slug}">${text}</h${depth}>\n`;
    }
    return `<h${depth}>${text}</h${depth}>\n`;
  };

  // Parse markdown content to HTML
  const contentHtml = await marked.parse(content, { renderer });
  const headings = extractHeadings(content);
  
  const metadata: Article = {
    title: data.title || 'Sem título',
    description: data.description || '',
    date: data.date || new Date().toISOString().split('T')[0],
    category: data.category || 'Geral',
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage || '',
    author: data.author || 'Redator Turbina IA',
    slug,
    readingTime: calculateReadingTime(content),
    isFeatured: !!data.isFeatured,
    contentHtml,
    headings,
  };
  
  return metadata;
}

export async function getAllCategories(): Promise<string[]> {
  const articles = await getAllArticlesMetadata();
  const categories = articles.map(art => art.category);
  return Array.from(new Set(categories));
}
