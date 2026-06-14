// Gera o lead magnet "Pack de Prompts" (arquivo .txt baixável) a partir de
// src/data/prompts.ts. Rode: node scripts/build-prompt-pack.js
const fs = require('fs');
const path = require('path');
const Module = require('module');

// Transpila o TS (simples) para JS removendo a interface e as anotações de tipo.
let code = fs.readFileSync(path.resolve('src/data/prompts.ts'), 'utf8');
code = code.replace(/export interface Prompt \{[\s\S]*?\n\}/, '');
code = code.replace(/export const/g, 'const');
code = code.replace(/:\s*Prompt\[\]/g, '');
code += '\nmodule.exports = { PROMPTS };';

const m = new Module();
m._compile(code, path.resolve('src/data/prompts.js'));
const { PROMPTS } = m.exports;

if (!Array.isArray(PROMPTS) || PROMPTS.length === 0) {
  console.error('❌ Não foi possível carregar PROMPTS');
  process.exit(1);
}

const N = PROMPTS.length;
let out = '';
out += '============================================================\n';
out += `  PACK DE PROMPTS DE IA - TURBINA IA (${N}+ prompts)\n`;
out += '  ChatGPT - Claude - Gemini | copie, troque os [colchetes] e use\n';
out += '  https://www.turbinaia.com.br/prompts\n';
out += '============================================================\n\n';
out += 'Como usar: cole o prompt na IA de sua preferencia e substitua os\n';
out += 'campos entre [colchetes] pelos dados do seu projeto. Bons resultados!\n';

const byCat = {};
for (const p of PROMPTS) (byCat[p.category] = byCat[p.category] || []).push(p);

let n = 1;
for (const cat of Object.keys(byCat).sort()) {
  out += `\n\n#### ${cat.toUpperCase()} ####\n`;
  for (const p of byCat[cat]) {
    out += `\n${n}. ${p.title}\n`;
    out += '------------------------------------------------------------\n';
    out += `${p.template}\n`;
    n++;
  }
}

out += '\n\n============================================================\n';
out += '  Gostou? Biblioteca completa e interativa em:\n';
out += '  https://www.turbinaia.com.br/prompts\n';
out += '============================================================\n';

const dest = path.resolve('public/pack-de-prompts-turbina-ia.txt');
fs.writeFileSync(dest, out, 'utf8');
console.log(`OK: pack com ${N} prompts -> ${dest} (${(out.length / 1024).toFixed(1)} KB)`);
