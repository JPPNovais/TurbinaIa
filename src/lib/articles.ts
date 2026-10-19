import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { isUnsplash, unsplashUrl } from '@/lib/unsplash';

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
  /** <title> curto (até ~60 caracteres) escrito à mão; opcional. */
  seoTitle?: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  coverImage?: string;
  author: string;
  slug: string;
  readingTime: string;
  wordCount: number;
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

// Imagens do corpo: o CSS (.prose img) já exibe tudo em 16:9 com object-fit,
// então pedimos ao CDN o recorte 16:9 em 3 larguras — o celular baixa 480px
// em AVIF/WebP em vez de 1200px em JPEG — e declaramos width/height (CLS).
const CONTENT_IMAGE_WIDTHS = [480, 768, 1200];
const CONTENT_IMAGE_SIZES = '(max-width: 800px) calc(100vw - 3rem), 712px';

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function responsiveContentImage(match: string, rawSrc: string, rest: string): string {
  const src = rawSrc.replace(/&amp;/g, '&');
  if (!isUnsplash(src)) return `<img loading="lazy" decoding="async" src="${rawSrc}"${rest}>`;
  const height = (w: number) => Math.round((w * 9) / 16);
  const srcset = CONTENT_IMAGE_WIDTHS.map((w) => `${unsplashUrl(src, w, { height: height(w) })} ${w}w`).join(', ');
  const fallback = unsplashUrl(src, 1200, { height: height(1200) });
  return `<img loading="lazy" decoding="async" width="1200" height="675" src="${escapeAttr(fallback)}" srcset="${escapeAttr(srcset)}" sizes="${CONTENT_IMAGE_SIZES}"${rest}>`;
}

// Cada bloco de código (os prompts dos posts) ganha uma barra com o número e
// um botão "Copiar" já no HTML do servidor — sem salto de layout. O clique é
// tratado por <ArticleInteractions>, que dispara o evento copy_prompt.
function addCopyButtons(html: string): string {
  let index = 0;
  return html
    .replace(/<pre>/g, () => {
      index += 1;
      return (
        `<div class="prompt-block" data-prompt-number="${index}">` +
        `<div class="prompt-block-bar"><span class="prompt-block-label">Prompt ${index}</span>` +
        `<button type="button" class="prompt-copy-btn" data-copy-prompt="${index}" aria-label="Copiar prompt ${index}">Copiar</button></div>` +
        '<pre>'
      );
    })
    .replace(/<\/pre>/g, '</pre></div>');
}

// Lazy-load and async-decode content images for better Core Web Vitals (LCP/CLS),
// and mark external links as noopener for safety. The cover image stays eager
// because it is rendered separately via next/image with fetchPriority.
function enhanceContentHtml(html: string): string {
  return addCopyButtons(html)
    .replace(/<img src="([^"]+)"([^>]*)>/g, responsiveContentImage)
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

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Helper to calculate reading time
function calculateReadingTime(words: number): string {
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min de leitura`;
}

// O YAML converte `date: 2026-06-04` (sem aspas) em objeto Date; normaliza
// tudo para a string "YYYY-MM-DD" que o resto do código espera.
function normalizeDate(value: unknown): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date && !isNaN(value.getTime())) return value.toISOString().split('T')[0];
  const str = String(value).trim();
  return /^\d{4}-\d{2}-\d{2}/.test(str) ? str.slice(0, 10) : undefined;
}

function buildMetadata(slug: string, data: Record<string, unknown>, content: string): ArticleMetadata {
  const wordCount = countWords(content);
  const date = normalizeDate(data.date) || new Date().toISOString().split('T')[0];
  const updatedAt = normalizeDate(data.updatedAt);
  return {
    title: (data.title as string) || 'Sem título',
    seoTitle: (data.seoTitle as string) || undefined,
    description: (data.description as string) || '',
    date,
    updatedAt: updatedAt && updatedAt > date ? updatedAt : undefined,
    category: (data.category as string) || 'Geral',
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: (data.coverImage as string) || '',
    author: (data.author as string) || 'Redator Turbina IA',
    slug,
    readingTime: calculateReadingTime(wordCount),
    wordCount,
    isFeatured: !!data.isFeatured,
  };
}

/** Data da última modificação real do artigo (updatedAt ou publicação). */
export function getLastModified(article: Pick<ArticleMetadata, 'date' | 'updatedAt'>): string {
  return article.updatedAt || article.date;
}

// Ensure the directory exists
function ensureDirectoryExists() {
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory, { recursive: true });
  }
}

// No build de produção os arquivos não mudam: cada página estática pedia a
// lista inteira de novo (160 leituras x 180 páginas). Em dev, sempre relê.
let metadataCache: ArticleMetadata[] | null = null;

export async function getAllArticlesMetadata(): Promise<ArticleMetadata[]> {
  if (metadataCache && process.env.NODE_ENV === 'production') return metadataCache;
  ensureDirectoryExists();
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      return buildMetadata(slug, data, content);
    });

  // Sort articles by date descending
  metadataCache = allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
  return metadataCache;
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
    ...buildMetadata(slug, data, content),
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
