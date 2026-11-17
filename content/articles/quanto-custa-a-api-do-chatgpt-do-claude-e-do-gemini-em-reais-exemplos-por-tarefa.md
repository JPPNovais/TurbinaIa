---
title: "Quanto custa a API do ChatGPT, do Claude e do Gemini em reais: exemplos por tarefa"
seoTitle: "Quanto custa a API do Claude, GPT e Gemini em R$"
description: "Veja em reais quanto custa usar a API do ChatGPT, do Claude e do Gemini em tarefas reais, do resumo de PDF ao bug difícil de corrigir."
category: tutoriais
tags:
  - Custo de API
  - ChatGPT
  - Claude
  - Gemini
author: Redação Turbina IA
isFeatured: false
date: "2026-11-17"
coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
---

Resumir um PDF de dez páginas pela API do Claude Haiku custa menos de meio centavo de real. Pedir a mesma tarefa ao GPT-6 Astra, o modelo mais caro da OpenAI, sai por algo entre 20 e 30 vezes mais caro — e o resultado nem sempre é proporcionalmente melhor para uma tarefa tão simples. É esse tipo de conta que quem só usa o [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Plus ou o Claude Pro no navegador nunca precisa fazer, mas que vira dor de cabeça real na hora de colocar um chatbot, um agente ou um script em produção.

> **Resposta Rápida (TL;DR):** A API do ChatGPT, do Claude e do Gemini cobra por token (entrada e saída), não por mensagem ou por mês. Em novembro de 2026, os modelos de entrada custam entre US$ 0,10 e US$ 10 por milhão de tokens, e os de saída entre US$ 0,50 e US$ 50 — dependendo do modelo escolhido. Na prática, um resumo simples custa fração de centavo e um fluxo de atendimento com milhares de conversas por mês pode passar de R$ 500 só na API.

## O que você paga de verdade na API

Quem assina o ChatGPT Plus ou o Claude Pro paga uma mensalidade fixa e usa a ferramenta à vontade, dentro de um limite de mensagens. A API funciona de outro jeito: cada chamada é cobrada pela quantidade de [token](/glossario) que entra (seu prompt, as instruções do sistema, o histórico da conversa) e pela quantidade de token que sai (a resposta do modelo). Um token não é exatamente uma palavra — em português, uma frase de dez palavras costuma virar entre 12 e 16 tokens, dependendo da pontuação e dos acentos.

Essa diferença de cobrança é o que torna a conta contraintuitiva. A entrada quase sempre custa de três a cinco vezes menos que a saída no mesmo modelo, porque gerar texto exige mais processamento do que apenas lê-lo. Na [tabela de preços da OpenAI](https://platform.openai.com/docs/pricing), por exemplo, o GPT-6.1 Sol cobra US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída — a resposta custa cinco vezes mais que a pergunta.


![Imagem ilustrativa sobre Quanto custa a API do ChatGPT, do Claude e do Gemini em reais: exemplos por tarefa](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Quanto custam os principais modelos por milhão de tokens

Os preços abaixo foram conferidos nas páginas oficiais de cada provedora em 16 de novembro de 2026 e são os mesmos usados pela [calculadora de custos de API](/calculadora) do Turbina IA — os números mudam com frequência, então vale sempre confirmar o valor atual antes de orçar um projeto.

| Modelo | Entrada (US$/milhão) | Saída (US$/milhão) | Observação |
|---|---|---|---|
| Claude Haiku 5.5 | 0,10 | 0,50 | Preço válido até 100 mil tokens de [prompt](/prompts); acima disso sobe para 0,50/2,50 |
| GPT-6 Luna | 0,10 | 0,50 | Modelo de maior volume da OpenAI, substituto do GPT-4o mini |
| [Gemini](/blog/prompts-para-gemini) 3.8 Flash | 0,75 | 3,75 | Preço promocional até 31/12/2026; depois sobe para 1,50/7,50 |
| Claude Sonnet 5.5 | 2,00 | 10,00 | Modelo intermediário da Anthropic |
| GPT-6.1 Sol | 2,00 | 10,00 | Acima de 272 mil tokens de prompt, sobe para 4,00/15,00 |
| Claude Opus 5.5 | 4,00 | 20,00 | O mais caro entre os modelos de acesso geral da Anthropic |
| Gemini 4 Carbon / Argon | 2,00 | 10,00 | Preço promocional até 30/11/2026; a partir de dezembro dobra para 4,00/20,00 |
| GPT-6 Astra | 10,00 | 50,00 | O modelo padrão do ChatGPT Plus hoje; o mais caro da OpenAI na API |

A [página oficial de preços da Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) confirma os valores do Claude, enquanto a [documentação de preços do Gemini](https://ai.google.dev/gemini-api/docs/pricing) mostra o mesmo padrão promocional em todos os modelos Flash recentes do Google: preço de lançamento mais baixo por um prazo definido, com reajuste já anunciado para o início de 2027.

## Quatro tarefas comuns, em reais

Para transformar esses preços em algo palpável, veja quanto custaria cada tarefa com a cotação de referência usada pela calculadora do site: R$ 5,6518 por dólar, PTAX de 13 de novembro de 2026.

### Resumir um PDF de dez páginas

Um documento de dez páginas costuma gerar algo em torno de 6 mil tokens de entrada (texto mais a instrução), e um resumo razoável sai em cerca de 400 tokens. Com o Claude Haiku 5.5 ou o GPT-6 Luna, isso custa R$ 0,0045 por documento. Pelo Gemini 3.8 Flash, que cobra mais por ser um modelo de propósito mais geral, o mesmo resumo sai por R$ 0,0339 — ainda assim, menos de quatro centésimos de centavo. Rodando 500 resumos no mês, a conta vai para R$ 2,26 no modelo mais barato e R$ 16,96 no Gemini Flash: diferença real, mas que cabe folgada em qualquer orçamento de automação.

### Atendimento ao cliente por chat

Esse é o cenário padrão da própria calculadora do site: um prompt de 2 mil tokens (instruções, histórico da conversa e a pergunta do cliente) e uma resposta de 500 tokens. Com Claude Sonnet 5.5 ou GPT-6.1 Sol — os modelos intermediários mais usados para esse tipo de bot —, cada conversa custa R$ 0,0509. Em 10 mil conversas por mês, um volume realista para uma empresa de porte médio, a fatura mensal da API chega a R$ 508,66. Trocando para o Gemini 3.8 Flash, o custo cai para R$ 0,0191 por conversa e R$ 190,75 por mês — menos de 40% do valor dos concorrentes, ao custo de um modelo um pouco menos sofisticado em respostas mais longas ou com raciocínio complexo.

### Escrever um post de blog de 1.500 palavras

Um texto de 1.500 palavras em português equivale a aproximadamente 2.100 tokens de saída; o briefing e as instruções de estilo somam outros 600 tokens de entrada. No Sonnet 5.5 ou no GPT-6.1 Sol, cada artigo sai por R$ 0,13. No Gemini 3.8 Flash, cai para R$ 0,05. A diferença parece irrelevante num único texto, mas uma agência de conteúdo que produz 100 artigos por mês pagaria cerca de R$ 70,90 usando os modelos da Anthropic ou da OpenAI, contra R$ 26,60 no Gemini — o tipo de economia que justifica testar mais de um fornecedor antes de fechar um fluxo de produção em escala.

### Revisar um bug complicado de código

Para uma tarefa que exige mais raciocínio — analisar 4 mil tokens de código e contexto de erro e devolver uma explicação com o patch, cerca de 1.200 tokens —, a diferença de preço entre os modelos de ponta fica mais evidente. O Claude Opus 5.5 cobra R$ 0,23 por chamada; o Gemini 4 Carbon, ainda no preço promocional, sai por R$ 0,11; já o GPT-6 Astra, hoje o modelo padrão do ChatGPT Plus, custa R$ 0,57 — mais que o dobro do Opus 5.5 pela mesma tarefa. Vale lembrar que o preço promocional do Gemini 4 Carbon termina em 30 de novembro: a partir de dezembro, o valor dobra e empata com o do Opus 5.5.


![Imagem ilustrativa sobre Quanto custa a API do ChatGPT, do Claude e do Gemini em reais: exemplos por tarefa](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Por que o preço varia tanto dentro do mesmo provedor

Três fatores explicam a diferença entre os modelos de uma mesma empresa. Primeiro, o tamanho do prompt: no GPT-6.1 Sol e no GPT-6 Astra, passar de 272 mil tokens de entrada muda a tabela de preço da chamada inteira, não só do excedente. No Claude Haiku 5.5, esse limite é de 100 mil tokens. Segundo, o raciocínio interno: nos modelos "pensantes" da Anthropic e do Google, os tokens que o modelo gasta raciocinando antes de responder entram na conta como tokens de saída — por isso uma pergunta simples para um modelo de raciocínio pode custar mais do que parece pelo tamanho da resposta final. Terceiro, o cache de prompt: repetir o mesmo bloco de instruções em várias chamadas (comum em chatbots) pode custar até dez vezes menos por token na segunda vez em diante, um detalhe que faz diferença grande em volume alto e que a [calculadora de custos](/calculadora) do site não cobre, mas que vale pesquisar na documentação de cada provedora antes de rodar um serviço com muito tráfego repetido.

## Como estimar o custo da sua tarefa em três passos

1. **Conte os tokens de entrada**, somando instrução de sistema, histórico e a mensagem do usuário. Uma regra grosseira para português: divida o número de caracteres por 3,5.
2. **Estime os tokens de saída** observando o tamanho médio das respostas que você já recebeu em testes manuais no ChatGPT, no Claude ou no Gemini.
3. **Multiplique pelo preço do modelo** e pelo volume mensal esperado. A [calculadora de custos de API do Turbina IA](/calculadora) já faz essa conta automaticamente, com os preços atualizados dos principais modelos e o câmbio do dia — e dá para comparar os resultados lado a lado no [comparador de IAs](/comparador) antes de escolher qual fornecedor usar.

## Isso só importa para quem usa a API, não o aplicativo

Se você só conversa com o ChatGPT, o Claude ou o Gemini pelo site ou pelo aplicativo, nada disso te afeta: você paga (ou não) uma assinatura fixa, não por token. A diferença entre os planos gratuitos da Anthropic, da OpenAI e do Google — e o que cada um realmente libera — está em detalhe no nosso comparativo [ChatGPT vs. Gemini vs. Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) e no guia sobre [o que o plano gratuito do Claude permite fazer](/blog/claude-gratis-em-2026-o-que-o-plano-sem-custo-da-anthropic-permite-fazer). A conta por token só entra em cena quando você constrói algo por conta própria: um bot de atendimento, uma extensão, um script que processa planilhas ou qualquer integração que chame a API diretamente em vez de abrir o chat.

## Perguntas Frequentes

### Qual API de IA é mais barata em 2026?

Depende da tarefa. Para volume alto e tarefas simples, Claude Haiku 5.5 e GPT-6 Luna têm o mesmo preço de entrada e saída (US$ 0,10 e US$ 0,50 por milhão de tokens) e são os mais baratos do mercado. Para tarefas de complexidade média, o Gemini 3.8 Flash costuma custar menos que o Claude Sonnet 5.5 e o GPT-6.1 Sol, mas isso pode mudar quando a promoção do Google terminar, em 31 de dezembro de 2026.

### A API cobra pelo texto que eu escrevo ou só pela resposta?

Cobra pelos dois, mas em taxas diferentes. O texto que você envia (prompt, histórico e instruções) é cobrado como tokens de entrada, geralmente três a cinco vezes mais barato por token do que a resposta do modelo, cobrada como tokens de saída.

### Dá para usar a API do Claude, do ChatGPT e do Gemini sem gastar nada?

Os três provedores oferecem créditos iniciais ou um período de teste gratuito ao criar uma conta de desenvolvedor, mas nenhum mantém uma camada gratuita permanente de uso ilimitado na API — isso é diferente dos planos gratuitos dos aplicativos de chat. Para projetos pequenos, vale simular o custo mensal estimado na [calculadora](/calculadora) antes de decidir qual modelo usar em produção.

## Fontes e Referências

- [OpenAI — API Pricing](https://platform.openai.com/docs/pricing)
- [Anthropic — Claude Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Google AI for Developers — Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)