const fs = require('fs');
const path = require('path');
const https = require('https');

// Pure JS function to load .env variables without external dependency
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  console.log('Aviso: Não foi possível carregar o arquivo .env automaticamente.');
}

const { GoogleGenAI } = require('@google/genai');

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Erro: A variável de ambiente GEMINI_API_KEY não foi encontrada.');
  console.error('Por favor, crie um arquivo .env na raiz do projeto com:');
  console.error('GEMINI_API_KEY=sua_chave_aqui');
  console.error('Ou execute o comando com a chave inline: GEMINI_API_KEY=sua_chave node scripts/generate-article.js "Tema"');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

// Helper to clean markdown block wrappers from LLM response
function cleanMarkdownResponse(text) {
  let cleaned = text.trim();

  const startMatch = cleaned.match(/^```([a-zA-Z0-9+-]+)?/);
  if (startMatch) {
    const fenceLength = startMatch[0].length;
    cleaned = cleaned.substring(fenceLength).trim();
  }

  if (cleaned.endsWith('```')) {
    cleaned = cleaned.substring(0, cleaned.length - 3).trim();
  }

  if (cleaned.toLowerCase().startsWith('yaml\n')) {
    cleaned = cleaned.substring(5).trim();
  } else if (cleaned.toLowerCase().startsWith('markdown\n')) {
    cleaned = cleaned.substring(9).trim();
  }

  return cleaned.trim();
}

// Helper to slugify strings for filenames
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Fetch a relevant image from Unsplash API (free tier: 50 req/hour)
// Requires UNSPLASH_ACCESS_KEY in .env — register at unsplash.com/developers
function fetchUnsplashImage(query, usedImages) {
  return new Promise((resolve) => {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) {
      resolve(null);
      return;
    }

    const searchQuery = encodeURIComponent(`${query} artificial intelligence technology`);
    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=15&orientation=landscape&client_id=${accessKey}`;

    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = json.results || [];
          // Find the first result whose URL hasn't been used yet
          const available = results.find(r => {
            const imgUrl = r.urls.regular;
            return !usedImages.has(imgUrl);
          });
          if (available) {
            console.log(`🖼️  Imagem Unsplash encontrada para o tema: "${available.description || available.alt_description || query}"`);
            resolve(available.urls.regular);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function withRetry(fn, maxRetries = 4, baseDelayMs = 20000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isRetryable = error?.status === 503 || error?.status === 429 ||
        (error?.message && (error.message.includes('503') || error.message.includes('UNAVAILABLE') || error.message.includes('high demand')));
      if (isRetryable && attempt < maxRetries) {
        const delay = baseDelayMs * attempt;
        console.log(`⏳ Gemini indisponível (tentativa ${attempt}/${maxRetries}). Aguardando ${delay / 1000}s antes de tentar novamente...`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw error;
      }
    }
  }
}

async function run() {
  let topic = process.argv[2];
  const today = new Date().toISOString().split('T')[0];

  console.log('⚡ Iniciando o Gerador de Artigos Turbina IA ⚡');

  // Step 1: Suggest a trend topic if none is supplied
  if (!topic) {
    console.log('Nenhum tema foi fornecido. Solicitando uma sugestão de tendência à IA via busca na internet...');
    try {
      const suggestResponse = await withRetry(() => ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Pesquise na internet as notícias mais importantes, recentes e impactantes de hoje (${today}) sobre Inteligência Artificial, tecnologia ou novas ferramentas. Com base nas notícias reais encontradas, sugira um único título/tema para um artigo de blog focado em atrair tráfego e otimizado para SEO. Retorne APENAS o título sugerido em uma única linha, sem aspas, explicações, markdown ou comentários adicionais. Exemplo de retorno: Lançamento do Gemini 1.5 Pro: A nova IA do Google com janela de contexto histórica`,
        config: {
          tools: [{ googleSearch: {} }]
        }
      }));
      topic = suggestResponse.text.trim();
      console.log(`🤖 Tema sugerido pela IA (baseado em buscas reais): "${topic}"`);
    } catch (error) {
      console.error('Erro ao obter sugestão de tema:', error);
      process.exit(1);
    }
  }

  console.log(`📝 Gerando artigo completo sobre: "${topic}" (com suporte a busca em tempo real)...`);

  // Step 2: Generate the article using Gemini 2.5 Flash with search tools
  const prompt = `Você é o redator principal do blog Turbina IA (turbinaia.com.br), especializado em inteligência artificial, ferramentas de produtividade e monetização online.
Seu objetivo é escrever um artigo em português impecável, envolvente, detalhado e altamente estruturado para SEO tradicional e otimizado para buscadores de IA (como Perplexity, SearchGPT, Gemini e Copilot) sobre o tema: "${topic}".

Como você tem acesso à pesquisa do Google em tempo real, use os resultados da busca para citar dados verídicos, especificações reais, nomes corretos de desenvolvedores, datas de lançamentos recentes e links reais para as ferramentas, se aplicável. Evite quaisquer informações fictícias ou inventadas sobre o tema.

O artigo gerado deve retornar no formato de um arquivo Markdown contendo um bloco YAML frontmatter no topo e o conteúdo do post logo abaixo. Não inclua blocos de código com a palavra "markdown" em volta do arquivo todo, retorne apenas o texto cru.

Instruções cruciais do formato:
---
title: [Título chamativo e otimizado para SEO]
description: [Meta descrição cativante com menos de 160 caracteres]
category: [Escolha uma destas categorias: tutoriais, noticias, ferramentas]
tags:
  - [Tag 1]
  - [Tag 2]
  - [Tag 3]
author: Redação Turbina IA
isFeatured: false
date: "${today}"
---

[Corpo do artigo em Markdown. Siga estas diretrizes de Otimização para Mecanismos de IA (GEO):]
1. **Introdução Direta e Resposta Rápida (TL;DR):** Inicie o artigo com uma introdução curta. Logo em seguida, crie um bloco de citação do tipo:
   > **Resposta Rápida (TL;DR):** [Escreva um resumo executivo direto e em negrito de 2 a 3 frases respondendo à principal pergunta do tema. Buscadores de IA utilizam esse bloco para citar o site diretamente.]
2. **Uso de Cabeçalhos e Subtítulos:** Use apenas ## e ### para as seções.
3. **Tabelas de Comparação e Dados Estruturados:** Sempre que o artigo envolver comparações de preços, prós/contras, recursos ou benchmarks, crie uma **Tabela em Markdown** limpa. Os modelos de linguagem de buscadores de IA dão preferência extrema a dados em tabelas na hora de sintetizar respostas.
4. **Fatos Densos e Fontes:** Diga nomes exatos, datas, estatísticas e versões.
5. **Seção de FAQ no final:** Adicione uma seção "## Perguntas Frequentes" ao final do post, respondendo de forma ultra direta e sucinta a 3 principais dúvidas comuns do usuário sobre o tema.
6. **Links Internos:** Quando o conteúdo for relevante, inclua ao menos um link interno para outras ferramentas do próprio site: [Comparador de IAs](/comparador), [Calculadora de Custos de IA](/calculadora) ou [Biblioteca de Prompts](/prompts). Isso ajuda os leitores a descobrirem mais recursos e melhora o ranqueamento do site.

Escreva um artigo longo (mínimo de 800 palavras), aprofundado, baseado em fatos reais da atualidade coletados da internet, com dicas práticas e que entregue muito valor real para quem está lendo.`;

  try {
    const response = await withRetry(() => ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    }));

    const rawContent = response.text;
    let cleanContent = cleanMarkdownResponse(rawContent);

    // Ensure frontmatter starts with '---'
    if (!cleanContent.startsWith('---')) {
      const firstDashIndex = cleanContent.indexOf('---');
      if (firstDashIndex > 0) {
        const headerPart = cleanContent.substring(0, firstDashIndex);
        if (headerPart.includes('title:') || headerPart.includes('description:')) {
          cleanContent = '---\n' + cleanContent;
        }
      }
    }

    // Ensure title and description are wrapped in quotes to prevent YAML parse errors
    let lines = cleanContent.split('\n');
    let inFrontmatter = false;
    let frontmatterBoundaries = 0;

    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed === '---') {
        frontmatterBoundaries++;
        if (frontmatterBoundaries === 1) inFrontmatter = true;
        if (frontmatterBoundaries === 2) inFrontmatter = false;
      }

      if (inFrontmatter) {
        if (lines[i].startsWith('title:')) {
          let value = lines[i].replace('title:', '').trim();
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          lines[i] = `title: "${value.replace(/"/g, '\\"')}"`;
        } else if (lines[i].startsWith('description:')) {
          let value = lines[i].replace('description:', '').trim();
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          lines[i] = `description: "${value.replace(/"/g, '\\"')}"`;
        }
      }
    }
    cleanContent = lines.join('\n');

    // Parse title and category from frontmatter
    let titleLine = cleanContent.split('\n').find(line => line.startsWith('title:'));
    let titleVal = topic;
    if (titleLine) {
      titleVal = titleLine.replace('title:', '').replace(/['"]/g, '').trim();
    }

    let categoryLine = cleanContent.split('\n').find(line => line.startsWith('category:'));
    let categoryVal = 'noticias';
    if (categoryLine) {
      categoryVal = categoryLine.replace('category:', '').replace(/['"]/g, '').trim().toLowerCase();
    }

    // Curated Unsplash images as fallback (used when UNSPLASH_ACCESS_KEY is not set)
    const curatedImages = {
      noticias: [
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1684163761691-f2ff5477e4ea?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1676277791608-ac54525aa94d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1686191129040-a1da773aba47?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1680474569854-81216b34417a?auto=format&fit=crop&w=1200&q=80'
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
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
      ],
      ferramentas: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
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
        'https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?auto=format&fit=crop&w=1200&q=80'
      ]
    };

    // Scan existing articles to collect all cover images already in use
    const articlesDir = path.resolve(process.cwd(), 'content/articles');
    const usedImages = new Set();
    if (fs.existsSync(articlesDir)) {
      const files = fs.readdirSync(articlesDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const filePath = path.join(articlesDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const match = content.match(/coverImage:\s*["']([^"']+)["']/);
          if (match) usedImages.add(match[1].trim());
        }
      }
    }

    // Try Unsplash API first; fall back to curated list
    let coverImageUrl = await fetchUnsplashImage(titleVal, usedImages);

    if (!coverImageUrl) {
      if (process.env.UNSPLASH_ACCESS_KEY) {
        console.log('⚠️  Unsplash API não retornou imagem disponível, usando lista curada.');
      }
      const imagesList = curatedImages[categoryVal] || curatedImages.noticias;
      let available = imagesList.filter(img => !usedImages.has(img));

      if (available.length === 0) {
        const allCurated = Object.values(curatedImages).flat();
        available = allCurated.filter(img => !usedImages.has(img));
      }
      if (available.length === 0) {
        available = curatedImages[categoryVal] || curatedImages.noticias;
      }

      coverImageUrl = available[Math.floor(Math.random() * available.length)];
    }

    // Inject coverImage into frontmatter before the closing ---
    const frontmatterEndIndex = cleanContent.indexOf('---', 4);
    if (frontmatterEndIndex !== -1) {
      const beforeEnd = cleanContent.substring(0, frontmatterEndIndex);
      const afterEnd = cleanContent.substring(frontmatterEndIndex);
      cleanContent = `${beforeEnd}coverImage: "${coverImageUrl}"\n${afterEnd}`;
    }

    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

    const slug = slugify(titleVal);
    const filePath = path.join(articlesDir, `${slug}.md`);
    fs.writeFileSync(filePath, cleanContent, 'utf8');

    console.log(`\n✅ Artigo gerado com sucesso!`);
    console.log(`📁 Salvo em: ${filePath}`);
    console.log(`🔗 Slug gerado: ${slug}`);
    console.log(`📌 Título final: "${titleVal}"`);

  } catch (error) {
    console.error('❌ Erro durante a geração do artigo:', error);
  }
}

run();
