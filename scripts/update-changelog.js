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
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Erro: GEMINI_API_KEY não encontrada.');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function withRetry(fn, maxRetries = 3, baseDelayMs = 20000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isRetryable =
        error?.status === 503 || error?.status === 429 ||
        (error?.message && (
          error.message.includes('503') ||
          error.message.includes('UNAVAILABLE') ||
          error.message.includes('high demand')
        ));
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

function cleanMarkdownResponse(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('```typescript')) cleaned = cleaned.substring(13);
  else if (cleaned.startsWith('```javascript')) cleaned = cleaned.substring(13);
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

  // Extract the most recent date from the changelog to use as reference
  const dateMatches = currentContent.match(/date:\s*['"](\d{4}-\d{2})['"]/g) || [];
  const dates = dateMatches
    .map(d => d.match(/['"](\d{4}-\d{2})['"]/)?.[1])
    .filter(Boolean)
    .sort()
    .reverse();
  const mostRecentDate = dates[0] || '2025-01';

  const currentMonth = new Date().toISOString().slice(0, 7); // e.g. "2025-05"

  const prompt = `Você é o editor de tecnologia da Turbina IA, responsável pelo Monitor de Modelos de IA (changelog de lançamentos).

Aqui está o conteúdo atual do arquivo changelog.ts:
\`\`\`typescript
${currentContent}
\`\`\`

O evento mais recente no changelog é de: ${mostRecentDate}
A data atual é: ${currentMonth}

Instruções:
1. Pesquise na internet os principais lançamentos, atualizações e anúncios de modelos de IA que ocorreram desde ${mostRecentDate} até ${currentMonth}.
2. Foque em eventos de alto impacto de: OpenAI, Anthropic, Google DeepMind, Meta, Mistral AI, DeepSeek e outras empresas relevantes.
3. Para cada evento novo encontrado, crie uma entrada seguindo EXATAMENTE o tipo ChangelogEntry do arquivo:
   - id: string único em kebab-case (ex: 'gpt-5-2025')
   - date: 'YYYY-MM' (apenas ano-mês)
   - title: título descritivo em português
   - developer: nome da empresa
   - category: APENAS um dos valores: 'Lançamento' | 'Atualização' | 'Descontinuado' | 'Pesquisa'
   - description: 1-2 frases em português descrevendo o evento
   - highlights: array de 3-5 strings com os destaques principais
   - impact: APENAS 'Alto' | 'Médio' | 'Baixo'
4. Adicione as novas entradas NO INÍCIO do array CHANGELOG (as mais recentes primeiro).
5. Se não houver eventos novos relevantes desde ${mostRecentDate}, retorne o arquivo sem alterações.
6. Mantenha exatamente a mesma estrutura TypeScript (export interface ChangelogEntry, export const CHANGELOG).
7. Retorne APENAS o código TypeScript completo, sem markdown envolvendo o arquivo.`;

  try {
    const response = await withRetry(() =>
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      })
    );

    const updatedContent = cleanMarkdownResponse(response.text);

    if (
      updatedContent.includes('export interface ChangelogEntry') &&
      updatedContent.includes('export const CHANGELOG')
    ) {
      // Count entries to verify new ones were actually added
      const oldCount = (currentContent.match(/^\s*{$/gm) || []).length;
      const newCount = (updatedContent.match(/^\s*{$/gm) || []).length;

      fs.writeFileSync(filePath, updatedContent, 'utf8');

      if (newCount > oldCount) {
        console.log(`✅ Changelog atualizado! ${newCount - oldCount} novo(s) evento(s) adicionado(s).`);
      } else {
        console.log('✅ Changelog verificado — nenhum evento novo encontrado desde ' + mostRecentDate + '.');
      }
    } else {
      console.error('❌ Resposta da IA não contém a estrutura esperada. Arquivo não alterado.');
      console.log('Prévia da resposta:', updatedContent.substring(0, 500));
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar changelog:', error);
  }
}

run();
