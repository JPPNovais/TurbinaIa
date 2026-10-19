/**
 * Helpers de SEO compartilhados por todas as páginas: URL canônica do site,
 * limites de <title>/<meta description> e serialização segura de JSON-LD.
 */

export const SITE_URL = 'https://www.turbinaia.com.br';
export const SITE_NAME = 'Turbina IA';

// O Google corta o <title> por largura (~580px), o que dá ~60 caracteres.
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

const BRAND_SUFFIX = ` | ${SITE_NAME}`;

// Palavras que não podem terminar um título cortado ("... Usa IA Sem").
const TRAILING_STOPWORDS = new Set([
  'a', 'à', 'ao', 'aos', 'as', 'às', 'o', 'os', 'e', 'é', 'ou', 'de', 'da', 'das', 'do', 'dos',
  'em', 'no', 'na', 'nos', 'nas', 'por', 'para', 'pra', 'com', 'sem', 'que', 'se', 'um', 'uma',
  'uns', 'umas', 'seu', 'sua', 'mas', 'como', 'até', 'entre', 'sobre', 'já', 'só', 'mais',
  'pelo', 'pela', 'pelos', 'pelas', 'num', 'numa', 'após', 'contra', 'dentro', 'quase', 'muito',
]);

// Também não pode sobrar no fim: número solto ("de 2") ou moeda ("US$").
function isDanglingWord(word: string): boolean {
  if (TRAILING_STOPWORDS.has(word.toLowerCase())) return true;
  if (/^(US\$|R\$|€|\$)$/.test(word)) return true;
  return /^[\d.,%]+$/.test(word);
}

// Corte que caiu dentro de uma citação ("Apresentam 'AI") deixa aspa aberta.
function hasOpenQuote(text: string): boolean {
  return (text.match(/["'“”‘’]/g) || []).length % 2 === 1;
}

function trimTrailingNoise(text: string): string {
  let words = text.trim().replace(/[\s,;:—–-]+$/u, '').split(/\s+/);
  while (
    words.length > 1 &&
    (isDanglingWord(words[words.length - 1]) || hasOpenQuote(words.join(' ')))
  ) {
    words = words.slice(0, -1);
  }
  return words.join(' ').replace(/[\s,;:—–-]+$/u, '');
}

function cutAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max + 1);
  const lastSpace = slice.lastIndexOf(' ');
  return trimTrailingNoise(lastSpace > 0 ? slice.slice(0, lastSpace) : text.slice(0, max));
}

// Corte no meio da frase ganha reticências, como o próprio Google faz no SERP.
function cutWithEllipsis(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${cutAtWord(text, max - 1)}…`;
}

function withBrand(title: string): string {
  return title.length + BRAND_SUFFIX.length <= TITLE_MAX ? `${title}${BRAND_SUFFIX}` : title;
}

/**
 * Gera o <title> de um artigo com no máximo ~60 caracteres.
 *
 * Ordem de preferência:
 *   1. `seoTitle` do frontmatter (escrito à mão);
 *   2. o próprio título, se couber;
 *   3. o título sem o parêntese final — "(Testadas e Comparadas)";
 *   4. a parte antes de ":", "—" ou "?" (a "manchete" do título);
 *   5. corte no limite de palavra com reticências, sem preposição solta no fim.
 * A marca é acrescentada só quando ainda cabe.
 */
export function buildArticleTitle(title: string, seoTitle?: string): string {
  const clean = title.replace(/\s+/g, ' ').trim();
  if (seoTitle && seoTitle.trim()) return withBrand(seoTitle.trim());
  if (clean.length <= TITLE_MAX) return withBrand(clean);

  const noParen = clean.replace(/\s*\([^)]*\)\s*$/, '').trim();
  if (noParen !== clean && noParen.length <= TITLE_MAX && noParen.length >= 30) return withBrand(noParen);

  const sep = clean.match(/^(.+?)(\?|:|\s[—–-]\s)/);
  if (sep) {
    const head = (sep[1] + (sep[2] === '?' ? '?' : '')).trim();
    if (head.length >= 28 && head.length <= TITLE_MAX) return withBrand(head);
    if (head.length < 28) {
      // Manchete curta demais sozinha ("Shadow AI"): mantém e completa com o resto.
      const rest = clean.slice(sep[0].length).trim();
      const joiner = sep[2] === '?' ? ' ' : ': ';
      const room = TITLE_MAX - head.length - joiner.length;
      if (room >= 15) return `${head}${joiner}${cutWithEllipsis(rest, room)}`;
    }
  }

  return cutWithEllipsis(noParen, TITLE_MAX);
}

/** Corta a meta description no limite de palavra, com reticências. */
export function clampDescription(description: string, max = DESCRIPTION_MAX): string {
  const clean = description.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${cutAtWord(clean, max - 1).replace(/[.,;:!?]+$/, '')}…`;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

/**
 * Serializa JSON-LD escapando "<" — evita que um título com "</script>"
 * quebre a página (recomendação do guia de JSON-LD do Next.js).
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

// summary_large_image pede 1200x630; o ícone 512x512 aparecia cortado/pixelado.
export const DEFAULT_OG_IMAGE = {
  url: `/api/og?title=${encodeURIComponent('Turbina IA')}&desc=${encodeURIComponent('Prompts prontos, rankings de IAs e tutoriais em português')}&badge=${encodeURIComponent('Portal de IA')}`,
  width: 1200,
  height: 630,
  alt: 'Turbina IA',
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
