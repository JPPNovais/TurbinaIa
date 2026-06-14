import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 20;

interface Check {
  id: string;
  label: string;
  ok: boolean;
  weight: number;
  tip: string;
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Bloqueia hosts internos/privados (proteção básica contra SSRF).
function isPublicHttpUrl(raw: string): URL | null {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
  const host = u.hostname.toLowerCase();
  if (
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host === '0.0.0.0' ||
    host.endsWith('.local') ||
    /^10\./.test(host) ||
    /^192\.168\./.test(host) ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(host)
  ) {
    return null;
  }
  return u;
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ success: false, message: 'Informe uma URL.' }, { status: 400 });
    }

    const normalized = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const parsed = isPublicHttpUrl(normalized);
    if (!parsed) {
      return NextResponse.json({ success: false, message: 'URL inválida. Use um endereço público começando com https://' }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    let html = '';
    try {
      const res = await fetch(parsed.toString(), {
        signal: controller.signal,
        redirect: 'follow',
        headers: { 'User-Agent': 'TurbinaIA-AEO-Checker/1.0 (+https://www.turbinaia.com.br)' },
      });
      if (!res.ok) {
        return NextResponse.json({ success: false, message: `Não foi possível acessar a página (HTTP ${res.status}).` }, { status: 400 });
      }
      const raw = await res.text();
      html = raw.slice(0, 600_000); // limita tamanho
    } catch {
      return NextResponse.json({ success: false, message: 'Não foi possível carregar a página. Verifique a URL.' }, { status: 400 });
    } finally {
      clearTimeout(timeout);
    }

    const lower = html.toLowerCase();

    // Conteúdo principal: remove <head>, menu/cabeçalho/rodapé para não contar
    // navegação como "conteúdo" (isso distorcia a análise de resposta-direta,
    // 1º parágrafo, palavras e listas).
    const content = html
      .replace(/<head[\s\S]*?<\/head>/i, ' ')
      .replace(/<header[\s\S]*?<\/header>/gi, ' ')
      .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
      .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
    const contentLower = content.toLowerCase();
    const text = stripTags(content);
    const wordCount = text ? text.split(/\s+/).length : 0;

    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';
    const metaDesc = html.match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0] || '';
    const metaDescContent = metaDesc.match(/content=["']([^"']*)["']/i)?.[1] || '';
    const h1Count = (contentLower.match(/<h1[\s>]/g) || []).length;
    const h2h3Count = (contentLower.match(/<h(2|3)[\s>]/g) || []).length;
    const hasJsonLd = /application\/ld\+json/i.test(html);
    const hasFaq = /perguntas frequentes|faqpage|"@type"\s*:\s*"question"|<h[23][^>]*>\s*faq/i.test(lower);
    const hasLists = /<ul[\s>]|<ol[\s>]|<table[\s>]/i.test(contentLower);
    // 1º parágrafo "de verdade" — pula parágrafos vazios/curtíssimos do layout.
    const paragraphs = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => stripTags(m[1]))
      .filter((t) => t.length > 0);
    const firstPText = paragraphs[0] || '';
    const answerFirst =
      /resposta r[áa]pida|tl;?dr|em resumo|resumo:/i.test(text.slice(0, 600)) ||
      (firstPText.length >= 40 && firstPText.length <= 320);
    const imgs = (contentLower.match(/<img[\s>]/g) || []).length;
    const imgsWithAlt = (contentLower.match(/<img[^>]+alt=["'][^"']*["']/g) || []).length;
    const altOk = imgs === 0 ? true : imgsWithAlt / imgs >= 0.7;
    const hasAuthorOrDate = /"author"|datepublished|"datemodified"|publicado em|atualizado em|por\s+[A-ZÀ-Ý]/i.test(html);

    const checks: Check[] = [
      { id: 'title', label: 'Título (title) presente e com bom tamanho', ok: title.length >= 15 && title.length <= 70, weight: 10, tip: 'Use um título claro de 15 a 70 caracteres, idealmente em forma de pergunta.' },
      { id: 'meta', label: 'Meta description presente (≤160 caracteres)', ok: metaDescContent.length >= 50 && metaDescContent.length <= 160, weight: 8, tip: 'Adicione uma meta description de 50 a 160 caracteres resumindo a resposta.' },
      { id: 'h1', label: 'Tem um título principal (H1)', ok: h1Count >= 1, weight: 8, tip: 'A página deve ter exatamente um H1 com o tema principal.' },
      { id: 'headings', label: 'Tem subtítulos (H2/H3) organizando o conteúdo', ok: h2h3Count >= 3, weight: 12, tip: 'Use vários H2/H3 — a IA extrai respostas de seções bem divididas.' },
      { id: 'answer', label: 'Responde de forma direta no início (TL;DR / resposta rápida)', ok: answerFirst, weight: 14, tip: 'Coloque uma resposta direta logo no começo (um resumo/TL;DR). É o que a IA mais cita.' },
      { id: 'faq', label: 'Tem seção de Perguntas Frequentes (FAQ)', ok: hasFaq, weight: 14, tip: 'Adicione um FAQ com perguntas no jeito que as pessoas pesquisam.' },
      { id: 'schema', label: 'Tem dados estruturados (Schema/JSON-LD)', ok: hasJsonLd, weight: 12, tip: 'Inclua JSON-LD (Article/FAQPage) para a IA entender o conteúdo.' },
      { id: 'lists', label: 'Usa listas ou tabelas', ok: hasLists, weight: 8, tip: 'Listas e tabelas são fáceis da IA citar — use quando fizer sentido.' },
      { id: 'depth', label: 'Conteúdo com profundidade (600+ palavras)', ok: wordCount >= 600, weight: 8, tip: 'Aprofunde o tema; conteúdo raso raramente é citado.' },
      { id: 'eeat', label: 'Sinais de autoria/atualização (E-E-A-T)', ok: hasAuthorOrDate, weight: 4, tip: 'Mostre autor e data — confiança conta para ser citado.' },
      { id: 'alt', label: 'Imagens com texto alternativo (alt)', ok: altOk, weight: 2, tip: 'Descreva as imagens no atributo alt.' },
    ];

    const totalWeight = checks.reduce((s, c) => s + c.weight, 0);
    const gained = checks.reduce((s, c) => s + (c.ok ? c.weight : 0), 0);
    const score = Math.round((gained / totalWeight) * 100);

    return NextResponse.json({
      success: true,
      url: parsed.toString(),
      score,
      wordCount,
      title,
      checks,
    });
  } catch {
    return NextResponse.json({ success: false, message: 'Erro ao analisar a página.' }, { status: 500 });
  }
}
