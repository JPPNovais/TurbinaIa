// SEO enhancer — aplicado deterministicamente a cada artigo gerado pelo robô,
// para que todo conteúdo novo já saia com: meta description <=160, 2 imagens
// inline e links internos contextuais (sem depender do LLM, evitando links
// inventados/quebrados).

const fs = require('fs');
const path = require('path');

// Pool de imagens do Unsplash VERIFICADAS (HTTP 200). Ao adicionar novas,
// teste antes: curl -s -o /dev/null -w '%{http_code}' "<url>" deve dar 200.
const VERIFIED_IMAGES = [
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
];

// Mapa de links internos por palavra-chave. Alvos /blog/<slug> só são usados
// se o arquivo existir; páginas-ferramenta existem sempre. A âncora preserva
// o texto encontrado no artigo.
const LINK_RULES = [
  { re: /\bmachine learning\b/i, url: '/blog/o-que-e-machine-learning-aprendizado-de-maquina' },
  { re: /\bChatGPT\b/, url: '/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026' },
  { re: /\bGemini\b/, url: '/blog/prompts-para-gemini' },
  { re: /\bClaude\b/, url: '/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026' },
  { re: /\bprompts?\b/i, url: '/prompts' },
  { re: /\bcomparador\b/i, url: '/comparador' },
];

const TOOL_PAGES = new Set(['/prompts', '/comparador', '/calculadora', '/glossario', '/ferramentas', '/gerador']);

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function splitFrontmatter(md) {
  if (!md.startsWith('---')) return null;
  const end = md.indexOf('\n---', 3);
  if (end === -1) return null;
  const fmEnd = end + 4; // posição após "\n---"
  return { front: md.slice(0, fmEnd), body: md.slice(fmEnd) };
}

// 1) Garante meta description <= 160 caracteres, cortando no limite de palavra.
function enforceDescription(front) {
  return front.replace(/^description:\s*"?(.*?)"?\s*$/m, (line, value) => {
    let v = value.trim();
    if (v.length <= 160) return `description: "${v.replace(/"/g, '\\"')}"`;
    let cut = v.slice(0, 157);
    const lastSpace = cut.lastIndexOf(' ');
    if (lastSpace > 120) cut = cut.slice(0, lastSpace);
    cut = cut.replace(/[\s,;:.\-–—]+$/, '');
    return `description: "${cut.replace(/"/g, '\\"')}"`;
  });
}

// Marca as faixas de linhas que NÃO devem receber imagem/link:
// dentro de blocos de código, e a partir de FAQ/Fontes até o fim.
function computeProtectedLines(lines) {
  const protectedSet = new Set();
  let inFence = false;
  let stopFromHere = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (/^```/.test(lines[i])) inFence = !inFence;
    if (inFence) protectedSet.add(i);
    if (/^##\s+.*(perguntas frequentes|fontes e refer|faq)/i.test(lines[i])) {
      stopFromHere = Math.min(stopFromHere, i);
    }
  }
  for (let i = stopFromHere; i < lines.length; i++) protectedSet.add(i);
  return { protectedSet, stopFromHere };
}

// 2) Insere imagens inline (até totalizar 2) antes de H2 elegíveis do meio.
function insertInlineImages(body, title, coverUrl) {
  const existing = (body.match(/!\[[^\]]*\]\(/g) || []).length;
  if (existing >= 2) return body;

  const lines = body.split('\n');
  const { protectedSet, stopFromHere } = computeProtectedLines(lines);

  // H2 elegíveis (fora de código e antes de FAQ/Fontes), ignorando o primeiro
  // para não colar imagem logo no topo.
  const h2Indices = [];
  for (let i = 0; i < lines.length; i++) {
    if (i >= stopFromHere) break;
    if (!protectedSet.has(i) && /^##\s+/.test(lines[i])) h2Indices.push(i);
  }
  const candidates = h2Indices.slice(1); // pula o 1º H2
  if (candidates.length === 0) return body;

  const need = 2 - existing;
  const picks = [];
  if (candidates.length >= 2 && need >= 2) {
    picks.push(candidates[0], candidates[Math.min(2, candidates.length - 1)]);
  } else {
    picks.push(candidates[0]);
    if (need >= 2 && candidates[1] != null) picks.push(candidates[1]);
  }

  const h = hashString(title);
  const pool = VERIFIED_IMAGES.filter((u) => u !== coverUrl);
  const altBase = title.replace(/"/g, '').slice(0, 110);

  // Insere de baixo para cima para não invalidar os índices.
  const uniquePicks = [...new Set(picks)].sort((a, b) => b - a);
  let imgN = uniquePicks.length;
  uniquePicks.forEach((idx, k) => {
    const url = pool[(h + k * 3) % pool.length];
    const alt = `Imagem ilustrativa sobre ${altBase}`;
    lines.splice(idx, 0, '', `![${alt}](${url})`, '');
    imgN--;
  });

  return lines.join('\n');
}

// 3) Insere links internos contextuais (máx 3), 1ª ocorrência da palavra-chave
// em linha de texto comum, evitando headings, código, links já existentes,
// auto-link e a seção de FAQ/Fontes.
function insertInternalLinks(body, existingSlugs, currentSlug, max = 3) {
  const lines = body.split('\n');
  const { protectedSet } = computeProtectedLines(lines);
  const usedTargets = new Set();
  let added = 0;

  for (const rule of LINK_RULES) {
    if (added >= max) break;
    // valida alvo
    if (rule.url.startsWith('/blog/')) {
      const slug = rule.url.replace('/blog/', '');
      if (!existingSlugs.has(slug) || slug === currentSlug) continue;
    } else if (!TOOL_PAGES.has(rule.url)) {
      continue;
    }
    if (usedTargets.has(rule.url)) continue;

    for (let i = 0; i < lines.length; i++) {
      if (protectedSet.has(i)) continue;
      const line = lines[i];
      if (/^#{1,6}\s/.test(line) || /^\s*>/.test(line)) continue; // heading/blockquote
      if (line.includes('](')) continue; // já há link na linha — evita conflito
      if (!rule.re.test(line)) continue;
      // substitui apenas a 1ª ocorrência
      lines[i] = line.replace(rule.re, (m) => `[${m}](${rule.url})`);
      usedTargets.add(rule.url);
      added++;
      break;
    }
  }
  return lines.join('\n');
}

function loadExistingSlugs(articlesDir) {
  try {
    return new Set(
      fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, '')),
    );
  } catch {
    return new Set();
  }
}

/**
 * Aplica o pacote SEO ao markdown de um artigo já gerado.
 * @param {string} markdown
 * @param {{articlesDir:string, coverImageUrl?:string, currentSlug?:string}} opts
 */
function enhanceSeo(markdown, { articlesDir, coverImageUrl = '', currentSlug = '' } = {}) {
  const parts = splitFrontmatter(markdown);
  if (!parts) return markdown; // sem frontmatter válido — não mexe

  const front = enforceDescription(parts.front);
  const titleMatch = front.match(/^title:\s*"?(.*?)"?\s*$/m);
  const title = titleMatch ? titleMatch[1] : 'Inteligência Artificial';

  let body = parts.body;
  const existingSlugs = loadExistingSlugs(articlesDir);
  body = insertInlineImages(body, title, coverImageUrl);
  body = insertInternalLinks(body, existingSlugs, currentSlug, 3);

  return front + body;
}

module.exports = { enhanceSeo, VERIFIED_IMAGES };
