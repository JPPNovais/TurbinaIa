---
title: "Astra, Modelo Ainda Não Lançado da OpenAI, Resolve 10 Problemas Matemáticos Abertos há Décadas por US$ 2 Mil"
description: "OpenAI diz que seu modelo Astra resolveu 10 problemas matemáticos abertos há décadas, com provas verificáveis em Lean, por cerca de US$ 2 mil em computação."
category: noticias
tags:
  - OpenAI
  - Matemática
  - Astra
  - Inteligência Artificial
author: Redação Turbina IA
isFeatured: false
date: "2026-08-10"
coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
---

Dez problemas. Décadas em aberto. Um deles parado desde 1978, outro desde 1980, um terceiro sem solução havia 27 anos. E, segundo a OpenAI, um custo total de computação de aproximadamente **US$ 2 mil** para chegar a todos eles. É esse o número que a empresa colocou em destaque ao anunciar, em 1º de agosto, que uma versão interna e ainda não lançada do seu próximo modelo, batizado de **Astra**, produziu novos resultados matemáticos em áreas como teoria de grupos, geometria de altas dimensões e complexidade computacional, segundo reportagem da [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/).

A julgar pelos bastidores, não é um exagero de marketing isolado. A OpenAI publicou uma coleção de manuscritos com 249 páginas e, para cada um dos dez resultados, um certificado verificável por máquina escrito em Lean 4, disponível no GitHub sob licença Apache 2.0 — com o que a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/) descreve como contagem zero de "sorry", jargão do Lean para trechos de prova deixados incompletos. Na prática, isso significa que ninguém precisa confiar na palavra da OpenAI: qualquer pessoa pode baixar o compilador e rodar a verificação por conta própria.

> **Resposta Rápida (TL;DR):** A OpenAI anunciou em 1º de agosto de 2026 que seu modelo não lançado Astra resolveu dez problemas matemáticos abertos havia pelo menos uma década — incluindo a primeira construção explícita de um grupo não sófico e a refutação da conjectura de rigidez de Connes — gastando cerca de US$ 2 mil em computação. Diferente de anúncios anteriores da própria empresa, desta vez cada prova veio acompanhada de um certificado verificável no assistente Lean 4, publicado no GitHub. Nenhum dos resultados passou por revisão por pares até o momento.

## Os dez resultados, um a um

A lista reúne problemas de áreas bem distintas da matemática e da ciência da computação teórica. O mais comentado é a primeira construção explícita de um **grupo não sófico**, questão em aberto desde que o matemático Mikhail Gromov introduziu o conceito de sofia em 1999 — 27 anos sem resposta, segundo o [TheNextWeb](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups). Em termos simples, um grupo sófico é uma estrutura de simetrias que pode ser aproximada por embaralhamentos de um baralho finito de cartas; até agora, todo grupo já examinado por matemáticos havia se mostrado sófico, sem que ninguém conseguisse provar se essa era uma regra universal ou não.

| Resultado | Área | Tempo em aberto |
|---|---|---|
| Construção explícita de grupo não sófico | Teoria de grupos | 27 anos (desde 1999) |
| Refutação da conjectura de rigidez de Connes | Álgebras de von Neumann | 46 anos (desde 1980) |
| Prova da conjectura do volume de Ehrhart | Geometria de retículas | Décadas |
| 3 problemas do catálogo de Erdős (incl. nº 183, Ramsey multicolorido) | Combinatória extremal | Décadas |
| Melhoria no limite superior de empacotamento de esferas | Geometria de altas dimensões | 48 anos (desde 1978) |
| Teorema de repetição paralela para jogos quânticos | Complexidade quântica | — |
| Novos limites inferiores de complexidade de circuito (permanente) | Complexidade computacional | — |
| Contraexemplos em teoria de grafos extremal | Combinatória | — |

A tabela resume o que a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/) e o [TheNextWeb](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups) descrevem em maior detalhe: a refutação da conjectura de Connes, proposta em 1980, previa que um objeto algébrico funcionaria como "impressão digital" única de uma classe rígida de grupos; Astra construiu infinitos grupos distintos que compartilham a mesma impressão digital. Já o problema 183 do catálogo de Erdős trata de números de Ramsey multicoloridos — a pergunta de qual o tamanho mínimo de uma rede, com arestas coloridas por um número fixo de cores, que garante a existência de um triângulo monocromático.

Vale registrar a nota de cautela do próprio time da OpenAI. Segundo o [Forbes España](https://forbes.es/empresas/994406/openai-astra-resuelve-problemas-matematicos-decadas/), o pesquisador Noam Brown fez questão de dizer: "lamentablemente, todavía no hemos resuelto ninguno de los Problemas del Milenio" — os sete enigmas de US$ 1 milhão cada que o Clay Mathematics Institute mantém como referência máxima da matemática não resolvida. Nada do que foi anunciado chega perto disso.


![Imagem ilustrativa sobre Astra, Modelo Ainda Não Lançado da OpenAI, Resolve 10 Problemas Matemáticos Abertos há Décadas por US$ 2 Mil](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80)

## Por que um certificado em Lean muda o jogo

O detalhe técnico mais relevante do anúncio não é matemático, é epistemológico: pela primeira vez, a OpenAI não pede que a comunidade acredite na palavra da empresa. Como explica o [Forbes España](https://forbes.es/empresas/994406/openai-astra-resuelve-problemas-matematicos-decadas/), o Lean é um assistente de demonstração que verifica cada passo lógico de uma prova; se um único passo não decorrer corretamente do anterior, o software rejeita a prova inteira, sem margem para interpretação. Isso comprime um processo de revisão por pares que normalmente leva meses ao tempo necessário para baixar um arquivo do GitHub. Quem quiser entender melhor o que significa uma prova "verificável por máquina" pode consultar termos como esse no [Glossário de IA](/glossario) do Turbina IA.

Isso não elimina o trabalho humano. Como pondera a própria [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/), o veredito binário do Lean não garante que o enunciado formal capture de fato a pergunta que o problema original fazia — essa checagem ainda depende de um matemático humano ler o enunciado e julgar se ele é relevante. E nenhum dos dez resultados, reforça a reportagem, passou por revisão por pares até a publicação.

Sebastien Bubeck, chefe de pesquisa em matemática da OpenAI, confirmou os resultados publicamente e os chamou de "beautiful", segundo o [TheNextWeb](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups). Já Thomas Bloom, o matemático britânico que mantém o catálogo online de problemas de Erdős, classificou o anúncio de agosto como "big news" e disse considerá-lo mais significativo do que o resultado anterior da empresa sobre a conjectura da distância unitária, conforme registrado tanto pelo TheNextWeb quanto pelo [Forbes España](https://forbes.es/empresas/994406/openai-astra-resuelve-problemas-matematicos-decadas/).

## O precedente de maio: a conjectura de 80 anos

Para entender por que o anúncio de agosto pesa tanto, é preciso voltar a 20 de maio de 2026. Naquele dia, a OpenAI revelou que um modelo interno havia encontrado um contraexemplo para o "problema da distância unitária", conjectura proposta por Paul Erdős em 1946, segundo o [TechCrunch](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/). O enunciado é simples de explicar: dado um número qualquer de pontos num plano, qual a maior quantidade de pares que se pode separar exatamente pela mesma distância? Por 80 anos, acreditou-se que a melhor estratégia se parecia com uma grade quadrada bem ajustada. O modelo da OpenAI descobriu uma família inteiramente nova de construções — baseada numa grade de dimensão superior "achatada" sobre o plano — que supera esse limite, de acordo com a [Scientific American](https://www.scientificamerican.com/article/ai-just-solved-an-80-year-old-erdos-problem-and-mathematicians-are-amazed/).

A repercussão entre matemáticos foi incomum para um anúncio de IA. Timothy Gowers, medalhista Fields, escreveu em comentário solicitado pela própria OpenAI que recomendaria a prova para publicação nos Annals of Mathematics sem hesitar, segundo a [Scientific American](https://www.scientificamerican.com/article/ai-just-solved-an-80-year-old-erdos-problem-and-mathematicians-are-amazed/). Daniel Litt, da Universidade de Toronto, um dos matemáticos consultados pela OpenAI para verificar a prova, chamou o resultado de "o único resultado interessante produzido de forma autônoma por IA até agora". E, como registra a [Quanta Magazine](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/), Noga Alon, da Universidade de Princeton — que já resolveu dezenas de problemas de Erdős ao longo da carreira — disse que esses modelos estão "mudando dramaticamente a forma como a pesquisa matemática é feita".

Nem tudo foi perfeito: o próprio resultado da IA foi superado por matemáticos humanos poucas semanas depois, quando Will Sawin melhorou a construção do modelo, segundo a [Scientific American](https://www.scientificamerican.com/article/ai-just-solved-an-80-year-old-erdos-problem-and-mathematicians-are-amazed/). Mas a técnica trazida pela IA — vinda de um ramo da matemática que ninguém havia aplicado com sucesso a esse problema — acabou sendo reaproveitada para resolver outras questões dias depois, segundo relata a [Quanta Magazine](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/).


![Imagem ilustrativa sobre Astra, Modelo Ainda Não Lançado da OpenAI, Resolve 10 Problemas Matemáticos Abertos há Décadas por US$ 2 Mil](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## A ressaca de outubro: por que ninguém acredita de graça

Nada disso apaga um episódio recente que ainda paira sobre qualquer anúncio da OpenAI nessa área. Em outubro de 2025, o então vice-presidente da empresa, Kevin Weil, publicou nas redes que o "GPT-5 encontrou soluções para 10 (!) problemas de Erdős antes não resolvidos e avançou em outros 11", relembra o [TechCrunch](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/). Era mentira por omissão: o modelo não havia resolvido nada, apenas encontrado soluções que já existiam na literatura acadêmica e que Thomas Bloom simplesmente desconhecia ao montar o catálogo. Bloom classificou o episódio como "uma distorção dramática", rivais como Yann LeCun fizeram troça publicamente, e o executivo da Google DeepMind, Demis Hassabis, chamou o caso de embaraçoso — Weil apagou o post, de acordo com a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/).

É por isso que os certificados em Lean da rodada de agosto não são um detalhe técnico qualquer: são a resposta direta a uma crise de credibilidade que a própria OpenAI provocou dez meses antes. E é também por isso que o timing do anúncio coincide com uma tensão crescente entre big techs de IA e a comunidade matemática. Em junho, matemáticos lançaram a Declaração de Leiden, endossada pela União Matemática Internacional, alertando que empresas de IA "estão usando pesquisa publicada sem consentimento, contornando a revisão por pares e ameaçando a integridade da prova e da atribuição", segundo o [TheNextWeb](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups). O documento cita explicitamente empresas que anunciam resultados por meio de press releases em vez de publicações revisadas por pares — exatamente o que a OpenAI voltou a fazer em agosto, ainda que com o reforço extra da verificação formal.

## O que é o Astra e quando ele chega

Um ponto ficou deliberadamente vago no anúncio: o próprio Astra. A OpenAI o descreve apenas como sua "próxima grande família de modelos", construída para coordenar múltiplos agentes ao longo de tarefas longas — uma extensão do trabalho de raciocínio em tempo de inferência associado ao pesquisador Noam Brown, que chamou os resultados de "um passo importante para o raciocínio científico", de acordo com a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/). Não há data de lançamento, preço ou confirmação sobre se o modelo sairá como GPT-6 ou como mais uma variante da família GPT-5 — o investidor Mark Kretschmann especulou publicamente que se trata do próprio GPT-6, mas a empresa não confirmou nada disso, segundo a mesma reportagem.

O que se sabe é que Sam Altman demonstrou o Astra a formuladores de políticas em Washington nos dias que antecederam o anúncio, e que a OpenAI está concedendo acesso gratuito a seus modelos de fronteira para 100 mil pesquisadores acadêmicos até 2027 — um movimento que aprofunda os laços da empresa com a comunidade científica ao mesmo tempo em que concentra infraestrutura de pesquisa em sua própria plataforma, nota a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/). Quando o lançamento oficial acontecer, quem quiser acompanhar como o novo modelo se compara a Gemini, Claude e outros concorrentes pode consultar o [Comparador de IAs](/comparador) do Turbina IA; até lá, o [Monitor de Modelos](/changelog) do site é o lugar para acompanhar quando a versão pública sair do papel.

## O que muda na prática

Para o leitor que não é matemático, o número mais relevante talvez não seja nenhum dos dez teoremas, mas o preço: cerca de US$ 2 mil em créditos de API para produzir resultados que resistiram a especialistas por décadas, segundo a taxa do GPT-5.6 Sol citada pela [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/). É um valor que qualquer laboratório universitário de porte médio consegue bancar — e que muda o cálculo de quem antes via pesquisa matemática de ponta como algo restrito a poucos centros com orçamento robusto. Quem quiser dimensionar o que esse tipo de gasto significa em créditos de API pode simular cenários na [Calculadora de Custos](/calculadora) do Turbina IA.

Na prática, o detalhe que passou mais despercebido no noticiário é que a verificação formal — não a genialidade da prova em si — é o que torna esse anúncio diferente dos anteriores. Um modelo de linguagem pode "alucinar" uma demonstração convincente, mas um certificado em Lean não aceita atalhos: ou o argumento compila, ou não compila. É essa garantia de correção, mais do que a inteligência do sistema, que abre caminho para aplicar IA generativa em áreas onde erro não é tolerável — de criptografia a engenharia crítica. A pergunta que fica em aberto é se a comunidade matemática vai aceitar resultados anunciados por blog corporativo, ainda que verificáveis, como parte legítima do corpo de conhecimento da área, ou se vai insistir que só a revisão por pares tradicional confere esse status — questão que a própria Declaração de Leiden foi escrita para colocar em debate, segundo o [TheNextWeb](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups).

## Perguntas Frequentes

### O que é o Astra, o modelo da OpenAI por trás dos resultados?

Astra é o nome que a OpenAI deu à sua próxima grande família de modelos, ainda não lançada publicamente, projetada para coordenar múltiplos agentes ao longo de tarefas longas de raciocínio. A empresa não confirmou se ele sairá como GPT-6 ou como uma variante da série GPT-5, segundo a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/).

### As provas matemáticas do Astra já foram aceitas pela comunidade científica?

Não. Nenhum dos dez resultados passou por revisão por pares até a publicação do anúncio, em 1º de agosto de 2026. O que existe é a verificação formal em Lean 4, que confirma a validade lógica de cada prova, mas não substitui o julgamento de especialistas sobre a relevância dos enunciados, conforme aponta a [SiliconANGLE](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/).

### Por que a OpenAI publicou certificados em Lean desta vez?

Porque em outubro de 2025 a empresa já havia sido desmentida ao afirmar que o GPT-5 tinha resolvido dez problemas de Erdős que, na realidade, já estavam na literatura acadêmica — episódio que o matemático Thomas Bloom chamou de "distorção dramática", segundo o [TechCrunch](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/). Os certificados verificáveis por máquina eliminam a necessidade de confiar na palavra da empresa.

## Fontes e Referências

- [Why the Legendary Erdős Problems Are Falling to AI](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)
- [OpenAI claims it solved an 80-year-old math problem — for real this time](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/)
- [AI just solved an 80-year-old 'Erdős problem,' and mathematicians are amazed](https://www.scientificamerican.com/article/ai-just-solved-an-80-year-old-erdos-problem-and-mathematicians-are-amazed/)
- [OpenAI says its next model, Astra, has solved ten open problems in mathematics](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups)
- [OpenAI's Astra solves 10 long-open math problems and publishes the proofs](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/)
- [OpenAI Astra resuelve problemas matemáticos](https://forbes.es/empresas/994406/openai-astra-resuelve-problemas-matematicos-decadas/)