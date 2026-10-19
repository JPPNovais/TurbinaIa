#!/usr/bin/env node
/**
 * Confere promessas de quantidade nos títulos ("+40 Prompts", "As 10 Melhores
 * IAs", "7 Técnicas"...) contra o que o artigo realmente entrega.
 *
 * Como conta:
 *   - prompts → blocos de código (``` ... ```), que é onde ficam os prompts e
 *     onde o site põe o botão "Copiar";
 *   - demais listas → seções numeradas ("## 1. ...", "### 2) ..."); sem elas,
 *     linhas da maior tabela; sem tabela, subtítulos H3 fora do FAQ.
 *
 * Regra: "+N" exige N ou mais itens; "N" sem "+" exige exatamente N.
 * Confere também seoTitle, description e frases do texto com o mesmo número do
 * título ("mais de 30 prompts"); números diferentes no texto costumam ser links
 * para outros posts ("+50 prompts para ChatGPT") e não entram na conta.
 *
 * Uso:  node scripts/check-title-counts.js [--all]
 *       (--all lista também os títulos que conferem)
 * Sai com código 1 quando há divergência.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ARTICLES_DIR = path.join(__dirname, '..', 'content', 'articles');
const SHOW_ALL = process.argv.includes('--all');

const NOUNS =
  'prompts?|melhores|técnicas|tecnicas|dicas|ferramentas|modelos|formas|maneiras|passos|erros|ias|apps|aplicativos|exemplos|estratégias|ideias|hábitos|sites|cursos';
// "+40 Prompts", "As 10 Melhores IAs", "7 Técnicas de AEO"
const CLAIM = new RegExp(`(?:^|[\\s:(—–-])(\\+)?(\\d{1,3})\\s+(${NOUNS})\\b`, 'i');
const TEXT_CLAIM = /(mais de|\+)\s?(\d{1,3})\s+(prompts?)/gi;

function stripFaq(body) {
  return body.replace(/\n##\s+(perguntas frequentes|faq)[\s\S]*$/i, '');
}

function countCodeBlocks(body) {
  return Math.floor((body.match(/^```/gm) || []).length / 2);
}

function countListItems(body) {
  const main = stripFaq(body).replace(/```[\s\S]*?```/g, '');
  const numbered = (main.match(/^#{2,4}\s+\d{1,3}[.)]\s/gm) || []).length;
  if (numbered > 0) return { count: numbered, method: 'seções numeradas' };

  let biggestTable = 0;
  for (const table of main.match(/(?:^\|.*\|[ \t]*(?:\n|$))+/gm) || []) {
    const rows = table.split('\n').filter((line) => /^\|/.test(line) && !/^\|[\s:|-]+\|?\s*$/.test(line));
    biggestTable = Math.max(biggestTable, rows.length - 1); // tira o cabeçalho
  }
  if (biggestTable > 0) return { count: biggestTable, method: 'linhas da maior tabela' };

  const h3 = (main.match(/^###\s+(?!.*\?\s*$).+$/gm) || []).length;
  return { count: h3, method: 'subtítulos H3' };
}

function check(claimText, field, actual, problems) {
  const match = claimText && claimText.match(CLAIM);
  if (!match) return null;
  const plus = Boolean(match[1]);
  const promised = Number(match[2]);
  const ok = plus ? actual >= promised : actual === promised;
  if (!ok) problems.push(`${field} promete ${plus ? '+' : ''}${promised}, tem ${actual}`);
  return { plus, promised };
}

const rows = [];
for (const file of fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md')).sort()) {
  const { data, content } = matter(fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8'));
  const titleMatch = String(data.title || '').match(CLAIM);
  if (!titleMatch) continue;

  const isPrompt = /^prompts?$/i.test(titleMatch[3]);
  const { count, method } = isPrompt
    ? { count: countCodeBlocks(content), method: 'blocos de código' }
    : countListItems(content);

  const problems = [];
  const titleClaim = check(data.title, 'title', count, problems);
  check(data.seoTitle, 'seoTitle', count, problems);
  if (isPrompt) {
    check(data.description, 'description', count, problems);
    for (const m of content.matchAll(TEXT_CLAIM)) {
      const promised = Number(m[2]);
      if (promised === titleClaim.promised && count < promised) problems.push(`texto diz "${m[0]}", tem ${count}`);
    }
  }

  rows.push({
    slug: file.replace(/\.md$/, ''),
    promessa: `${titleMatch[1] || ''}${titleMatch[2]} ${titleMatch[3]}`,
    real: count,
    contagem: method,
    status: problems.length ? 'DIVERGE' : 'ok',
    detalhes: problems.join('; '),
  });
}

const divergent = rows.filter((row) => row.status !== 'ok');
const shown = SHOW_ALL ? rows : divergent;
if (shown.length) console.table(shown.map(({ slug, ...rest }) => ({ slug: slug.slice(0, 48), ...rest })));
console.log(`\n${rows.length} artigos com quantidade no título · ${divergent.length} com divergência`);
process.exit(divergent.length ? 1 : 0);
