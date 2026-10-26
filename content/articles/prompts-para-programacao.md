---
title: "+40 Prompts para Programação: Modelos Prontos para Devs (2026)"
seoTitle: "+40 Prompts para Programação Prontos para Devs (2026)"
description: "Prompts para programação prontos para copiar: +40 modelos para escrever, debugar, testar e documentar código, SQL, Git e agentes como Claude Code."
category: tutoriais
tags:
  - Prompts
  - Programação
  - Desenvolvimento de Software
  - ChatGPT
  - IA para Devs
author: Redação Turbina IA
isFeatured: false
date: "2026-06-11"
updatedAt: "2026-10-26"
coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
---

Se você já abriu o ChatGPT e digitou "escreva um código para X" e recebeu algo genérico que não serve, o problema provavelmente estava no prompt. A IA não lê mentes — ela responde exatamente ao que você pergunta. E quando você pergunta bem, o resultado muda completamente.

Este guia reúne 40 prompts para programação organizados por tarefa: escrever código, debugar, refatorar, criar testes e documentar, além de SQL, Git e agentes de código. Cada modelo é direto ao ponto e tem variáveis em `[colchetes]` para você adaptar ao seu contexto.

---

**Resposta Rápida (TL;DR):** Um bom prompt de programação informa a linguagem e a versão, traz o código ou o erro relevante, explica o que deveria acontecer e pede um formato de saída (só a função, o diff ou a explicação linha a linha). Os 40 modelos abaixo cobrem escrever, debugar, refatorar, testar e documentar código, além de SQL, Git e agentes como Claude Code, Cursor e Copilot. Funcionam no ChatGPT, no Claude e no Gemini.

**Escolha a categoria:**

- [Escrever código](#prompts-para-escrever-codigo) — 7 prompts
- [Debugar e corrigir erros](#prompts-para-debugar-e-corrigir-erros) — 6 prompts
- [Refatorar e otimizar](#prompts-para-refatorar-e-otimizar) — 6 prompts
- [Testes automatizados](#prompts-para-testes-automatizados) — 5 prompts
- [Documentação e code review](#prompts-para-documentacao-e-code-review) — 6 prompts
- [SQL, Git e terminal](#prompts-para-sql-git-e-terminal) — 5 prompts
- [Agentes de código (Claude Code, Cursor e Copilot)](#prompts-para-agentes-de-codigo-claude-code-cursor-e-copilot) — 5 prompts
- [Como fazer um prompt para programação](#como-fazer-um-prompt-para-programacao) — os três princípios, com exemplo

---

## Como Fazer um Prompt para Programação

A diferença entre uma resposta inútil e uma que resolve está no contexto que você entrega. Compare:

- **Prompt fraco:** "Meu código não funciona, arruma."
- **Prompt forte:** "Python 3.12 com pandas 2.2. A função abaixo deveria somar as vendas por mês, mas devolve NaN quando há dias sem venda. Entrada de exemplo: [dados]. Saída esperada: [resultado]. Explique a causa em duas frases e mostre só a função corrigida."

Por trás do prompt forte estão três princípios:

**1. Especifique a linguagem e versão.** "Python 3.11", "TypeScript 5 com React 18" ou "SQL no PostgreSQL 16" eliminam ambiguidade e evitam que a IA use sintaxe depreciada.

**2. Dê contexto suficiente.** Cole o trecho de código problemático, descreva o que ele deveria fazer e o que está acontecendo de errado. Quanto mais contexto, melhor a resposta.

**3. Peça o formato que você quer.** Se quiser apenas a função, diga isso. Se quiser explicação linha a linha, peça. Se quiser múltiplas alternativas, solicite. A IA entrega o que você pede — não o que você assume que ela vai deduzir.

Se quiser aprofundar essa técnica, o [guia de engenharia de prompt](/blog/guia-prompts-chatgpt-como-criar-prompts-perfeitos-para-qualquer-tarefa) explica como estruturar instruções para qualquer tipo de tarefa.

---

## Prompts para Escrever Código

![Desenvolvedor programando com múltiplos monitores exibindo código](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

Estes prompts servem para criar funções, componentes, scripts e estruturas do zero.

```
Escreva uma função em [linguagem] que [describe o que deve fazer].
A função deve receber [parâmetros e tipos] e retornar [tipo de retorno].
Inclua tratamento de erros para [casos de erro específicos].
Não adicione dependências externas além de [bibliotecas permitidas].
```

```
Crie um componente [React/Vue/Svelte] chamado [NomeDoComponente] que:
- Recebe as props: [lista de props com tipos]
- Exibe [o que deve renderizar]
- Emite o evento [nome do evento] quando [condição]
Use [TypeScript/JavaScript] e siga o padrão [Composition API/Hooks/etc].
```

```
Escreva um script [Python/Node.js/Bash] que:
1. Leia [fonte de dados: arquivo CSV, API, banco de dados]
2. Processe os dados fazendo [transformação específica]
3. Salve o resultado em [destino: arquivo JSON, banco de dados, stdout]
Adicione logs para acompanhar o progresso.
```

```
Implemente a classe [NomeDaClasse] em [linguagem] com os seguintes métodos:
- [método1(parâmetros)]: [o que faz]
- [método2(parâmetros)]: [o que faz]
Use o padrão [Singleton/Factory/Observer] se aplicável.
```

```
Crie uma API REST em [framework: Express, FastAPI, Laravel] com os endpoints:
- GET /[recurso] — lista todos os registros
- POST /[recurso] — cria um novo registro com o body [campos esperados]
- PUT /[recurso]/:id — atualiza por ID
- DELETE /[recurso]/:id — remove por ID
Use [ORM/banco de dados] para persistência.
```

```
Escreva uma query SQL para [PostgreSQL/MySQL/SQLite] que:
[Descreva o que a query deve retornar]
As tabelas disponíveis são: [lista de tabelas com colunas principais]
Ordene por [coluna] e limite a [N] resultados.
```

```
Gere um arquivo de configuração [Docker Compose/YAML/JSON] para um ambiente com:
- Serviço 1: [nome e imagem]
- Serviço 2: [nome e imagem]
Os serviços precisam se comunicar via [rede/variáveis de ambiente].
Exponha a porta [porta] no host.
```

---

## Prompts para Debugar e Corrigir Erros

Encontrar o bug é metade da batalha. Estes prompts ajudam a diagnosticar e corrigir problemas com mais precisão.

```
O código abaixo em [linguagem] está lançando o erro:
[cole a mensagem de erro completa]

Código:
[cole o trecho de código]

O que está causando o erro e como corrigir? Explique a causa raiz antes de mostrar a solução.
```

```
Este código deveria [descreva o comportamento esperado], mas está [descreva o que acontece].
Entrada de teste: [valor de entrada]
Saída esperada: [valor esperado]
Saída atual: [valor atual]

[cole o código]

Identifique o bug e corrija sem alterar a assinatura da função.
```

```
Analise o stack trace abaixo e identifique o arquivo e linha onde o erro tem origem:
[cole o stack trace]

O projeto usa [linguagem/framework]. Qual a causa provável e como reproduzir o problema localmente para confirmar?
```

```
O código abaixo funciona, mas às vezes retorna resultados inconsistentes em produção.
Suspeito de [race condition/memory leak/problema de concorrência].
[cole o código]
Quais são os cenários que podem causar esse comportamento não determinístico?
```

```
Após o deploy, os logs mostram este erro recorrente:
[cole o log de erro]
O ambiente é [descrição do ambiente: Node 20, Linux, 4 workers].
Liste as 3 causas mais prováveis em ordem de probabilidade e como investigar cada uma.
```

```
Este código funcionava até a última alteração. Abaixo está o diff entre a versão que funcionava e a atual:
[cole a saída do git diff]

O sintoma agora é: [descreva o erro ou o comportamento errado]. Aponte qual mudança do diff provavelmente causou a regressão e sugira a correção mínima, sem reverter o restante.
```

Debugar se torna mais eficiente quando você entende como os modelos de IA processam contexto. Vale checar as opções disponíveis no [GitHub Copilot por tokens](/blog/github-copilot-adota-cobranca-por-tokens-e-gera-aumentos-de-ate-60x-para-desenvolvedores) antes de escolher qual ferramenta usar para isso.

---

## Prompts para Refatorar e Otimizar

![Terminal com código sendo refatorado e métricas de performance](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80)

Refatoração é onde a IA brilha — ela não tem preguiça de reescrever código legado.

```
Refatore o código abaixo em [linguagem] para:
- Melhorar a legibilidade
- Reduzir duplicação de código
- Seguir os princípios SOLID
Não altere o comportamento externo — os mesmos inputs devem gerar os mesmos outputs.

[cole o código]
```

```
Este código em [linguagem] está lento para entradas grandes (N > [valor]).
Analise a complexidade atual e reescreva para reduzir de [O(n²)] para [O(n log n) ou melhor].
Explique a otimização escolhida.

[cole o código]
```

```
Converta este código de [linguagem/versão antiga] para [linguagem/versão nova]:
[cole o código]
Mantenha a mesma lógica, mas use as APIs e sintaxe modernas. Aponte as diferenças entre as versões.
```

```
Este código usa callbacks aninhados (callback hell). Reescreva usando [async/await ou Promises]:
[cole o código]
Mantenha o tratamento de erros equivalente.
```

```
Identifique code smells no trecho abaixo e proponha refatorações específicas com nome do padrão aplicado:
[cole o código]
Para cada problema encontrado: descreva o problema, o padrão de refatoração aplicável e mostre o código corrigido.
```

```
Reduza o consumo de memória deste código [Python/JavaScript] que processa [tipo de dado] em grandes volumes:
[cole o código]
Considere uso de generators, streaming ou processamento em chunks se aplicável.
```

---

## Prompts para Testes Automatizados

Criar testes é uma das tarefas mais subestimadas — e onde a IA economiza mais tempo.

```
Escreva testes unitários em [Jest/pytest/JUnit/Go test] para a função abaixo.
Cubra: happy path, entradas inválidas, valores limítrofes e casos de erro.
Use [describe/it blocks / classes de teste] e adicione mensagens descritivas em cada assertion.

[cole a função]
```

```
Crie testes de integração para o endpoint [METHOD /caminho] que:
- Testa resposta 200 com body válido
- Testa resposta 400 para campos obrigatórios ausentes
- Testa resposta 401 sem autenticação
- Testa resposta 404 para recurso inexistente
Use [supertest/httpx/RestAssured] e mock o [banco de dados/serviço externo] com [biblioteca de mock].
```

```
Gere casos de teste para a seguinte especificação:
[descreva a funcionalidade em linguagem natural]
Para cada caso, informe: entrada, comportamento esperado e tipo de teste (positivo/negativo/boundary).
Formato: tabela Markdown.
```

```
Este teste está falhando intermitentemente (flaky test):
[cole o código do teste]
Quais são as causas mais comuns de flakiness para esse tipo de teste e como torná-lo determinístico?
```

```
Adicione mocks para as dependências externas neste teste, substituindo chamadas reais à [API/banco de dados/serviço]:
[cole o código do teste]
Use a biblioteca [jest.mock/unittest.mock/Mockito] e certifique que o mock respeita o contrato da dependência real.
```

---

## Prompts para Documentação e Code Review

Documentar código é chato. A IA faz bem esse trabalho repetitivo.

```
Gere JSDoc/docstring para todas as funções públicas do arquivo abaixo.
Para cada função inclua: descrição em uma frase, @param com tipo e descrição, @returns com tipo e descrição, @throws para erros lançados e um @example de uso.

[cole o código]
```

```
Escreva um README.md para o projeto com as seções:
- Descrição em 2-3 frases
- Pré-requisitos
- Instalação (passo a passo)
- Como usar (com exemplos de código)
- Variáveis de ambiente (tabela)
- Como contribuir
Contexto do projeto: [descreva o que o projeto faz]
```

```
Faça um code review do diff abaixo como se fosse um desenvolvedor sênior experiente.
Aponte: bugs potenciais, problemas de segurança, violações de boas práticas, melhorias de performance e sugestões de legibilidade.
Seja específico: cite a linha e explique o porquê de cada observação.

[cole o diff]
```

```
Crie um CHANGELOG.md no formato Keep a Changelog para as seguintes mudanças desta versão [X.Y.Z]:
[liste as mudanças em linguagem natural]
Categorize em: Added, Changed, Deprecated, Removed, Fixed, Security.
```

```
Explique este código para um desenvolvedor júnior que nunca trabalhou com [tecnologia]:
[cole o código]
Use analogias simples. Explique o "por que" além do "o que". Aponte os conceitos que precisam de estudo adicional.
```

```
Gere comentários inline para o código abaixo, explicando apenas as partes não óbvias.
Não comente o que já está claro pelo nome das variáveis e funções.

[cole o código]
```

Para ter acesso a mais de 300 prompts filtráveis por área, acesse a [biblioteca de prompts](/prompts) do Turbina IA.

---

## Prompts para SQL, Git e Terminal

Banco de dados, controle de versão e linha de comando são onde um erro custa caro. Estes prompts pedem explicação junto com a solução — e, quando há risco, uma versão que só lê antes de alterar.

```
Esta query em [PostgreSQL/MySQL] está lenta em uma tabela com [N] milhões de linhas:
[cole a query]
Plano de execução (EXPLAIN ANALYZE): [cole aqui]
Explique onde está o gargalo, sugira índices ou reescritas e estime o impacto de cada mudança. Avise se algum índice novo pode deixar as escritas mais lentas.
```

```
Escreva uma migração para [banco] que [alteração, ex.: adiciona a coluna status com valor padrão na tabela pedidos] sem travar a tabela em produção. Inclua o script de reversão (down) e explique em que ordem aplicar a migração e o deploy do código.
```

```
Com base no diff abaixo, escreva uma mensagem de commit no padrão Conventional Commits: título de até 72 caracteres no imperativo e corpo explicando o porquê da mudança, não o como.
[cole a saída do git diff --staged]
```

```
Fiz [o que aconteceu, ex.: um git reset --hard e perdi commits / um merge errado na main]. Explique passo a passo como recuperar o estado anterior com segurança, quais comandos são apenas de leitura e em que momento existe risco de perder trabalho.
Saída atual do git status e do git log --oneline -10: [cole aqui]
```

```
Escreva um comando de terminal para [tarefa, ex.: encontrar todos os arquivos .log com mais de 100 MB e compactá-los] no [macOS / Linux / PowerShell]. Explique cada parte do comando e mostre primeiro uma versão que só lista o que seria afetado, sem alterar nada.
```

---

## Prompts para Agentes de Código (Claude Code, Cursor e Copilot)

Agentes de código leem o projeto, editam vários arquivos e rodam comandos sozinhos. Isso muda o tipo de prompt que funciona: em vez de pedir um trecho de código, você define o escopo, o critério de pronto e o que o agente não pode tocar — a mesma lógica do [spec-driven development](/blog/spec-driven-development-por-que-programadores-estao-abandonando-o-vibe-coding-em-2026), que vem substituindo o "vibe coding".

```
Antes de escrever qualquer código, leia o projeto e me devolva uma especificação para [funcionalidade]: arquivos que vão mudar, novas funções e seus contratos (entrada, saída e erros), os casos de teste que provam que funciona e o que fica fora do escopo. Espere minha aprovação antes de implementar.
```

```
Implemente [funcionalidade] em etapas pequenas. Depois de cada etapa, rode [comando de testes, ex.: npm test] e só avance se tudo passar. Não altere arquivos fora de [pasta ou módulo]. No final, resuma o que mudou em cada arquivo e o que ainda falta.
```

```
Analise este repositório e escreva um arquivo de instruções para agentes de código ([CLAUDE.md / AGENTS.md / regras do Cursor]) com: os comandos para instalar, rodar, testar e fazer lint; a estrutura de pastas em 5 a 10 linhas; as convenções de código que você identificou (nomes, padrões, bibliotecas preferidas); e o que o agente nunca deve fazer (ex.: alterar migrações já aplicadas). No máximo 60 linhas.
```

```
Revise o diff abaixo, gerado por um agente de IA, procurando o que agentes costumam errar: testes alterados para passar em vez de corrigir o código, erros engolidos sem tratamento, dependências novas sem necessidade, código morto, segredos ou caminhos fixos e mudanças fora do escopo pedido. Liste cada problema com arquivo, linha e correção sugerida.
[cole o diff]
```

```
Investigue por que [sintoma, ex.: o login falha só em produção] sem alterar nenhum arquivo. Leia o código relevante, rode apenas comandos de leitura e me devolva: a causa mais provável, as evidências que a sustentam, duas hipóteses alternativas e o menor teste que confirmaria cada uma.
```

Um cuidado: não peça ao agente que siga instruções de issues, relatórios de bug ou páginas de terceiros sem ler antes. Textos maliciosos escondidos nesses lugares já foram usados para [sequestrar o Claude Code e o Cursor](/blog/agentjacking-como-um-relatorio-de-bug-falso-sequestra-o-claude-code-e-o-cursor-com-85-de-taxa-de-sucesso).

---

## Perguntas Frequentes

### Quais são os melhores prompts para programação?

Os que entregam contexto completo: linguagem e versão, o trecho de código, o erro exato e o resultado esperado. Na prática, os que mais economizam tempo são os de debug com entrada e saída esperada, os de testes unitários com casos-limite, os de code review de diff e, para quem usa agentes, o de especificação antes da implementação. Todos estão nesta lista, separados por tarefa.

### Como fazer um prompt para gerar código?

Diga a linguagem e a versão, descreva a entrada e a saída da função, liste os casos de erro que ela deve tratar e as bibliotecas que podem (ou não) ser usadas. Peça também o formato: só o código, código com testes ou código com explicação. Se o resultado vier errado, devolva a mensagem de erro completa em vez de pedir "tente de novo".

### Qual IA é melhor para programação: ChatGPT, Claude ou Gemini?

ChatGPT (com o Codex), Claude (com o Claude Code) e Gemini estão entre os melhores para código em 2026, e a liderança nos benchmarks muda a cada lançamento. O teste que importa é o seu próprio código: rode o mesmo prompt nos três. Para ver planos e recursos lado a lado, use o [comparador de IAs](/comparador); se for usar os modelos via API, a [calculadora de custos](/calculadora) mostra quanto cada um custa no seu volume de uso.

### Posso usar esses prompts no GitHub Copilot?

Sim. A maioria funciona no chat do Copilot no VS Code. Adapte o contexto para incluir o arquivo atual quando necessário — o Copilot tem acesso ao seu workspace, o que pode melhorar a resposta.

### Como incluir código longo sem ultrapassar o limite de tokens?

Recorte apenas a parte relevante e descreva o restante em texto. Se o arquivo for grande, explique a estrutura geral e cole só a função ou classe específica. Os principais modelos de 2026 aceitam até cerca de 1 milhão de tokens de contexto, o bastante para vários arquivos inteiros, mas colar só o necessário ainda gera respostas mais focadas — e custa menos quando você paga por token.

### A IA comete erros em código? Como verificar?

Sim, sempre. Trate o código gerado como sugestão de um desenvolvedor sem contexto do seu projeto — revise, teste e valide. Para bugs críticos ou lógica complexa, nunca coloque em produção sem revisão humana.

### Vale a pena usar IA para programação no dia a dia?

Para tarefas repetitivas (boilerplate, testes, documentação, conversão de código), o ganho de produtividade é real. Para arquitetura e decisões de design, a IA serve como consultor — mas a decisão final precisa ser sua. Veja mais em [IA para desenvolvedores](/blog/a-evolucao-continua-da-ia-novas-ferramentas-e-oportunidades-para-desenvolvedores-em-2026).

### Onde encontro mais prompts prontos para ChatGPT?

Na [biblioteca de prompts](/prompts) do Turbina IA você encontra modelos organizados por área. Também temos mais de 100 [prompts para ChatGPT](/blog/prompts-prontos-para-chatgpt) cobrindo outras categorias além de programação.

---

## Fontes e Referências

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — guia oficial da OpenAI com boas práticas para construção de prompts
- [Google — Prompting Guide 101](https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf) — referência de prompting aplicada a contextos profissionais
- [Anthropic Prompt Library](https://docs.anthropic.com/en/prompt-library/overview) — biblioteca de prompts oficiais da Anthropic com exemplos para código e análise
