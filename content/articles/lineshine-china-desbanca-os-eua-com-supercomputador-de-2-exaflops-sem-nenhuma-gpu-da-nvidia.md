---
title: "LineShine: China Desbanca os EUA com Supercomputador de 2 Exaflops Sem Nenhuma GPU da Nvidia"
description: "O LineShine atingiu 2,198 exaflops usando apenas CPUs domésticas, desbancando o El Capitan e driblando as sanções dos EUA em semicondutores."
category: noticias
tags:
  - Supercomputadores
  - China
  - Hardware
  - Geopolítica Tecnológica
  - HPC
author: Redação Turbina IA
isFeatured: false
date: "2026-06-29"
coverImage: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=80"
---

Na manhã de 23 de junho de 2026, no Congress Center Hamburg, durante a conferência ISC 2026 de computação de alto desempenho, a China reescreveu a história da supercomputação mundial. O **LineShine**, um sistema instalado no Centro Nacional de Supercomputação de Shenzhen, estreou diretamente na primeira posição da [lista TOP500](https://www.top500.org/news/lineshine-debuts-no-1-top500-enters-new-global-exascale-era/) — o ranking semestral que mede os computadores mais poderosos do planeta. Com 2,198 exaflops de desempenho sustentado, o equivalente a mais de 2 quintilhões de operações matemáticas de dupla precisão por segundo, a máquina não apenas desbancou o americano El Capitan como estabeleceu um novo paradigma: pela primeira vez na história, um supercomputador ultrapassou a barreira dos dois exaflops sem usar uma única GPU da Nvidia, da Intel ou da AMD.

A façanha é ainda mais impressionante quando se considera o contexto. Durante anos, Washington vem impondo restrições cada vez mais rigorosas ao acesso da China a semicondutores avançados, GPUs de alta performance e equipamentos de fabricação de chips — justamente as tecnologias consideradas indispensáveis para construir supercomputadores de ponta. O LineShine é a resposta chinesa a essas sanções, e ela foi dada em altíssima voz.

Segundo [reportagem da Al Jazeera](https://www.aljazeera.com/economy/2026/6/24/china-takes-us-crown-for-worlds-fastest-supercomputer), Jack Dongarra, professor emérito de Ciência da Computação da Universidade do Tennessee e um dos organizadores do TOP500, declarou que o resultado não o surpreendeu inteiramente. "Os controles de exportação podem desacelerar o acesso da China a certos componentes avançados, mas também fornecem um forte incentivo para desenvolver alternativas domésticas", afirmou. "O LineShine sugere que a China respondeu por meio de investimentos em larga escala e codesign de hardware e software."

> **Resposta Rápida (TL;DR):** O LineShine, instalado no Centro Nacional de Supercomputação de Shenzhen, tornou-se o computador mais rápido do mundo ao atingir 2,198 exaflops usando exclusivamente CPUs ARM domésticas — sem GPUs da Nvidia, Intel ou AMD. O feito, revelado na conferência ISC 2026 em Hamburgo, marca a primeira vez desde 2017 que um sistema chinês lidera o TOP500 e demonstra que as sanções americanas aceleraram, em vez de barrar, o desenvolvimento tecnológico autônomo da China.

## O Que É o LineShine e Onde Ele Fica

O LineShine está instalado no **Centro Nacional de Supercomputação de Shenzhen (NSCS)** e foi construído pelo Shenzhen Cloud Computing Center. A diretora do centro, Lu Yutong — também responsável pelo Centro Nacional de Supercomputação de Guangzhou e ex-presidente do ISC —, apresentou pessoalmente o sistema em Hamburgo e é apontada como a principal arquiteta do projeto.

De acordo com a [cobertura da HPCwire](https://www.hpcwire.com/2026/06/25/inside-lineshine-the-new-chinese-supercomputer-sitting-atop-the-top500/), Yutong descreveu a filosofia do projeto com os princípios **ABC**: *"Application driven, Balanced architecture e Co-design on full stack"* — orientado pela aplicação, com arquitetura equilibrada e codesign em toda a pilha tecnológica. Em suas palavras durante a apresentação: "Buscamos alto desempenho, alta eficiência energética e alta programabilidade. Propomos uma nova arquitetura de aceleração online, baseada apenas em CPU, que herda a tradição do HPC, abraça o futuro orientado por IA e retorna à essência da aceleração computacional."

O sistema opera sobre a plataforma **LingKun** e utiliza o **Kylin OS** — uma distribuição Linux com contribuições de diversas partes do mundo, mas com forte raiz no ecossistema de software chinês, como destacou [The Register](https://www.theregister.com/hpc/2026/06/24/chinese-supercomputer-using-local-processors-heads-top500-list/5260532).


![Imagem ilustrativa sobre LineShine: China Desbanca os EUA com Supercomputador de 2 Exaflops Sem Nenhuma GPU da Nvidia](https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80)

## A Arquitetura Que Desafia a Lógica Convencional

### O Processador LX2: Coração Sem GPU

O LineShine é construído inteiramente sobre o processador **LX2**, um chip baseado em arquitetura ARM que roda a 1,55 GHz e integra **304 núcleos por die**. Para leitores que queiram entender a diferença fundamental entre CPUs e GPUs no contexto de computação de alto desempenho, o nosso [Glossário de IA](/glossario) oferece uma introdução acessível a esses conceitos.

Conforme detalhado pelo TOP500.org, o sistema conta com **13,79 milhões de núcleos** distribuídos em **20.480 nós de computação**. The Register, que teve acesso ao artigo científico pré-publicado sobre o sistema, revela que cada LX2 integra dois dies de computação (304 núcleos no total) e oito pilhas HBM *on-package* (32 GB, com largura de banda agregada de 4 TB/s). Cada die contém 152 núcleos e 128 GB de memória DDR *off-package*, organizada em quatro domínios NUMA, com um motor SDMA dedicado para movimentação de dados entre DDR e HBM.

A HPCwire acrescenta que a arquitetura utiliza chiplets: cada die é dividido em quatro domínios NUMA, cada um com 38 núcleos ARMv9 e 4 GB de HBM. O LX2 suporta múltiplas precisões — FP64, FP32, FP16 e INT8 — por meio das unidades SME e SVE, entregando até **60,3 teraflops em FP64 por chip**. Isso posiciona o processador tanto para cargas de trabalho HPC tradicionais de modelagem e simulação quanto para aplicações de IA que não exigem precisão máxima. A China descreve o LX2 como "a CPU de maior performance do mundo" — uma afirmação audaciosa que o desempenho do sistema em escala vai ao encontro de validar.

### Estrutura Física: 90 Racks, 42,2 Megawatts

O cluster inteiro ocupa **90 gabinetes (racks)**, com 512 CPUs por rack, entregando **30 petaflops de FP64 por rack** e consumindo 580 kilowatts por rack. No total, o sistema consome **42,2 megawatts** de energia — o equivalente ao consumo de uma cidade de médio porte. O resfriamento é realizado com **100% liquid cooling**, utilizando placas de refrigeração de dupla face. O armazenamento total conectado ao sistema é de **200 petabytes**.

### LingQi: A Rede de Interconexão Chinesa

Um aspecto frequentemente subestimado em análises de supercomputadores é a rede de interconexão — a infraestrutura que conecta todos os nós e determina a eficiência da comunicação entre eles. No LineShine, essa função é exercida pela **LingQi**, desenvolvida pela Hangzhou LingQi Technology Co., conforme identificou The Register.

A LingQi utiliza topologia **fat-tree de múltiplos planos e múltiplos trilhos**, oferece **1,6 Tb/s de largura de banda por nó**, suporta **2 milhões de portas** e pode escalar para mais de **100.000 nós**. A rede apresenta recursos similares ao InfiniBand — como controle de fluxo baseado em crédito —, e, segundo a HPCwire, entrega latência de aproximadamente **1 microssegundo**.

## O TOP500 de Junho de 2026: Uma Nova Era Exaescalar

A estreia do LineShine eleva para **cinco** o número de sistemas no mundo que sustentam mais de um exaflop nos testes HPL. Pela primeira vez na história, sistemas exaescalares estão distribuídos simultaneamente entre Ásia, América do Norte e Europa. Confira o ranking atual dos cinco primeiros, segundo o [TOP500.org](https://www.top500.org/news/lineshine-debuts-no-1-top500-enters-new-global-exascale-era/):

| Posição | Sistema | Local | País | Desempenho HPL |
|---------|---------|-------|------|----------------|
| 1 | LineShine | Centro Nacional de Supercomputação de Shenzhen | China | 2,198 Exaflop/s |
| 2 | El Capitan | Lawrence Livermore National Laboratory | EUA | 1,809 Exaflop/s |
| 3 | Frontier | Oak Ridge National Laboratory | EUA | 1,353 Exaflop/s |
| 4 | Aurora | Argonne National Laboratory | EUA | 1,012 Exaflop/s |
| 5 | JUPITER Booster | Jülich Supercomputing Centre | Alemanha | 1,000 Exaflop/s |

O LineShine supera o El Capitan — que havia ocupado a primeira posição desde novembro de 2024 — com uma vantagem de aproximadamente **20% em desempenho sustentado**, confirmado tanto pela Al Jazeera quanto pelo TOP500. O El Capitan, construído sobre a arquitetura HPE Cray EX255a com CPUs AMD EPYC de 4ª geração e aceleradores AMD Instinct MI300A, permanece em segundo lugar com 1,809 exaflops e eficiência energética superior: 60,94 Gigaflops/Watt contra 52,07 Gigaflops/Watt do LineShine.

A lista de junho de 2026 também registra a estreia do **HPC7 da Eni S.p.A.** na sexta posição, com 571,5 Petaflops, sobre a mesma arquitetura AMD MI300A do El Capitan.


![Imagem ilustrativa sobre LineShine: China Desbanca os EUA com Supercomputador de 2 Exaflops Sem Nenhuma GPU da Nvidia](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80)

## Sem Nvidia, Sem Intel, Sem AMD: O Que Isso Significa

Para entender a magnitude do feito, é preciso compreender o contexto tecnológico. Praticamente todos os supercomputadores de ponta atuais dependem de GPUs — aceleradores gráficos da Nvidia, AMD ou Intel — para realizar operações de ponto flutuante em massa. O LineShine optou por um caminho radicalmente diferente: CPUs puras, sem aceleradores dedicados.

Como aponta o [Tom's Hardware](https://www.tomshardware.com/tech-industry/supercomputers/china-tops-the-top500-with-a-cpu-only-supercomputer-ending-el-capitans-reign), isso explica um dado revelador nos benchmarks: no teste HPL-MxP de precisão mista — mais relevante para cargas de IA —, o LineShine atingiu 7,92 Exaflops, um multiplicador de apenas 3,6x sobre sua pontuação HPL. Para comparação, sistemas com GPUs dedicadas frequentemente apresentam multiplicadores de 10x ou mais nesse benchmark, pois as GPUs são otimizadas especificamente para precisão reduzida. Esse resultado aponta diretamente para a ausência de aceleradores de baixa precisão — uma característica do projeto, não uma limitação acidental.

A decisão de usar apenas CPUs tem vantagens práticas consideráveis: maior **programabilidade**, facilidade no desenvolvimento de software e uma arquitetura mais familiar para cientistas que precisam portar aplicações existentes. Para quem utiliza IA em produção e deseja comparar como diferentes arquiteturas de hardware impactam inferência e treinamento, o nosso [Comparador de IAs](/comparador) pode ajudar a colocar esses trade-offs em perspectiva.

Outro detalhe importante: o TOP500 e The Register estimam que o LineShine ainda tem **potencial não explorado**. Na rodada de testes de junho de 2026, o sistema atingiu apenas **80% de seu pico teórico** de 2,736 Exaflops. Iterações futuras de benchmark podem revelar um desempenho ainda maior.

## A Resposta Chinesa às Sanções Americanas

A trajetória de restrições dos EUA ao supercomputing chinês é longa e bem documentada. O [China Daily](https://www.chinadaily.com.cn/a/202606/25/WS6a3d32d8a310986e2b461f1d.html) registra a escalada: em 2015, Washington impôs restrições ligadas ao projeto Tianhe-2; em 2019, colocou Sugon e Sunway TaihuLight na lista negra; em 2021, expandiu as restrições a mais sete entidades de supercomputação chinesas, incluindo controles sobre semicondutores avançados, GPUs de alto nível e equipamentos de fabricação de chips.

O raciocínio por trás das sanções era claro: sem os componentes, a China não conseguiria construir os sistemas. O LineShine demonstra que o raciocínio estava incompleto. Ao negar acesso às tecnologias existentes, as restrições criaram um incentivo poderoso — e financiado pelo Estado — para o desenvolvimento de alternativas domésticas. O China Daily vai além: destaca que a China subiu da 34ª para a 10ª posição no Índice Global de Inovação entre 2012 e 2025, e que o país atrai mais de US$ 100 bilhões em investimento estrangeiro direto há 16 anos consecutivos — sinalizando que o ecossistema de inovação não está isolado do mundo.

Tanto a Al Jazeera quanto The Register destacam que o LineShine não é uma criação 100% isolada do ocidente: o processador LX2 usa a arquitetura de instruções **ARMv9**, licenciada da britânica Arm Holdings. O KylinOS é baseado em Linux, com contribuições globais. "O uso de núcleos ARM e Linux significa que Pequim não rompeu completamente com o mundo", escreveu The Register. Mas a fabricação do chip, o design de sistema, a rede LingQi e o ecossistema de software de alto desempenho são criações domésticas — e é essa combinação que interessa geopoliticamente.

## Impacto Geopolítico: Além dos Benchmarks

A China havia dominado o TOP500 no passado — chegou a ocupar quase metade dos spots em 2019 —, mas a participação chinesa no ranking despencou nos anos seguintes, em parte pelas sanções e em parte porque as empresas chinesas passaram a ser mais discretas sobre suas capacidades. O retorno ao topo com o LineShine tem, portanto, um componente político tão relevante quanto o técnico.

Para acompanhantes da corrida global em IA, é relevante lembrar que supercomputadores desta escala são a infraestrutura que viabiliza o treinamento dos maiores modelos de linguagem e sistemas de IA do planeta. Entender como o hardware evolui é fundamental para antecipar o que os modelos serão capazes de fazer; o nosso [Monitor de Modelos](/changelog) acompanha essa fronteira em tempo real.

Ao mesmo tempo, especialistas independentes pedem cautela. Jack Dongarra, conforme reportado pela Al Jazeera, lembrou que o TOP500 avalia "um único benchmark" e não deve ser visto como "uma medida completa de liderança tecnológica". Desempenho em aplicações científicas reais, maturidade de software, confiabilidade e facilidade de uso são dimensões igualmente importantes — e mais difíceis de quantificar. The Register também aponta que a indústria chinesa de GPUs, embora crescente, ainda está de quatro a cinco anos atrás da Nvidia e da AMD em performance. O LineShine é uma vitória específica de alto impacto simbólico, não a eliminação de todas as lacunas tecnológicas.

## Perguntas Frequentes

### O LineShine usa tecnologia 100% chinesa?

Não inteiramente. O processador LX2 é fabricado na China, mas usa a arquitetura de instruções ARMv9, licenciada da britânica Arm Holdings. O sistema operacional KylinOS é baseado em Linux, um projeto de código aberto com contribuições globais. A rede de interconexão LingQi e o design de sistema integrado, no entanto, são criações domésticas chinesas.

### Por que construir um supercomputador apenas com CPUs em vez de GPUs?

A principal razão prática é que as sanções americanas impedem a China de importar GPUs de alto desempenho da Nvidia ou AMD. Mas há vantagens técnicas: CPUs como o LX2 são mais programáveis, suportam múltiplas precisões (FP64, FP32, FP16, INT8) e são mais acessíveis para cientistas que precisam portar aplicações existentes. A contrapartida é uma densidade de compute por watt menor em comparação com aceleradores dedicados.

### O LineShine é melhor que o El Capitan para IA generativa?

Não necessariamente. O benchmark HPL-MxP revelou que o LineShine atinge apenas 3,6x sua pontuação HPL em precisão mista, enquanto sistemas com GPUs geralmente chegam a 10x ou mais. Para inferência e treinamento de modelos de linguagem de grande escala, arquiteturas com aceleradores dedicados ainda têm vantagens expressivas. O LineShine brilha em simulação científica de dupla precisão — o domínio para o qual foi explicitamente projetado.

## Fontes e Referências

- [LineShine Debuts at No. 1 as the TOP500 Enters a New Global Exascale Era — TOP500.org](https://www.top500.org/news/lineshine-debuts-no-1-top500-enters-new-global-exascale-era/)
- [Inside LineShine, the New Chinese Supercomputer Sitting Atop the TOP500 — HPCwire](https://www.hpcwire.com/2026/06/25/inside-lineshine-the-new-chinese-supercomputer-sitting-atop-the-top500/)
- [China tops the TOP500 with a CPU-only supercomputer, ending El Capitan's reign — Tom's Hardware](https://www.tomshardware.com/tech-industry/supercomputers/china-tops-the-top500-with-a-cpu-only-supercomputer-ending-el-capitans-reign)
- [Chinese supercomputer using local processors heads TOP500 list — The Register](https://www.theregister.com/hpc/2026/06/24/chinese-supercomputer-using-local-processors-heads-top500-list/5260532)
- [China takes US crown for world's fastest supercomputer — Al Jazeera](https://www.aljazeera.com/economy/2026/6/24/china-takes-us-crown-for-worlds-fastest-supercomputer)
- [Supercomputing crown amid adversity — China Daily](https://www.chinadaily.com.cn/a/202606/25/WS6a3d32d8a310986e2b461f1d.html)