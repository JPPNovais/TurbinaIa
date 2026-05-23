const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Remove grounding artifacts the Gemini API sometimes leaves in the body:
//   [cite: 12, 27]
//   [Fonte: Comex do Brasil]
//   [Fonte: Comex do Brasil, cite: 10, 21]
// These never refer to anything the reader can act on — strip them.
//
// IMPORTANT: do NOT touch legitimate Markdown links like `[Fonte: Nome](https://...)`.
// We use a negative lookahead `(?!\()` to skip any bracket immediately followed by `(`.
// Whitespace is only tidied before punctuation — never collapse runs of spaces,
// which would destroy YAML indentation in the frontmatter.
function cleanGroundingArtifacts(text) {
  return text
    .replace(/\s*\[\s*(?:cite|Fonte|Source|Fontes|Sources)\b[^\]]*\](?!\()/gi, '')
    .replace(/[ \t]+([.,;:!?])/g, '$1');
}

// Common Gemini PT-BR slips
function fixCommonTypos(text) {
  return text
    .replace(/\bEuphoria\b/g, 'Euforia')
    .replace(/\bagentico\b/gi, (m) => m[0] === 'A' ? 'Agêntico' : 'agêntico')
    .replace(/\bagenticos\b/gi, (m) => m[0] === 'A' ? 'Agênticos' : 'agênticos');
}

// HEAD-follow (with GET fallback) to discover the final URL a redirect resolves to.
function resolveRedirectUrl(url, redirectCount = 0) {
  return new Promise((resolve) => {
    if (redirectCount > 6) { resolve(url); return; }

    let protocol;
    let parsed;
    try {
      parsed = new URL(url);
      protocol = parsed.protocol === 'https:' ? https : http;
    } catch {
      resolve(url);
      return;
    }

    const options = {
      method: 'HEAD',
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TurbinaIA/1.0; +https://turbinaia.com.br)',
        'Accept': '*/*',
      },
      timeout: 10000,
    };

    const req = protocol.request(options, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        res.resume();
        resolve(resolveRedirectUrl(next, redirectCount + 1));
        return;
      }

      // HEAD blocked (405) — fall back to GET and just read the first chunk to capture redirects.
      if (res.statusCode === 405 || res.statusCode === 403) {
        res.resume();
        resolve(resolveRedirectUrlViaGet(url, redirectCount));
        return;
      }

      res.resume();
      resolve(url);
    });

    req.on('error', () => resolve(url));
    req.on('timeout', () => { req.destroy(); resolve(url); });
    req.end();
  });
}

function resolveRedirectUrlViaGet(url, redirectCount = 0) {
  return new Promise((resolve) => {
    if (redirectCount > 6) { resolve(url); return; }

    let protocol;
    try {
      protocol = new URL(url).protocol === 'https:' ? https : http;
    } catch {
      resolve(url);
      return;
    }

    const req = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TurbinaIA/1.0; +https://turbinaia.com.br)',
        'Accept': 'text/html,*/*;q=0.8',
      },
      timeout: 10000,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        res.destroy();
        resolve(resolveRedirectUrl(next, redirectCount + 1));
        return;
      }
      res.destroy();
      resolve(url);
    });

    req.on('error', () => resolve(url));
    req.on('timeout', () => { req.destroy(); resolve(url); });
  });
}

// Find every Vertex grounding redirect in the markdown and rewrite it to its final URL.
// Limits concurrency to avoid hammering targets.
async function resolveVertexRedirects(text, { concurrency = 5, verbose = false } = {}) {
  const pattern = /https:\/\/vertexaisearch\.cloud\.google\.com\/grounding-api-redirect\/[A-Za-z0-9_=-]+/g;
  const uniqueUrls = Array.from(new Set(text.match(pattern) || []));
  if (uniqueUrls.length === 0) return text;

  if (verbose) console.log(`🔗 Resolvendo ${uniqueUrls.length} redirect(s) do Vertex AI...`);

  const resolved = {};
  for (let i = 0; i < uniqueUrls.length; i += concurrency) {
    const batch = uniqueUrls.slice(i, i + concurrency);
    const results = await Promise.all(batch.map(async (u) => [u, await resolveRedirectUrl(u)]));
    for (const [original, final] of results) {
      resolved[original] = final;
      if (verbose) {
        const ok = final !== original;
        console.log(`  ${ok ? '✅' : '⚠️ '} ${original.substring(0, 80)}... → ${final.substring(0, 80)}${final.length > 80 ? '...' : ''}`);
      }
    }
  }

  let out = text;
  for (const [original, final] of Object.entries(resolved)) {
    if (final && final !== original) {
      // Escape regex special chars in original URL
      const safe = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      out = out.replace(new RegExp(safe, 'g'), final);
    }
  }
  return out;
}

// After resolveVertexRedirects, any URL still pointing at vertexaisearch.cloud.google.com
// is a dead grounding token (already 404). Strip it:
//   - bullet line `- [text](dead-url)` → drop the whole line
//   - inline `[text](dead-url)` → keep just `text`
function stripDeadVertexRedirects(text, { verbose = false } = {}) {
  const dead = /https?:\/\/vertexaisearch\.cloud\.google\.com\/grounding-api-redirect\/[A-Za-z0-9_=-]+/;

  const lines = text.split('\n');
  const kept = [];
  let droppedBullets = 0;
  let strippedInline = 0;

  for (const line of lines) {
    if (/^\s*[-*]\s*\[[^\]]+\]\([^)]+\)\s*$/.test(line) && dead.test(line)) {
      droppedBullets++;
      continue;
    }
    const before = line;
    const after = line.replace(/\[([^\]]+)\]\((https?:\/\/vertexaisearch\.cloud\.google\.com\/grounding-api-redirect\/[A-Za-z0-9_=-]+)\)/g, '$1');
    if (after !== before) strippedInline += (before.match(/vertexaisearch\.cloud\.google\.com/g) || []).length;
    kept.push(after);
  }

  if (verbose && (droppedBullets || strippedInline)) {
    console.log(`🧹 Links mortos do Vertex AI: ${droppedBullets} bullet(s) removido(s), ${strippedInline} link(s) inline convertido(s) em texto.`);
  }

  return kept.join('\n');
}

// Full pipeline: cleanup + redirect resolution + dead-link removal.
async function postprocessArticle(markdown, { verbose = false } = {}) {
  let out = cleanGroundingArtifacts(markdown);
  out = fixCommonTypos(out);
  out = await resolveVertexRedirects(out, { verbose });
  out = stripDeadVertexRedirects(out, { verbose });
  return out;
}

module.exports = {
  cleanGroundingArtifacts,
  fixCommonTypos,
  resolveRedirectUrl,
  resolveVertexRedirects,
  stripDeadVertexRedirects,
  postprocessArticle,
};

// CLI: node scripts/article-postprocess.js path/to/article.md [path/to/another.md ...]
if (require.main === module) {
  const targets = process.argv.slice(2);
  if (targets.length === 0) {
    console.error('Uso: node scripts/article-postprocess.js <arquivo.md> [<arquivo2.md> ...]');
    process.exit(1);
  }

  (async () => {
    for (const target of targets) {
      const abs = path.resolve(process.cwd(), target);
      if (!fs.existsSync(abs)) {
        console.error(`❌ Não encontrado: ${abs}`);
        continue;
      }
      console.log(`\n📄 Processando: ${abs}`);
      const original = fs.readFileSync(abs, 'utf8');
      const cleaned = await postprocessArticle(original, { verbose: true });
      if (cleaned !== original) {
        fs.writeFileSync(abs, cleaned, 'utf8');
        console.log(`✅ Atualizado.`);
      } else {
        console.log(`ℹ️  Nada a alterar.`);
      }
    }
  })();
}
