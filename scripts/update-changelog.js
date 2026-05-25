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
  console.log('🗓️ Iniciando atualização do Monitor de Modelos (Changelog)...');

  const filePath = path.resolve(process.cwd(), 'src/data/changelog.ts');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Arquivo src/data/changelog.ts não encontrado.');
    process.exit(1);
  }

  const currentContent = fs.readFileSync(filePath, 'utf8');

  // Extract the most recent date and existing IDs
  const dateMatches = currentContent.match(/date:\s*['"](\d{4}-\d{2})['"]/g) || [];
  const dates = dateMatches
    .map(d => d.match(/['"](\d{4}-\d{2})['"]/)?.[1])
    .filter(Boolean)
    .sort()
    .reverse();
  const mostRecentDate = dates[0] || '2025-01';

  const existingIds = (currentContent.match(/id:\s*['"]([^'"]+)['"]/g) || [])
    .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
    .filter(Boolean);

  const currentMonth = new Date().toISOString().slice(0, 7);

  // Extract the first 3 existing entries as examples (without sending the whole file)
  const entriesMatch = currentContent.match(/export const CHANGELOG[^=]*=\s*\[([\s\S]*)/);
  const firstEntriesRaw = entriesMatch
    ? entriesMatch[1].split(/(?<=\},)\s*\{/).slice(0, 3).join('},\n  {').trimEnd()
    : '';
  const exampleEntries = firstEntriesRaw.substring(0, 2000);

  const prompt = `Você é o editor de tecnologia da Turbina IA, especializado em lançamentos de modelos de IA.

O changelog atual já cobre eventos até: ${mostRecentDate}
Data atual: ${currentMonth}

IDs já existentes (NÃO repita nenhum desses):
${existingIds.join(', ')}

Exemplos do formato usado no changelog (primeiras entradas):
\`\`\`typescript
${exampleEntries}
\`\`\`

## Sua tarefa
Pesquise os principais lançamentos de modelos de IA entre ${mostRecentDate} e ${currentMonth}.
Foque em eventos de alto impacto de: OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral AI, DeepSeek, xAI (Grok), Cohere.

Retorne APENAS um array TypeScript com as novas entradas (sem export const, sem interface, apenas o array):
\`\`\`typescript
[
  {
    id: 'exemplo-id-2026',
    date: 'YYYY-MM',
    title: 'Título em português',
    developer: 'Nome da Empresa',
    category: 'Lançamento',
    description: '1-2 frases descrevendo o evento em português.',
    highlights: [
      'Destaque 1 com dado concreto',
      'Destaque 2',
      'Destaque 3',
    ],
    impact: 'Alto',
  },
]
\`\`\`

Regras:
- category: APENAS 'Lançamento' | 'Atualização' | 'Descontinuado' | 'Pesquisa'
- impact: APENAS 'Alto' | 'Médio' | 'Baixo'
- id: kebab-case único, diferente de todos os IDs listados acima
- date: 'YYYY-MM' (apenas ano-mês)
- Se não há eventos novos relevantes desde ${mostRecentDate}, retorne um array vazio: []
- Retorne APENAS o array TypeScript, sem texto explicativo`;

  try {
    console.log('🔍 Pesquisando novos lançamentos de IA com Google Search...');

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      })
    );

    const rawResponse = cleanMarkdownResponse(response.text);

    // Parse the array from the response
    const arrayMatch = rawResponse.match(/\[\s*[\s\S]*\]/);
    if (!arrayMatch) {
      console.log('ℹ️ Nenhum evento novo encontrado ou resposta inválida.');
      console.log('Prévia:', rawResponse.substring(0, 300));
      return;
    }

    const arrayText = arrayMatch[0].trim();

    // Check if it's an empty array
    if (arrayText === '[]' || arrayText.replace(/\s/g, '') === '[]') {
      console.log('✅ Changelog verificado — nenhum evento novo desde ' + mostRecentDate + '.');
      return;
    }

    // Count new entries
    const newEntryCount = (arrayText.match(/id:\s*['"][^'"]+['"]/g) || []).length;

    if (newEntryCount === 0) {
      console.log('ℹ️ Nenhuma entrada válida encontrada na resposta.');
      return;
    }

    // Validate that no existing IDs are reused
    const newIds = (arrayText.match(/id:\s*['"]([^'"]+)['"]/g) || [])
      .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
      .filter(Boolean);
    const duplicateIds = newIds.filter(id => existingIds.includes(id));
    if (duplicateIds.length > 0) {
      console.warn(`⚠️ IDs duplicados detectados: ${duplicateIds.join(', ')} — ignorando.`);
      return;
    }

    // Inject new entries at the start of the CHANGELOG array.
    // Match the `[` that ACTUALLY opens the array (after `=`), not the `[` from
    // the `ChangelogEntry[]` type annotation that comes earlier in the declaration.
    const openerMatch = currentContent.match(/export\s+const\s+CHANGELOG\b[^=]*=\s*\[/);
    if (!openerMatch) {
      console.error('❌ Não foi possível encontrar o array CHANGELOG no arquivo.');
      return;
    }
    const arrayStart = openerMatch.index + openerMatch[0].length - 1; // index of the `[` itself

    // Build new entries block. Strip any trailing comma from the model output so we don't
    // accidentally emit `},,` when concatenated with the `,` separator below.
    const innerEntries = arrayText.slice(1, -1).trim().replace(/,\s*$/, '');
    const updatedContent =
      currentContent.slice(0, arrayStart + 1) +
      '\n  ' +
      innerEntries +
      ',\n  ' +
      currentContent.slice(arrayStart + 1).trimStart();

    if (!safeWriteDataFile(fs, filePath, currentContent, updatedContent)) return;
    console.log(`✅ Changelog atualizado! ${newEntryCount} novo(s) evento(s) adicionado(s).`);
    newIds.forEach(id => console.log(`   ✚ ${id}`));

  } catch (error) {
    console.error('❌ Erro ao atualizar changelog:', error);
  }
}

run();
