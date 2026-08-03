---
title: "Qwen3.8-Max: Alibaba Lança Modelo de 2,4 Trilhões de Parâmetros que Supera GPT-5.6 e Rivaliza com Claude em Benchmarks de Código"
description: "Alibaba lança Qwen3.8-Max, modelo de 2,4 trilhões de parâmetros que promete rivalizar com Claude e superar o GPT-5.6 em código."
category: noticias
tags:
  - Qwen3.8-Max
  - Alibaba
  - Modelos de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-08-03"
coverImage: "https://images.unsplash.com/photo-1680474569854-81216b34417a?auto=format&fit=crop&w=1200&q=80"
---

Um modelo de IA passar 16 dias sozinho escrevendo código, sem nenhum humano revisando cada passo, e terminar com 265 commits e 127 pull requests no currículo. Foi exatamente isso que a Alibaba afirmou ter acontecido com o Qwen3.8-Max, o novo modelo de linguagem que a empresa chinesa apresentou nesta segunda-feira (3) como seu lançamento mais ambicioso até hoje.

Construído sobre uma arquitetura de mixture-of-experts com **2,4 trilhões de parâmetros totais**, dos quais apenas cerca de 95 bilhões são ativados a cada consulta, o Qwen3.8-Max chega prometendo desempenho equivalente — e em alguns casos superior — aos modelos mais avançados da Anthropic e da OpenAI em tarefas de programação, segundo dados divulgados pela própria Alibaba e relatados pela [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance) e pelo [InfoWorld](https://www.infoworld.com/article/4204415/alibaba-takes-aim-at-openai-and-anthropic-with-qwen3-8-max-launch.html).

> **Resposta Rápida (TL;DR):** O Qwen3.8-Max é o novo modelo de IA da Alibaba, com 2,4 trilhões de parâmetros (95 bilhões ativos por consulta), que a empresa afirma superar o GPT-5.6 Sol e rivalizar com o Claude Opus 4.8 e o Fable 5 em benchmarks de código como SWE-bench Pro. O modelo já está disponível via API e terá pesos abertos na próxima semana, com preço de US$ 2 por milhão de tokens de entrada e US$ 6 por milhão de saída.

## O que a Alibaba está afirmando

Segundo a [Bloomberg](https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance), o Qwen3.8-Max entrega resultados "comparáveis ou às vezes melhores" que o Fable 5 da Anthropic — modelo que, vale lembrar, chegou a ser colocado temporariamente sob controles de exportação dos Estados Unidos por conta de suas capacidades avançadas. A reportagem também nota que o novo modelo da Alibaba pontua acima do Kimi K3, da Moonshot, lançado poucas semanas antes e que já havia repercutido como um avanço chinês significativo.

O [InfoWorld](https://www.infoworld.com/article/4204415/alibaba-takes-aim-at-openai-and-anthropic-with-qwen3-8-max-launch.html) detalha a metodologia de comparação: a Alibaba testou o Qwen3.8-Max contra o Claude Opus 4.8, o Claude Fable 5 e o GPT-5.6 Sol da OpenAI, usando os benchmarks SWE-bench Pro e um teste proprietário batizado de NL2Repo-Bench. Um detalhe importante é que a empresa avaliou os concorrentes usando as próprias ferramentas de cada um — Claude Code para os modelos da Anthropic e Codex para o GPT-5.6 Sol — e reportou a maior pontuação publicada disponível para cada rival. Em um post na rede X citado pelo InfoWorld, a Qwen resumiu a ambição sem meias palavras: o modelo seria "um dos mais poderosos disponíveis hoje, compatível com os principais modelos de fronteira, atrás apenas do Fable 5".

Vale notar que essa não é a primeira vez que o número 2,4 trilhões aparece associado ao modelo. De acordo com o [The Decoder](https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/), a Alibaba já havia anunciado uma versão preview em meados de julho, disponível via Token Plan, Qoder e QoderWork a 10% do preço padrão — e já naquela época a empresa citava o mesmo tamanho e posicionava o modelo "logo atrás" do Fable 5, mas sem divulgar benchmarks. O Qwen3.8-Max é construído sobre a arquitetura Qwen3.5 e é o primeiro modelo da classe Qwen-Max a ter seus pesos disponibilizados publicamente.


![Imagem ilustrativa sobre Qwen3.8-Max: Alibaba Lança Modelo de 2,4 Trilhões de Parâmetros que Supera GPT-5.6 e Rivaliza com Claude em Be](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## Cinco testes de resistência, não só benchmarks de papel

O que diferencia esse lançamento de uma simples tabela de pontuações é a ênfase da Alibaba em tarefas longas e autônomas — o que a empresa chama de "long-horizon agentic tasks". O [The Decoder](https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/) reconstruiu cinco estudos de caso apresentados pela Qwen para ilustrar isso.

No primeiro, o modelo passou **16 dias construindo sozinho** uma ferramenta de linha de comando chamada oh-my-cli: recebia pedidos de usuários, transformava em issues no GitHub, se auto-atribuía a tarefa, escrevia o código, rodava testes e iterava. Até 30 de julho de 2026, o projeto acumulava 265 commits, 127 pull requests e 151 issues, sem intervenção humana, segundo a Alibaba.

No segundo caso, o Qwen3.8-Max recebeu apenas o artigo científico "Unified Data Selection for LLM Reasoning", sem nenhum código inicial, e teve que reproduzir os resultados e depois superá-los. Em cerca de cinco dias e 125 horas de computação, escreveu 7.600 linhas de código, rodou 33 jobs de treinamento em GPU, reproduziu os seis resultados principais do artigo e, testando 18 ideias próprias em quatro rodadas, bateu o método original no benchmark AIME24 por 2,7 pontos.

O terceiro teste colocou o modelo para competir no desafio WWW2025 de Reconhecimento de Intenção em Diálogo Multimodal, na plataforma Tianchi da Alibaba, contra 526 equipes humanas. Em 24 horas, o Qwen3.8-Max ajustou vários modelos de linguagem em chinês combinados com o Qwen2.5-VL-7B para leitura de capturas de tela de produtos, elevando a acurácia de 0,60 para 0,853 ao longo de 45 submissões — resultado que teria superado 458 das 526 equipes humanas participantes.

Os dois últimos casos testam planejamento de longo prazo em domínios bem diferentes entre si. No design de um bloco criptográfico para esquemas de encriptação, o modelo reduziu um circuito de 8.298 para 678 portas lógicas em cerca de 500 iterações, o que, após um layout automatizado com a ferramenta open-source OpenROAD, encolheu a área física do chip de 106x106 para 46x46 micrômetros — uma redução de 81%. Já no E-Commerce-Bench, uma simulação de um ano fiscal completo de comércio eletrônico baseada em dados anonimizados do Taobao e do Tmall, o modelo partiu de 100 mil yuans de capital, negociou com fornecedores (entre os quais havia 152 golpistas plantados no teste) e terminou com um saldo de 416.252 yuans — 38% a mais que o GLM 5.2, da concorrente Zhipu, e mais que o dobro do que seu antecessor, o Qwen3.7-Max, havia alcançado.

## Ceticismo saudável: o que os analistas estão questionando

Nem todo mundo está aceitando os números de cara. O [InfoWorld](https://www.infoworld.com/article/4204415/alibaba-takes-aim-at-openai-and-anthropic-with-qwen3-8-max-launch.html) ouviu Amit Jena, gerente de desenvolvimento de IA da Kanerika, que colocou o dedo justamente na alegação mais repetida pela imprensa — os 16 dias de trabalho autônomo. "Essa frase foi reimpressa em todo lugar e interrogada em lugar nenhum", disse Jena. "Dezesseis dias de quê? Quantas vezes um humano interveio? O resultado sobreviveu a uma revisão de código?" Ele também questiona o próprio rótulo "open-weight": "publicar pesos é um ato separado de abrir um endpoint de API. Até existir um repositório, uma licença e um model card, open-weight descreve uma intenção."

Já Charlie Dai, vice-presidente e analista principal da Forrester, vê o lançamento como evidência de que a Alibaba está "fechando terreno" com os líderes proprietários — mas pondera que essa não é a história completa. "A história maior é a rápida maturação dos modelos de peso aberto", disse Dai ao InfoWorld. Para empresas, segundo ele, isso significa alternativas cada vez mais críveis aos modelos proprietários de fronteira, especialmente em engenharia de software, customização de domínio, soberania de dados e implantações sensíveis a custo — áreas em que a abertura muitas vezes pesa tanto quanto o desempenho absoluto em benchmarks. Sobre a arquitetura de mixture-of-experts que ativa só 95 bilhões dos 2,4 trilhões de parâmetros por requisição, Dai resume a mudança de prioridade do mercado corporativo: "eficiência de inferência agora importa mais que o tamanho bruto do modelo para a maioria das empresas."


![Imagem ilustrativa sobre Qwen3.8-Max: Alibaba Lança Modelo de 2,4 Trilhões de Parâmetros que Supera GPT-5.6 e Rivaliza com Claude em Be](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80)

## Preço, disponibilidade e o que muda na prática

Enquanto os pesos abertos só chegam na próxima semana, o modelo já está acessível globalmente via API do Alibaba Cloud Model Studio e também dentro do QwenWork, a plataforma de produtividade corporativa da empresa que entrou em beta público no mesmo dia, segundo o [South China Morning Post](https://www.scmp.com/tech/article/3362738/alibabas-ai-model-qwen38-max-made-widely-accessible-ahead-open-weights-release). O QwenWork mira concorrentes como o WorkBuddy da Tencent, o Kimi Work da Moonshot e, do lado ocidental, o Claude Cowork e o ChatGPT Work.

Em termos de capacidade técnica, o modelo suporta uma janela de contexto de até 1 milhão de tokens — o equivalente a cerca de 750 mil palavras por consulta, segundo o SCMP — e é nativamente multimodal, processando desde documentos longos até séries de TV e transmissões ao vivo para construir bases de conhecimento pesquisáveis. A Alibaba também afirma que o modelo consegue recriar aplicações de software a partir de capturas de tela, gerar jogos interativos e converter plantas baixas bidimensionais em visualizações 3D.

No quesito preço, a [Infobae](https://www.infobae.com/america/agencias/2026/08/03/la-china-alibaba-presenta-qwen38-max-su-modelo-de-ia-mas-avanzado-hasta-la-fecha/) reporta que a Alibaba fixou o valor em US$ 2 por milhão de tokens de entrada e US$ 6 por milhão de tokens de saída — para quem quiser comparar esse custo lado a lado com outros modelos de ponta, vale a pena consultar a [Calculadora de Custos](/calculadora) do Turbina IA, que estima o gasto real por volume de uso, ou o [Comparador de IAs](/comparador), que já reúne especificações de preço e desempenho de dezenas de modelos concorrentes.

A repercussão no mercado foi imediata: as ações da Alibaba em Hong Kong subiram 7%, fechando a segunda-feira a HK$ 125,20, segundo o SCMP — reação que a [CNBC](https://www.cnbc.com/2026/08/03/alibaba-ai-model-qwen-rival-anthropic.html) também associa diretamente ao anúncio do Qwen3.8-Max.

## O tabuleiro chinês está mais cheio do que nunca

O lançamento não acontece no vácuo. A [Infobae](https://www.infobae.com/america/agencias/2026/08/03/la-china-alibaba-presenta-qwen38-max-su-modelo-de-ia-mas-avanzado-hasta-la-fecha/) situa o Qwen3.8-Max dentro de uma sequência recente de lançamentos chineses de peso — o Kimi K3 da Moonshot e o GLM-5.2 da Zhipu chegaram nas semanas anteriores — em meio à disputa entre China e Estados Unidos pelo controle de tecnologias consideradas estratégicas. A companhia também vinculou o lançamento à sua aposta declarada de mais de US$ 52 bilhões em três anos para IA e nuvem, segundo a mesma reportagem.

Nitish Tyagi, analista sênior principal da Gartner, ouvido pelo InfoWorld, resume o ponto que talvez importe mais para quem decide onde investir orçamento de IA: o significado do lançamento está menos no número de parâmetros e mais no que ele sinaliza sobre a pressão competitiva sobre os custos de implantação de IA. Na prática, o que muda para empresas e desenvolvedores é que a distância entre "ter que pagar premium por desempenho de fronteira" e "ter uma alternativa aberta e mais barata com desempenho próximo" está encolhendo mês a mês — e isso pressiona diretamente a política de preços de OpenAI e Anthropic. Para quem já usa modelos no dia a dia, vale acompanhar como esses lançamentos se refletem em ferramentas práticas, como as reunidas na seção de [Prompts](/prompts) do Turbina IA, e ficar de olho em atualizações de versão pelo [Monitor de Modelos](/changelog).

Resta a pergunta que Jena, da Kanerika, colocou sobre a mesa e que ainda não tem resposta pública: quanto do trabalho de 16 dias do Qwen3.8-Max realmente sobreviveu a uma revisão de código humana — e o quanto disso é, de fato, reprodutível fora dos laboratórios da própria Alibaba.

## Perguntas Frequentes

### O que é o Qwen3.8-Max?

É o modelo de IA mais avançado lançado pela Alibaba até agora, com 2,4 trilhões de parâmetros totais em arquitetura mixture-of-experts, dos quais cerca de 95 bilhões são ativados por consulta. Foi apresentado em 3 de agosto de 2026 e já está disponível via API, com pesos abertos previstos para a semana seguinte.

### O Qwen3.8-Max realmente supera o Claude e o GPT-5.6?

Segundo benchmarks divulgados pela própria Alibaba, o modelo entrega pontuações comparáveis ou superiores ao Claude Opus 4.8, ao Claude Fable 5 e ao GPT-5.6 Sol em testes de código como o SWE-bench Pro. São resultados internos da empresa, ainda não replicados de forma independente por terceiros, e analistas como Amit Jena, da Kanerika, pedem mais escrutínio sobre alegações específicas, como o teste de codificação autônoma de 16 dias.

### Quanto custa usar o Qwen3.8-Max e onde ele está disponível?

O preço fixado pela Alibaba é de US$ 2 por milhão de tokens de entrada e US$ 6 por milhão de tokens de saída. O modelo já pode ser acessado via API no Alibaba Cloud Model Studio e pela plataforma QwenWork, com lançamento dos pesos abertos previsto para a semana seguinte ao anúncio.

## Fontes e Referências

- [Alibaba's Qwen3.8-Max AI Model Claims Benchmark Scores Rivaling Anthropic - Bloomberg](https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance)
- [Alibaba shares rally after unveiling Qwen3.8-Max AI model - CNBC](https://www.cnbc.com/2026/08/03/alibaba-ai-model-qwen-rival-anthropic.html)
- [Alibaba takes aim at OpenAI and Anthropic with Qwen3.8-Max launch - InfoWorld](https://www.infoworld.com/article/4204415/alibaba-takes-aim-at-openai-and-anthropic-with-qwen3-8-max-launch.html)
- [Alibaba's AI model Qwen3.8-Max made widely accessible ahead of open-weights release - South China Morning Post](https://www.scmp.com/tech/article/3362738/alibabas-ai-model-qwen38-max-made-widely-accessible-ahead-open-weights-release)
- [Alibaba's open-weight Qwen3.8-Max takes on long-horizon AI tasks with 2.4 trillion parameters - The Decoder](https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/)
- [La china Alibaba presenta Qwen3.8-Max, su modelo de IA más avanzado hasta la fecha - Infobae](https://www.infobae.com/america/agencias/2026/08/03/la-china-alibaba-presenta-qwen38-max-su-modelo-de-ia-mas-avanzado-hasta-la-fecha/)