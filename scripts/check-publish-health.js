#!/usr/bin/env node
/**
 * Alarme de publicação parada.
 *
 * Entre 13 e 21/08/2026 a rotina diária rodou todos os dias, mas empurrou os
 * artigos para branches `claude/*` que nunca foram mergeadas. O site ficou nove
 * dias sem conteúdo novo e nada avisou — não houve erro, não houve build
 * quebrado, só silêncio. Este script existe para que esse modo de falha nunca
 * mais passe despercebido: ele olha só o que está na `main` e reclama quando o
 * artigo mais recente envelhece demais.
 *
 * Não usa nenhuma chave de API nem rede — lê o frontmatter de content/articles.
 *
 * Uso:
 *   node scripts/check-publish-health.js              # limite padrão: 2 dias
 *   node scripts/check-publish-health.js --max-age 3
 *   node scripts/check-publish-health.js --json
 *
 * Sai com código 1 quando o conteúdo está velho (falha o job do CI).
 */

const fs = require('fs');
const path = require('path');

const ARTICLES_DIR = path.join(__dirname, '..', 'content', 'articles');
const DEFAULT_MAX_AGE_DAYS = 2;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function parseArgs(argv) {
  const args = { maxAgeDays: DEFAULT_MAX_AGE_DAYS, json: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--json') args.json = true;
    if (argv[i] === '--max-age') {
      const value = Number(argv[i + 1]);
      if (!Number.isFinite(value) || value < 0) {
        console.error(`❌ --max-age inválido: ${argv[i + 1]}`);
        process.exit(2);
      }
      args.maxAgeDays = value;
      i++;
    }
  }
  return args;
}

/** Lê o `date:` do frontmatter sem depender do gray-matter (script roda sem npm install). */
function readArticleDate(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const end = raw.indexOf('\n---', 3);
  if (!raw.startsWith('---') || end === -1) return null;
  const match = raw.slice(0, end).match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?\s*$/m);
  return match ? match[1] : null;
}

function collectArticles() {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((name) => name.endsWith('.md'))
    .map((name) => ({ slug: name.replace(/\.md$/, ''), date: readArticleDate(path.join(ARTICLES_DIR, name)) }))
    .filter((article) => article.date)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function daysBetween(fromISO, today) {
  const from = Date.parse(`${fromISO}T00:00:00Z`);
  return Math.floor((today - from) / MS_PER_DAY);
}

function main() {
  const { maxAgeDays, json } = parseArgs(process.argv.slice(2));
  const today = Date.parse(`${new Date().toISOString().slice(0, 10)}T00:00:00Z`);
  const articles = collectArticles();

  if (articles.length === 0) {
    console.error('❌ Nenhum artigo com `date` válido em content/articles.');
    process.exit(1);
  }

  const latest = articles[0];
  const ageDays = daysBetween(latest.date, today);
  const stale = ageDays > maxAgeDays;

  // Dias sem publicação na última semana: ajuda a distinguir "a rotina parou
  // ontem" de "ela vem falhando há dias".
  const published = new Set(articles.map((a) => a.date));
  const missing = [];
  for (let i = 1; i <= 7; i++) {
    const day = new Date(today - i * MS_PER_DAY).toISOString().slice(0, 10);
    if (!published.has(day)) missing.push(day);
  }

  if (json) {
    console.log(JSON.stringify({ latest, ageDays, maxAgeDays, stale, missingLastWeek: missing }, null, 2));
  } else {
    console.log(`Artigo mais recente: ${latest.date} — ${latest.slug}`);
    console.log(`Idade: ${ageDays} dia(s) (limite: ${maxAgeDays})`);
    console.log(`Dias sem artigo na última semana: ${missing.length ? missing.join(', ') : 'nenhum'}`);
  }

  if (stale) {
    console.error(
      `\n❌ Publicação parada: o artigo mais recente da main tem ${ageDays} dias.\n` +
        '   Verifique se a rotina diária do Claude rodou e se ela publicou direto na main\n' +
        '   (o modo de falha conhecido é ela commitar numa branch claude/* que ninguém mergeia:\n' +
        '   confira em https://github.com/JPPNovais/TurbinaIa/branches).'
    );
    process.exit(1);
  }

  console.log('\n✅ Publicação em dia.');
}

main();
