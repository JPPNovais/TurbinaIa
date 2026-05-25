// Validation helpers for the data updater scripts (update-changelog/glossario/prompts).
// Catches the structural-breakage classes that have hit us before:
//   - Double comma `},,` inside an array  →  TypeScript treats slot as undefined.
//   - Duplicated `export const X` declaration  →  re-assignment / "Cannot assign to this".
//   - `] = [` appearing mid-file when it didn't before  →  two arrays glued together.
// If any check fails, the writer logs the issue and refuses to overwrite the file.

function findStructuralBreakage(originalContent, updatedContent) {
  const issues = [];

  // 1. New `,,` introduced (allowing pre-existing ones, in case of legitimate cases).
  const ccOriginal = (originalContent.match(/,\s*,/g) || []).length;
  const ccUpdated = (updatedContent.match(/,\s*,/g) || []).length;
  if (ccUpdated > ccOriginal) {
    issues.push(`introduziu ${ccUpdated - ccOriginal} ocorrência(s) nova(s) de vírgula dupla (\`,,\`)`);
  }

  // 2. Concatenated array declarations: `] = [` showing up where it wasn't before
  //    (the legitimate declaration is `... = [`, not `] = [`).
  const concatOriginal = (originalContent.match(/\]\s*=\s*\[/g) || []).length;
  const concatUpdated = (updatedContent.match(/\]\s*=\s*\[/g) || []).length;
  if (concatUpdated > concatOriginal) {
    issues.push(`introduziu ${concatUpdated - concatOriginal} concatenação(ões) inválida(s) \`] = [\``);
  }

  // 3. Same `export const NAME` appearing more than once.
  const exportNames = [...updatedContent.matchAll(/export\s+const\s+([A-Z_][A-Z0-9_]*)\b/g)].map(m => m[1]);
  const seen = new Set();
  for (const name of exportNames) {
    if (seen.has(name)) {
      issues.push(`declaração duplicada de \`export const ${name}\``);
      break;
    }
    seen.add(name);
  }

  // 4. Pattern from past incidents: `Entry[` followed by `{` on the next line
  //    (the array type annotation was treated as the array opener).
  if (/[A-Z]\w*Entry\[\s*\n\s*\{/.test(updatedContent) && !/[A-Z]\w*Entry\[\s*\n\s*\{/.test(originalContent)) {
    issues.push('declaração `XxxEntry[` quebrada — provavelmente o tipo foi confundido com o array');
  }

  // 5. File must start with TypeScript code, not LLM prose. A valid .ts file opens with
  //    `import`, `export`, `//`, `/*` or a directive — anything else (e.g. "I have completed
  //    the search for...") means the LLM returned conversational text instead of code.
  const head = updatedContent.replace(/^﻿/, '').trimStart();
  if (!/^(import\b|export\b|\/\/|\/\*|"use |type\b|const\b|let\b|var\b|function\b|class\b|interface\b|enum\b)/.test(head)) {
    const preview = head.split('\n')[0].slice(0, 80);
    issues.push(`arquivo não começa com TypeScript válido (provavelmente prosa do LLM): "${preview}..."`);
  }

  return issues;
}

// Safe write: only persists `updatedContent` if it doesn't introduce structural regressions.
// Returns true on success, false if it refused to write.
function safeWriteDataFile(fs, filePath, originalContent, updatedContent) {
  const issues = findStructuralBreakage(originalContent, updatedContent);
  if (issues.length > 0) {
    console.error('❌ Recusando gravar — o conteúdo gerado introduziria erros estruturais:');
    for (const issue of issues) console.error(`   • ${issue}`);
    console.error('   O arquivo original foi mantido intacto. Investigue a saída do LLM antes de tentar novamente.');
    return false;
  }
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  return true;
}

// Retries transient Gemini errors (503, rate-limit 429).
// Spending-cap 429s are NOT retried — they won't recover until next month.
// On spending cap, throws an error with `isSpendingCap: true` so callers can exit 0.
async function withRetry(fn, maxRetries = 4, baseDelayMs = 20000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isSpendingCap = error?.message && error.message.includes('spending cap');
      if (isSpendingCap) {
        error.isSpendingCap = true;
        throw error;
      }
      const isRetryable = error?.status === 503 || error?.status === 429 ||
        (error?.message && (error.message.includes('503') || error.message.includes('UNAVAILABLE') || error.message.includes('high demand')));
      if (isRetryable && attempt < maxRetries) {
        const delay = baseDelayMs * attempt;
        console.log(`⏳ Gemini indisponível (tentativa ${attempt}/${maxRetries}). Aguardando ${delay / 1000}s...`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw error;
      }
    }
  }
}

module.exports = {
  findStructuralBreakage,
  safeWriteDataFile,
  withRetry,
};
