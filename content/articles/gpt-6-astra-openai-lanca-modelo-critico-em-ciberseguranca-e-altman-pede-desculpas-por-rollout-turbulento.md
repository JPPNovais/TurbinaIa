---
title: "GPT-6 Astra: OpenAI Lança Modelo 'Crítico' em Cibersegurança e Altman Pede Desculpas por Rollout Turbulento"
description: "OpenAI lança o GPT-6 Astra, 1º modelo com risco crítico de cibersegurança; rollout falho fez Sam Altman pedir desculpas a assinantes pagantes."
category: noticias
tags:
  - OpenAI
  - GPT-6 Astra
  - Cibersegurança
author: Redação Turbina IA
isFeatured: false
date: "2026-09-05"
coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
---

Na quinta-feira (3), empresas inscritas num programa fechado de cibersegurança da OpenAI já estavam testando o modelo mais avançado que a empresa já lançou. Assinantes pagantes do [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Plus e Pro — que normalmente recebem acesso antecipado a cada novidade — ficaram de fora e viram contas empresariais passarem na frente. Um dia depois, o próprio Sam Altman precisou postar um pedido de desculpas público.

O modelo em questão é o GPT-6 Astra, apresentado pela OpenAI como "o mais inteligente e alinhado" que a empresa já construiu, com ganhos expressivos em uso de computador, navegação, engenharia de software e — o detalhe que dominou a cobertura — capacidades de ataque cibernético que cruzaram, pela primeira vez, um limiar que a própria companhia classifica como "Crítico" [OpenAI](https://openai.com/index/gpt-6-astra/).

> **Resposta Rápida (TL;DR):** A OpenAI lançou o GPT-6 Astra em 3 de setembro de 2026, o primeiro modelo a atingir o nível "Crítico" de capacidade cibernética no Preparedness Framework da empresa — ele encontra e explora falhas de segurança desconhecidas sem supervisão humana constante. O lançamento veio acompanhado de um programa de US$ 1 bilhão para defensores de infraestrutura crítica, mas o rollout desorganizado (que priorizou clientes corporativos sobre assinantes pagantes) obrigou Sam Altman a pedir desculpas publicamente no dia seguinte.

## O que muda no GPT-6 Astra

Segundo a OpenAI, o Astra é o resultado de anos de pesquisa combinando pré-treinamento, aprendizado por reforço e técnicas de alinhamento, e se apresenta como estado da arte em uso de computador, navegação web, engenharia de software, ciência e trabalho profissional [OpenAI](https://openai.com/index/gpt-6-astra/). A empresa afirma que o modelo satura o FrontierMath Tier 4 com 98% de acerto e o ARC-AGI-3 com 99,9% — números que, segundo o próprio laboratório, já ajudaram a resolver problemas matemáticos em aberto há décadas.

Na API, o modelo aparece como `gpt-6-astra`, com janela de contexto de 1,05 milhão de tokens, saída máxima de 128 mil tokens e corte de conhecimento em 30 de abril de 2026. O preço é de US$ 10 por milhão de tokens de entrada e US$ 50 por milhão de tokens de saída, com desconto para entrada em cache e modo em lote pela metade do valor — quem quiser comparar esse custo com o de outros modelos concorrentes pode usar o [Comparador de IAs](/comparador) do Turbina IA.

| Especificação | GPT-6 Astra |
|---|---|
| Contexto | 1.050.000 tokens |
| Saída máxima | 128.000 tokens |
| Preço entrada | US$ 10 / milhão de tokens |
| Preço saída | US$ 50 / milhão de tokens |
| Entrada em cache | US$ 1 / milhão de tokens |
| Corte de conhecimento | 30 de abril de 2026 |


![Imagem ilustrativa sobre GPT-6 Astra: OpenAI Lança Modelo 'Crítico' em Cibersegurança e Altman Pede Desculpas por Rollout Turbulento](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## O primeiro modelo "Crítico" em cibersegurança

O dado que mais chamou atenção de analistas de segurança não foi de desempenho geral, mas de risco. Pelo Preparedness Framework — o sistema interno da OpenAI para classificar capacidades perigosas antes de lançar um modelo —, o Astra é o primeiro a cruzar o nível "Crítico" em capacidade cibernética, o que na prática significa que, com as ferramentas e o acesso certos, ele consegue encontrar vulnerabilidades até então desconhecidas e desenvolver formas de explorá-las em sistemas bem protegidos sem que uma pessoa precise guiar cada etapa [CSO Online](https://www.csoonline.com/article/4218679/openai-launches-gpt-6-astra-its-first-model-to-cross-a-critical-cybersecurity-threshold.html).

Em testes sem as salvaguardas de produção, o modelo pontuou 100% no ExploitBench — ante 78,5% do antecessor GPT-5.6 Sol — e alcançou 42,4% de sucesso no ExploitGym, contra 30,3% do modelo anterior, usando menos tokens de saída no processo [CSO Online](https://www.csoonline.com/article/4218679/openai-launches-gpt-6-astra-its-first-model-to-cross-a-critical-cybersecurity-threshold.html). A [CNN Brasil](https://www.cnnbrasil.com.br/economia/money/inteligencia-artificial/gpt-6-astra-entenda-o-que-torna-o-novo-modelo-um-risco-em-ciberseguranca/) detalhou dois dos testes internos: em um deles, o modelo encontrou falhas em um navegador, escapou das proteções e conseguiu executar comandos diretamente no computador; em outro, identificou vulnerabilidades num sistema operacional e escalou privilégios de um usuário comum até obter acesso administrativo.

Por isso, a versão pública do Astra recusa tarefas ofensivas avançadas, como gerar provas de conceito de exploits — restrição que a OpenAI planeja afrouxar apenas para "defensores confiáveis" cadastrados no programa Daybreak, que aumenta a taxa de conclusão de provas de conceito de exploit de 2,4% para 92% [CSO Online](https://www.csoonline.com/article/4218679/openai-launches-gpt-6-astra-its-first-model-to-cross-a-critical-cybersecurity-threshold.html).

## US$ 1 bilhão para quem defende infraestrutura crítica

Junto do lançamento, a OpenAI anunciou o "Daybreak for Frontline Defenders", programa que destina US$ 1 bilhão para ajudar operadores de infraestrutura essencial — a começar por companhias de água e eletricidade, governos estaduais e municipais dos Estados Unidos, bancos comunitários e mantenedores de projetos de código aberto — a usar as capacidades cibernéticas do modelo para proteção, não ataque [OpenAI](https://openai.com/index/daybreak-for-frontline-defenders/). O primeiro piloto do programa é com o Multi-State Information Sharing and Analysis Center (MS-ISAC) dos EUA, e a expansão para países parceiros deve ocorrer nos próximos meses.

A lógica por trás da decisão é reconhecer que, se o próprio modelo consegue achar falhas de dia zero antes exploradas apenas por atacantes sofisticados, times de defesa com poucos recursos também precisam da mesma ferramenta — de preferência antes que caia nas mãos erradas.


![Imagem ilustrativa sobre GPT-6 Astra: OpenAI Lança Modelo 'Crítico' em Cibersegurança e Altman Pede Desculpas por Rollout Turbulento](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## "Bem-vindos à era da AGI"

O presidente da OpenAI, Greg Brockman, tratou o lançamento como um marco simbólico. Em entrevista coletiva com jornalistas, quando perguntado se o Astra poderia representar a chegada da inteligência artificial geral (AGI), respondeu: "acho que pode ser sobre este modelo" — e encerrou a conversa dizendo "bem-vindos à era da AGI" [Axios](https://www.axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman).

À [Fortune](https://fortune.com/2026/09/03/openai-debuts-gpt-6-astra-computer-use-greg-brockman-says-start-of-agi/), Brockman chamou o Astra de "um salto geracional" e ponderou que a chegada da AGI não aconteceria num único grande momento, como ele mesmo previu no passado, mas "em pedaços" — e que é razoável considerar o Astra o primeiro desses pedaços. É uma declaração e tanto vindo do número dois da empresa, mas vale o mesmo alerta que vale para qualquer marketing de laboratório de IA: a definição de AGI muda conforme quem está falando, e nenhum órgão externo validou a afirmação.

## Recorrência opaca: a arquitetura que incomoda pesquisadores

Parte da desconfiança de especialistas em segurança tem raiz técnica. O Astra usa uma forma limitada de recorrência ao longo da profundidade da rede — às vezes chamada de "transformer em loop" ou "recorrência opaca" —, em que a informação circula por camadas internas antes de gerar uma resposta, deslocando parte do processamento para fora da linguagem natural legível [Tecnoblog](https://tecnoblog.net/noticias/gpt-6-astra-chega-em-meio-a-promessas-de-agi-e-polemicas-de-seguranca/).

Na prática, isso dificulta a leitura do "raciocínio" do modelo por quem está de fora: não existe mais uma cadeia de pensamento em texto simples para auditar, o que preocupa pesquisadores que dependem desse tipo de rastro para verificar se um modelo está agindo de forma alinhada. É um tema que já rendeu debate técnico em fóruns de segurança de IA, ainda que a OpenAI defenda que os sistemas de monitoramento de desalinhamento em produção compensam essa perda de transparência.

## O lançamento que saiu dos trilhos

Se a tecnologia impressionou, a execução decepcionou. A OpenAI liberou o Astra primeiro para um grupo restrito de organizações do programa Daybreak — voltado a cibersegurança — e só depois começou a disponibilizá-lo a assinantes do ChatGPT Plus, Pro, Business e Enterprise [Forbes](https://www.forbes.com/sites/ronschmelzer/2026/09/03/openai-announces-gpt-6-astra-or-does-it/). O problema é que clientes Pro, que historicamente têm prioridade em lançamentos, viram clientes corporativos passarem à frente na fila.

A reação dos usuários pagantes foi forte o suficiente para Sam Altman postar, publicamente, uma mensagem reconhecendo a falha: "quando erramos, tentamos consertar". Em referência ao lançamento anterior do GPT-5, Altman chegou a admitir "acho que erramos feio em algumas coisas do rollout" — e a empresa passou a oferecer, para cada dia sem acesso ao Astra, uma reposição de uso aos assinantes afetados [Forbes](https://www.forbes.com/sites/ronschmelzer/2026/09/03/openai-announces-gpt-6-astra-or-does-it/).

O episódio expõe uma tensão que a OpenAI ainda não resolveu: como equilibrar a pressa de mostrar avanços de ponta com a disciplina operacional de servir milhões de assinantes pagantes sem fricção. Para quem acompanha o ritmo de lançamentos da empresa, vale a pena assinar o [Monitor de Modelos](/changelog) do Turbina IA — cada nova versão tende a vir com bônus técnico e, cada vez mais, com solavancos de rollout.

## O que muda para quem usa IA no Brasil

Para o usuário comum, o Astra ainda não chegou de forma ampla — a liberação segue por etapas, começando pelos assinantes Pro. Para empresas brasileiras que avaliam adoção de IA em fluxos sensíveis (segurança, infraestrutura, dados de clientes), o ponto prático é outro: a classificação "Crítica" em cibersegurança não é um selo de qualidade, é um alerta regulatório interno da própria OpenAI de que aquele modelo, em mãos erradas, tem capacidade ofensiva real. Times de segurança da informação que ainda não têm um vocabulário mínimo sobre esse tipo de classificação podem consultar o [Glossário de IA](/glossario) do Turbina IA para entender termos como "Preparedness Framework" e "red teaming".

Na prática, o efeito imediato para o mercado brasileiro é indireto: mais pressão competitiva sobre Google e Anthropic para acelerar suas próprias divulgações de capacidade cibernética, e mais atenção de times de segurança corporativa para políticas de uso de IA generativa dentro da empresa — inclusive sobre quais modelos podem ou não acessar sistemas internos sem supervisão.

## Perguntas Frequentes

### O que significa o GPT-6 Astra ser classificado como "Crítico" em cibersegurança?

Significa que, no Preparedness Framework da OpenAI, o modelo passou o limiar em que — com ferramentas e acesso adequados — consegue encontrar vulnerabilidades desconhecidas e desenvolver exploits em sistemas protegidos sem que uma pessoa precise guiar cada etapa da operação, o que aciona restrições extras de uso.

### O GPT-6 Astra já está disponível para todo mundo?

Não. A OpenAI liberou o modelo primeiro para organizações do programa de cibersegurança Daybreak e está expandindo, em etapas, para assinantes do ChatGPT Plus, Pro, Business e Enterprise e para desenvolvedores via API, priorizando clientes Pro depois da reclamação pelo rollout desorganizado.

### Quanto custa usar o GPT-6 Astra pela API?

A OpenAI cobra US$ 10 por milhão de tokens de entrada e US$ 50 por milhão de tokens de saída, com desconto para tokens de entrada em cache (US$ 1 por milhão) e para processamento em lote, que sai pela metade do preço padrão.

## Fontes e Referências

- [GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra/)
- [Daybreak for Frontline Defenders: $1B to protect essential services](https://openai.com/index/daybreak-for-frontline-defenders/)
- [OpenAI launches GPT-6 Astra, its first model to cross a critical cybersecurity threshold - CSO Online](https://www.csoonline.com/article/4218679/openai-launches-gpt-6-astra-its-first-model-to-cross-a-critical-cybersecurity-threshold.html)
- [OpenAI releases new model GPT-6 Astra, says it may represent AGI - Axios](https://www.axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman)
- [OpenAI launches GPT-6 Astra, its most powerful model yet - Fortune](https://fortune.com/2026/09/03/openai-debuts-gpt-6-astra-computer-use-greg-brockman-says-start-of-agi/)
- [OpenAI Launches GPT-6 Astra After A Curious False Start - Forbes](https://www.forbes.com/sites/ronschmelzer/2026/09/03/openai-announces-gpt-6-astra-or-does-it/)
- [GPT-6 Astra: entenda o que torna o novo modelo um risco em cibersegurança - CNN Brasil](https://www.cnnbrasil.com.br/economia/money/inteligencia-artificial/gpt-6-astra-entenda-o-que-torna-o-novo-modelo-um-risco-em-ciberseguranca/)
- [OpenAI anuncia o GPT-6 Astra em meio a promessas de AGI e polêmicas de segurança - Tecnoblog](https://tecnoblog.net/noticias/gpt-6-astra-chega-em-meio-a-promessas-de-agi-e-polemicas-de-seguranca/)