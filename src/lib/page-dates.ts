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
