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
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

function cleanMarkdownResponse(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('```typescript')) {
    cleaned = cleaned.substring(13);
  } else if (cleaned.startsWith('```javascript')) {
    cleaned = cleaned.substring(13);
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

async function run() {
  console.log('⚡ Iniciando a Atualização de Modelos de IA ⚡');
  const filePath = path.resolve(process.cwd(), 'src/data/ai-models.ts');
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ Erro: Arquivo src/data/ai-models.ts não encontrado.');
    process.exit(1);
  }
  
  const currentContent = fs.readFileSync(filePath, 'utf8');
  
  const prompt = `Você é o engenheiro de dados da Turbina IA. Sua tarefa é analisar a internet e atualizar os dados no arquivo TypeScript de modelos de IA (${filePath}).
Aqui está o conteúdo atual do arquivo:
\`\`\`typescript
${currentContent}
\`\`\`

Instruções:
1. Realize buscas na internet em tempo real sobre cada uma das ferramentas listadas no arquivo (ChatGPT/GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3/3.1/3.2, Midjourney, DALL-E 3, Stable Diffusion, Make.com) para verificar atualizações no mercado brasileiro e internacional.
2. Identifique e atualize se houve:
   - Mudanças de preços (pricing).
   - Novos recursos importantes ou mudanças drásticas de prós/contras (pros/cons).
   - Novas versões principais de modelos de IA (ex: se houver alguma versão superior a GPT-4o ou Claude 3.5 Sonnet, atualize o nome e descrição).
   - Pequenos ajustes justificados nas pontuações de score (0 a 5).
3. Mantenha exatamente a mesma estrutura de tipos de TypeScript intacta (a interface AIModel, o export const aiModels e todos os imports).
4. Retorne APENAS o código completo do arquivo TypeScript pronto para ser gravado, sem comentários explicativos externos ou blocos markdown envolvendo todo o arquivo.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    
    const updatedContent = cleanMarkdownResponse(response.text);
    
    // Safety check: make sure the response contains the export const aiModels and export interface AIModel
    if (updatedContent.includes('export const aiModels') && updatedContent.includes('export interface AIModel')) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log('✅ Arquivo src/data/ai-models.ts atualizado com sucesso com dados em tempo real!');
    } else {
      console.error('❌ Erro: O código gerado pela IA não parece conter a estrutura correta.');
      console.log('Resposta recebida:', updatedContent.substring(0, 500) + '...');
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar os modelos de IA:', error);
  }
}

run();
