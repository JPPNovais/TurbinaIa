const fs = require('fs');
const path = require('path');

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
  // Remove ```markdown ... ``` tags if the model enclosed the whole file in them
  if (cleaned.startsWith('```markdown')) {
    cleaned = cleaned.substring(11);
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

// Helper to slugify strings for filenames
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // separate accent marks from letters
    .replace(/[\u0300-\u036f]/g, '') // remove accent marks
    .replace(/[^\w\s-]/g, '') // remove all non-word chars
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove duplicate hyphens
    .trim();
}

async function run() {
  let topic = process.argv[2];
  const today = new Date().toISOString().split('T')[0];

  console.log('⚡ Iniciando o Gerador de Artigos Turbina IA ⚡');

  // Step 1: Suggest a trend topic if none is supplied
  if (!topic) {
    console.log('Nenhum tema foi fornecido. Solicitando uma sugestão de tendência à IA via busca na internet...');
    try {
      const suggestResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Pesquise na internet as notícias mais importantes, recentes e impactantes de hoje (${today}) sobre Inteligência Artificial, tecnologia ou novas ferramentas. Com base nas notícias reais encontradas, sugira um único título/tema para um artigo de blog focado em atrair tráfego e otimizado para SEO. Retorne APENAS o título sugerido em uma única linha, sem aspas, explicações, markdown ou comentários adicionais. Exemplo de retorno: Lançamento do Gemini 1.5 Pro: A nova IA do Google com janela de contexto histórica`,
        config: {
          tools: [{ googleSearch: {} }]
        }
      });
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
Seu objetivo é escrever um artigo em português impecável, envolvente, detalhado e altamente estruturado para SEO e Google AdSense sobre o tema: "${topic}".

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

[Corpo do artigo em Markdown. Use títulos ## e ###, listas ordenadas ou não ordenadas, negritos para destacar conceitos, links de referência reais e citações marcantes (blockquote usando >) para enriquecer a leitura. NÃO utilize títulos de nível # no corpo do artigo, use apenas ## e ### para as seções.]

Escreva um artigo longo (mínimo de 800 palavras), aprofundado, baseado em fatos reais da atualidade coletados da internet, com dicas práticas e que entregue muito valor real para quem está lendo.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const rawContent = response.text;
    let cleanContent = cleanMarkdownResponse(rawContent);

    // Parse the generated title from frontmatter or fall back to the prompt
    let titleLine = cleanContent.split('\n').find(line => line.startsWith('title:'));
    let titleVal = topic;
    if (titleLine) {
      titleVal = titleLine.replace('title:', '').replace(/['"]/g, '').trim();
    }

    // Parse category from frontmatter
    let categoryLine = cleanContent.split('\n').find(line => line.startsWith('category:'));
    let categoryVal = 'noticias'; // default
    if (categoryLine) {
      categoryVal = categoryLine.replace('category:', '').replace(/['"]/g, '').trim().toLowerCase();
    }

    // Curated Unsplash images for each category
    const curatedImages = {
      noticias: [
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
      ],
      tutoriais: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
      ],
      ferramentas: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80'
      ]
    };

    const imagesList = curatedImages[categoryVal] || curatedImages.noticias;
    const coverImageUrl = imagesList[Math.floor(Math.random() * imagesList.length)];

    // Inject coverImage into the frontmatter before the closing ---
    const frontmatterEndIndex = cleanContent.indexOf('---', 4);
    if (frontmatterEndIndex !== -1) {
      const beforeEnd = cleanContent.substring(0, frontmatterEndIndex);
      const afterEnd = cleanContent.substring(frontmatterEndIndex);
      cleanContent = `${beforeEnd}coverImage: "${coverImageUrl}"\n${afterEnd}`;
    }

    const slug = slugify(titleVal);
    const articlesDir = path.resolve(process.cwd(), 'content/articles');
    
    // Ensure the folder exists
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

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
