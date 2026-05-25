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
  console.log('📖 Iniciando atualização do Glossário de IA...');

  const filePath = path.resolve(process.cwd(), 'src/data/glossario.ts');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Arquivo src/data/glossario.ts não encontrado.');
    process.exit(1);
  }

  const currentContent = fs.readFileSync(filePath, 'utf8');

  // Extract existing IDs and terms
  const existingIds = (currentContent.match(/id:\s*['"]([^'"]+)['"]/g) || [])
    .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
    .filter(Boolean);

  const existingTerms = (currentContent.match(/term:\s*['"]([^'"]+)['"]/g) || [])
    .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
    .filter(Boolean);

  const categoriesMatch = currentContent.match(/export const GLOSSARIO_CATEGORIES\s*=\s*\[([^\]]+)\]/);
  const categories = categoriesMatch
    ? categoriesMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')).filter(c => c !== 'Todos') || []
    : ['Fundamentos', 'Modelos & Arquitetura', 'Treinamento', 'Aplicações', 'Segurança & Ética', 'Ferramentas & APIs'];

  // Extract a sample term as format reference
  const sampleMatch = currentContent.match(/\{[\s\S]*?id:[\s\S]*?definition:[\s\S]*?\}/);
  const sampleEntry = sampleMatch ? sampleMatch[0].substring(0, 600) : '';

  const currentMonth = new Date().toISOString().slice(0, 7);

  const prompt = `Você é um especialista em Inteligência Artificial e linguagem técnica acessível, escrevendo para o público brasileiro.

Data atual: ${currentMonth}
Categorias disponíveis: ${categories.join(', ')}

Termos já existentes (NÃO repita nenhum):
${existingTerms.join(', ')}

IDs já existentes (NÃO repita nenhum):
${existingIds.join(', ')}

Exemplo do formato usado:
\`\`\`typescript
${sampleEntry}
\`\`\`

## Sua tarefa
Pesquise termos e conceitos de IA que surgiram ou se tornaram populares recentemente (2024-2026) e que ainda NÃO estão na lista acima.

Crie 4 a 6 novos termos para o glossário. Priorize:
- Termos novos de agentes de IA (Agentic AI, MCP, Tool Use, etc.)
- Conceitos de modelos multimodais recentes
- Terminologia de raciocínio (Chain-of-Thought, Reasoning Models, etc.)
- Conceitos de segurança e alinhamento de IA modernos
- Termos de APIs e infraestrutura de IA usados por desenvolvedores

Cada definição deve ser:
- Clara e acessível para leigos, mas tecnicamente precisa
- Em português do Brasil
- Com exemplo concreto sempre que possível

Retorne APENAS um array TypeScript (sem export const):
\`\`\`typescript
[
  {
    id: 'nome-do-termo',
    term: 'Nome do Termo (Sigla)',
    category: 'UmaDasCategorias',
    definition: 'Definição clara e acessível em português.',
    example: 'Exemplo prático e concreto (opcional mas recomendado).',
    relatedTerms: ['Termo Relacionado 1', 'Termo Relacionado 2'],
  },
]
\`\`\`

Regras:
- category: APENAS um dos valores: ${categories.map(c => `'${c}'`).join(', ')}
- id: kebab-case único, diferente dos IDs listados acima
- relatedTerms: deve referenciar termos que já existem na lista de termos existentes ou outros novos que você esteja criando
- Retorne APENAS o array TypeScript, sem texto explicativo`;

  try {
    console.log('🔍 Pesquisando novos termos de IA com Google Search...');

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
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
      console.log('ℹ️ Nenhum termo novo gerado.');
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

    // Append new terms before the closing ]; of GLOSSARIO array
    const closingBracket = currentContent.lastIndexOf('];');
    if (closingBracket === -1) {
      console.error('❌ Não foi possível encontrar o fechamento do array GLOSSARIO.');
      return;
    }

    // Strip any trailing comma from the model output to avoid `},,` when we add ours below.
    const innerEntries = arrayText.slice(1, -1).trim().replace(/,\s*$/, '');
    const updatedContent =
      currentContent.slice(0, closingBracket) +
      '  ' + innerEntries + ',\n' +
      currentContent.slice(closingBracket);

    if (!safeWriteDataFile(fs, filePath, currentContent, updatedContent)) return;
    console.log(`✅ Glossário atualizado! ${newIds.length} novo(s) termo(s) adicionado(s).`);
    newIds.forEach(id => console.log(`   ✚ ${id}`));

  } catch (error) {
    console.error('❌ Erro ao atualizar glossário:', error);
  }
}

run();
