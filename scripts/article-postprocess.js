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

// Collapse double terminal punctuation that the model sometimes emits:
//   "...um do outro?." → "...um do outro?"
//   "...impressionante!." → "...impressionante!"
// We only touch ?/! followed by `.`, since `?,` / `!,` are legitimate inside quotes.
function fixDoublePunctuation(text) {
  return text
    .replace(/([?!])\./g, '$1')
    .replace(/\.{4,}/g, '...'); // 4+ dots → ellipsis
}

// Remove a H2 (or H3) whose text equals the article title from the frontmatter.
// Many runs of the Gemini model open the body with `## <title>`, which duplicates the
// page H1 that Next.js already renders from the frontmatter.
function removeDuplicateTitleHeading(text) {
  const titleMatch = text.match(/^---[\s\S]*?\ntitle:\s*["']?([^"'\n]+)["']?\s*\n[\s\S]*?\n---/);
  if (!titleMatch) return text;
  const title = titleMatch[1].trim();
  if (!title) return text;

  // Normalize for comparison (lowercase, collapse whitespace, strip terminal punctuation)
  const normalize = (s) => s.toLowerCase().replace(/\s+/g, ' ').replace(/[.!?:,;]+$/, '').trim();
  const normalizedTitle = normalize(title);

  // Find the body (after the closing ---)
  const bodyStart = text.indexOf('---', 4);
  if (bodyStart === -1) return text;
  const afterFrontmatter = text.indexOf('\n', bodyStart + 3) + 1;

  const before = text.substring(0, afterFrontmatter);
  let body = text.substring(afterFrontmatter);

  // Find the first H2 or H3 in the body. If it matches the title (allowing minor punctuation
  // differences), strip the entire line (and any trailing blank line that becomes orphan).
  const firstHeadingMatch = body.match(/^\s*(#{2,3})\s+(.+)$/m);
  if (firstHeadingMatch && normalize(firstHeadingMatch[2]) === normalizedTitle) {
    const headingLine = firstHeadingMatch[0];
    const idx = body.indexOf(headingLine);
    let after = body.substring(idx + headingLine.length);
    if (after.startsWith('\n\n')) after = after.substring(1);
    body = body.substring(0, idx) + after;
    // Trim leading blank lines from body so it starts at first paragraph
    body = body.replace(/^\s*\n+/, '');
  }

  return before + body;
}

// Drop references whose URLs come from blacklisted domains: content aggregators,
// crypto exchanges, anonymous newsletters, machine-translated mirrors, personal blogs.
// Same precedent as `stripDeadVertexRedirects` — bullet line removed, inline link
// degraded to plain text.
const WEAK_SOURCE_DOMAINS = [
  // Crypto / aggregator / clickbait
  'kucoin.com',
  'cryptobriefing.com',
  'cryptopolitan.com',
  'incrypted.com',
  'digg.com',
  'biggo.finance',
  // Anonymous newsletters and SEO blogs
  'therundown.ai',
  'letsdatascience.com',
  'quantumzeitgeist.com',
  'startuphub.ai',
  'genaicoding.com',
  'aisuperskills.com',
  'clawpod.com',
  'stackdecode.com',
  'automely.com',
  // Personal blogs and translation mirrors
  'ajeet.me',
  'knightli.com',
  'pasqualepillitteri.it',
  'vietnam.vn',
  'ocafezinho.com',
  'yourstory.com',
];

// Positive list — sources that *do* count as serious journalism / primary research.
// Used by `assessSourceQuality` to flag articles whose Referências section is full of
// unknown blogs only.
const TIER_1_DOMAINS = [
  // Primary: AI lab blogs and official documentation
  'anthropic.com', 'openai.com', 'cdn.openai.com', 'blog.google', 'deepmind.google',
  'ai.meta.com', 'mistral.ai', 'x.ai', 'cohere.com',
  'developers.google.com', 'platform.openai.com', 'docs.anthropic.com', 'huggingface.co',
  'codeassist.google',
  // Other primary product/company sources for major dev tools
  'github.com', 'github.blog', 'cursor.com', 'windsurf.com', 'jetbrains.com',
  'stackoverflow.com', 'stackoverflow.co',
  // Security research (authoritative on AI code security)
  'snyk.io', 'sonarsource.com', 'owasp.org',
  // Academic
  'stanford.edu', 'mit.edu', 'harvard.edu', 'princeton.edu',
  'berkeley.edu', 'ox.ac.uk', 'cam.ac.uk', 'cmu.edu',
  'crfm.stanford.edu', 'mitsloan.mit.edu',
  // Scientific
  'arxiv.org', 'nature.com', 'science.org',
  // Tier 1 tech journalism
  'technologyreview.com', 'mittechreview.com.br',
  'wired.com', 'theverge.com', 'techcrunch.com', 'arstechnica.com',
  'reuters.com', 'bloomberg.com', 'apnews.com',
  'bbc.com', 'theguardian.com', 'ft.com', 'economist.com',
  'nytimes.com', 'wsj.com', 'washingtonpost.com',
  // Analyst reports
  'gartner.com', 'mckinsey.com', 'statista.com', 'idc.com',
  // Brazilian tier 1
  'folha.uol.com.br', 'globo.com', 'estadao.com.br', 'valor.globo.com',
  'cnnbrasil.com.br', 'forbes.com', 'forbes.com.br',
  // International references frequently cited
  'iea.org', 'pewresearch.org',
];

function isTier1Url(url) {
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    return TIER_1_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
  } catch {
    return false;
  }
}

function isWeakSourceUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
    return WEAK_SOURCE_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
  } catch {
    return false;
  }
}

function stripWeakSources(text, { verbose = false } = {}) {
  const lines = text.split('\n');
  const kept = [];
  let droppedBullets = 0;
  let strippedInline = 0;

  for (const line of lines) {
    const bulletMatch = line.match(/^\s*[-*]\s*\[[^\]]+\]\(([^)]+)\)\s*$/);
    if (bulletMatch && isWeakSourceUrl(bulletMatch[1])) {
      droppedBullets++;
      continue;
    }
    const after = line.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (full, label, url) =>
      isWeakSourceUrl(url) ? (strippedInline++, label) : full
    );
    kept.push(after);
  }

  if (verbose && (droppedBullets || strippedInline)) {
    console.log(`🚫 Fontes fracas: ${droppedBullets} bullet(s) removido(s), ${strippedInline} link(s) inline degradado(s) a texto.`);
  }

  return kept.join('\n');
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

// Collapse repeated citations of the same URL inside one paragraph. The Gemini model,
// after we tightened the "1 link per 2 paragraphs" rule, sometimes overshoots and stamps
// `[Same Source](same-url)` 5+ times in the same paragraph, which looks like spam.
// Behavior: keep the first occurrence of each URL per paragraph as a real link;
// every later occurrence in that same paragraph is degraded to plain text.
function collapseRepeatedCitations(text, { verbose = false } = {}) {
  // Split on blank lines (paragraph boundary). Headings/lists are their own "paragraphs"
  // for this purpose, which is fine — repetition there is also bad.
  const paragraphs = text.split(/\n\s*\n/);
  let stripped = 0;

  const cleaned = paragraphs.map((p) => {
    const seen = new Set();
    return p.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (full, label, url) => {
      // Normalize URL for comparison (strip trailing punctuation/fragment differences are kept)
      const key = url.replace(/[.,;:!?)]+$/, '');
      if (seen.has(key)) {
        stripped++;
        return label;
      }
      seen.add(key);
      return full;
    });
  });

  if (verbose && stripped > 0) {
    console.log(`🔁 ${stripped} citação(ões) duplicada(s) colapsada(s) (mesma URL no mesmo parágrafo).`);
  }

  return cleaned.join('\n\n');
}

// Inspect the Referências section to decide whether the article has any tier-1 sources.
// Returns { total, tier1, tier1Pct, allWeak }.
function assessSourceQuality(text) {
  // Find the references section. Match common headings: "Fontes", "Referências", "Sources".
  const refMatch = text.match(/##\s+(?:Fontes\s+e\s+Refer[êe]ncias|Refer[êe]ncias|Fontes|Sources)\b[\s\S]*$/i);
  const refsBlock = refMatch ? refMatch[0] : text;

  const urls = [];
  const urlRegex = /\[[^\]]+\]\((https?:\/\/[^)]+)\)/g;
  let m;
  while ((m = urlRegex.exec(refsBlock)) !== null) {
    urls.push(m[1]);
  }

  // Deduplicate by hostname so multiple links to the same outlet don't inflate the score.
  const uniqueHosts = new Set();
  for (const u of urls) {
    try { uniqueHosts.add(new URL(u).hostname.toLowerCase().replace(/^www\./, '')); } catch {}
  }
  const hosts = [...uniqueHosts];
  const tier1 = hosts.filter((h) => TIER_1_DOMAINS.some((d) => h === d || h.endsWith('.' + d))).length;
  const total = hosts.length;
  const tier1Pct = total ? tier1 / total : 0;

  return { total, tier1, tier1Pct, allWeak: total > 0 && tier1 === 0 };
}

// If the article has no tier-1 sources, flip `isFeatured` to false in the frontmatter so
// it doesn't get pushed to the homepage hero before a human reviews it.
function demoteIfNoTier1Sources(text, { verbose = false } = {}) {
  const quality = assessSourceQuality(text);
  if (!quality.allWeak) return text;

  if (verbose) {
    console.log(`⚠️  Nenhuma fonte tier 1 reconhecida entre as ${quality.total} referências do artigo.`);
    console.log(`   Forçando isFeatured: false até revisão manual.`);
  }
  // Only touch frontmatter
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return text;
  const original = fmMatch[0];
  let fm = fmMatch[1];
  if (/^isFeatured:\s*true/m.test(fm)) {
    fm = fm.replace(/^isFeatured:\s*true/m, 'isFeatured: false');
  } else if (!/^isFeatured:/m.test(fm)) {
    fm = fm + '\nisFeatured: false';
  }
  return text.replace(original, `---\n${fm}\n---`);
}

// Full pipeline: cleanup + redirect resolution + dead-link removal + weak-source pruning
// + repeated-citation collapse + tier-1 quality check.
async function postprocessArticle(markdown, { verbose = false } = {}) {
  let out = cleanGroundingArtifacts(markdown);
  out = fixCommonTypos(out);
  out = fixDoublePunctuation(out);
  out = removeDuplicateTitleHeading(out);
  out = await resolveVertexRedirects(out, { verbose });
  out = stripDeadVertexRedirects(out, { verbose });
  out = stripWeakSources(out, { verbose });
  out = collapseRepeatedCitations(out, { verbose });
  out = demoteIfNoTier1Sources(out, { verbose });
  return out;
}

module.exports = {
  cleanGroundingArtifacts,
  fixCommonTypos,
  fixDoublePunctuation,
  removeDuplicateTitleHeading,
  resolveRedirectUrl,
  resolveVertexRedirects,
  stripDeadVertexRedirects,
  stripWeakSources,
  collapseRepeatedCitations,
  assessSourceQuality,
  demoteIfNoTier1Sources,
  isWeakSourceUrl,
  isTier1Url,
  WEAK_SOURCE_DOMAINS,
  TIER_1_DOMAINS,
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
