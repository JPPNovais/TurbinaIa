---
title: "DeepSeek V4 Pro Corta Preços de Inferência em 75% com Chips Huawei Ascend — O Fim da Dependência da NVIDIA?"
description: "DeepSeek reduziu preços da API V4-Pro em 75% e validou execução no Ascend 950 da Huawei. Entenda a ruptura tecnológica que desafia o monopólio da NVIDIA na"
category: noticias
tags:
  - DeepSeek
  - Huawei
  - Chips de IA
  - NVIDIA
  - Inferência
author: Redação Turbina IA
isFeatured: false
date: "2026-06-21"
coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80"
---

Em 23 de maio de 2026, a DeepSeek enviou uma mensagem inequívoca ao mercado global de IA: anunciou uma redução permanente de 75% nos preços da API do seu modelo flagship V4-Pro. O que antes custava entre 0,1 e 24 yuans por milhão de tokens passou a custar entre 0,025 e 6 yuans — uma queda que, segundo a [Reuters](https://www.reuters.com), não tem precedente na velocidade com que modelos de fronteira se tornaram acessíveis. E por trás dessa virada de preços há um protagonista inesperado: os chips Ascend 950 da Huawei, empresa que avança silenciosamente para preencher o vácuo deixado pelas restrições de exportação americanas sobre as GPUs da NVIDIA.

> **Resposta Rápida (TL;DR):** A DeepSeek cortou os preços da API do V4-Pro em 75% em maio de 2026, vinculando a queda ao maior acesso aos chips Ascend 950 da Huawei. O modelo usa uma arquitetura híbrida que consome 9,5x a 13,7x menos memória que seu predecessor, e o próximo chip Ascend 950DT — com bandwidth de 4 TB/s — deve chegar ao mercado em agosto de 2026, potencialmente derrubando ainda mais os custos de inferência.

## O Modelo que Veio para Desafiar o Ocidente

Lançado em 24 de abril de 2026 na forma de preview, o DeepSeek V4 chega em duas versões com perfis bem distintos. Conforme reportado pelo [The Register](https://www.theregister.com/2026/04/24/deepseek_v4/), o **V4-Pro** conta com 1,6 trilhão de parâmetros totais, com 49 bilhões ativados por inferência, e foi treinado em 33 trilhões de tokens — tornando-o um dos maiores modelos de linguagem já construídos. O **V4-Flash**, mais enxuto, tem 284 bilhões de parâmetros com 13 bilhões ativos, priorizando velocidade e custo-benefício para aplicações de alto volume.

Ambos suportam uma janela de contexto nativa de **1 milhão de tokens** — paridade com os melhores modelos proprietários ocidentais. De acordo com [relatório da TrendForce de 29 de abril](https://www.trendforce.com/news/2026/04/29/news-huawei-ascend-cambricon-and-hygon-completed-day-0-adaptation-to-deepseek-v4/), o V4-Pro mira aplicações de raciocínio complexo, agentes autônomos e processamento de documentos extensos, enquanto o Flash é otimizado para cenários de alta concorrência e implementação leve.

O modelo também compatibiliza seus formatos de API com OpenAI e Anthropic — decisão estratégica que facilita a adoção por desenvolvedores já habituados a essas interfaces. Pesos abertos com suporte a implantação local completam uma proposta que ataca simultaneamente custo, privacidade de dados e soberania tecnológica.


![Imagem ilustrativa sobre DeepSeek V4 Pro Corta Preços de Inferência em 75% com Chips Huawei Ascend — O Fim da Dependência da NVIDIA?](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## A Engenharia por Trás da Queda de Custos

A redução de 75% no preço não é apenas uma decisão comercial — ela reflete mudanças arquiteturais profundas documentadas no paper lançado junto ao modelo.

O avanço mais significativo está no **mecanismo de atenção híbrida**, que combina Compressed Sparse Attention (CSA) com Heavy Compressed Attention (HCA). Conforme descrito pelo [The Register](https://www.theregister.com/2026/04/24/deepseek_v4/), essas tecnologias reduzem drasticamente o volume de cálculo durante a inferência e o tamanho dos KV caches — as estruturas de memória que rastreiam o estado do modelo ao longo de uma conversa. O resultado prático: o V4 usa **9,5x a 13,7x menos memória** que o DeepSeek V3.2 para suportar a mesma janela de contexto de 1 milhão de tokens.

Para provedores de inferência, KV caches gigantescos são um pesadelo operacional. Eles precisam ser descarregados para memória do sistema ou flash para evitar reinicializações custosas — o que eleva latência e custo de infraestrutura. Comprimir esse cache agressivamente é uma das alavancas mais diretas para baratear a operação de modelos gigantes.

A segunda frente de eficiência é a precisão numérica. O V4 usa uma combinação de **FP8 e FP4**, incluindo treinamento com consciência de quantização (QAT) para os pesos dos especialistas MoE. Em termos práticos, FP4 reduz à metade o espaço de armazenamento dos pesos em comparação com FP8 — o que já era uma conquista do V3. Ainda segundo o The Register, o novo otimizador **Muon** também foi introduzido para acelerar a convergência do treinamento e melhorar a estabilidade.

Quem quiser calcular o impacto financeiro dessas escolhas arquiteturais para sua própria carga de trabalho pode usar a [Calculadora de Custos](/calculadora) do Turbina IA para simular diferentes cenários de tokens e preços de API.

## Huawei Ascend: O Chip que Ninguém Esperava

A outra metade da história do V4 é o hardware. O V4 foi **validado para rodar tanto em GPUs da NVIDIA quanto nos aceleradores Ascend da Huawei** — uma mudança radical em relação ao V3, que era otimizado especificamente para as GPUs Hopper da NVIDIA.

Segundo análise da [TrendForce de 7 de abril de 2026](https://www.trendforce.com/news/2026/04/07/news-decoding-deepseek-v4-how-huaweis-ascend-950-pr-is-powering-chinas-push-to-break-cuda-dependence/), o ecossistema Ascend 950 da Huawei inclui dois chips distintos para perfis diferentes:

| Chip | Memória | Bandwidth | Foco Principal | Processo |
|---|---|---|---|---|
| Ascend 950PR | 128 GB HiBL 1.0 | 1,6 TB/s | Inferência prefill | SMIC N+3 (~5nm) |
| Ascend 950DT | 144 GB HiZQ 2.0 | 4,0 TB/s | Decode + treinamento | SMIC N+3 (~5nm) |

O Ascend 950PR já está disponível na plataforma Atlas 350, com desempenho de até 1 PFLOPS (FP8) e 2 PFLOPS (FP4), e interconnect de 2 TB/s. A TrendForce também reportou que pesquisadores de mercado posicionam o 950PR em termos de capacidade **entre o NVIDIA H100 e o H200** — uma afirmação notável para um chip fabricado inteiramente com tecnologia doméstica chinesa.

A Huawei confirmou, horas após o lançamento do preview do V4, que toda a sua linha de supernodes Ascend suporta os dois modelos da série V4. A empresa afirmou publicamente: "através de estreita colaboração técnica... toda a linha de produtos Ascend supernode agora suporta os modelos da série DeepSeek-V4", conforme reportado pelo [The Daily Star](https://www.thedailystar.net/news/tech-startup/news/deepseek-previews-new-v4-model-runs-huawei-chips-4159751).


![Imagem ilustrativa sobre DeepSeek V4 Pro Corta Preços de Inferência em 75% com Chips Huawei Ascend — O Fim da Dependência da NVIDIA?](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Day 0: A Virada Histórica nos Chips Chineses

Um dos detalhes mais significativos do lançamento do V4 passou quase despercebido: múltiplos fabricantes chineses de chips alcançaram **adaptação no Dia 0** — ou seja, seus aceleradores estavam prontos para rodar o modelo no exato dia do lançamento, sem período de adaptação posterior.

Conforme documentado pela [TrendForce](https://www.trendforce.com/news/2026/04/29/news-huawei-ascend-cambricon-and-hygon-completed-day-0-adaptation-to-deepseek-v4/), os seguintes fabricantes completaram a adaptação completa no dia do lançamento:

- **Huawei Ascend** — toda a linha A2, A3 e 950, com kernels fundidos e paralelismo multi-stream
- **Cambricon** — baseada no framework vLLM, com código aberto no GitHub
- **Hygon Information** — plataforma DCU com loop fechado de implantação industrial
- **Moore Threads** — com cartão MTT S5000, em colaboração com a Academia Pequim de IA
- **Metax Technology, Baidu Kunlunxin, T-Head Semiconductor (Alibaba), Iluvatar CoreX** — todos com adaptação Day 0 ao menos para V4-Flash

O relatório da TrendForce é explícito: essa sincronização "era anteriormente exclusiva da NVIDIA." A transição de um ecossistema onde os chips chineses chegavam meses atrasados na compatibilidade para um em que chegam no mesmo dia é uma mudança estrutural no mercado global de IA.

## O Contexto Geopolítico: O Vácuo da NVIDIA na China

Para entender por que a Huawei emerge tão rapidamente, é preciso olhar para o contexto regulatório. As restrições de exportação americanas têm impedido a NVIDIA de vender seus processadores mais avançados — incluindo o H200 — ao mercado chinês. Isso criou um vácuo que empresas domésticas estão correndo para preencher.

A [TrendForce](https://www.trendforce.com/news/2026/04/07/news-decoding-deepseek-v4-how-huaweis-ascend-950-pr-is-powering-chinas-push-to-break-cuda-dependence/) reportou que, em antecipação ao lançamento do V4, grandes empresas tecnológicas chinesas — incluindo Alibaba, ByteDance e Tencent — fizeram pedidos massivos de chips Ascend da Huawei, somando centenas de milhares de unidades. A demanda foi tão intensa que os preços dos chips Huawei subiram cerca de **20%**. A empresa planeja produzir aproximadamente 600.000 chips Ascend 910C em 2026, o dobro da produção de 2025, elevando a capacidade total Ascend para 1,6 milhão de unidades no ano.

O The Daily Star também aponta que a DeepSeek havia indicado que os preços do V4-Pro poderiam cair significativamente quando os supernodes Ascend 950 fossem implantados em escala no segundo semestre de 2026 — e a queda de 75% em maio confirma que essa transição está em andamento.

Para acompanhar as versões mais recentes do DeepSeek e comparar com outros modelos disponíveis no mercado, o [Monitor de Modelos](/changelog) do Turbina IA mantém histórico atualizado de lançamentos.

## O Próximo Capítulo: Ascend 950DT e DeepSeek V4.2

Conforme noticiado pela [TrendForce em 8 de junho de 2026](https://www.trendforce.com/news/2026/06/08/news-huawei-brings-forward-ascend-950dt-deployment-to-august-deepseek-v4-2-seen-as-potential-early-adopter/), Huawei antecipou o lançamento do Ascend 950DT na Huawei Cloud para **agosto de 2026**, em vez do quarto trimestre originalmente previsto. O anúncio veio do vice-presidente da Huawei e presidente da Huawei Cloud China, Chen Lin.

A diferença entre o 950PR e o 950DT é técnica e estratégica. Enquanto o 950PR usa memória HiBL 1.0 com 1,6 TB/s de bandwidth — adequada para inferência prefill — o 950DT foi equipado com memória HiZQ 2.0 proprietária, elevando a capacidade para 144 GB e o bandwidth para **4 TB/s**. Esse salto é decisivo para operações de decode (a fase mais intensiva em memória da inferência) e para cenários de treinamento.

O 950DT suporta os formatos FP8, MXFP8, MXFP4 e HiF8, cobrindo o espectro de precisão que o V4 já utiliza. Chen Lin também declarou, citado pela Guancha.cn e reproduzido pela TrendForce, que os chips Ascend avançam no ritmo de **uma nova geração por ano, com desempenho dobrando a cada geração** — uma cadência que, se mantida, colocará a Huawei em rota de colisão com a NVIDIA nos próximos anos.

A expectativa é que a DeepSeek seja uma das primeiras empresas a implantar o V4.2 sobre o Ascend 950DT. Com o V4.1 previsto para junho de 2026, o V4.2 poderia chegar já em agosto — alinhado ao debut do novo chip em produção. O [Comparador de IAs](/comparador) do Turbina IA será atualizado com os novos benchmarks assim que os dados oficiais forem publicados.

## O Que Isso Significa para o Mercado Global

A trajetória DeepSeek-Huawei redefine o cenário competitivo em pelo menos três dimensões.

**Custo de inferência como variável estratégica.** A redução de 75% em menos de um mês após o lançamento mostra que a competição de preços em LLMs não é mais território exclusivo de gigantes americanos. Quando infraestrutura doméstica escalar, empresas chinesas conseguem transferir ganhos de eficiência para preços de API de forma muito mais ágil.

**Independência do ecossistema CUDA.** O relatório da TrendForce de abril cita análise da Weijin Research: "se a DeepSeek conseguir rodar tanto inferência quanto treinamento em chips Ascend dentro de um a dois anos — e estabilizar toda a stack de software incluindo compiladores, operadores, bibliotecas de comunicação, treinamento distribuído e frameworks de inferência — então seu pipeline de desenvolvimento de modelos poderia efetivamente se tornar independente do CUDA." A adaptação Day 0 de múltiplos fabricantes é o primeiro sinal concreto de que esse futuro está mais próximo do que parecia.

**Risco de fragmentação do ecossistema de IA.** À medida que a China desenvolve uma pilha completa de hardware e software para IA — do chip ao framework ao modelo — o mundo se encaminha para dois ecossistemas paralelos com poucas pontes entre si. Isso tem implicações para desenvolvedores globais que hoje dependem de APIs chinesas ou que implantam modelos open source do DeepSeek em infraestrutura ocidental.

## Perguntas Frequentes

**O DeepSeek V4-Pro foi treinado exclusivamente em chips da Huawei?**
Não. Conforme o próprio paper do modelo e relatos do [The Register](https://www.theregister.com/2026/04/24/deepseek_v4/), a DeepSeek validou o esquema de paralelismo do V4 tanto em GPUs da NVIDIA quanto em aceleradores Ascend da Huawei. A Huawei confirmou que seus chips foram usados em parte do treinamento do V4-Flash, mas a DeepSeek não especificou se o V4-Pro também usou hardware NVIDIA durante o pré-treinamento.

**O corte de 75% nos preços é permanente?**
Sim. A DeepSeek anunciou em 23 de maio de 2026 que a redução é permanente, com a API do V4-Pro passando para a faixa de 0,025 a 6 yuans por milhão de tokens, conforme [reportado pelo The Daily Star](https://www.thedailystar.net/news/tech-startup/news/deepseek-cuts-flagship-ai-model-prices-75-amid-huawei-chip-expansion-4183371) com base em dados da Reuters. A empresa indicou que os preços podem cair ainda mais com a expansão dos supernodes Ascend 950 no segundo semestre de 2026.

**O Ascend 950DT rivaliza com chips da NVIDIA?**
Analistas citados pela TrendForce posicionam o Ascend 950PR (o antecessor imediato) em patamar equivalente a algo entre o NVIDIA H100 e o H200 em cargas de inferência. O 950DT, com 4 TB/s de bandwidth de memória, está sendo desenhado especificamente para decode e treinamento — workloads nos quais bandwidth é fator limitante. Uma comparação direta com H200 ou Blackwell GB200 em cenários reais ainda aguarda benchmarks independentes.

## Fontes e Referências

- [The Register — DeepSeek's new models offer big inference cost savings (abril 2026)](https://www.theregister.com/2026/04/24/deepseek_v4/)
- [TrendForce — Decoding DeepSeek V4: How Huawei's Ascend 950 PR Is Powering China's Push to Break CUDA Dependence (abril 2026)](https://www.trendforce.com/news/2026/04/07/news-decoding-deepseek-v4-how-huaweis-ascend-950-pr-is-powering-chinas-push-to-break-cuda-dependence/)
- [TrendForce — Huawei Ascend, Cambricon and Hygon Completed Day 0 Adaptation to DeepSeek-V4 (abril 2026)](https://www.trendforce.com/news/2026/04/29/news-huawei-ascend-cambricon-and-hygon-completed-day-0-adaptation-to-deepseek-v4/)
- [TrendForce — Huawei Brings Forward Ascend 950DT Deployment to August, DeepSeek V4.2 Seen as Potential Early Adopter (junho 2026)](https://www.trendforce.com/news/2026/06/08/news-huawei-brings-forward-ascend-950dt-deployment-to-august-deepseek-v4-2-seen-as-potential-early-adopter/)
- [The Daily Star — DeepSeek cuts flagship AI model prices by 75% amid Huawei chip expansion (maio 2026)](https://www.thedailystar.net/news/tech-startup/news/deepseek-cuts-flagship-ai-model-prices-75-amid-huawei-chip-expansion-4183371)
- [The Daily Star — DeepSeek previews new V4 model, runs on Huawei chips (abril 2026)](https://www.thedailystar.net/news/tech-startup/news/deepseek-previews-new-v4-model-runs-huawei-chips-4159751)