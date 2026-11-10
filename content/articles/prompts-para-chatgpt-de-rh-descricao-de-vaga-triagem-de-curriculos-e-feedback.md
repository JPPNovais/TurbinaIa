---
title: "Prompts para ChatGPT de RH: Descrição de Vaga, Triagem de Currículos e Feedback"
seoTitle: "Prompts para ChatGPT de RH e Recrutamento"
description: "Prompts prontos de ChatGPT para RH: descrição de vaga, triagem de currículos, perguntas de entrevista e feedback a candidatos. Copie e adapte."
category: tutoriais
tags:
  - Prompts
  - Recursos Humanos
  - ChatGPT
  - Recrutamento
  - IA para Empresas
author: Redação Turbina IA
isFeatured: false
date: "2026-11-10"
coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80"
---

Só 26% dos candidatos a uma vaga acreditam que uma inteligência artificial vai avaliá-los de forma justa, segundo uma pesquisa do [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-07-31-gartner-survey-shows-just-26-percent-of-job-applicants-trust-ai-will-fairly-evaluate-them) com mais de 3 mil pessoas em processo seletivo. Ainda assim, quase 4 em cada 10 candidatos já usaram IA para responder a algum formulário de aplicação. O recrutamento virou um jogo de IA dos dois lados da mesa — e quem está do lado de dentro, montando a vaga e decidindo quem avança, também precisa saber usar a ferramenta sem transformar o processo em um exercício de adivinhação.

**Resposta Rápida (TL;DR):** Os prompts abaixo ajudam o RH a escrever descrições de vaga mais claras, organizar a triagem inicial de currículos, montar roteiros de entrevista e redigir feedback a candidatos com [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026). Use-os para rascunhar e estruturar — nunca para decidir sozinho quem é aprovado ou reprovado, e nunca cole CPF, foto ou currículo completo de um candidato real no prompt sem necessidade.

O levantamento mais recente da [SHRM](https://www.shrm.org/topics-tools/research/state-of-ai-hr-2026), com 1.908 profissionais de RH ouvidos em dezembro de 2025, mostra que a redação de descrições de vaga é hoje o uso mais comum de IA dentro do recrutamento, na frente até da triagem de currículos. Faz sentido: é a tarefa mais repetitiva e a que menos exige julgamento sobre uma pessoa específica. Já o [HR Monitor 2026 da McKinsey](https://www.mckinsey.com/capabilities/people-and-organization/our-insights/hr-monitor) aponta a eficiência da contratação como uma das prioridades centrais das equipes de RH neste ano, num momento de mercado de trabalho mais estável do que a instabilidade dos últimos anos. A IA entra nesse cenário como ferramenta de produtividade — não como substituta do julgamento humano sobre quem contratar.

---

## Antes de Copiar: Três Regras Para RH

Diferente de um [prompt](/prompts) de marketing ou de atendimento, um prompt de RH quase sempre envolve dados de uma pessoa real tentando conseguir um emprego. Isso muda o que é aceitável colar na conversa:

- **Nunca cole currículo completo, CPF, endereço, foto ou qualquer dado que identifique o candidato** em uma conversa de ChatGPT padrão. Resuma as informações relevantes (anos de experiência, habilidades, formação) de forma anonimizada antes de pedir à IA para avaliar ou comparar.
- **A decisão de contratar, reprovar ou avançar uma pessoa é sempre humana.** O [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) pode organizar informação, sugerir perguntas e apontar inconsistências num texto, mas não tem acesso ao contexto da vaga, à cultura do time nem à avaliação de soft skills que só aparecem numa conversa ao vivo.
- **Documente o que a IA fez no processo.** O caso [Mobley v. Workday](https://www.mondaq.com/unitedstates/employment-litigation-tribunals/1808760/california-federal-court-grants-in-part-and-denies-in-part-workdays-motion-to-dismiss-in-mobley-v-workday), nos Estados Unidos, mostra que empresas (e até fornecedores de software) podem responder judicialmente por discriminação em triagens automatizadas. Usar a IA como apoio à escrita, com revisão humana em cada etapa decisiva, reduz esse risco — e é exatamente para isso que servem os prompts a seguir.

Se preferir comparar o ChatGPT com outras ferramentas antes de adotar um fluxo de RH, o [comparador de IAs](/comparador) do Turbina IA lista preços e recursos lado a lado, e a [calculadora de custos](/calculadora) ajuda a estimar o gasto em tokens caso o volume de vagas justifique uma integração via API em vez de uso manual no chat. A [biblioteca de prompts](/prompts) do site reúne outros exemplos prontos por área, caso o RH precise de modelos além dos listados aqui.

---


![Imagem ilustrativa sobre Prompts para ChatGPT de RH: Descrição de Vaga, Triagem de Currículos e Feedback](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80)

## Prompts para Escrever Descrição de Vaga

A descrição de vaga é o uso mais citado pelos profissionais de RH, segundo a pesquisa da [SHRM](https://www.shrm.org/topics-tools/research/state-of-ai-hr-2026) — e também o mais fácil de estruturar bem, porque não envolve avaliar ninguém ainda.

```
Você é um especialista em recrutamento de [área/segmento]. Escreva uma descrição de vaga para o cargo de [nome do cargo], nível [júnior/pleno/sênior], modelo de trabalho [presencial/híbrido/remoto]. Inclua: resumo da vaga em 2 frases, 5 responsabilidades principais, 4 requisitos obrigatórios e 3 diferenciais desejáveis (não obrigatórios). Evite linguagem que soe excludente por gênero ou idade, como "jovem" ou "dinâmico". Faixa salarial: [informe ou deixe em branco].
```

```
Reescreva esta descrição de vaga para ficar mais clara e atrativa, sem inflar os requisitos nem prometer o que a empresa não oferece: "[cole a descrição atual]". Mantenha o mesmo cargo e nível de senioridade.
```

```
Revise esta lista de requisitos de uma vaga de [cargo] e aponte quais exigências podem estar filtrando candidatos qualificados sem necessidade real para a função (ex.: anos de experiência excessivos, ferramentas muito específicas, formação que não é essencial): "[cole a lista de requisitos]".
```

```
Crie 3 versões do título desta vaga de [cargo], otimizadas para aparecer em buscas no LinkedIn e em sites de emprego, mantendo o cargo real e sem usar títulos inflados ("Rockstar", "Ninja", "Guru"): descrição da vaga: "[cole um resumo da vaga]".
```

---

## Prompts para Organizar a Triagem Inicial de Currículos

Aqui a regra de anonimização importa mais. Em vez de colar o currículo inteiro com nome e contato, extraia as informações relevantes e peça à IA para organizar — não para decidir quem passa.

```
Tenho estas informações de um candidato à vaga de [cargo]: experiência de [X anos] em [áreas], formação em [curso/instituição, só se for relevante para a vaga], habilidades técnicas: [liste]. Compare com os requisitos da vaga: [cole os requisitos] e aponte, de forma objetiva, quais requisitos o perfil atende, quais não atende e quais não há informação suficiente para avaliar. Não dê uma nota geral nem uma recomendação de aprovação ou reprovação.
```

```
Organize estas informações de [número] candidatos à vaga de [cargo] em uma tabela comparativa, com colunas para experiência relevante, formação e habilidades técnicas citadas. Não inclua nome, e-mail ou qualquer dado de contato na tabela — use apenas "Candidato 1", "Candidato 2" etc. Dados: "[cole as informações já anonimizadas]".
```

```
Liste 5 perguntas específicas que eu deveria fazer na triagem por telefone com um candidato à vaga de [cargo] para esclarecer lacunas comuns no currículo, como intervalos sem experiência registrada ou mudanças frequentes de emprego, sem que a pergunta pareça acusatória.
```

```
Resuma em até 5 linhas o histórico profissional descrito neste currículo, destacando apenas experiência e habilidades relevantes para a vaga de [cargo] — sem incluir idade, estado civil ou outras informações que não deveriam influenciar a avaliação: "[cole o resumo do currículo, sem dados de contato]".
```

---

## Prompts para Preparar Entrevistas

![Recrutador conduzindo entrevista de emprego com notebook e anotações](https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80)

A entrevista continua sendo o momento mais humano do processo. A IA ajuda a preparar o roteiro — não a substituir a conversa.

```
Crie um roteiro de entrevista para a vaga de [cargo], nível [júnior/pleno/sênior], com 8 perguntas: 2 sobre experiência técnica específica em [habilidade principal], 3 comportamentais (usando o formato situação-tarefa-ação-resultado) e 3 sobre expectativas (motivação, disponibilidade, pretensão salarial se aplicável). Para cada pergunta comportamental, inclua o que uma boa resposta normalmente demonstra.
```

```
O candidato à vaga de [cargo] respondeu isto à pergunta "[cole a pergunta]": "[cole a resposta]". Aponte, de forma neutra, quais pontos da resposta são fortes e quais ficaram vagos ou incompletos, para eu decidir se vale aprofundar com uma pergunta de acompanhamento.
```

```
Sugira 4 perguntas para avaliar se um candidato à vaga de [cargo] tem experiência real com [ferramenta ou metodologia específica], evitando perguntas que só testam memorização de termos técnicos e focando em como a pessoa aplicou isso na prática.
```

---

## Prompts para Feedback e Comunicação com Candidatos

O feedback é onde a maioria dos processos falha — por silêncio, não por maldade. Estes prompts ajudam a manter a comunicação sem transformar a reprovação num texto genérico.

```
Escreva uma mensagem de reprovação para um candidato à vaga de [cargo] que chegou até a etapa de [entrevista/teste técnico], sendo honesto de forma respeitosa: o motivo principal foi [descreva o motivo, ex.: outro candidato com experiência mais alinhada], sem detalhar comparações diretas com outras pessoas. Convide-o a se candidatar a futuras vagas, se fizer sentido. Até 100 palavras.
```

```
Escreva uma mensagem para avisar um candidato que ele avançou para a próxima etapa do processo seletivo para [cargo], explicando em 2 frases o que vem a seguir (ex.: teste técnico, entrevista com gestor) e o prazo estimado para retorno: [informe o prazo].
```

```
Transforme estas anotações da entrevista em um feedback estruturado para compartilhar com o gestor da área, organizado em: pontos fortes observados, pontos de atenção e recomendação (avançar, não avançar, ou avançar com ressalva). Anotações: "[cole as anotações]".
```

```
Escreva uma mensagem de boas-vindas para o candidato aprovado na vaga de [cargo], confirmando a data de início em [data], o que ele deve trazer ou providenciar antes do primeiro dia, e um tom que transmita entusiasmo genuíno da equipe.
```

---

A IA não resolve a parte mais difícil do recrutamento, que é julgar se uma pessoa vai se encaixar num time real, com uma cultura real. O que ela resolve é o tempo perdido reescrevendo a mesma descrição de vaga pela quinta vez ou organizando informação que já está na sua frente, só desorganizada. Para quem quer ir além dos prompts soltos e entender por que alguns funcionam melhor que outros, o [guia de prompt engineering do Turbina IA](/blog/guia-prompts-chatgpt-como-criar-prompts-perfeitos-para-qualquer-tarefa) detalha os elementos — papel, contexto, formato — que mudam o resultado. E para outras áreas do negócio, a [lista de prompts para negócios e empreendedores](/blog/prompts-para-negocios-e-empreendedores) e os [prompts para atendimento ao cliente](/blog/20-prompts-de-chatgpt-para-atendimento-ao-cliente-e-mail-chat-e-reclamacoes-2026) seguem o mesmo formato copiável.

## Perguntas Frequentes

### O ChatGPT pode decidir quem deve ser contratado?

Não deveria. O ChatGPT ajuda a organizar informação, redigir textos e preparar roteiros, mas não tem acesso ao contexto completo da vaga, à cultura do time nem à percepção de uma conversa ao vivo. Processos nos Estados Unidos, como o [Mobley v. Workday](https://www.mondaq.com/unitedstates/employment-litigation-tribunals/1808760/california-federal-court-grants-in-part-and-denies-in-part-workdays-motion-to-dismiss-in-mobley-v-workday), mostram que triagens totalmente automatizadas sem revisão humana podem gerar risco jurídico real para a empresa.

### É seguro colar o currículo de um candidato no ChatGPT?

Evite colar o currículo completo com nome, CPF, endereço ou foto. Extraia só as informações relevantes para a vaga (experiência, formação, habilidades) de forma anonimizada antes de pedir qualquer análise à IA. Se a empresa processa dados de candidatos em volume, vale avaliar uma ferramenta integrada com garantias de privacidade em conformidade com a LGPD, em vez do chat padrão.

### Esses prompts funcionam em outras IAs, como Gemini ou Claude?

Sim. A estrutura — definir o papel, dar contexto específico da vaga e pedir um formato de saída claro — funciona em qualquer modelo de linguagem atual, com pequenos ajustes de redação. O [comparador de IAs](/comparador) do Turbina IA mostra as diferenças de preço e recursos entre ChatGPT, Gemini e Claude para quem está decidindo qual usar no RH.

## Fontes e Referências

- [Gartner — Gartner Survey Shows Just 26% of Job Applicants Trust AI Will Fairly Evaluate Them](https://www.gartner.com/en/newsroom/press-releases/2025-07-31-gartner-survey-shows-just-26-percent-of-job-applicants-trust-ai-will-fairly-evaluate-them)
- [SHRM — State of AI in HR 2026](https://www.shrm.org/topics-tools/research/state-of-ai-hr-2026)
- [McKinsey — HR Monitor 2026: A turning point for the people function](https://www.mckinsey.com/capabilities/people-and-organization/our-insights/hr-monitor)
- [Mondaq — California Federal Court Grants In Part And Denies In Part Workday's Motion To Dismiss In Mobley v. Workday](https://www.mondaq.com/unitedstates/employment-litigation-tribunals/1808760/california-federal-court-grants-in-part-and-denies-in-part-workdays-motion-to-dismiss-in-mobley-v-workday)