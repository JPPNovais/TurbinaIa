// Finaliza um artigo escrito por um AGENTE (rotina cloud do Claude Code) em vez
// de por chamada de API. O agente escreve o Markdown cru com frontmatter; este
// script aplica, de forma 100% determinística e SEM nenhuma chave de API, tudo
// o que o generate-article.js fazia depois da geração:
//
//   1. normaliza aspas de title/description no frontmatter (evita YAML quebrado)
//   2. valida o artigo (frontmatter, título, corpo mínimo) e recusa lixo
//   3. escolhe uma coverImage do pool curado que ainda não esteja em uso
//   4. roda o postprocess (limpeza de artefatos, redirects, fontes fracas)
//   5. roda o pacote de SEO (description <=160, imagens inline, links internos)
//   6. renomeia o arquivo para o slug canônico derivado do título
//
// Uso:  node scripts/finalize-article.js content/articles/<qualquer-nome>.md
//
// Sai com código 1 quando o artigo é inválido — assim a rotina que o chamou
// sabe que NÃO deve commitar (o robô antigo falhava em silêncio).

const fs = require('fs');
const path = require('path');

const { postprocessArticle } = require('./article-postprocess');
const { enhanceSeo } = require('./seo-enhance');

// Pool de capas do Unsplash já verificadas (HTTP 200). Ao adicionar novas,
// teste antes: curl -s -o /dev/null -w '%{http_code}' "<url>" deve dar 200.
const CURATED_IMAGES = {
  noticias: [
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1680474569854-81216b34417a?auto=format&fit=crop&w=1200&q=80',
  ],
  tutoriais: [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516116211223-5c359a36298a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  ],
  ferramentas: [
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?auto=format&fit=crop&w=1200&q=80',
  ],
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
}

// Reaplica aspas em title/description desfazendo escapes anteriores — sem isso,
// um título com dois-pontos ou aspas quebra o parse do YAML no build.
function normalizeFrontmatterQuotes(content) {
  const lines = content.split('\n');
  let boundaries = 0;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      boundaries++;
      if (boundaries === 1) inFrontmatter = true;
      if (boundaries === 2) inFrontmatter = false;
      continue;
    }
    if (!inFrontmatter) continue;

    for (const key of ['title', 'description']) {
      if (!lines[i].startsWith(`${key}:`)) continue;
      let value = lines[i].slice(key.length + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      value = value.replace(/\\+"/g, '"');
      lines[i] = `${key}: "${value.replace(/"/g, '\\"')}"`;
    }
  }
  return lines.join('\n');
}

function readFrontmatterField(content, key) {
  const line = content.split('\n').find((l) => l.startsWith(`${key}:`));
  if (!line) return '';
  return line.slice(key.length + 1).trim().replace(/^["']|["']$/g, '').trim();
}

function collectUsedImages(articlesDir, skipFile) {
  const used = new Set();
  if (!fs.existsSync(articlesDir)) return used;
  for (const file of fs.readdirSync(articlesDir)) {
    if (!file.endsWith('.md')) continue;
    const full = path.join(articlesDir, file);
    if (skipFile && path.resolve(full) === path.resolve(skipFile)) continue;
    const match = fs.readFileSync(full, 'utf8').match(/coverImage:\s*["']([^"']+)["']/);
    if (match) used.add(match[1].trim());
  }
  return used;
}

// Escolhe uma capa ainda não usada: primeiro na categoria, depois em todo o
// pool. Determinístico dado o slug — dois artigos diferentes tendem a receber
// capas diferentes, e reexecutar o mesmo artigo dá a mesma capa.
function pickCoverImage(category, usedImages, slug) {
  const pool = CURATED_IMAGES[category] || CURATED_IMAGES.noticias;
  let available = pool.filter((img) => !usedImages.has(img));
  if (available.length === 0) {
    available = Object.values(CURATED_IMAGES).flat().filter((img) => !usedImages.has(img));
  }
  if (available.length === 0) available = pool;

  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return available[hash % available.length];
}

function injectCoverImage(content, coverImageUrl) {
  const frontmatterEnd = content.indexOf('---', 4);
  if (frontmatterEnd === -1) return content;
  let before = content.slice(0, frontmatterEnd);
  const after = content.slice(frontmatterEnd);
  // Remove qualquer coverImage que o agente já tenha escrito: chave YAML
  // duplicada é erro de build.
  before = before.replace(/^coverImage:.*(\r?\n)?/gim, '');
  return `${before}coverImage: "${coverImageUrl}"\n${after}`;
}

async function main() {
  const input = process.argv[2];
  if (!input) {
    console.error('❌ Uso: node scripts/finalize-article.js <caminho-do-artigo.md>');
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), input);
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Arquivo não encontrado: ${inputPath}`);
    process.exit(1);
  }

  const articlesDir = path.resolve(process.cwd(), 'content/articles');
  let content = fs.readFileSync(inputPath, 'utf8').trim();

  // O agente às vezes envolve o arquivo inteiro numa cerca de código.
  if (content.startsWith('```')) {
    content = content.replace(/^```[a-z]*\n/i, '').replace(/\n```$/, '').trim();
  }

  content = normalizeFrontmatterQuotes(content);

  // --- Validação: recusa qualquer coisa que não seja um artigo publicável ---
  const hasFrontmatter = content.startsWith('---') && /\n---/.test(content.slice(3));
  const title = readFrontmatterField(content, 'title');
  const body = content.replace(/^---[\s\S]*?\n---/, '').trim();

  const problems = [];
  if (!hasFrontmatter) problems.push('frontmatter YAML ausente ou malformado');
  if (!title) problems.push('campo title ausente');
  if (body.length < 800) problems.push(`corpo curto demais (${body.length} caracteres, mínimo 800)`);
  if (!/^date:\s*"?\d{4}-\d{2}-\d{2}/m.test(content)) problems.push('campo date ausente ou fora do formato YYYY-MM-DD');

  const category = (readFrontmatterField(content, 'category') || 'noticias').toLowerCase();
  if (!['tutoriais', 'noticias', 'ferramentas'].includes(category)) {
    problems.push(`category inválida: "${category}" (use tutoriais, noticias ou ferramentas)`);
  }

  const internalLinks = (body.match(/\]\((\/(?:comparador|calculadora|prompts|gerador|glossario|changelog|ferramentas|blog\/)[^)]*)\)/g) || []).length;
  if (internalLinks < 2) problems.push(`apenas ${internalLinks} link(s) interno(s) no corpo (mínimo 2)`);

  const faqHeadings = (body.match(/^###\s+.+\?\s*$/gm) || []).length;
  if (!/^##\s+Perguntas Frequentes/m.test(body)) problems.push('seção "## Perguntas Frequentes" ausente');
  else if (faqHeadings < 3) problems.push(`FAQ com ${faqHeadings} pergunta(s) em H3 (mínimo 3 — sem H3 o rich snippet não é gerado)`);

  if (/\[cite:\s*\d/.test(body)) problems.push('artefato de grounding "[cite: N]" no texto');
  if (/vertexaisearch\.cloud\.google\.com/.test(body)) problems.push('URL intermediária do vertexaisearch no texto');

  if (problems.length > 0) {
    console.error('❌ Artigo REPROVADO — nada foi publicado. Corrija e rode de novo:');
    for (const p of problems) console.error(`   • ${p}`);
    process.exit(1);
  }

  const slug = slugify(title);
  const finalPath = path.join(articlesDir, `${slug}.md`);

  const usedImages = collectUsedImages(articlesDir, inputPath);
  const coverImageUrl = pickCoverImage(category, usedImages, slug);
  content = injectCoverImage(content, coverImageUrl);

  console.log('🧼 Pós-processando (artefatos, redirects, fontes fracas)...');
  content = await postprocessArticle(content, { verbose: true });

  console.log('🎯 Aplicando pacote SEO (description, imagens inline, links internos)...');
  content = enhanceSeo(content, { articlesDir, coverImageUrl, currentSlug: slug });

  fs.mkdirSync(articlesDir, { recursive: true });
  fs.writeFileSync(finalPath, content, 'utf8');

  // Remove o rascunho quando o nome final é outro.
  if (path.resolve(inputPath) !== path.resolve(finalPath)) {
    fs.unlinkSync(inputPath);
  }

  const words = content.split(/\s+/).length;
  console.log('\n✅ Artigo finalizado com sucesso!');
  console.log(`📁 Arquivo: ${finalPath}`);
  console.log(`🔗 Slug:    ${slug}`);
  console.log(`📌 Título:  "${title}"`);
  console.log(`🏷️  Categoria: ${category}  |  🖼️  Capa: ...${coverImageUrl.slice(-40)}`);
  console.log(`📊 ~${words} palavras  |  🔗 ${internalLinks} links internos  |  ❓ ${faqHeadings} perguntas no FAQ`);
}

main().catch((error) => {
  console.error('❌ Erro ao finalizar artigo:', error);
  process.exit(1);
});
