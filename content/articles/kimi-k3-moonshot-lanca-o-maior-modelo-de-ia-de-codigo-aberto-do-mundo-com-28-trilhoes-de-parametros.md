---
title: "Kimi K3: Moonshot Lança o Maior Modelo de IA de Código Aberto do Mundo, com 2,8 Trilhões de Parâmetros"
description: "Moonshot AI lança o Kimi K3, de 2,8 trilhões de parâmetros, o maior modelo de IA aberto já lançado, rivalizando com Claude e GPT-5.6."
category: noticias
tags:
  - Kimi K3
  - Moonshot AI
  - Código Aberto
  - Inteligência Artificial
  - China
author: Redação Turbina IA
isFeatured: false
date: "2026-07-27"
coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
---

Na noite de 16 de julho, a startup chinesa Moonshot AI publicou um único tuíte que bagunçou a semana de quem acompanha inteligência artificial: "Introducing Kimi K3: Open Frontier Intelligence". Embaixo do slogan, três números que resumem a ambição do lançamento — 2,8 trilhões de parâmetros, 1 milhão de tokens de contexto e uma arquitetura batizada de Kimi Delta Attention. Menos de 24 horas depois, [Bloomberg](https://www.bloomberg.com/news/articles/2026-07-17/china-s-powerful-new-moonshot-ai-model-closes-gap-with-us-rivals) e [South China Morning Post](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals) já tratavam o K3 como o maior modelo de pesos abertos já lançado por qualquer laboratório, chinês ou americano.

> **Resposta Rápida (TL;DR):** O Kimi K3, lançado pela Moonshot AI em 16 de julho de 2026, é o maior modelo de IA de pesos abertos do mundo, com 2,8 trilhões de parâmetros e 1 milhão de tokens de contexto. Ele supera rivais chineses como DeepSeek e Zhipu AI e, em benchmarks específicos, chega a bater Claude Opus 4.8 e GPT-5.5 — mas ainda fica atrás dos modelos de ponta mais caros, Claude Fable 5 e GPT-5.6 Sol. Diferente do que sugere parte da cobertura inicial, sua licença não é a Apache 2.0 clássica, e sim um documento próprio da Moonshot com restrições comerciais para grandes provedores de nuvem.

## Um modelo, três recordes de tamanho

O número que mais chamou atenção foi o de parâmetros. Segundo a [SCMP](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals), o K3 chega a 2,8 trilhões de parâmetros — "significativamente maior que os modelos abertos anteriores de concorrentes chineses, incluindo o DeepSeek V4 Pro, de 1,6 trilhão, ou a série GLM-5 da Zhipu AI, de 744 bilhões". Na prática, isso faz do Kimi K3 o maior modelo de pesos abertos já disponibilizado publicamente, superando de forma folgada os dois principais rivais domésticos.

| Modelo | Empresa | Parâmetros totais |
|---|---|---|
| Kimi K3 | Moonshot AI | 2,8 trilhões |
| DeepSeek V4 Pro | DeepSeek | 1,6 trilhão |
| GLM-5 | Zhipu AI | 744 bilhões |

*Fonte: [South China Morning Post](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals)*

Mas parâmetro total é só parte da história — e aqui vale um parênteses técnico para quem não é familiarizado com o termo (o [Glossário de IA](/glossario) do Turbina IA explica esse e outros conceitos em detalhe). O K3 não ativa os 2,8 trilhões de parâmetros a cada resposta. Segundo o cartão de modelo publicado pela própria Moonshot no [Hugging Face](https://huggingface.co/moonshotai/Kimi-K3), a arquitetura é uma mistura de especialistas (MoE) com 896 especialistas no total, dos quais apenas 16 são acionados por token processado — resultando em 104 bilhões de parâmetros ativos por inferência. É esse desenho que permite rodar um modelo desse tamanho sem exigir um datacenter inteiro só para responder "oi".

A peça de engenharia mais citada pela própria empresa é a Kimi Delta Attention (KDA), combinada com um mecanismo chamado Attention Residuals. No anúncio original, replicado pelo jornal português [Diário de Notícias](https://www.dn.pt/internacional/chinesa-moonshot-apresenta-kimi-k3-como-maior-modelo-de-ia-de-cdigo-aberto-do-mundo), a Moonshot afirma que a KDA "permite decodificação até 6,3 vezes mais rápida em contextos de milhões de tokens", enquanto os Attention Residuals "entregam cerca de 25% mais eficiência de treinamento com menos de 2% de custo adicional". São números autodeclarados pela empresa — vale o alerta —, mas batem com a lógica por trás do lançamento: em vez de simplesmente empilhar mais GPUs, a Moonshot apostou em arquitetura mais eficiente.


![Imagem ilustrativa sobre Kimi K3: Moonshot Lança o Maior Modelo de IA de Código Aberto do Mundo, com 2,8 Trilhões de Parâmetros](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80)

## Por que isso importa: o contexto da corrida chinesa

O lançamento não aconteceu no vácuo. Segundo a [TechCrunch](https://techcrunch.com/2026/07/16/moonshots-upcoming-kimi-3-is-expected-to-close-the-gap-with-anthropics-opus-4-8/), que citou reportagem do Financial Times antes mesmo do anúncio oficial, o K3 era esperado havia dias como "o maior modelo de pesos abertos da China", com contagem de parâmetros estimada entre 2 e 3 trilhões — projeção que se confirmou quase exatamente. O timing também não foi acidental: o [Diário de Notícias](https://www.dn.pt/internacional/chinesa-moonshot-apresenta-kimi-k3-como-maior-modelo-de-ia-de-cdigo-aberto-do-mundo) registra que o anúncio coincidiu com a abertura da Conferência Mundial de Inteligência Artificial em Xangai, ocasião em que o presidente chinês Xi Jinping defendeu publicamente o uso de código aberto para que "todos os setores e empresas possam se beneficiar da IA".

Essa disputa tem pano de fundo comercial explícito. A [SCMP](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals) observa que o K3 chega um mês depois de a rival Zhipu AI lançar o GLM-5.2 "com aclamação global", num momento em que Moonshot, DeepSeek, Zhipu e Alibaba competem simultaneamente por abertura, preços baixos e comercialização rápida para reduzir a distância em relação aos laboratórios americanos — tudo isso sob as restrições de Washington à exportação de chips avançados. O detalhe que passou meio despercebido na cobertura mais entusiasmada é que analistas do Bank of America, citados pela [CNBC](https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html) e reproduzidos pelo Diário de Notícias, apontaram que o K3 prova que as empresas chinesas continuam avançando "apesar dessas limitações" de hardware — não que as limitações deixaram de existir.

## O que o modelo faz bem — e onde ainda perde

A própria Moonshot foi transparente sobre os limites do K3. De acordo com a [SCMP](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals), a empresa reconheceu em post oficial que "o desempenho geral ainda fica atrás dos modelos proprietários mais poderosos" — leia-se Claude Fable 5, da Anthropic, e GPT-5.6 Sol, da OpenAI. Ainda assim, a companhia alega ter "demonstrado desempenho de fronteira" em uma série de avaliações, superando de forma consistente outros modelos testados, incluindo o GPT-5.5 da OpenAI, o Claude Opus 4.8 da Anthropic e o GLM-5.2 da própria Zhipu.

Em pelo menos dois benchmarks específicos — Program Bench e SWE Marathon —, o K3 chegou a superar até o Fable 5 e o GPT-5.6 Sol, segundo resultados autorreportados pela empresa e citados pela [SCMP](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals). O Diário de Notícias acrescenta que, numa avaliação da plataforma Arena.AI, o modelo conquistou o primeiro lugar em seis das sete categorias analisadas — branding e marketing, design baseado em referências, dados e análise, produtos de consumo, simulações e ferramentas de criação de conteúdo —, ficando em segundo lugar apenas na categoria de videogames, atrás do Fable 5. Já a consultoria Artificial Analysis, também citada pelo [DN](https://www.dn.pt/internacional/chinesa-moonshot-apresenta-kimi-k3-como-maior-modelo-de-ia-de-cdigo-aberto-do-mundo), posicionou o K3 num patamar comparável ao Claude Opus 4.8 e ao GPT-5.5 — os "segundos melhores" modelos de cada laboratório americano, não os líderes absolutos.

O cartão de modelo publicado pela Moonshot no [Hugging Face](https://huggingface.co/moonshotai/Kimi-K3) traz ainda números específicos de benchmarks técnicos: 93,5 no GPQA Diamond (raciocínio científico em nível de pós-graduação), 67,5 no DeepSWE, 88,3 no Terminal-Bench 2.1 e 91,2 no BrowseComp, além de 81,6 e 83,4 em duas variações do MMMU-Pro, que testa compreensão multimodal. Quem quiser comparar esses números lado a lado com outros modelos do mercado pode usar o [Comparador de IAs](/comparador) do Turbina IA.


![Imagem ilustrativa sobre Kimi K3: Moonshot Lança o Maior Modelo de IA de Código Aberto do Mundo, com 2,8 Trilhões de Parâmetros](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## A pegadinha da licença: não é Apache 2.0

Aqui está o ponto que boa parte da cobertura em português tratou de forma imprecisa. O modelo é chamado de "open source" e "open weight" por praticamente toda a imprensa internacional, mas isso não significa Apache 2.0 nem qualquer outra licença permissiva-padrão. Ao consultar diretamente o arquivo de licença publicado pela Moonshot no [Hugging Face](https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE), o documento se identifica como "Kimi K3 License", com copyright de 2026 da Moonshot AI — uma licença própria, não uma licença open source padrão reconhecida pela Open Source Initiative.

Na prática, ela concede permissões amplas para uso, modificação e distribuição dos pesos, mas impõe restrições comerciais específicas: empresas que operam negócios de "modelo como serviço" (MaaS) acima de determinado patamar de receita precisam negociar um acordo separado com a Moonshot, e produtos comerciais com base de usuários ou faturamento relevantes são obrigados a manter atribuição de marca visível. É um desenho parecido com o que a própria Moonshot já havia usado em versões anteriores da linha Kimi, descritas como "MIT modificada" — mais aberto que os pesos fechados de [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) ou GPT, porém mais restritivo que uma Apache 2.0 de verdade. Antes de embarcar o K3 num produto comercial, vale a pena ler a licença completa em vez de confiar só no rótulo "código aberto".

## Preço, acesso e onde experimentar

O K3 já está disponível desde 16 de julho através do chatbot Kimi, do aplicativo Kimi Work, da ferramenta de programação Kimi Code e da API oficial, segundo o [Diário de Notícias](https://www.dn.pt/internacional/chinesa-moonshot-apresenta-kimi-k3-como-maior-modelo-de-ia-de-cdigo-aberto-do-mundo). Os pesos completos do modelo, por sua vez, tinham lançamento previsto para 27 de julho — data que, na publicação deste artigo, já está confirmada, com o modelo hospedado publicamente na organização da Moonshot no Hugging Face.

No quesito preço, a diferença em relação aos concorrentes chineses é grande. Segundo levantamento da [Fortune](https://fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/), a API do K3 cobra US$ 15 por milhão de tokens de saída — mais caro que o GLM-5.2 da Zhipu (US$ 4,40) e muito mais caro que o DeepSeek V4 (US$ 0,87), mas ainda assim uma fração do que a Anthropic cobra pelo Claude Fable 5, cujo preço de saída chega a US$ 50 por milhão de tokens. Para quem precisa estimar o custo real de rodar esses modelos em produção, a [Calculadora de Custos](/calculadora) do Turbina IA ajuda a converter esses números em orçamento mensal.

| Modelo | Preço por milhão de tokens de saída |
|---|---|
| DeepSeek V4 | US$ 0,87 |
| GLM-5.2 (Zhipu AI) | US$ 4,40 |
| Kimi K3 (Moonshot AI) | US$ 15,00 |
| Claude Fable 5 (Anthropic) | US$ 50,00 |

*Fonte: [Fortune](https://fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/)*

## O dinheiro por trás do lançamento

O K3 não chega isolado — vem junto com uma escalada financeira notável. A [Fortune](https://fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/) reporta que a Moonshot levantou US$ 2 bilhões em maio de 2026, numa rodada que avaliou a empresa em mais de US$ 20 bilhões, com receita recorrente anual já superior a US$ 200 milhões e investidores como Alibaba, Tencent, Meituan e HSG na cap table. A [TechCrunch](https://techcrunch.com/2026/07/16/moonshots-upcoming-kimi-3-is-expected-to-close-the-gap-with-anthropics-opus-4-8/), citando o Financial Times, foi além: apontou que a Moonshot estaria buscando uma nova rodada que a avaliaria em US$ 31,5 bilhões — um salto expressivo em relação aos US$ 20 bilhões de apenas dois meses antes.

O passo seguinte parece ser o mercado de capitais aberto. Segundo a [Nikkei Asia](https://asia.nikkei.com/business/technology/artificial-intelligence/china-s-moonshot-ai-plans-hong-kong-ipo-as-kimi-k3-shocks-silicon-valley), a Moonshot está se preparando para uma oferta pública inicial em Hong Kong, possivelmente dentro de seis meses, à medida que valuation e receita continuam subindo — informação atribuída a duas fontes com conhecimento direto do assunto. O presidente da empresa, Yutong Zhang, resumiu a estratégia por trás do K3 em declaração à [Fortune](https://fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/): "Sabíamos que não tínhamos o luxo de simplesmente escalar o poder computacional. Isso nos forçou a focar em pesquisa fundamental e eficiência" — uma resposta direta à limitação de acesso a chips avançados que a China enfrenta desde as sanções americanas.

## O que muda na prática para quem usa IA no Brasil

Para desenvolvedores brasileiros, o efeito mais imediato é a pressão de preço. Com um modelo de fronteira aberto custando uma fração do que cobram Anthropic e OpenAI, times que hoje pagam por Claude ou GPT via API ganham um argumento de negociação — ou uma alternativa real para cargas de trabalho que não exigem o topo absoluto de qualidade. Vale registrar que "aberto" aqui não é sinônimo de "sem restrições": antes de embarcar o K3 num produto com escala relevante, é preciso ler os termos da Kimi K3 License com atenção, especialmente as cláusulas de MaaS. Quem quer testar prompts específicos para tarefas de código ou raciocínio antes de migrar pode recorrer à biblioteca de [Prompts](/prompts) do Turbina IA como ponto de partida, e acompanhar como o K3 se compara a atualizações futuras de outros modelos pelo [Monitor de Modelos](/changelog).

A pergunta que fica em aberto é até onde vai essa corrida de eficiência. Se a Moonshot conseguiu chegar perto de Claude Opus 4.8 e GPT-5.5 sem acesso irrestrito aos chips mais avançados do mercado, o argumento de que só GPU em quantidade industrial garante liderança em IA começa a rachar — e isso interessa tanto a laboratórios rivais quanto a quem paga a conta no fim do mês.

## Perguntas Frequentes

### O Kimi K3 é realmente de código aberto?

Os pesos do modelo são públicos e podem ser baixados e modificados, mas a licença não é uma licença open source padrão como a Apache 2.0. É a "Kimi K3 License", documento próprio da Moonshot que impõe restrições comerciais a empresas que operam serviços de modelo como serviço (MaaS) acima de certo faturamento, além de exigir atribuição de marca em produtos comerciais de grande escala.

### O Kimi K3 é melhor que o GPT-5.6 e o Claude Fable 5?

Não, segundo a própria Moonshot. A empresa reconhece que o desempenho geral do K3 ainda fica atrás dos dois modelos proprietários mais avançados dos Estados Unidos. O K3 supera esses rivais apenas em benchmarks pontuais, como Program Bench e SWE Marathon, e fica no mesmo patamar de modelos um degrau abaixo, como Claude Opus 4.8 e GPT-5.5.

### Quanto custa usar o Kimi K3 pela API?

A API oficial cobra US$ 15 por milhão de tokens de saída, valor mais alto que o de concorrentes chineses como GLM-5.2 (US$ 4,40) e DeepSeek V4 (US$ 0,87), mas bem abaixo dos US$ 50 cobrados pelo Claude Fable 5 da Anthropic para o mesmo volume de tokens.

## Fontes e Referências

- [Moonshot Unveils Kimi K3 AI Model, Narrowing Gap With US Rivals - Bloomberg](https://www.bloomberg.com/news/articles/2026-07-17/china-s-powerful-new-moonshot-ai-model-closes-gap-with-us-rivals)
- [Moonshot's upcoming Kimi 3 is expected to close the gap with Anthropic's Opus 4.8 - TechCrunch](https://techcrunch.com/2026/07/16/moonshots-upcoming-kimi-3-is-expected-to-close-the-gap-with-anthropics-opus-4-8/)
- [Moonshot AI unveils world's largest open-source AI model as China narrows gap with US rivals - South China Morning Post](https://www.scmp.com/tech/tech-trends/article/3360885/moonshot-ai-unveils-worlds-largest-open-source-ai-model-china-narrows-gap-us-rivals)
- [China's Moonshot AI plans Hong Kong IPO as Kimi K3 shocks Silicon Valley - Nikkei Asia](https://asia.nikkei.com/business/technology/artificial-intelligence/china-s-moonshot-ai-plans-hong-kong-ipo-as-kimi-k3-shocks-silicon-valley)
- [Moonshot AI Kimi K3 model - CNBC](https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html)
- [Chinesa Moonshot apresenta Kimi K3 como maior modelo de IA de código aberto do mundo - Diário de Notícias](https://www.dn.pt/internacional/chinesa-moonshot-apresenta-kimi-k3-como-maior-modelo-de-ia-de-cdigo-aberto-do-mundo)
- [Moonshot's Kimi K3 pushes Chinese AI into Fable-level territory - Fortune](https://fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/)
- [moonshotai/Kimi-K3 - model card - Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)
- [LICENSE - moonshotai/Kimi-K3 - Hugging Face](https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE)