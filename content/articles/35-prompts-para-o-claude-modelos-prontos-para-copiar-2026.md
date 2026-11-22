---
title: "+35 Prompts para o Claude: Modelos Prontos para Copiar (2026)"
seoTitle: "+35 Prompts para o Claude Prontos para Copiar (2026)"
description: "+35 prompts para o Claude, em português: análise de documento longo, revisão de texto, código com Claude Code, Projects, planilhas e estudo."
category: tutoriais
tags:
  - Claude
  - Anthropic
  - Prompts
  - Engenharia de Prompt
  - Produtividade
author: Redação Turbina IA
isFeatured: false
date: "2026-11-22"
coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80"
---

Cole um contrato de 40 páginas no [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) e peça as três cláusulas mais arriscadas: ele lê o documento inteiro de uma vez, sem que você precise resumir nada antes. É esse tipo de tarefa — texto longo, revisão cuidadosa, código que precisa funcionar de primeira — que separa um prompt pensado para o Claude de um prompt genérico copiado de qualquer lista.

> **Resposta Rápida (TL;DR):** Os melhores prompts para o Claude aproveitam o que ele faz de diferente: ler documentos inteiros numa janela de até 1 milhão de tokens, manter instruções fixas em Projects e executar tarefas de código de ponta a ponta pelo Claude Code. Os mais de 35 modelos abaixo, organizados por categoria, já seguem a estrutura papel + contexto + tarefa + formato. Copie, troque o que está entre [colchetes] e cole no [Claude](https://claude.ai).

A maioria também funciona no ChatGPT e no Gemini — a lista de [prompts para ChatGPT](/blog/prompts-prontos-para-chatgpt) traz mais de 100, e a de [prompts para Gemini](/blog/prompts-para-gemini) cobre o que é específico do Google. Para decidir qual IA assinar, o [comparador de IAs](/comparador) do Turbina IA coloca Claude, ChatGPT e Gemini lado a lado.

**Escolha a categoria:**

- [Análise de documentos longos](#prompts-para-analise-de-documentos-longos) — 6 prompts
- [Revisão e redação de texto](#prompts-para-revisao-e-redacao-de-texto) — 6 prompts
- [Código com o Claude Code](#prompts-para-codigo-com-o-claude-code) — 7 prompts
- [Projects e assistente fixo](#prompts-para-projects-e-assistente-fixo) — 4 prompts
- [Planilhas e análise de dados](#prompts-para-planilhas-e-analise-de-dados) — 5 prompts
- [Estudo e pesquisa](#prompts-para-estudo-e-pesquisa) — 6 prompts
- [Como fazer um prompt para o Claude](#como-fazer-um-prompt-para-o-claude) — a fórmula, com exemplo

---

## Como Fazer um Prompt para o Claude

A fórmula básica é a mesma que funciona em qualquer modelo de linguagem: **papel** (quem o Claude deve ser), **contexto** (o material e a situação), **tarefa** (o que fazer, com um verbo claro) e **formato** (lista, tabela, e-mail, limite de palavras). Compare:

- **[Prompt](/prompts) fraco:** "Revisa esse contrato pra mim."
- **Prompt forte:** "Você é advogado contratualista. Leia o contrato de prestação de serviço abaixo e liste, em uma tabela, as cláusulas que impõem obrigação desproporcional a uma das partes, com o número da cláusula e por que ela é arriscada. [Cole o contrato]"

O segundo dá ao Claude tudo que ele precisa para acertar de primeira. Além da fórmula, vale conhecer o que diferencia o Claude de outros modelos:

**Janela de contexto de 1 milhão de tokens:** desde que a Anthropic ampliou a janela do Sonnet para 1 milhão de tokens ([Claude — Sonnet 4 agora com 1M de contexto](https://claude.com/resources/articles/1m-context)), é possível colar um livro inteiro, um conjunto de contratos ou uma base de código completa numa única conversa, sem resumir nada antes. Os modelos atuais da linha — Opus 5.5, Sonnet 5.5 e Haiku 5.5 — mantêm essa janela e permitem respostas de até 128 mil tokens de saída, segundo o levantamento de preços e recursos que o Turbina IA mantém no [comparador de IAs](/comparador).

**Instrução passo a passo funciona melhor que instrução vaga:** o guia oficial de boas práticas de prompt da Anthropic recomenda ser claro e direto, dar exemplos do formato esperado e, em tarefas complexas, pedir ao Claude para pensar em etapas antes de responder ([Claude — Boas práticas de prompt](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)). Isso vale ainda mais para documentos longos: diga em qual ordem ler, o que procurar e em que formato devolver.

**Projects guardam contexto fixo:** em vez de reexplicar quem você é e o que faz em toda conversa nova, o recurso Projects deixa instruções e arquivos de referência salvos — disponível até no plano gratuito, com limite de 5 projetos por conta ([Central de Ajuda do Claude — O que são Projects](https://support.claude.com/en/articles/9517075-what-are-projects)).

**Claude Code executa, não só sugere:** para tarefas de programação, o Claude Code lê o repositório, edita múltiplos arquivos, roda testes e corrige o que falhar — direto no terminal, no editor ou no navegador ([Documentação do Claude Code](https://code.claude.com/docs/en/overview)). Isso muda a forma de escrever o prompt: em vez de pedir um trecho de código, você pode descrever o resultado final e deixar o agente cuidar dos passos intermediários.

Com isso em mente, os prompts abaixo já aplicam essas características. Quem ainda está decidindo entre planos pode conferir o que o [Claude grátis](/blog/claude-gratis-em-2026-o-que-o-plano-sem-custo-da-anthropic-permite-fazer) já libera antes de assinar o Pro.

---

## Prompts para Análise de Documentos Longos

Esta é a categoria em que a janela de contexto grande do Claude faz mais diferença: cole o documento inteiro de uma vez, sem dividir em partes.

![Mesa de trabalho com papéis e laptop representando análise de documentos](https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&q=80)

```
Você é advogado especializado em contratos [de prestação de serviço / de aluguel / trabalhista]. Leia o contrato abaixo e liste, em uma tabela com as colunas Cláusula, Risco e Por quê, todas as cláusulas que impõem obrigação desproporcional, multa alta ou renúncia de direito a uma das partes:

[Cole o contrato completo]
```

```
Leia o relatório abaixo (pode ser longo) e produza um resumo executivo de até 300 palavras com: (1) os 3 achados principais, (2) os números que mais chamam atenção, (3) uma recomendação prática. Não invente dados que não estejam no texto:

[Cole o relatório]
```

```
Compare os dois documentos abaixo e liste, em uma tabela, todas as diferenças relevantes entre eles — cláusulas que mudaram, valores diferentes, prazos diferentes. Ignore diferenças só de formatação:

Documento 1:
[Cole o primeiro documento]

Documento 2:
[Cole o segundo documento]
```

```
Leia a transcrição de reunião abaixo e organize em três blocos: decisões tomadas, tarefas com responsável (quando mencionado) e pontos que ficaram sem resposta. Marque com [?] qualquer trecho impreciso na transcrição:

[Cole a transcrição completa]
```

```
Você é analista financeiro. Leia o balanço ou relatório abaixo e explique, em linguagem simples, o que mudou em relação ao período anterior, quais números pioraram e quais melhoraram, e o que isso sugere para quem avalia a empresa de fora:

[Cole o relatório financeiro]
```

```
Este PDF tem [número] páginas. Leia tudo e me diga: qual é a tese central, quais são os três argumentos mais fortes que a sustentam, e se existe alguma contradição interna entre as partes do texto:

[Cole o conteúdo extraído do PDF]
```

Documentos muito longos — um livro, várias centenas de páginas de processo, uma base de código completa — cabem numa única conversa por causa da janela de 1 milhão de tokens. Vale lembrar que o limite prático também depende do plano: contas gratuitas e Pro têm cota de uso renovada a cada cinco horas, então documentos muito grandes consomem mais rápido essa cota.

---

## Prompts para Revisão e Redação de Texto

```
Revise o texto abaixo corrigindo gramática, clareza e repetições, sem mudar o tom nem o sentido original. Depois da versão revisada, liste em bullets o que foi alterado e por quê:

[Cole o texto]
```

```
Reescreva o e-mail abaixo trocando o tom de [informal] para [formal e assertivo], mantendo o mesmo conteúdo e sem ultrapassar [X] parágrafos:

[Cole o e-mail original]
```

```
Leia o rascunho abaixo como se fosse um editor exigente. Aponte os três maiores problemas de estrutura (não de gramática) e sugira, para cada um, uma forma concreta de corrigir:

[Cole o rascunho]
```

```
Transforme as anotações soltas abaixo em um texto corrido e organizado, com introdução, desenvolvimento e conclusão, para um público [leigo/técnico/executivo]:

[Cole as anotações]
```

```
Compare as duas versões do mesmo parágrafo abaixo e diga qual comunica melhor a ideia principal, com uma justificativa de até 3 frases:

Versão A: [cole a versão A]
Versão B: [cole a versão B]
```

```
Leia o texto abaixo e reescreva cortando pelo menos 30% das palavras, sem perder nenhuma informação essencial:

[Cole o texto]
```

O Claude tende a seguir instruções de estilo com bastante fidelidade — se você pedir "não use a palavra X" ou "mantenha frases com no máximo 20 palavras", ele costuma respeitar a restrição ao longo de todo o texto, não só no início. Isso ajuda em revisões longas, onde outros modelos às vezes "esquecem" a regra depois de alguns parágrafos.

---

## Prompts para Código com o Claude Code

![Tela de código mostrando terminal e editor representando desenvolvimento de software](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

Os prompts abaixo funcionam tanto no chat quanto no [Claude Code](https://code.claude.com/docs/en/overview), o agente que executa comandos no terminal, no editor ou no navegador. No chat, o Claude só sugere o código; no Claude Code, ele lê o repositório, edita os arquivos e roda os testes de verdade.

```
Aja como desenvolvedor sênior em [linguagem/framework]. Revise o código abaixo apontando bugs, riscos de segurança e problemas de performance. Depois mostre a versão corrigida com comentários explicando cada mudança:

[Cole o código]
```

```
Implemente [funcionalidade] no projeto. Antes de escrever qualquer linha, leia os arquivos relevantes do repositório e me diga em quais arquivos você vai alterar e por quê. Só depois da minha confirmação, aplique as mudanças e rode os testes existentes.
```

```
Escreva testes automatizados para a função abaixo, cobrindo o caso de sucesso, entradas inválidas e pelo menos dois casos extremos (edge cases):

[Cole a função]
```

```
Estou com este erro ao rodar o projeto:

[Cole a mensagem de erro completa]

Investigue a causa raiz no código do repositório antes de propor a correção — não assuma a causa só pela mensagem de erro.
```

```
Refatore o módulo [nome do arquivo ou pasta] para reduzir duplicação de código, mantendo exatamente o mesmo comportamento externo. Rode os testes antes e depois para confirmar que nada quebrou.
```

```
Explique, linha por linha, o que o trecho de código abaixo faz, como se eu estivesse vendo essa lógica por trás pela primeira vez. Depois, sugira um jeito mais simples de escrever a mesma coisa:

[Cole o código]
```

```
Converta o script abaixo de [linguagem de origem] para [linguagem de destino], mantendo a mesma lógica. Depois, escreva um teste simples para confirmar que o comportamento é equivalente:

[Cole o script]
```

Uma diferença prática do Claude Code em relação a pedir código pelo chat: ele pede permissão antes de modificar arquivos ou rodar comandos, então vale revisar o que ele propõe antes de aprovar — especialmente em comandos que alteram ou apagam dados. Quem programa com frequência pela API também deve estimar o gasto antes: a [calculadora de custos de IA](/calculadora) compara o preço por token do Claude com o do ChatGPT e do Gemini.

---

## Prompts para Projects e Assistente Fixo

O recurso Projects guarda instruções e arquivos de referência de forma permanente, para você não repetir o mesmo contexto em toda conversa nova ([Central de Ajuda do Claude — O que são Projects](https://support.claude.com/en/articles/9517075-what-are-projects)).

```
Escreva as instruções de um Project chamado [nome, ex.: Revisor de Contratos]. Ele deve: (1) agir como [papel, ex.: advogado contratualista com foco em locação comercial], (2) sempre pedir [informação necessária antes de responder], (3) entregar a resposta no formato [ex.: tabela com cláusula, risco e sugestão] e (4) nunca [restrição, ex.: dar parecer jurídico definitivo, só apontar pontos de atenção].
```

```
Dentro deste Project, toda vez que eu colar um [tipo de documento], aplique automaticamente este processo: (1) identifique o tipo de documento, (2) extraia os dados-chave [liste quais], (3) aponte inconsistências com os documentos de referência já carregados neste Project.
```

```
Com base nos arquivos de referência já carregados neste Project, responda à pergunta abaixo citando de qual arquivo vem cada informação usada na resposta:

[Faça a pergunta]
```

```
Quero manter neste Project um padrão fixo de resposta para e-mails de atendimento. Crie o modelo de instrução que define: tom, estrutura (abertura, resposta ao problema, próximo passo), e o que nunca deve aparecer numa resposta (promessas que a empresa não pode cumprir, por exemplo).
```

---

## Prompts para Planilhas e Análise de Dados

```
Tenho uma planilha com as colunas [liste as colunas]. Preciso [descreva o objetivo, ex.: separar clientes inadimplentes por faixa de atraso]. Qual fórmula ou abordagem resolve isso?

[Cole uma amostra dos dados, sem informação sensível]
```

```
Leia os dados abaixo e identifique os 3 padrões ou tendências mais relevantes, explicando em uma frase por que cada um importa para o negócio:

[Cole os dados ou a amostra da planilha]
```

```
Compare os números de [período 1] com [período 2] abaixo e monte uma tabela com a variação percentual de cada métrica, destacando as três maiores quedas e os três maiores crescimentos:

[Cole os dados]
```

```
Explique como eu criaria, numa planilha, uma fórmula que [descreva a tarefa, ex.: soma os valores da coluna C apenas quando a coluna A for "Pago" e a coluna B estiver dentro do mês atual]. Mostre a fórmula e explique cada parte.
```

```
Os dados abaixo vieram de fontes diferentes e provavelmente têm inconsistências (nomes escritos de formas diferentes, datas em formatos variados). Liste os problemas que você encontrou antes de eu usar esses dados em qualquer análise:

[Cole a amostra dos dados]
```

Evite colar dado pessoal sensível (CPF, dado de saúde, informação financeira identificável) em qualquer um desses prompts — tanto no chat quanto nos Projects, prefira amostras anonimizadas quando o objetivo é só testar uma fórmula ou um padrão.

---

## Prompts para Estudo e Pesquisa

```
Explique [tema] como se eu fosse [estudante do ensino médio / profissional de outra área / completo iniciante]. Use uma analogia do cotidiano e termine com uma pergunta para checar se eu entendi.
```

```
Leia o texto acadêmico abaixo e entregue: (1) os 5 pontos principais, (2) a metodologia usada, (3) as limitações que os próprios autores reconhecem, (4) uma pergunta que o estudo deixa em aberto:

[Cole o texto]
```

```
Crie um plano de estudos de [X semanas] para aprender [tema], partindo do nível [iniciante/intermediário]. Organize por semana, com um objetivo claro e uma forma de testar o progresso em cada etapa.
```

```
Aja como professor de [disciplina]. Crie 10 questões de múltipla escolha sobre [tópico específico], com 4 alternativas cada, indicando a resposta correta e uma explicação breve.
```

```
Quero entender [conceito complexo] em três níveis de profundidade: primeiro em 3 frases simples, depois num parágrafo intermediário, e por fim com uma aplicação prática real.
```

```
Leia os três resumos abaixo sobre o mesmo tema e aponte onde eles concordam, onde discordam, e qual parece mais bem fundamentado, explicando o critério usado para essa avaliação:

Resumo 1: [cole]
Resumo 2: [cole]
Resumo 3: [cole]
```

Quem estuda para prova ou concurso também pode conferir a lista de [prompts para estudos e concursos](/blog/prompts-para-estudos-e-concursos), com modelos focados em simulado e revisão espaçada.

---

## Como Usar Esses Prompts no Claude

1. **Acesse** [claude.ai](https://claude.ai) no navegador ou pelo aplicativo. Com uma conta de e-mail ou Google, a versão gratuita já roda a maioria destes prompts.
2. **Escolha o prompt** que combina com a tarefa — note que vários pedem para colar um documento, código ou dados antes.
3. **Substitua as variáveis** entre [colchetes]. Quanto mais específico o contexto, melhor a resposta.
4. **Para documentos longos**, cole o texto inteiro de uma vez em vez de dividir em partes — é justamente aí que a janela de contexto grande do Claude compensa.
5. **Refine na mesma conversa.** Se a resposta vier incompleta, peça o ajuste direto ("aprofunde o segundo ponto", "refaça em tabela") em vez de recomeçar do zero.

Para produção de conteúdo em escala, o Turbina IA também tem um [gerador de conteúdo com IA](/gerador) direto no site, além da [biblioteca de prompts](/prompts) com modelos para outras tarefas e ferramentas.

---

## Perguntas Frequentes

### Quais são os melhores prompts para o Claude?

Os que aproveitam o que o Claude faz de diferente: análise de documento longo numa única conversa (a janela chega a 1 milhão de tokens, segundo a [Anthropic](https://claude.com/resources/articles/1m-context)), revisão de texto com instrução de estilo fiel ao longo de todo o conteúdo, e tarefas de código executadas de ponta a ponta pelo Claude Code. Todos estão nesta lista, organizados por categoria.

### Como fazer um prompt para o Claude?

Defina o papel, dê o contexto (cole o documento, o código ou os dados), peça a tarefa com um verbo claro e diga o formato da resposta. Exemplo: "Você é editor de texto. Revise o parágrafo abaixo cortando repetições, sem mudar o sentido, e liste o que foi alterado." Em tarefas complexas, pedir para o Claude pensar em etapas antes de responder também ajuda, conforme o próprio [guia de boas práticas da Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview).

### Os prompts do ChatGPT funcionam no Claude?

Na maior parte, sim — a estrutura papel + contexto + tarefa + formato é a mesma em qualquer modelo. A diferença prática aparece em documentos muito longos e em código: o Claude aceita colar o material inteiro de uma vez, enquanto outros modelos às vezes pedem para dividir em partes. Vale conferir também a [lista de prompts para ChatGPT](/blog/prompts-prontos-para-chatgpt) e a [lista de prompts para Gemini](/blog/prompts-para-gemini) para comparar.

### O Claude é gratuito?

Sim. A versão gratuita em [claude.ai](https://claude.ai) já roda todos os prompts desta lista, com uso limitado renovado a cada cinco horas e sem acesso ao Opus nem ao Claude Code. O guia [Claude grátis em 2026](/blog/claude-gratis-em-2026-o-que-o-plano-sem-custo-da-anthropic-permite-fazer) detalha exatamente onde o plano sem custo trava.

### Preciso pagar para usar o Claude Code?

Sim. O Claude Code — o agente que executa comandos no terminal e edita arquivos direto no repositório — exige, no mínimo, o plano Pro; não está disponível no plano gratuito, segundo a [documentação oficial](https://code.claude.com/docs/en/overview). Para quem programa com frequência pela API, vale estimar o custo na [calculadora de IA](/calculadora) antes de decidir o plano.

### Dá para usar os mesmos prompts em Projects?

Sim, com uma vantagem: em vez de colar o contexto inteiro em toda conversa, você salva as instruções e os arquivos de referência uma vez dentro do Project, disponível até no plano gratuito com limite de 5 projetos por conta ([Central de Ajuda do Claude](https://support.claude.com/en/articles/9517075-what-are-projects)). Os prompts da seção de Projects acima mostram como estruturar essas instruções fixas.

---

## Fontes e Referências

- [Claude — Sonnet 4 agora com 1M de contexto](https://claude.com/resources/articles/1m-context)
- [Claude — Boas práticas de prompt](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- [Central de Ajuda do Claude — O que são Projects](https://support.claude.com/en/articles/9517075-what-are-projects)
- [Documentação do Claude Code](https://code.claude.com/docs/en/overview)