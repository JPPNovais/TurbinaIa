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
const { safeWriteDataFile } = require('./data-update-utils');
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ Erro: GEMINI_API_KEY não encontrada.');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function withRetry(fn, maxRetries = 4, baseDelayMs = 20000) {
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
  console.log('🔧 Iniciando atualização do Guia de Ferramentas de IA...');

  const filePath = path.resolve(process.cwd(), 'src/data/ai-tools.ts');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Arquivo src/data/ai-tools.ts não encontrado.');
    process.exit(1);
  }

  const currentContent = fs.readFileSync(filePath, 'utf8');
  const currentMonth = new Date().toISOString().slice(0, 7); // e.g. "2026-05"

  const prompt = `Você é o editor de tecnologia da Turbina IA, responsável pelo Guia de Ferramentas de IA.

Aqui está o conteúdo atual do arquivo ai-tools.ts:
\`\`\`typescript
${currentContent}
\`\`\`

A data atual é: ${currentMonth}

## Sua tarefa é atualizar este arquivo com as seguintes informações (pesquise na internet para garantir precisão):

### 1. Atualizar PREÇOS (campo pricingDetails)
Verifique os preços atuais de cada ferramenta. Use fontes oficiais (sites das empresas).
- Formato: "Plano Grátis: [limites]; Plano Pro: [preço]/mês ([benefícios]); Plano Enterprise: [preço] ([benefícios])"
- Inclua valores em USD e, quando disponível, BRL
- Se uma ferramenta mudou de preço, atualize o campo \`pricing\` ('Grátis', 'Freemium', 'Pago') também

### 2. Atualizar RANKING DE POPULARIDADE (campo popularityRank)
Pesquise dados de uso e adoção de usuários (Statista, SimilarWeb, relatórios de mercado).
- Atribua um número de 1 a 30 (1 = mais popular) baseado em:
  - Número de usuários ativos mensais
  - Crescimento recente
  - Citações em relatórios do setor
- Exemplos esperados: ChatGPT Plus ~1, GitHub Copilot ~2, Midjourney ~3, Claude ~4

### 3. Marcar ferramentas NOVAS (campo isNew)
- Defina \`isNew: true\` para ferramentas lançadas nos últimos 6 meses (após ${new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString().slice(0, 7)})
- Remova \`isNew\` de ferramentas que já passaram desse período

### 4. Adicionar NOVAS ferramentas relevantes
Se surgiram ferramentas de IA importantes desde a última atualização que não estão na lista, adicione-as seguindo a mesma interface.
Foque em ferramentas que:
- Têm mais de 100k usuários
- São de empresas reconhecidas
- Resolvem um caso de uso real

### 5. Atualizar o campo updatedAt
Defina \`updatedAt: '${currentMonth}'\` em todas as entradas que você modificar.

## Regras obrigatórias:
1. Mantenha EXATAMENTE a mesma estrutura TypeScript (interfaces, export const AI_TOOLS, export const CATEGORIES)
2. Não remova ferramentas existentes — apenas adicione ou atualize
3. Não altere campos que você não tem certeza (prefira deixar como está)
4. O campo \`popularityRank\` deve ser único para cada ferramenta (sem repetição)
5. Retorne APENAS o código TypeScript completo, sem markdown envolvendo o arquivo

## Interface de referência:
\`\`\`typescript
interface AITool {
  id: string;
  name: string;
  developer: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  useCases: string[];
  pricing: 'Grátis' | 'Freemium' | 'Pago';
  pricingDetails: string;      // Ex: "Grátis até 10k tokens/dia; Pro US$ 20/mês; Enterprise sob consulta"
  url: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  popularityRank?: number;     // 1-30, 1 = mais popular
  updatedAt?: string;          // 'YYYY-MM'
}
\`\`\``;

  try {
    console.log('🔍 Pesquisando preços e rankings atuais com Google Search...');

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      })
    );

    const updatedContent = cleanMarkdownResponse(response.text);

    if (
      updatedContent.includes('export interface AITool') &&
      updatedContent.includes('export const AI_TOOLS') &&
      updatedContent.includes('export const CATEGORIES')
    ) {
      const oldToolCount = (currentContent.match(/^\s*id:\s*'/gm) || []).length;
      const newToolCount = (updatedContent.match(/^\s*id:\s*'/gm) || []).length;
      const updatedCount = (updatedContent.match(/updatedAt:/g) || []).length;

      if (!safeWriteDataFile(fs, filePath, currentContent, updatedContent)) return;

      const addedCount = newToolCount - oldToolCount;
      console.log(`✅ Guia de Ferramentas atualizado!`);
      if (addedCount > 0) console.log(`   ➕ ${addedCount} nova(s) ferramenta(s) adicionada(s).`);
      console.log(`   🔄 ${updatedCount} ferramenta(s) com dados atualizados (preço, ranking).`);
    } else {
      console.error('❌ Resposta da IA não contém a estrutura esperada. Arquivo não alterado.');
      console.log('Prévia da resposta:', updatedContent.substring(0, 500));
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar ferramentas:', error);
  }
}

run();
