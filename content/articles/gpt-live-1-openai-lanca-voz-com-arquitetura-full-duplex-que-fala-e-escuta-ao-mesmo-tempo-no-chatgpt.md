---
title: "GPT-Live-1: OpenAI Lança Voz com Arquitetura Full-Duplex que Fala e Escuta ao Mesmo Tempo no ChatGPT"
description: "OpenAI lança GPT-Live-1 e GPT-Live-1 mini, vozes full-duplex que escutam e falam ao mesmo tempo e delegam raciocínio ao GPT-5.5."
category: noticias
tags:
  - OpenAI
  - ChatGPT
  - Assistente de Voz
  - Inteligência Artificial
author: Redação Turbina IA
isFeatured: false
date: "2026-07-10"
coverImage: "https://images.unsplash.com/photo-1676272682018-b1435bad1cf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTg1Mzd8MHwxfHNlYXJjaHwxfHxHUFQtTGl2ZS0xJTNBJTIwT3BlbkFJJTIwTGFuJUMzJUE3YSUyMFZveiUyMGNvbSUyMEFycXVpdGV0dXJhJTIwRnVsbC1EdXBsZXglMjBxdWUlMjBGYWxhJTIwZSUyMEVzY3V0YSUyMGFvJTIwTWVzbW8lMjBUZW1wbyUyMG5vJTIwQ2hhdEdQVCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDB8MHx8fDE3ODM3MDY5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
---

A OpenAI eliminou nesta semana um dos maiores atritos da conversa por voz com inteligência artificial: a pausa mecânica entre o fim da fala do usuário e o início da resposta do assistente. Em 8 de julho de 2026, a empresa anunciou o [GPT-Live](https://openai.com/index/introducing-gpt-live/), uma nova geração de modelos de voz que abandona a lógica de "turnos" — falar, esperar, ouvir, responder — em favor de uma arquitetura full-duplex, na qual o sistema escuta e fala simultaneamente, como em uma conversa humana real.

> **Resposta Rápida (TL;DR):** A OpenAI lançou o GPT-Live-1 e o GPT-Live-1 mini, modelos de voz full-duplex que processam áudio de entrada e geram resposta ao mesmo tempo, decidindo várias vezes por segundo se devem falar, ouvir, pausar ou interromper. O GPT-Live-1 é o padrão para assinantes dos planos Go, Plus e Pro, enquanto o GPT-Live-1 mini substitui o Modo de Voz Avançado para usuários gratuitos, com os dois delegando tarefas complexas ao GPT-5.5 em segundo plano.

## O que muda com o full-duplex

Até esta semana, o Modo de Voz Avançado do ChatGPT funcionava como uma cadeia de três etapas separadas: um modelo transcrevia a fala do usuário em texto, um modelo de linguagem gerava a resposta e um terceiro modelo convertia esse texto de volta em áudio. Esse encadeamento — descrito pela [TechCrunch](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/) como um pipeline clássico de "fala-para-texto, texto-para-fala" — é a razão pela qual assistentes de voz costumam soar robóticos, interromper o usuário no momento errado ou demorar para reagir.

O GPT-Live resolve isso ao processar áudio de entrada e gerar áudio de saída de forma contínua, dentro do mesmo modelo. Segundo a [OpenAI](https://openai.com/index/introducing-gpt-live/), o sistema toma decisões de interação "muitas vezes por segundo": se deve falar, continuar ouvindo, pausar, interromper ou acionar uma ferramenta externa. Na prática, isso permite que o modelo emita sinais de escuta ativa — como "hum-hum" ou "sim" — sem cortar a fala do usuário, e que fique em silêncio quando percebe que a pessoa está apenas pensando em voz alta.


![Imagem ilustrativa sobre GPT-Live-1: OpenAI Lança Voz com Arquitetura Full-Duplex que Fala e Escuta ao Mesmo Tempo no ChatGPT](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Dois modelos, dois públicos

A OpenAI lançou duas versões simultaneamente. O GPT-Live-1, mais robusto, tornou-se o padrão para assinantes dos planos Go, Plus e Pro. Já o GPT-Live-1 mini, uma variante mais leve, passou a substituir o Modo de Voz Avançado como padrão para contas gratuitas. Ambos começaram a chegar globalmente aos usuários em iOS, Android e no [ChatGPT.com](https://openai.com/index/introducing-gpt-live/) no dia do anúncio.

O time por trás do recurso já testava o novo modelo internamente antes do lançamento. Segundo a [TechCrunch](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/), Atty Eleti, líder de produto do ChatGPT Voice, disse ter feito conversas de "30 a 40 minutos" com o recurso durante caminhadas — um indício de que a OpenAI está apostando na voz como um canal de uso prolongado, não apenas para perguntas rápidas.

## Delegação de raciocínio: a inteligência fica em segundo plano

A mudança arquitetural mais relevante para quem usa o assistente no dia a dia talvez não seja a fala simultânea, mas a forma como o GPT-Live trata perguntas complexas. Quando o usuário faz uma pergunta que exige busca na web, raciocínio mais profundo ou execução de tarefas em várias etapas, o modelo de voz não tenta responder sozinho: ele delega a consulta a um modelo de fronteira rodando em segundo plano — no lançamento, o [GPT-5.5](https://openai.com/index/introducing-gpt-live/) — e retoma a conversa assim que o resultado fica pronto, sem travar o diálogo.

Esse desacoplamento entre a camada de interação por voz e a camada de raciocínio é, segundo a análise da [TechCrunch](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/), a mudança estrutural que pode ter mais peso para adoção corporativa do recurso, já que resolve um problema recorrente de assistentes de voz: parecerem fluentes na conversa, mas pouco inteligentes nas respostas. O usuário pode escolher entre três níveis de raciocínio — Instantâneo, Médio e Alto —, cada um acionando uma configuração diferente do GPT-5.5 por trás da cena, do modo mais rápido ao modo de pensamento mais aprofundado.

Quem já usa a [Calculadora de Custos](/calculadora) do Turbina IA para estimar gastos com tokens sabe que raciocínio mais profundo costuma custar mais processamento — e a lógica se aplica aqui: o nível "Alto" tende a gerar respostas mais completas, mas com maior latência antes do resultado voltar à conversa.


![Imagem ilustrativa sobre GPT-Live-1: OpenAI Lança Voz com Arquitetura Full-Duplex que Fala e Escuta ao Mesmo Tempo no ChatGPT](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## Os números por trás da promessa

A OpenAI publicou comparações diretas entre o GPT-Live-1 e o antigo Modo de Voz Avançado (AVM) em benchmarks de raciocínio e busca. No GPQA, teste de raciocínio científico em nível de pós-graduação que cobre biologia, química e física, o GPT-Live-1 no nível de raciocínio Alto atingiu 84,2% de acerto, contra 45,3% do Modo de Voz Avançado — quase o dobro. No BrowseComp, benchmark que mede a capacidade de um agente realizar buscas complexas na web, o salto foi ainda mais acentuado: 75,2% contra apenas 0,7% do modelo anterior, segundo dados publicados pela própria [OpenAI](https://openai.com/index/introducing-gpt-live/).

| Métrica | Modo de Voz Avançado (anterior) | GPT-Live-1 mini | GPT-Live-1 (raciocínio Alto) |
|---|---|---|---|
| GPQA (raciocínio científico) | 45,3% | — | 84,2% |
| BrowseComp (busca agêntica) | 0,7% | 31,6% | 75,2% |
| Preferência dos usuários vs. AVM | referência | 69,2% | 75,7% |
| Planos padrão | Todos (versão anterior) | Free | Go, Plus, Pro |

Além dos benchmarks automatizados, a OpenAI conduziu avaliações humanas comparando conversas de 5 a 10 minutos entre o novo sistema e o antigo, medindo preferência geral, qualidade de alternância de turnos, tratamento de interrupções, fluidez e naturalidade. Nesses testes, o GPT-Live-1 foi preferido em 75,7% dos casos e o GPT-Live-1 mini em 69,2%, ambos em comparação direta com o Modo de Voz Avançado.

## Alcance global e o peso do Brasil

O recurso já nasce com escala relevante. De acordo com a [CNN Brasil](https://www.cnnbrasil.com.br/tecnologia/gpt-live-e-chatgpt-work-ia-da-openai-conversa-cria-e-executa-tarefas/), a OpenAI afirma que mais de 150 milhões de pessoas usam os recursos de voz do ChatGPT semanalmente — uma base que a TechCrunch também cita como parte do contexto do lançamento. A reportagem da CNN Brasil destaca ainda um dado relevante para o público local: o português já é o terceiro idioma mais usado no ChatGPT, o que reforça o peso do mercado brasileiro nas decisões de expansão de recursos como esse.

O lançamento aconteceu em meio a uma semana movimentada para a OpenAI, que também apresentou o ChatGPT Work um dia depois, segundo a [CNN Brasil](https://www.cnnbrasil.com.br/tecnologia/gpt-live-e-chatgpt-work-ia-da-openai-conversa-cria-e-executa-tarefas/) — sinal de que a empresa está empacotando lançamentos de produto em sequência rápida neste ciclo.

## O que ainda falta

Nem tudo chegou pronto na primeira leva. Conforme apurado pela [TechCrunch](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/), o GPT-Live ainda não suporta vídeo nem compartilhamento de tela, e a paridade multilíngue completa não foi entregue no lançamento — em uma demonstração acompanhada pela reportagem, uma tradução para o hindi saiu com sotaque americano perceptível e soou "pouco natural". O acesso via API também não estava disponível no dia do anúncio: a OpenAI abriu apenas um formulário de interesse para desenvolvedores, conforme indicado na própria página oficial do [GPT-Live](https://openai.com/index/introducing-gpt-live/).

Vale o registro para quem acompanha terminologia técnica de IA: a diferença entre um sistema "full-duplex" e um sistema "half-duplex" (que só processa um lado da comunicação por vez) é justamente o que separa o GPT-Live do modelo de voz anterior — um conceito que vale a pena consultar no [Glossário de IA](/glossario) do Turbina IA para quem quiser entender melhor os termos técnicos que cercam esse tipo de lançamento.

## Contexto: a corrida pela voz "natural"

O lançamento do GPT-Live não acontece no vácuo. Segundo a [TechCrunch](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/), Apple e Amazon vêm atualizando seus próprios assistentes com capacidades conversacionais mais fluidas, enquanto startups como a Sesame lançam produtos focados especificamente em conversação natural por voz. A aposta da OpenAI é que, ao resolver simultaneamente dois problemas — a naturalidade da fala e a qualidade das respostas, via delegação ao GPT-5.5 — o ChatGPT consiga se diferenciar tanto de assistentes tradicionais quanto de concorrentes de IA generativa que ainda operam em modelo de turnos.

Para quem quer comparar como o GPT-Live-1 se posiciona frente a outros modelos de voz e de linguagem do mercado, o [Comparador de IAs](/comparador) do Turbina IA reúne especificações lado a lado. E para acompanhar os próximos passos da OpenAI e de concorrentes nesse tipo de lançamento, vale monitorar o [Monitor de Modelos](/changelog), que rastreia atualizações de versão em tempo real.

## Perguntas Frequentes

**O GPT-Live-1 já está disponível para todos os usuários do ChatGPT?**
Sim. Segundo a [OpenAI](https://openai.com/index/introducing-gpt-live/), o GPT-Live-1 e o GPT-Live-1 mini começaram a ser distribuídos globalmente em 8 de julho de 2026, em iOS, Android e ChatGPT.com, com o GPT-Live-1 como padrão pago e o mini como padrão gratuito.

**Qual a diferença entre o GPT-Live-1 e o Modo de Voz Avançado anterior?**
O Modo de Voz Avançado usava um pipeline de três modelos separados (fala-para-texto, texto e texto-para-fala) e operava por turnos, segundo a [TechCrunch](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/). O GPT-Live processa entrada e saída de áudio simultaneamente na mesma arquitetura full-duplex, reduzindo pausas artificiais e permitindo interrupções mais naturais.

**O GPT-Live substitui o GPT-5.5 para tarefas complexas?**
Não. O GPT-Live cuida da camada de conversa por voz, mas delega perguntas que exigem busca na web ou raciocínio profundo ao GPT-5.5, que roda em segundo plano e devolve o resultado à conversa, conforme descrito pela [OpenAI](https://openai.com/index/introducing-gpt-live/).

## Fontes e Referências

- [Introducing GPT-Live](https://openai.com/index/introducing-gpt-live/)
- [OpenAI releases new voice models for more natural live conversations](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/)
- [GPT-Live e ChatGPT Work: IA da OpenAI conversa, cria e executa tarefas](https://www.cnnbrasil.com.br/tecnologia/gpt-live-e-chatgpt-work-ia-da-openai-conversa-cria-e-executa-tarefas/)