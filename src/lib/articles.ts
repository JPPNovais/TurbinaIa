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
  updatedAt?: string;
  category: string;
  tags: string[];
  coverImage?: string;
  author: string;
  slug: string;
  readingTime: string;
  /** Número real de palavras do corpo — usado no schema.org `wordCount` (Integer). */
  wordCount: number;
  /** Minutos de leitura como número — usado no `timeRequired` (ISO 8601). */
  readingMinutes: number;
  isFeatured?: boolean;
}

export interface Article extends ArticleMetadata {
  contentHtml: string;
  headings: ArticleHeading[];
  faqs: ArticleFAQ[];
}

// Extract FAQ pairs from the "Perguntas Frequentes" section so we can emit
// FAQPage structured data. Atenção: o Google encerrou o RICH RESULT de FAQ em
// 07/05/2026 — a marcação continua válida e é lida para entender a página, e
// segue sendo aproveitada pelos motores de resposta (ChatGPT, Perplexity,
// Gemini), que é o objetivo de AEO/GEO deste projeto. Não espere o sanfonado
// na SERP. Every article in this project follows the convention of an
// `## Perguntas Frequentes` H2 followed by `### question` H3s, each with an
// answer paragraph beneath it.
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
    // Rede de segurança: alguns artigos antigos escreviam a pergunta como uma
    // linha inteira em negrito (`**1. Pergunta?**`) em vez de H3. Sem isto, o
    // artigo perde o FAQPage inteiro sem quebrar nada — falha silenciosa.
    const negrito = line.match(/^\*\*\s*(?:\d+[.)]\s*)?(.+?)\s*\*\*\s*$/);
    if (negrito) {
      flush();
      currentQuestion = negrito[1].replace(/[*_`]/g, '').trim();
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

// Helper to calculate reading time. Devolve também os números crus: o
// schema.org exige `wordCount` como Integer e `timeRequired` como duração
// ISO 8601 — passar a string "8 min de leitura" invalida o rich result.
function measureContent(text: string): { readingTime: string; wordCount: number; readingMinutes: number } {
  const wordsPerMinute = 200;
  const trimmed = text.trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return { readingTime: `${readingMinutes} min de leitura`, wordCount, readingMinutes };
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
      const measured = measureContent(content);
      
      const metadata: ArticleMetadata = {
        title: data.title || 'Sem título',
        description: data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        updatedAt: data.updatedAt || undefined,
        category: data.category || 'Geral',
        tags: Array.isArray(data.tags) ? data.tags : [],
        coverImage: data.coverImage || '',
        author: data.author || 'Redator Turbina IA',
        slug,
        readingTime: measured.readingTime,
        wordCount: measured.wordCount,
        readingMinutes: measured.readingMinutes,
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
  const measured = measureContent(content);
  
  const metadata: Article = {
    title: data.title || 'Sem título',
    description: data.description || '',
    date: data.date || new Date().toISOString().split('T')[0],
        updatedAt: data.updatedAt || undefined,
    category: data.category || 'Geral',
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage || '',
    author: data.author || 'Redator Turbina IA',
    slug,
    readingTime: measured.readingTime,
    wordCount: measured.wordCount,
    readingMinutes: measured.readingMinutes,
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
