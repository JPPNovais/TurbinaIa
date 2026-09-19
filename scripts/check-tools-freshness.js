#!/usr/bin/env node
// Alarme de envelhecimento do Guia de Ferramentas.
//
// O `updatedAt` de cada ferramenta é o mês da última VERIFICAÇÃO contra uma
// fonte. A página /ferramentas mostra só a data mais recente do conjunto, então
// basta uma ferramenta conferida no mês para o selo dizer "Atualizado set 2026"
// enquanto dezenas de preços apodrecem sem ninguém notar — a mesma classe de
// falha silenciosa que derrubou a publicação por nove dias em agosto de 2026.
//
// Uso:
//   node scripts/check-tools-freshness.js                # limite padrão: 2 meses
//   node scripts/check-tools-freshness.js --max-age 3    # tolera 3 meses
//   node scripts/check-tools-freshness.js --limit 20     # lista no máximo 20
//
// Sai com código 1 quando há ferramentas acima do limite, para que um workflow
// consiga abrir alarme.

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = { maxAge: 2, limit: 15 };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--max-age') args.maxAge = Number(argv[++i]);
    else if (argv[i] === '--limit') args.limit = Number(argv[++i]);
  }
  if (!Number.isFinite(args.maxAge) || args.maxAge < 0) {
    console.error('--max-age precisa ser um número >= 0');
    process.exit(2);
  }
  return args;
}

// Converte 'YYYY-MM' em um índice absoluto de meses, para subtrair sem lidar
// com virada de ano.
function paraMeses(ym) {
  const m = /^(\d{4})-(\d{2})$/.exec(ym || '');
  if (!m) return null;
  return Number(m[1]) * 12 + (Number(m[2]) - 1);
}

function main() {
  const { maxAge, limit } = parseArgs(process.argv);
  const arquivo = path.join(process.cwd(), 'src/data/ai-tools.ts');
  const src = fs.readFileSync(arquivo, 'utf8');

  // Só o array AI_TOOLS: o arquivo também exporta CATEGORIES, cujos objetos
  // têm id/name mas nunca updatedAt — incluí-las daria 7 falsos alarmes fixos.
  const inicio = src.indexOf('export const AI_TOOLS');
  if (inicio === -1) {
    console.error('❌ Não encontrei `export const AI_TOOLS` em src/data/ai-tools.ts.');
    process.exit(2);
  }
  const proximoExport = src.indexOf('\nexport const', inicio + 1);
  const escopo = src.slice(inicio, proximoExport === -1 ? src.length : proximoExport);

  // O arquivo é TypeScript com objetos literais; ler por regex evita ter que
  // compilar/importar TS só para uma checagem de saúde.
  const ferramentas = [];
  const re = /\n {4}id: '([^']+)',\n {4}name: '([^']+)'/g;
  let m;
  while ((m = re.exec(escopo)) !== null) {
    const fim = escopo.indexOf('\n  },', m.index);
    const bloco = escopo.slice(m.index, fim === -1 ? escopo.length : fim);
    const up = /updatedAt: '([^']+)'/.exec(bloco);
    ferramentas.push({ id: m[1], name: m[2], updatedAt: up ? up[1] : null });
  }

  if (ferramentas.length === 0) {
    console.error('❌ Não consegui ler nenhuma ferramenta de src/data/ai-tools.ts.');
    process.exit(2);
  }

  const agora = new Date();
  const mesAtual = agora.getUTCFullYear() * 12 + agora.getUTCMonth();

  const vencidas = [];
  for (const f of ferramentas) {
    const meses = paraMeses(f.updatedAt);
    const idade = meses === null ? Infinity : mesAtual - meses;
    if (idade > maxAge) vencidas.push({ ...f, idade });
  }
  vencidas.sort((a, b) => b.idade - a.idade);

  const recentes = ferramentas.length - vencidas.length;
  console.log(`Ferramentas no guia: ${ferramentas.length}`);
  console.log(`Verificadas nos últimos ${maxAge} mês(es): ${recentes}`);
  console.log(`Acima do limite: ${vencidas.length}`);

  if (vencidas.length === 0) {
    console.log('\n✅ Guia de Ferramentas em dia.');
    return;
  }

  console.log('\nMais antigas primeiro:');
  for (const f of vencidas.slice(0, limit)) {
    const quando = f.updatedAt ? `${f.updatedAt} (${f.idade} meses)` : 'sem updatedAt';
    console.log(`  - ${f.name} [${f.id}] — ${quando}`);
  }
  if (vencidas.length > limit) {
    console.log(`  ... e mais ${vencidas.length - limit}.`);
  }

  console.log(
    '\n⚠️  Rode `node scripts/update-tools.js` (precisa de GEMINI_API_KEY) ou confira' +
      '\n    manualmente as entradas acima e carimbe o `updatedAt` do mês atual.'
  );
  process.exit(1);
}

main();
