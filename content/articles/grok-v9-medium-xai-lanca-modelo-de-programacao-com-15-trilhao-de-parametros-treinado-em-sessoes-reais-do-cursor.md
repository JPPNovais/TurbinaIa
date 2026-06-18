---
title: "Grok V9-Medium: xAI Lança Modelo de Programação com 1,5 Trilhão de Parâmetros Treinado em Sessões Reais do Cursor"
description: "A xAI lança o Grok V9-Medium, modelo de 1,5T de parâmetros treinado em dados reais do Cursor, no mesmo dia em que a SpaceX fecha a aquisição por US$ 60 bi."
category: noticias
tags:
  - xAI
  - Grok
  - Programação com IA
  - Cursor
  - NVIDIA Blackwell
author: Redação Turbina IA
isFeatured: false
date: "2026-06-18"
coverImage: "https://images.unsplash.com/photo-1717143587138-2532a35ce9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTg1Mzd8MHwxfHNlYXJjaHwxfHxHcm9rJTIwVjktTWVkaXVtJTNBJTIweEFJJTIwTGFuJUMzJUE3YSUyME1vZGVsbyUyMGRlJTIwUHJvZ3JhbWElQzMlQTclQzMlQTNvJTIwY29tJTIwMSUyQzUlMjBUcmlsaCVDMyVBM28lMjBkZSUyMFBhciVDMyVBMm1ldHJvcyUyMFRyZWluYWRvJTIwZW0lMjBTZXNzJUMzJUI1ZXMlMjBSZWFpcyUyMGRvJTIwQ3Vyc29yJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMHRlY2hub2xvZ3l8ZW58MHwwfHx8MTc4MTc0MjQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
---

No dia 16 de junho de 2026, dois eventos chegaram juntos — e a coincidência era tudo menos acidental. Na mesma manhã em que a SpaceX assinou o acordo definitivo de aquisição da Anysphere, empresa criadora do editor de código com IA Cursor, por [US$ 60 bilhões em ações](https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/), o Grok V9-Medium — o mais novo modelo de fundação da xAI, com 1,5 trilhão de parâmetros e treinado diretamente em dados reais de desenvolvedores que usam o Cursor — entrava em sua janela de lançamento público. A convergência não foi coincidência: foi a conclusão de uma arquitetura estratégica que Elon Musk vem montando desde pelo menos abril deste ano.

O anúncio original da conclusão do treinamento do V9-Medium aconteceu em 25 de maio, quando Musk publicou no X que o novo modelo havia completado sua fase de pré-treinamento. O detalhe mais comentado nos dias que se seguiram não foi o número de parâmetros — imponente, mas esperado — e sim a origem dos dados de treino suplementares: sessões reais de desenvolvedores dentro do Cursor, o editor de código com IA utilizado por mais de um milhão de programadores em empresas como OpenAI, Stripe e Perplexity. Conforme [reportou o TechTimes em maio](https://www.techtimes.com/articles/317328/20260528/grok-ai-new-model-triples-parameter-count-targets-coding-lead-release-expected-mid-june.htm), o ajuste fino supervisionado já estava em andamento à época, o aprendizado por reforço estava prestes a começar e uma janela de lançamento de duas a três semanas havia sido confirmada pelo próprio Musk.

O que a xAI está tentando fazer com o Grok V9-Medium é algo mais específico do que simplesmente lançar um modelo maior: é construir uma vantagem técnica na área onde o Grok historicamente ficou para trás — o desempenho em tarefas reais de programação. Para isso, a empresa apostou em um tipo de dado que nenhum concorrente possuía em tal escala: o registro detalhado de como engenheiros profissionais realmente trabalham com IA para escrever código de produção, desde a descrição inicial do problema até a aprovação ou rejeição de cada sugestão gerada pela máquina.

> **Resposta Rápida (TL;DR):** A xAI concluiu o treinamento do Grok V9-Medium, um modelo de 1,5 trilhão de parâmetros — três vezes o tamanho do modelo atual em produção — com foco explícito em programação, usando dados reais de sessões de desenvolvedores do Cursor. O lançamento público ocorre em junho de 2026, no mesmo período em que a SpaceX fechou a aquisição do Cursor por US$ 60 bilhões. O V9-Medium não é o Grok 5: o modelo flagship de 6 trilhões de parâmetros ainda está em treinamento.

## O que é o Grok V9-Medium — e o que ele não é

Para entender o V9-Medium, é preciso primeiro desfazer uma confusão que dominou parte da cobertura das últimas semanas: este modelo não é o Grok 5. O flagship de próxima geração da xAI, com estimados 6 trilhões de parâmetros totais em arquitetura Mixture-of-Experts, ainda estava em treinamento nos clusters Colossus 2 em Memphis, no Tennessee, com probabilidade de lançamento até o fim de junho de 2026 estimada em apenas 12% pelos mercados de previsão, conforme documentou o [ChatForest em análise técnica publicada em 1.º de junho](https://chatforest.com/builders-log/xai-grok-v9-medium-1-5t-coding-model-mid-june-2026-builder-guide/).

O V9-Medium é um produto distinto: o modelo de produção projetado para ser entregue agora, com um mandato específico de fechar a lacuna de desempenho em codificação contra Claude e GPT-5.5. Quem acompanha o [Monitor de Modelos de IA](/changelog) já conhece o Grok 4 — a série de produtos atual baseada no modelo v8-small de 500 bilhões de parâmetros, que está em produção há quase um ano. O V9-Medium triplica esse volume, chegando a 1,5 trilhão de parâmetros, e foi otimizado especificamente para a arquitetura NVIDIA Blackwell.

| Modelo | Parâmetros totais | Foco principal | Status (junho/2026) |
|---|---|---|---|
| Grok v8-small (Grok 4) | ~500 bilhões | Uso geral | Em produção |
| Grok V9-Medium | ~1,5 trilhão | Programação | Lançamento iminente |
| Grok 5 (estimado) | ~6 trilhões | Frontier / multimodal | Em treinamento |

O próprio Musk foi direto ao caracterizar o v8-small em uso: descreveu-o publicamente como "just 0.5T" e admitiu que o modelo carecia de dados de treinamento importantes. O V9-Medium não é uma atualização incremental — é a reconstrução da base de conhecimento do Grok a partir de uma fonte de dados qualitativamente diferente de tudo que os principais modelos de código usaram até agora.


![Imagem ilustrativa sobre Grok V9-Medium: xAI Lança Modelo de Programação com 1,5 Trilhão de Parâmetros Treinado em Sessões Reais do Cur](https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80)

## A Escolha que Muda o Jogo: Dados Reais de Sessões de Desenvolvedores

O detalhe técnico mais consequente do anúncio do V9-Medium não é a contagem de parâmetros. É a composição do conjunto de dados de treinamento.

A maioria dos modelos de código é treinada predominantemente em repositórios públicos do GitHub — capturas estáticas do código que chegou à versão final. Esse corpus ensina ao modelo sintaxe, padrões de design e o resultado esperado de uma tarefa de programação. O que ele não captura é o processo: como um engenheiro real descreve um requisito ambíguo, como navega por uma base de código com centenas de arquivos, como itera em cima de uma solução parcial, como decide o que descartar quando a IA erra.

O Cursor gera exatamente esse tipo de dado em escala industrial. Com [mais de um milhão de desenvolvedores ativos, US$ 4 bilhões em receita anualizada e 64% das empresas da Fortune 500 com o produto implantado](https://www.techtimes.com/articles/318495/20260616/grok-v9-medium-arrives-spacex-seals-cursor-developers-face-model-choice-risk.htm), a plataforma produz continuamente sessões de trabalho real — prompts de engenheiros, edições de código, correções de bugs, refatorações multi-arquivo — que representam a "folha de respostas" do exame que os modelos de código precisam aprender a passar. Como resumiu a análise do [Techloy](https://www.techloy.com/xai-says-grok-v9-medium-is-almost-here-should-claude-and-chatgpt-be-worried/), treinar no Cursor significa que o Grok aprendeu com a forma como desenvolvedores reais trabalham, não apenas com código público do GitHub.

### Compaction-in-the-loop: a técnica por trás do diferencial

A razão pela qual os dados do Cursor são tecnicamente valiosos vai além da quantidade. Os engenheiros da Anysphere desenvolveram o que chamam de **compaction-in-the-loop reinforcement learning**: o modelo é treinado para autocomprimir milhares de tokens de contexto de trabalho até aproximadamente 1.000 tokens e, em seguida, avaliado sobre sua capacidade de continuar uma tarefa de codificação de longo horizonte após essa compressão. Se o modelo resumir mal e perder uma variável crítica ou uma correção de bug anterior, ele falha na tarefa e recebe uma recompensa negativa.

O resultado, segundo a [análise da TechTimes sobre o fechamento do negócio do Cursor](https://www.techtimes.com/articles/318495/20260616/grok-v9-medium-arrives-spacex-seals-cursor-developers-face-model-choice-risk.htm), é um modelo que aprende exatamente quais informações o fluxo de trabalho de um desenvolvedor precisa reter — e aprende isso a partir de milhões de sessões reais, não de tarefas de treinamento construídas artificialmente. Incorporar o Cursor ao treinamento do V9-Medium significa que a xAI integrou essa compreensão de contexto de longo horizonte diretamente nos pesos do modelo desde o início.

Para desenvolvedores que usam ferramentas de IA no dia a dia, a implicação prática é direta: um modelo treinado nesse tipo de dado tende a completar implementações parciais com mais coerência, entender a intenção a partir de contexto incompleto e fazer edições que preservam o estilo do código ao redor — precisamente as tarefas sub-representadas em modelos treinados apenas em código finalizado.

## A Aquisição do Cursor por US$ 60 Bilhões: Não Foi Por Acaso

Em abril de 2026, a SpaceX havia anunciado um acordo com a Anysphere que gerou perguntas na comunidade técnica: a empresa obtinha a opção de adquirir o Cursor por US$ 60 bilhões ou pagar US$ 10 bilhões por trabalho colaborativo caso a opção não fosse exercida até o final do ano. A [Bloomberg reportou o acordo original em detalhes](https://www.bloomberg.com/news/articles/2026-04-21/spacex-says-has-agreement-to-acquire-cursor-for-60-billion), e o [TechCrunch](https://techcrunch.com/2026/04/21/spacex-is-working-with-cursor-and-has-an-option-to-buy-the-startup-for-60-billion/) confirmou que a parceria já envolvia compartilhamento de dados de treinamento — a mesma pipeline que alimentou o V9-Medium.

Quatro dias após o IPO histórico da SpaceX na Nasdaq, em 12 de junho, a empresa assinou o acordo definitivo. O timing revela a lógica: converter o que havia sido uma parceria de dados em propriedade plena. A Bloomberg, em sua análise do contexto estratégico, destacou que [a xAI havia ficado para trás em ferramentas de codificação](https://www.bloomberg.com/news/articles/2026-04-22/musk-makes-60-billion-gamble-after-xai-slips-behind-in-coding), e que a aposta de US$ 60 bilhões reflete a urgência de mudar esse cenário. O negócio transforma a SpaceX em proprietária simultânea do pipeline de treinamento e do canal de distribuição para mais de um milhão de desenvolvedores.

Isso levanta uma pergunta imediata para esses desenvolvedores: o Cursor continuará suportando modelos da Anthropic ([Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026)), da OpenAI (GPT) e o próprio Composer do Cursor após a integração à SpaceX? A empresa não se pronunciou publicamente sobre esse ponto até o fechamento desta edição, e a resposta terá impacto direto na adoção — ou rejeição — do Grok V9-Medium como modelo padrão na plataforma.


![Imagem ilustrativa sobre Grok V9-Medium: xAI Lança Modelo de Programação com 1,5 Trilhão de Parâmetros Treinado em Sessões Reais do Cur](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80)

## O Cenário Competitivo: Onde o Grok Ainda Precisa Chegar

O V9-Medium entra em um mercado onde os números são desfavoráveis ao Grok. Dados da Enterprise Technology Research de março de 2026, [citados pelo TechTimes](https://www.techtimes.com/articles/317328/20260528/grok-ai-new-model-triples-parameter-count-targets-coding-lead-release-expected-mid-june.htm), mostram que o Grok detém aproximadamente 6% de adoção empresarial de IA, contra 55% da OpenAI, 47% da Anthropic e 39% do Google. Quem quiser comparar os modelos disponíveis hoje pode consultar o nosso [Comparador de IAs](/comparador) para ver os benchmarks lado a lado em tempo real.

### A lacuna nos benchmarks de programação

O SWE-bench Verified tornou-se o referencial mais observado para desempenho em código — um teste baseado em tarefas reais extraídas de repositórios do GitHub. Os números atuais pintam um quadro claro:

| Modelo | SWE-bench Verified |
|---|---|
| GPT-5.5 (OpenAI) | 88,7% |
| Claude Opus 4.7 (Anthropic) | 87,6% |
| Grok 4 (xAI / v8-small) | 72–75% |

A lacuna de 12 a 16 pontos percentuais entre o Grok 4 e os líderes é exatamente o que o V9-Medium tenta endereçar. Analistas consistentemente observam, no entanto, que a escala bruta de parâmetros não produz ganhos proporcionais de desempenho. Arquiteturas Mixture-of-Experts, como a usada pelo DeepSeek, conseguem igualar ou superar modelos densos com uma fração dos parâmetros ativados por inferência. A qualidade dos dados de treinamento e a precisão do alinhamento pós-treinamento importam ao menos tanto quanto o tamanho — e é exatamente nessa aposta que a estratégia de dados do Cursor se diferencia.

## Blackwell e a Viabilidade Econômica de 1,5 Trilhão de Parâmetros

Um modelo de 1,5 trilhão de parâmetros só faz sentido comercial se puder operar com latência e custo competitivos em inferência. É aqui que a otimização para a arquitetura NVIDIA Blackwell entra como peça fundamental.

Conforme [detalhado pela TechTimes](https://www.techtimes.com/articles/318495/20260616/grok-v9-medium-arrives-spacex-seals-cursor-developers-face-model-choice-risk.htm), a arquitetura Blackwell entrega aproximadamente 2,5 vezes melhor desempenho por watt em comparação com a geração anterior Hopper H100, graças a núcleos tensor de quinta geração e um subsistema de memória tensor dedicado. O Colossus 2 — o supercluster da SpaceX em Memphis — foi construído sobre hardware Blackwell uniforme especificamente para viabilizar rodadas de treinamento nessa escala, uma melhoria sobre o design de arquitetura mista do Colossus 1, que se mostrou tão ineficiente que a própria SpaceX cedeu sua capacidade à Anthropic para uso em inferência.

Para desenvolvedores que avaliam qual modelo integrar em seus produtos e pensam em custo por token, essa eficiência de hardware tem impacto direto nos preços de API. Nossa [Calculadora de Custos de IA](/calculadora) pode ajudar a estimar o custo de rodadas de inferência assim que os preços do V9-Medium forem anunciados oficialmente.

## Open-Source e a Estratégia de Dois Trilhos da xAI

Paralelamente ao anúncio do V9-Medium, Musk confirmou que o atual modelo v8-small de 500 bilhões de parâmetros será liberado como código aberto até o final de 2026. O padrão é consistente ao longo da história da xAI: o Grok 1 foi lançado em código aberto em março de 2024 sob licença Apache-2.0; o Grok 2.5 foi publicado no Hugging Face em agosto de 2025 sob licença customizada de comunidade; o Grok 3 foi prometido para código aberto em fevereiro de 2026, conforme [relata a cobertura histórica do TechTimes](https://www.techtimes.com/articles/317328/20260528/grok-ai-new-model-triples-parameter-count-targets-coding-lead-release-expected-mid-june.htm).

A lógica do modelo de dois trilhos é clara: cada geração anterior torna-se recurso público assim que a próxima geração se estabiliza. Um modelo de 500 bilhões de parâmetros de um laboratório de fronteira é uma base substancial para a comunidade open-source — o tipo de recurso que impulsionou ecossistemas inteiros em torno do LLaMA da Meta e do Mistral. Vale notar, porém, que a licença da comunidade do Grok 2.5 carregava restrições anticoncorrenciais que limitavam certos usos comerciais, e a comunidade acompanhará de perto os termos que acompanharão o v8-small quando for liberado.

Além do modelo, a xAI avançou na frente de ferramentas com o **Grok Build**, seu agente de programação baseado em terminal, lançado em beta em 14 de maio de 2026. Conforme [reportou a Bloomberg](https://www.bloomberg.com/news/articles/2026-05-14/musk-s-xai-unveils-first-coding-agent-in-bid-to-rival-anthropic), o Grok Build compete diretamente com o Claude Code da Anthropic, suportando até 8 sub-agentes em paralelo para geração de código, edição de arquivos, gerenciamento de dependências e execução de comandos shell — e, de forma notável, com compatibilidade nativa com arquivos de configuração CLAUDE.md, o padrão do principal produto concorrente.

A imagem que emerge é a de uma estratégia de três frentes simultâneas: dados proprietários via Cursor, hardware dedicado no Colossus 2, e uma suite de ferramentas que vai do modelo de fundação ao agente de terminal. Se o Grok V9-Medium entregar o desempenho prometido nos benchmarks de programação, a xAI terá transformado sua desvantagem histórica nessa área em uma posição de competição real no segundo semestre de 2026.

## Perguntas Frequentes

**O Grok V9-Medium é o Grok 5?**
Não. O V9-Medium é o nome interno do modelo com 1,5 trilhão de parâmetros projetado para produção imediata, com foco em programação. O Grok 5 é o modelo flagship de fronteira da xAI, estimado em 6 trilhões de parâmetros totais em arquitetura Mixture-of-Experts, que ainda estava em treinamento no Colossus 2 em junho de 2026. São produtos distintos, com cronogramas e propósitos diferentes.

**Por que os dados do Cursor são diferentes dos dados do GitHub para treinar modelos de código?**
Repositórios do GitHub capturam o resultado final do código. O Cursor captura o processo: como o desenvolvedor descreveu o problema, como iterou sobre soluções parciais, o que rejeitou e por quê. Esse tipo de dado de interação ensina ao modelo os padrões de raciocínio dos engenheiros, não apenas a sintaxe — o que é crucial para tarefas reais de debug, refatoração e colaboração em grandes bases de código de produção.

**O Cursor continuará suportando Claude e ChatGPT após a aquisição pela SpaceX?**
Esta é a principal preocupação dos mais de um milhão de desenvolvedores que escolheram o Cursor justamente pela flexibilidade de usar múltiplos modelos. Até a data desta publicação, a SpaceX não se pronunciou publicamente sobre a política de suporte a modelos de terceiros após a integração. A resposta a essa pergunta terá impacto direto na adoção — ou rejeição — do Grok V9-Medium como modelo padrão na plataforma.

## Fontes e Referências

- [SpaceX to acquire Cursor for $60B in stock, days after blockbuster IPO — TechCrunch](https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/)
- [SpaceX is working with Cursor and has an option to buy the startup for $60B — TechCrunch](https://techcrunch.com/2026/04/21/spacex-is-working-with-cursor-and-has-an-option-to-buy-the-startup-for-60-billion/)
- [SpaceX Has Deal for Right to Acquire Cursor for $60 Billion — Bloomberg](https://www.bloomberg.com/news/articles/2026-04-21/spacex-says-has-agreement-to-acquire-cursor-for-60-billion)
- [Musk's SpaceX to Acquire Cursor for $60 Billion as xAI Lags in Coding Tools — Bloomberg](https://www.bloomberg.com/news/articles/2026-04-22/musk-makes-60-billion-gamble-after-xai-slips-behind-in-coding)
- [Musk's xAI Unveils First Coding Agent in Bid to Rival Anthropic — Bloomberg](https://www.bloomberg.com/news/articles/2026-05-14/musk-s-xai-unveils-first-coding-agent-in-bid-to-rival-anthropic)
- [SpaceX to buy AI coding assistant Cursor for $60 billion — CBS News](https://www.cbsnews.com/news/spacex-cursor-60-billion-ai-acquisition/)
- [Grok AI New Model Triples Parameter Count, Targets Coding Lead — TechTimes](https://www.techtimes.com/articles/317328/20260528/grok-ai-new-model-triples-parameter-count-targets-coding-lead-release-expected-mid-june.htm)
- [Grok V9-Medium Arrives as SpaceX Seals Cursor: Developers Face Model-Choice Risk — TechTimes](https://www.techtimes.com/articles/318495/20260616/grok-v9-medium-arrives-spacex-seals-cursor-developers-face-model-choice-risk.htm)
- [xAI Unleashes Its Secret Weapon: Grok V9-Medium with 1.5 Trillion Parameters — AIBase News](https://news.aibase.com/news/28307)
- [xAI Says Grok V9-Medium Is Almost Here. Should Claude and ChatGPT Be Worried? — Techloy](https://www.techloy.com/xai-says-grok-v9-medium-is-almost-here-should-claude-and-chatgpt-be-worried/)
- [Grok V9-Medium Is Not Grok 5: A Builder's Guide — ChatForest](https://chatforest.com/builders-log/xai-grok-v9-medium-1-5t-coding-model-mid-june-2026-builder-guide/)