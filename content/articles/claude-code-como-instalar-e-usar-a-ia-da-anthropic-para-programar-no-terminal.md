---
title: "Claude Code: Como Instalar e Usar a IA da Anthropic para Programar no Terminal"
seoTitle: "Claude Code: como instalar e usar para programar"
description: "Como instalar o Claude Code, quanto custam os planos Pro e Max e como usar a CLI da Anthropic para programar com IA direto no terminal."
category: ferramentas
tags:
  - Claude Code
  - Anthropic
  - Ferramentas de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-11-18"
coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
---

Vinte dólares por mês. É o que a Anthropic cobra pelo plano de entrada que dá acesso ao Claude Code, a ferramenta que a empresa descreve como um "agente de codificação" capaz de ler um projeto inteiro, editar arquivos em várias pastas ao mesmo tempo e abrir um pull request sozinho ([Claude Code](https://claude.com/product/claude-code)). Ela não vive só no terminal: roda também como extensão no VS Code e no JetBrains, como aplicativo de desktop, no navegador e até dentro do Slack, segundo a própria documentação oficial ([documentação do Claude Code](https://code.claude.com/docs/en/overview)).

> **Resposta Rápida (TL;DR):** O Claude Code é a ferramenta de linha de comando da Anthropic para programar com IA. Instala-se com um comando no terminal (`curl -fsSL https://claude.ai/install.sh | bash` no Mac/Linux), exige uma assinatura Claude Pro (a partir de US$ 17/mês no plano anual) ou Max, e funciona lendo o projeto, editando código e rodando comandos a partir de instruções em linguagem natural.

## O que é o Claude Code, afinal

Esqueça a ideia de um autocomplete turbinado. O Claude Code se comporta mais como um estagiário que você supervisiona: você descreve a tarefa em português ou inglês, ele mapeia a estrutura do projeto sem que você precise selecionar arquivos manualmente, escreve o código, roda os testes e só para para perguntar quando precisa de uma decisão sua ([Claude Code](https://claude.com/product/claude-code)). A documentação oficial lista exemplos simples de uso direto no terminal, como pedir para ele escrever testes para um módulo e corrigir falhas sozinho, ou gerar uma mensagem de commit a partir das mudanças feitas.

Ele também se integra ao Git e ao GitHub ou GitLab, e pode ser encadeado com outros programas de linha de comando — a própria Anthropic descreve isso como seguir "a filosofia Unix" de compor ferramentas pequenas ([documentação do Claude Code](https://code.claude.com/docs/en/overview)). Na prática, isso significa que é possível jogar um log de erro direto para dentro do Claude Code e pedir um diagnóstico, ou rodar o comando dentro de uma pipeline de CI para revisar um `diff` antes do merge.

Quem já testou ferramentas como o GitHub Copilot vai notar uma diferença de proposta: o Copilot nasceu como autocomplete dentro do editor, enquanto o Claude Code nasceu como agente que toma a iniciativa de explorar o código. Se você quer comparar as duas abordagens lado a lado, o guia sobre o [plano gratuito do GitHub Copilot](/blog/github-copilot-gratis-como-usar-o-plano-free-em-2026-e-quando-vale-pagar) e o comparativo de [IAs gratuitas para programar](/blog/melhor-ia-gratuita-para-programar-em-2026-copilot-chatgpt-claude-e-gemini-no-codigo) detalham onde cada ferramenta se encaixa melhor.


![Imagem ilustrativa sobre Claude Code: Como Instalar e Usar a IA da Anthropic para Programar no Terminal](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80)

## Como instalar o Claude Code no seu computador

A Anthropic recomenda o instalador nativo em vez do pacote via npm, que ainda existe mas é tratado como caminho legado na documentação atual ([documentação do Claude Code](https://code.claude.com/docs/en/overview)). Os comandos variam por sistema:

- **macOS, Linux e WSL:** abra o terminal e rode `curl -fsSL https://claude.ai/install.sh | bash`.
- **Windows (PowerShell):** `irm https://claude.ai/install.ps1 | iex`.
- **Windows (CMD):** `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`.
- **Homebrew (macOS/Linux):** `brew install --cask claude-code`.
- **WinGet (Windows):** `winget install Anthropic.ClaudeCode`.

Depois de instalar, abra um terminal novo e digite `claude --version`. Se aparecer um número de versão, funcionou. Se o terminal disser que o comando não existe, o problema quase sempre é o PATH do sistema não incluir a pasta onde o instalador colocou o executável — a documentação tem uma seção específica de correção para esse erro ([documentação do Claude Code](https://code.claude.com/docs/en/overview)).

Uma diferença prática entre os métodos: instalações nativas (via `curl`/`irm`) se atualizam sozinhas em segundo plano. Já quem instala pelo Homebrew ou WinGet precisa rodar `brew upgrade claude-code` ou `winget upgrade Anthropic.ClaudeCode` de vez em quando para não ficar numa versão antiga.

Depois da instalação, entre na pasta do projeto e digite apenas `claude`:

```bash
cd meu-projeto
claude
```

Na primeira execução, ele pede login — com uma conta Claude (assinatura Pro, Max ou superior) ou com uma chave de API da Anthropic Console, que funciona por consumo de tokens em vez de mensalidade fixa ([Claude Code](https://claude.com/product/claude-code)).

## Quanto custa: Claude Pro vs. Claude Max

O [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Code não tem versão gratuita independente — ele vem embutido nos planos pagos da Anthropic, que também dão acesso ao chat do Claude. Segundo a página oficial de preços, os dois planos voltados a uso individual são:

| Plano | Preço | O que inclui |
|---|---|---|
| Claude Pro | US$ 17/mês (cobrança anual) ou US$ 20/mês (mensal) | Claude Code incluso; limites de uso renovados a cada 5 horas e por semana |
| Claude Max | US$ 100/mês | 5x o limite de uso do Pro; US$ 100/mês em créditos de API da Claude Platform incluídos |

Fonte: [Claude Pricing](https://claude.com/pricing).

Quem só quer testar o Claude sem pagar nada ainda pode usar o chat no navegador — mas, como mostra o guia sobre o [Claude grátis em 2026](/blog/claude-gratis-em-2026-o-que-o-plano-sem-custo-da-anthropic-permite-fazer), o plano sem custo não dá acesso ao Claude Code. Para programar com a ferramenta é preciso, no mínimo, o Pro. Equipes maiores também podem contratar o plano Team, cobrado por assento mensal, que a própria Anthropic lista a partir de US$ 20 por pessoa na cobrança anual ([Claude Code](https://claude.com/product/claude-code)).

Vale um cuidado com o limite de uso: ele é calculado por janelas de cinco horas e por semana, e a velocidade com que se esgota depende do modelo escolhido, do tamanho das conversas e dos arquivos abertos ([Claude Pricing](https://claude.com/pricing)). Para quem usa o Claude Code em tarefas automatizadas — como revisão de PR em CI — vale entender como o consumo de tokens se traduz em custo real; a [calculadora de custo de API](/calculadora) do Turbina IA ajuda a estimar isso em reais.


![Imagem ilustrativa sobre Claude Code: Como Instalar e Usar a IA da Anthropic para Programar no Terminal](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

## O arquivo CLAUDE.md: como ensinar o agente sobre o seu projeto

Todo projeto tem convenções que não estão escritas em lugar nenhum — o padrão de nomenclatura que o time usa, a biblioteca que não pode ser trocada, o checklist de revisão antes de todo merge. O Claude Code lê um arquivo chamado `CLAUDE.md` na raiz do repositório no começo de cada sessão, e é nele que essas regras ficam registradas ([Using CLAUDE.md files](https://claude.com/blog/using-claude-md-files)).

Rodar o comando `/init` dentro de uma sessão do Claude Code gera uma primeira versão desse arquivo automaticamente, lendo os arquivos de configuração, a documentação e a estrutura de pastas do projeto. A própria Anthropic avisa que esse resultado inicial deve ser tratado como ponto de partida, não como versão final: o arquivo gerado pode não capturar nuances específicas do fluxo de trabalho do seu time, e o recomendado é revisar e ajustar o conteúdo com base nas práticas reais da equipe ([Using CLAUDE.md files](https://claude.com/blog/using-claude-md-files)). Se o repositório já tiver um `AGENTS.md` usado por outro agente de código, o Claude Code consegue ler esse arquivo no lugar do próprio CLAUDE.md.

Esse arquivo também pode existir em mais de um nível — um arquivo global do usuário, um na raiz do projeto e outros em subpastas — e o mais específico tem prioridade sobre o mais genérico. Quer entender melhor termos como "agente" e "MCP" antes de configurar o seu? O [glossário de IA](/glossario) do site traz definições rápidas para esse vocabulário.

## Permissões, hooks e MCP: o que controla o que o agente pode fazer

Deixar uma IA editar arquivos e rodar comandos sozinha é bom — até ela rodar o comando errado. Por isso o Claude Code tem um sistema de permissões com modos de aprovação, regras explícitas de "permitir" e "negar", e hooks que disparam comandos antes ou depois de uma ação do agente, como formatar o código automaticamente depois de cada edição ([Claude Code](https://claude.com/product/claude-code)). Existe também um modo automático para ações consideradas de menor risco, mas a própria página do produto é direta ao afirmar que isso "não elimina o risco" — ou seja, revisar o que foi gerado continua sendo trabalho humano.

A ferramenta também fala o protocolo MCP (Model Context Protocol), um padrão aberto para conectar a IA a fontes de dados externas. Na prática, isso permite que o Claude Code leia um documento de especificação guardado no Google Drive, atualize um card no Jira ou puxe uma mensagem do Slack sem que você precise copiar e colar nada manualmente ([documentação do Claude Code](https://code.claude.com/docs/en/overview)). Para tarefas que se repetem — como revisar todo pull request com o mesmo checklist — dá para empacotar o fluxo em uma "skill" reutilizável pelo time, em vez de reescrever o prompt inteiro a cada vez.

## Para quem o Claude Code faz sentido

Ele não substitui aprender a programar, nem elimina a necessidade de revisar código antes de colocá-lo em produção. O ganho real aparece em tarefas que consomem tempo sem exigir muita criatividade: escrever testes para um código que nunca teve cobertura, corrigir os mesmos erros de lint espalhados pelo projeto, resolver conflitos de merge repetitivos ou atualizar dependências desatualizadas ([Claude Code](https://claude.com/product/claude-code)). Times que já usam GitHub Actions ou GitLab CI também conseguem automatizar revisão de código e triagem de issues diretamente no pipeline.

Antes de assinar, compare o custo com o uso que você faria da ferramenta: alguém que só precisa de ajuda ocasional talvez resolva melhor com o plano gratuito de outra IA, enquanto quem já roda tarefas de automação em CI o dia inteiro esgota o limite do Pro rápido e deve calcular se o Max compensa. O [comparador de modelos de IA](/comparador) do Turbina IA ajuda a colocar o Claude ao lado de outros modelos antes de decidir onde investir a assinatura.

## Perguntas Frequentes

### O Claude Code é gratuito?

Não. Ele está incluído nos planos pagos Pro (a partir de US$ 17/mês na cobrança anual), Max, Team e Enterprise, ou pode ser usado com uma conta na Anthropic Console pagando por consumo de tokens de API ([Claude Pricing](https://claude.com/pricing); [Claude Code](https://claude.com/product/claude-code)). O plano gratuito do Claude, usado só pelo chat no navegador, não dá acesso à ferramenta.

### Preciso saber programar para usar o Claude Code?

É recomendável. A ferramenta escreve e edita código de verdade dentro do seu repositório, então entender o que ela está fazendo — e revisar o resultado antes de aceitar — continua sendo necessário. A própria Anthropic reforça que os controles de permissão reduzem, mas não eliminam, o risco de uma ação indesejada ([Claude Code](https://claude.com/product/claude-code)).

### Qual a diferença entre o Claude Code e o GitHub Copilot?

O Copilot começou como autocomplete dentro do editor, sugerindo linhas de código enquanto você digita. O Claude Code atua como agente: você descreve uma tarefa maior, e ele explora o projeto, decide quais arquivos editar e executa comandos sozinho, pedindo aprovação quando necessário. O guia sobre o [GitHub Copilot grátis](/blog/github-copilot-gratis-como-usar-o-plano-free-em-2026-e-quando-vale-pagar) detalha os limites do plano sem custo dessa outra ferramenta.

## Fontes e Referências

- [Claude Code (visão geral e preços)](https://claude.com/product/claude-code)
- [Documentação oficial do Claude Code](https://code.claude.com/docs/en/overview)
- [Claude Pricing](https://claude.com/pricing)
- [Using CLAUDE.md files: Customizing Claude Code for your codebase](https://claude.com/blog/using-claude-md-files)