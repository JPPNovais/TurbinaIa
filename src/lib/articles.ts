import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface ArticleHeading {
  text: string;
  slug: string;
  depth: number;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
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
  faqs: ArticleFAQ[];
}

// Extract FAQ pairs from the "Perguntas Frequentes" section so we can emit
// FAQPage structured data (rich results in Google). Every article in this
// project follows the convention of an `## Perguntas Frequentes` H2 followed
// by `### question` H3s, each with an answer paragraph beneath it.
function extractFAQs(markdownContent: string): ArticleFAQ[] {
  const lines = markdownContent.split('\n');
  const faqs: ArticleFAQ[] = [];
  let inFaqSection = false;
  let currentQuestion: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion && answerLines.length > 0) {
      const answer = answerLines
        .join(' ')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // strip markdown links
        .replace(/[*_`>]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      if (answer) faqs.push({ question: currentQuestion, answer });
    }
    currentQuestion = null;
    answerLines = [];
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flush();
      inFaqSection = /perguntas frequentes|faq/i.test(h2[1]);
      continue;
    }
    if (!inFaqSection) continue;
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      flush();
      currentQuestion = h3[1].replace(/[*_`]/g, '').trim();
      continue;
    }
    if (currentQuestion) answerLines.push(line);
  }
  flush();
  return faqs;
}

// Lazy-load and async-decode content images for better Core Web Vitals (LCP/CLS),
// and mark external links as noopener for safety. The cover image stays eager
// because it is rendered separately via next/image with priority.
function enhanceContentHtml(html: string): string {
  return html
    .replace(/<img /g, '<img loading="lazy" decoding="async" ')
    .replace(/<a href="http/g, '<a target="_blank" rel="noopener noreferrer nofollow" href="http');
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
  const rawHtml = await marked.parse(content, { renderer });
  const contentHtml = enhanceContentHtml(rawHtml);
  const headings = extractHeadings(content);
  const faqs = extractFAQs(content);
  
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
    faqs,
  };

  return metadata;
}

export async function getAllCategories(): Promise<string[]> {
  const articles = await getAllArticlesMetadata();
  const categories = articles.map(art => art.category);
  return Array.from(new Set(categories));
}
