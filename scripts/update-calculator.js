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

const { safeWriteDataFile, withRetry } = require('./data-update-utils');
const ai = require('./llm');
const apiKey = process.env.CLAUDE_CODE_OAUTH_TOKEN || process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Erro: defina CLAUDE_CODE_OAUTH_TOKEN (Claude/plano) ou GEMINI_API_KEY (fallback).');
  process.exit(1);
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
  console.log('💰 Iniciando atualização dos preços da Calculadora de APIs...');

  const filePath = path.resolve(process.cwd(), 'src/data/calculator-models.ts');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Arquivo src/data/calculator-models.ts não encontrado.');
    process.exit(1);
  }

  const currentContent = fs.readFileSync(filePath, 'utf8');

  const prompt = `Você é o engenheiro de dados da Turbina IA. Sua tarefa é pesquisar os preços atuais de APIs de modelos de IA e atualizar o arquivo TypeScript da calculadora de custos.

Aqui está o conteúdo atual do arquivo:
\`\`\`typescript
${currentContent}
\`\`\`

Instruções:
1. Pesquise na internet os preços atuais de API para CADA modelo listado no arquivo. Consulte as páginas oficiais de pricing:
   - OpenAI: platform.openai.com/docs/pricing
   - Anthropic: anthropic.com/pricing
   - Google: ai.google.dev/pricing
   - DeepSeek: platform.deepseek.com/docs/pricing
   - Meta (via Together/Fireworks): preços de mercado comuns
2. Atualize os campos inputPricePerM e outputPricePerM (USD por 1 milhão de tokens) com os valores corretos e atuais.
3. Se um modelo listado foi descontinuado ou substituído, troque pelo seu sucessor direto mantendo o mesmo slot.
4. Se houver um novo modelo relevante que não está na lista e vale incluir (ex: nova versão principal de GPT, Claude ou Gemini), adicione-o. Limite total: 15 modelos.
5. Atualize o campo contextWindow se houver mudança.
6. Mantenha exatamente a mesma estrutura TypeScript (export interface CalculatorModel, export const AI_MODELS, etc.).
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
      updatedContent.includes('export interface CalculatorModel') &&
      updatedContent.includes('export const AI_MODELS')
    ) {
      if (!safeWriteDataFile(fs, filePath, currentContent, updatedContent)) return;
      console.log('✅ src/data/calculator-models.ts atualizado com preços em tempo real!');
    } else {
      console.error('❌ Resposta da IA não contém a estrutura esperada. Arquivo não alterado.');
      console.log('Prévia da resposta:', updatedContent.substring(0, 500));
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar calculadora:', error);
  }
}

run();
