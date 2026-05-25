const fs = require('fs');
const path = require('path');

// Load .env without external dependency
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        if (!process.env[key]) process.env[key] = value;
      }
    });
  }
} catch (e) {
  console.log('Aviso: Não foi possível carregar o arquivo .env.');
}

const { GoogleGenAI } = require('@google/genai');
const { safeWriteDataFile, withRetry } = require('./data-update-utils');
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Erro: GEMINI_API_KEY não encontrada.');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });


function cleanMarkdownResponse(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('```typescript')) cleaned = cleaned.substring(13);
  else if (cleaned.startsWith('```javascript')) cleaned = cleaned.substring(13);
  else if (cleaned.startsWith('```json')) cleaned = cleaned.substring(7);
  else if (cleaned.startsWith('```')) cleaned = cleaned.substring(3);
  if (cleaned.endsWith('```')) cleaned = cleaned.substring(0, cleaned.length - 3);
  return cleaned.trim();
}

async function run() {
  console.log('💬 Iniciando atualização da Biblioteca de Prompts...');

  const filePath = path.resolve(process.cwd(), 'src/data/prompts.ts');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Arquivo src/data/prompts.ts não encontrado.');
    process.exit(1);
  }

  const currentContent = fs.readFileSync(filePath, 'utf8');

  // Extract existing IDs and categories
  const existingIds = (currentContent.match(/id:\s*['"]([^'"]+)['"]/g) || [])
    .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
    .filter(Boolean);

  const categoriesMatch = currentContent.match(/export const PROMPT_CATEGORIES\s*=\s*\[([^\]]+)\]/);
  const categories = categoriesMatch
    ? categoriesMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')).filter(c => c !== 'Todos') || []
    : ['Marketing', 'Desenvolvimento', 'Produtividade', 'Redes Sociais', 'Escrita', 'Negócios', 'IA & Automação', 'Carreira', 'Educação', 'Finanças'];

  // Extract a sample prompt as format reference
  const sampleMatch = currentContent.match(/\{[\s\S]*?id:[\s\S]*?tags:[\s\S]*?\}/);
  const sampleEntry = sampleMatch ? sampleMatch[0].substring(0, 600) : '';

  const currentMonth = new Date().toISOString().slice(0, 7);

  const prompt = `Você é um especialista em produtividade com IA e criador de prompts para o público brasileiro.

Data atual: ${currentMonth}
Categorias disponíveis: ${categories.join(', ')}

IDs já existentes (NÃO repita nenhum):
${existingIds.join(', ')}

Exemplo do formato usado:
\`\`\`typescript
${sampleEntry}
\`\`\`

## Sua tarefa
Crie 3 a 5 prompts novos de alta qualidade para usuários brasileiros. Escolha categorias que estejam sub-representadas ou crie prompts para as tendências atuais de uso de IA (em 2025-2026: agentes, automação, análise de dados, criação de conteúdo multimodal, etc.).

Cada prompt deve ser:
- Prático e imediatamente utilizável
- Com template rico e bem estruturado, usando variáveis entre colchetes [como esta]
- Focado em entregar resultado real, não apenas demonstrar conceito
- Em português do Brasil

Retorne APENAS um array TypeScript (sem export const):
\`\`\`typescript
[
  {
    id: 'categoria-nome-slug',
    title: 'Título Claro e Descritivo',
    category: 'UmaDasCategorias',
    description: 'Uma frase descrevendo o que o prompt faz.',
    template: 'O template completo do prompt com [variáveis] entre colchetes.',
    tags: ['Tag1', 'Tag2', 'Tag3'],
  },
]
\`\`\`

Regras:
- category: APENAS um dos valores: ${categories.map(c => `'${c}'`).join(', ')}
- id: kebab-case único, diferente dos IDs listados acima
- tags: 2-4 strings curtas e relevantes
- Retorne APENAS o array TypeScript, sem texto explicativo`;

  try {
    console.log('🔍 Gerando novos prompts com Gemini...');

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      })
    );

    const rawResponse = cleanMarkdownResponse(response.text);
    const arrayMatch = rawResponse.match(/\[\s*[\s\S]*\]/);

    if (!arrayMatch) {
      console.error('❌ Resposta não contém um array válido.');
      console.log('Prévia:', rawResponse.substring(0, 300));
      return;
    }

    const arrayText = arrayMatch[0].trim();

    if (arrayText === '[]' || arrayText.replace(/\s/g, '') === '[]') {
      console.log('ℹ️ Nenhum prompt novo gerado.');
      return;
    }

    const newIds = (arrayText.match(/id:\s*['"]([^'"]+)['"]/g) || [])
      .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
      .filter(Boolean);

    if (newIds.length === 0) {
      console.log('ℹ️ Nenhuma entrada válida encontrada.');
      return;
    }

    const duplicateIds = newIds.filter(id => existingIds.includes(id));
    if (duplicateIds.length > 0) {
      console.warn(`⚠️ IDs duplicados detectados: ${duplicateIds.join(', ')} — ignorando.`);
      return;
    }

    // Append new prompts before the closing ]; of PROMPTS array
    const closingBracket = currentContent.lastIndexOf('];');
    if (closingBracket === -1) {
      console.error('❌ Não foi possível encontrar o fechamento do array PROMPTS.');
      return;
    }

    // Strip any trailing comma from the model output to avoid `},,` when we add ours below.
    const innerEntries = arrayText.slice(1, -1).trim().replace(/,\s*$/, '');
    const updatedContent =
      currentContent.slice(0, closingBracket) +
      '  ' + innerEntries + ',\n' +
      currentContent.slice(closingBracket);

    if (!safeWriteDataFile(fs, filePath, currentContent, updatedContent)) return;
    console.log(`✅ Biblioteca de Prompts atualizada! ${newIds.length} novo(s) prompt(s) adicionado(s).`);
    newIds.forEach(id => console.log(`   ✚ ${id}`));

  } catch (error) {
    console.error('❌ Erro ao atualizar prompts:', error);
  }
}

run();
