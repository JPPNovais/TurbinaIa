import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/**
 * Data da última alteração real de uma página, para o <lastmod> do sitemap.
 *
 * Antes o sitemap usava `new Date()` (hora do build) em todas as páginas
 * estáticas — o Google aprende que esse lastmod não significa nada e passa a
 * ignorá-lo. Aqui a data vem do último commit que tocou os arquivos que
 * compõem a página (dados + componente).
 *
 * Clone raso (como o da Vercel): um arquivo que não mudou dentro da janela do
 * clone aparece como "alterado" no commit-fronteira, o que seria mentira. Nesse
 * caso a função devolve `undefined` e o sitemap simplesmente omite o lastmod —
 * o Google prefere lastmod ausente a lastmod errado.
 */

const ROOT = process.cwd();
const cache = new Map<string, Date | undefined>();

function git(args: string[]): string {
  return execFileSync('git', args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
    .toString()
    .trim();
}

let shallowBoundary: Set<string> | null = null;
function getShallowBoundary(): Set<string> {
  if (shallowBoundary) return shallowBoundary;
  shallowBoundary = new Set();
  try {
    const gitDir = path.resolve(ROOT, git(['rev-parse', '--git-dir']));
    const shallowFile = path.join(gitDir, 'shallow');
    if (fs.existsSync(shallowFile)) {
      for (const sha of fs.readFileSync(shallowFile, 'utf8').split('\n')) {
        if (sha.trim()) shallowBoundary.add(sha.trim());
      }
    }
  } catch {
    // sem git: tratado em getGitLastModified
  }
  return shallowBoundary;
}

export function getGitLastModified(files: string[]): Date | undefined {
  const key = files.join('|');
  if (cache.has(key)) return cache.get(key);
  let result: Date | undefined;
  try {
    const out = git(['log', '-1', '--format=%H %cI', '--', ...files]);
    const [sha, iso] = out.split(' ');
    if (sha && iso && !getShallowBoundary().has(sha)) {
      const date = new Date(iso);
      if (!isNaN(date.getTime())) result = date;
    }
  } catch {
    result = undefined;
  }
  cache.set(key, result);
  return result;
}

/** A data mais recente entre as fornecidas (ignora as ausentes). */
export function latestDate(...dates: (Date | string | undefined)[]): Date | undefined {
  let best: Date | undefined;
  for (const d of dates) {
    if (!d) continue;
    const date = typeof d === 'string' ? new Date(d) : d;
    if (isNaN(date.getTime())) continue;
    if (!best || date > best) best = date;
  }
  return best;
}

interface StaticPageDates {
  /** Arquivos que compõem a página (componente + dados): o último commit neles vira a data. */
  sources: string[];
  /**
   * Última revisão editorial do texto (YYYY-MM-DD). Reserva para quando o
   * clone raso da Vercel não alcança o commit — sem ela a página ficaria sem
   * data. Atualize ao revisar o texto da página.
   */
  reviewedAt?: string;
}

export const STATIC_PAGE_DATES: Record<string, StaticPageDates> = {
  '/prompts': { sources: ['src/app/prompts', 'src/data/prompts.ts'] },
  '/comparador': { sources: ['src/app/comparador', 'src/data/ai-models.ts'], reviewedAt: '2026-10-26' },
  '/ferramentas': { sources: ['src/app/ferramentas', 'src/data/ai-tools.ts'] },
  '/calculadora': {
    sources: ['src/app/calculadora', 'src/data/calculator-models.ts', 'src/data/exchange-rate.ts', 'src/lib/api-cost.ts'],
    reviewedAt: '2026-10-26',
  },
  '/verificador-ia': { sources: ['src/app/verificador-ia', 'src/app/api/aeo-check'] },
  '/gerador': { sources: ['src/app/gerador'] },
  '/glossario': { sources: ['src/app/glossario', 'src/data/glossario.ts'] },
  '/changelog': { sources: ['src/app/changelog', 'src/data/changelog.ts'] },
  '/sobre': { sources: ['src/app/sobre'] },
  '/contato': { sources: ['src/app/contato'] },
  '/politica-de-privacidade': { sources: ['src/app/politica-de-privacidade'] },
  '/termos-de-uso': { sources: ['src/app/termos-de-uso'] },
};

/** Data de atualização de uma página estática (sitemap, "Atualizado em" e JSON-LD). */
export function getPageLastModified(pagePath: string): Date | undefined {
  const page = STATIC_PAGE_DATES[pagePath];
  if (!page) return undefined;
  // Meio-dia de Brasília: "2026-10-26" puro seria meia-noite UTC (dia 25 aqui)
  const reviewed = page.reviewedAt ? `${page.reviewedAt}T12:00:00-03:00` : undefined;
  return latestDate(getGitLastModified(page.sources), reviewed);
}

/** Date → "YYYY-MM-DD" no fuso de Brasília. */
export function toLocalDateString(date: Date): string {
  return date.toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' });
}
