---
title: "Prompts para Excel e Planilhas no ChatGPT: Fórmulas, Tabela Dinâmica e Análise de Dados"
seoTitle: "Prompts para Excel no ChatGPT: Fórmulas e Análise"
description: "Mais de 25 prompts prontos para usar o ChatGPT em planilhas: fórmulas PROCV e PROCX, SOMASES, tabela dinâmica, limpeza de dados, gráficos e Google Sheets."
category: tutoriais
tags:
  - ChatGPT
  - Excel
  - Google Sheets
  - Prompts
  - Produtividade
author: Redação Turbina IA
isFeatured: false
date: "2026-11-26"
coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
---

Cole uma planilha com 40 mil linhas no [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) e peça para ele separar os clientes com mais de 60 dias de atraso: ele lê o arquivo inteiro, sem você precisar abrir uma única fórmula, e devolve a lista certa — desde que o prompt diga exatamente quais colunas usar e o que fazer com elas. É essa diferença, entre descrever a tarefa com precisão ou só "pedir uma ajuda com a planilha", que separa quem economiza horas de quem recebe uma fórmula errada.

> **Resposta Rápida (TL;DR):** O ChatGPT escreve fórmulas de Excel e Google Sheets, limpa dados inconsistentes e monta gráficos quando você sobe o arquivo (.xlsx,.csv ou similar) e descreve a tarefa com as colunas, o critério e o formato de saída. Os prompts abaixo cobrem busca de dados (PROCV/PROCX), somas condicionais, tabela dinâmica, limpeza e gráficos — copie, ajuste o que está entre [colchetes] e teste sempre a fórmula antes de usar em dado real.

Quem já usa o [ChatGPT](/blog/prompts-prontos-para-chatgpt) para outras tarefas sabe que a mesma lógica vale para planilha: contexto claro entra, resposta útil sai. A diferença é que aqui o "contexto" quase sempre é uma tabela — e é nela que a maioria dos prompts genéricos falha, porque não diz ao modelo qual coluna é qual.

**Escolha a categoria:**

- [Busca de dados: PROCV e PROCX](#prompts-para-busca-de-dados-procv-e-procx) — 5 prompts
- [Somas e contagens condicionais](#prompts-para-somas-e-contagens-condicionais) — 5 prompts
- [Tabela dinâmica](#prompts-para-tabela-dinamica) — 4 prompts
- [Limpeza de dados](#prompts-para-limpeza-de-dados) — 5 prompts
- [Gráficos](#prompts-para-graficos) — 4 prompts
- [Google Sheets com Gemini](#prompts-para-google-sheets-com-gemini) — 4 prompts
- [Como usar esses prompts](#como-usar-esses-prompts-no-chatgpt-e-no-google-sheets)

---

## Como o ChatGPT Lê sua Planilha

Antes dos prompts, vale entender o que muda quando você sobe um arquivo em vez de colar texto. O ChatGPT aceita upload de planilhas em formatos como.xlsx,.xls,.csv,.tsv e.ods, e a partir daí escreve e executa código Python por trás dos panos para limpar, cruzar e resumir os dados — sem que você veja esse código, a menos que peça para revisar ([Central de Ajuda da OpenAI — Análise de dados com o ChatGPT](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt)). Isso inclui padronizar rótulos escritos de formas diferentes, remover linhas duplicadas e até consertar fórmulas quebradas, sempre com um resumo do que foi alterado ([OpenAI Academy — Análise de dados](https://openai.com/academy/data-analysis)).

Dois limites práticos importam. Contas gratuitas têm uma cota bem menor de uploads por dia que as pagas, que giram em torno de dezenas de arquivos a cada poucas horas — a OpenAI não detalha publicamente quanto da cota já foi usado durante a conversa ([Central de Ajuda da OpenAI — Perguntas frequentes sobre upload de arquivos](https://help.openai.com/en/articles/8555545-file-uploads-faq)). E os gráficos interativos (o tipo que você pode passar o mouse por cima e ver o valor exato) só existem para barra, linha, pizza e dispersão; qualquer outro tipo de visualização volta como imagem estática ([Central de Ajuda da OpenAI — Análise de dados com o ChatGPT](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt)). Na prática, isso significa: para análise pesada, suba o arquivo; para uma fórmula pontual, basta descrever a estrutura da coluna no próprio texto do prompt, sem precisar fazer upload de nada.

---


![Imagem ilustrativa sobre Prompts para Excel e Planilhas no ChatGPT: Fórmulas, Tabela Dinâmica e Análise de Dados](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Prompts para Busca de Dados: PROCV e PROCX

PROCV é o nome em português do VLOOKUP, e PROCX é o XLOOKUP — a função que a própria Microsoft chama de sucessora do VLOOKUP, porque busca em qualquer direção e não quebra quando alguém insere ou apaga uma coluna no meio do caminho ([Microsoft Support — Função XLOOKUP](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929)).

```
Tenho uma planilha com as colunas [ex.: Código, Produto, Estoque, Preço]. Quero uma fórmula PROCX que busque o [Preço] a partir do [Código] digitado em outra célula, e que retorne "não encontrado" em vez de erro quando o código não existir. Mostre a fórmula e explique cada parte:

[Cole uma amostra das colunas, sem dado sensível]
```

```
Minha planilha ainda está em uma versão do Excel sem PROCX. Escreva a mesma busca usando PROCV, considerando que a coluna de retorno é a [número] a partir da coluna de busca:

[Descreva a estrutura das colunas]
```

```
Preciso de uma fórmula que busque um valor em [planilha ou aba A] e traga o resultado para [planilha ou aba B], cruzando pela coluna [nome ou ID em comum]. As duas abas têm nomes de colunas levemente diferentes — ajude a mapear antes de montar a fórmula:

[Descreva as colunas de cada aba]
```

```
Quero uma busca que retorne mais de um valor ao mesmo tempo (por exemplo, nome e telefone a partir do CPF), em vez de uma fórmula separada para cada coluna. Mostre como fazer isso com PROCX ou com uma combinação de fórmulas:

[Descreva as colunas de origem e destino]
```

```
Essa fórmula está retornando erro e eu não sei por quê:

[Cole a fórmula e o erro exibido]

Explique a causa mais provável do erro e corrija a fórmula.
```

A diferença prática entre PROCV e PROCX aparece quando a planilha cresce: o PROCV só busca da esquerda para a direita e trava se alguém mover uma coluna, enquanto o PROCX aceita busca em qualquer direção e é mais tolerante a essas mudanças ([Microsoft Support — Função XLOOKUP](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929)). Se a planilha muda de estrutura com frequência, vale pedir ao ChatGPT direto pela versão PROCX.

---

## Prompts para Somas e Contagens Condicionais

![Planilha de dados em uma tela representando fórmulas e análise financeira](https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80)

```
Quero somar os valores da coluna [coluna de valor] apenas quando a coluna [coluna A] for igual a [critério 1] e a coluna [coluna B] estiver dentro do mês atual. Monte a fórmula SOMASES e explique cada argumento:

[Descreva as colunas envolvidas]
```

```
Preciso contar quantas linhas atendem a dois critérios ao mesmo tempo: [critério 1] na coluna [X] e [critério 2] na coluna [Y]. Mostre a fórmula de contagem condicional (CONT.SES) e um exemplo com números fictícios:

[Descreva as colunas]
```

```
Minha planilha tem uma coluna de datas e uma de valores. Quero o total de cada mês em uma célula separada, sem criar uma tabela dinâmica — apenas com fórmula. Mostre como fazer:

[Descreva a estrutura das colunas de data e valor]
```

```
Quero calcular a média de [coluna de valor] só para as linhas em que [coluna de categoria] for igual a [categoria específica], ignorando células vazias. Monte a fórmula e explique o que mudaria se eu quisesse ignorar também valores zerados:

[Descreva as colunas]
```

```
Tenho uma meta de faturamento por vendedor. Quero uma fórmula que mostre, numa coluna ao lado, se cada vendedor bateu a meta (sim/não) e, em outra célula, o percentual de vendedores que bateram:

[Descreva as colunas de vendedor, meta e resultado]
```

Essas fórmulas condicionais são onde mais vale colar uma amostra pequena dos dados reais em vez de descrever de memória — o ChatGPT acerta o nome exato das colunas e o formato dos valores (texto, número, data) só quando vê como eles realmente estão escritos na planilha.

---

## Prompts para Tabela Dinâmica

```
Tenho uma planilha com as colunas [liste as colunas, ex.: Data, Vendedor, Produto, Valor]. Quero montar uma tabela dinâmica que mostre o total de [Valor] por [Vendedor] e por mês. Explique passo a passo onde arrastar cada campo (linhas, colunas, valores, filtros):

[Cole uma amostra das colunas]
```

```
Minha tabela dinâmica está mostrando a soma, mas eu preciso da contagem de linhas distintas por [categoria]. Explique como trocar o campo de valor para contagem e, se possível, para contagem de valores únicos:

[Descreva a estrutura atual da tabela dinâmica]
```

```
Quero comparar dois períodos lado a lado numa tabela dinâmica — [período 1] contra [período 2] — e destacar automaticamente onde a variação foi negativa. Explique como estruturar os campos e qual formatação condicional aplicar:

[Descreva as colunas de data e valor]
```

```
Não tenho uma tabela dinâmica ainda, só os dados brutos. Analise a estrutura abaixo e sugira quais campos eu deveria colocar em linhas, colunas e valores para responder à pergunta: [sua pergunta, ex.: qual produto vende mais em qual região?]

[Cole uma amostra dos dados]
```

Tabela dinâmica é o tipo de tarefa em que vale subir o arquivo completo em vez de descrever a estrutura: o ChatGPT consegue inspecionar as colunas reais do arquivo e sugerir o cruzamento certo, em vez de você ter que explicar cada nome de coluna no [prompt](/prompts).

---

## Prompts para Limpeza de Dados

```
Esta planilha tem nomes de cliente escritos de formas diferentes (maiúscula, minúscula, com e sem acento) e provavelmente linhas duplicadas. Padronize os nomes, remova duplicatas e me diga quantas linhas foram removidas:

[Cole uma amostra representativa, sem dado sensível]
```

```
As datas desta coluna vieram em formatos diferentes (DD/MM/AAAA, MM-DD-AAAA e texto por extenso). Converta tudo para o mesmo formato e aponte quais linhas não puderam ser convertidas com segurança:

[Cole uma amostra da coluna de data]
```

```
Esta coluna de telefone tem números com e sem DDD, com e sem o 9 na frente, e alguns com símbolos. Padronize para um único formato e liste os casos que ficaram ambíguos:

[Cole uma amostra da coluna]
```

```
Encontre valores fora do padrão esperado nesta coluna numérica (por exemplo, texto onde deveria ter número, valores negativos onde não fazem sentido, ou números muito fora da faixa normal) e liste as linhas suspeitas antes de eu usar esses dados em qualquer cálculo:

[Cole uma amostra da coluna]
```

```
Estas duas planilhas deveriam ter os mesmos clientes, mas os nomes estão escritos de formas diferentes em cada uma. Compare e aponte quais prováveis correspondências existem entre elas, mesmo com a grafia diferente:

Planilha 1: [cole uma amostra]
Planilha 2: [cole uma amostra]
```

Evite colar CPF, dado de saúde, senha ou qualquer informação sigilosa de cliente ou empresa nesses prompts — mesmo em planilhas de limpeza, prefira uma amostra anonimizada ou com os valores sensíveis substituídos por "Cliente 1", "Cliente 2". Isso vale tanto para o chat comum quanto para arquivos enviados por upload.

---

## Prompts para Gráficos

```
Monte um gráfico de barras mostrando [métrica, ex.: faturamento] por [categoria, ex.: mês ou região], a partir dos dados abaixo. Ordene do maior para o menor valor:

[Cole os dados ou suba a planilha]
```

```
Quero um gráfico de linha comparando a evolução de [métrica] entre [período 1] e [período 2], com os dois períodos na mesma escala para facilitar a comparação visual:

[Cole os dados]
```

```
Analise os dados abaixo e sugira qual tipo de gráfico comunica melhor a informação — eu não sei se o ideal é barra, linha ou dispersão. Explique o motivo da escolha antes de gerar o gráfico:

[Cole os dados]
```

```
Gere um gráfico de pizza com a participação de cada [categoria] no total de [métrica], mas agrupe em "Outros" qualquer categoria com menos de [X]% de participação, para não poluir o gráfico:

[Cole os dados]
```

Gráficos de barra, linha, pizza e dispersão saem como visual interativo, em que você passa o mouse e vê o valor exato de cada ponto; qualquer outro tipo de gráfico que o ChatGPT gerar chega como imagem estática ([Central de Ajuda da OpenAI — Análise de dados com o ChatGPT](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt)). Para apresentação a um cliente ou à diretoria, vale pedir o tipo interativo sempre que a pergunta permitir.

---

## Prompts para Google Sheets com Gemini

O Google Sheets tem seu próprio assistente de IA: o Gemini aparece no botão "Perguntar ao Gemini" no canto superior direito da planilha, ou é acionado ao começar uma célula com o sinal de igual, e consegue sugerir fórmulas dentro da própria aba ([Central de Ajuda do Google — Colabore com o Gemini no Google Sheets](https://support.google.com/docs/answer/14356410)). Já o recurso "Ajude-me a organizar" cria uma tabela nova a partir de uma descrição em texto, mas não edita nem lê dados que já existem na planilha — por isso ele sempre abre numa aba nova, e exige uma assinatura elegível do Google Workspace ou do Google One com IA ([Central de Ajuda do Google — Organize com o Gemini no Google Sheets](https://support.google.com/docs/answer/13951830)).

```
Preciso de uma fórmula no Google Sheets que [descreva a tarefa, ex.: some os valores da coluna C quando a coluna A for "Pago"]. Mostre a fórmula considerando que estou usando o Google Sheets, não o Excel — alguns nomes de função são diferentes:

[Descreva as colunas]
```

```
Quero criar, do zero, uma planilha nova para controlar [objetivo, ex.: orçamento mensal, cronograma de projeto com 5 etapas]. Descreva quais colunas e abas essa planilha deveria ter antes de eu montar manualmente ou pedir ao recurso de IA do Sheets para gerar a estrutura.
```

```
Esta fórmula funciona no Excel mas está dando erro no Google Sheets:

[Cole a fórmula e o erro]

Qual é o equivalente correto para o Google Sheets?
```

```
Explique a diferença entre usar PROCV, PROCX e a função CONSULTAR no Google Sheets para o seguinte caso: [descreva o cenário de busca]. Qual delas é mais indicada e por quê?
```

Quem decide entre usar o ChatGPT, o Gemini do próprio Sheets ou outra IA para planilhas pode comparar os três lado a lado no [comparador de IAs](/comparador) do Turbina IA, que lista contexto, preço e recursos de cada modelo.

---

## Como Usar Esses Prompts no ChatGPT e no Google Sheets

1. **Suba o arquivo quando a tarefa envolve muitos dados** —.xlsx,.csv ou.ods funcionam direto no ChatGPT. Para uma fórmula pontual, só descrever a estrutura das colunas no texto já basta.
2. **Troque o que está entre [colchetes]** pelos nomes reais das suas colunas e critérios — quanto mais específico, menor a chance de a fórmula vir errada.
3. **Peça a explicação junto com a fórmula.** Todos os prompts acima já incluem isso, porque entender o que cada parte faz é o que permite adaptar a fórmula depois, sem voltar ao chat.
4. **Teste antes de aplicar em dado real.** Copie a fórmula para uma célula de teste, com valores que você já sabe o resultado esperado, antes de rodar na planilha de produção.
5. **Para análise em volume via API**, quem processa centenas de planilhas por mês deve estimar o custo antes: a [calculadora de IA](/calculadora) do Turbina IA compara o preço por token do GPT, do Claude e do Gemini. Quem já processa várias tarefas repetitivas também pode conferir quanto cada chamada custa no artigo sobre [quanto custa a API do ChatGPT, do Claude e do Gemini em reais](/blog/quanto-custa-a-api-do-chatgpt-do-claude-e-do-gemini-em-reais-exemplos-por-tarefa).

Para outras tarefas fora de planilha, a [biblioteca de prompts](/prompts) do Turbina IA reúne modelos por categoria, e a lista de [prompts para negócios e empreendedores](/blog/prompts-para-negocios-e-empreendedores) cobre o lado comercial que costuma vir logo depois da análise de dados — proposta, follow-up e apresentação do resultado para o cliente.

---

## Perguntas Frequentes

### O ChatGPT consegue ler um arquivo do Excel direto?

Sim. Basta subir o arquivo em formatos como.xlsx,.xls,.csv,.tsv ou.ods; o ChatGPT escreve e executa código por trás dos panos para limpar, cruzar e resumir os dados, sem que esse código apareça a menos que você peça para revisar ([Central de Ajuda da OpenAI](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt)). Para uma fórmula pontual, não é preciso nem fazer upload — basta descrever a estrutura das colunas no próprio prompt.

### Qual a diferença entre PROCV e PROCX?

PROCV (VLOOKUP) só busca da esquerda para a direita e pode quebrar se alguém inserir ou remover uma coluna no meio da planilha. PROCX (XLOOKUP) busca em qualquer direção e é mais tolerante a essas mudanças de estrutura — a própria Microsoft recomenda migrar para ele quando a versão do Excel permite ([Microsoft Support — Função XLOOKUP](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929)). Quem ainda está em uma versão mais antiga do Excel continua precisando do PROCV.

### Dá para usar os mesmos prompts no Google Sheets?

A maioria sim, com um ajuste: alguns nomes de função mudam entre Excel e Google Sheets, então vale avisar ao ChatGPT qual dos dois você está usando. O próprio Google Sheets também tem um assistente de IA embutido, o Gemini, acionado pelo botão "Perguntar ao Gemini" ou digitando o sinal de igual numa célula ([Central de Ajuda do Google](https://support.google.com/docs/answer/14356410)), o que é útil quando você quer a fórmula já dentro da planilha, sem copiar e colar.

---

## Fontes e Referências

- [Central de Ajuda da OpenAI — Análise de dados com o ChatGPT](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt)
- [OpenAI Academy — Análise de dados](https://openai.com/academy/data-analysis)
- [Central de Ajuda da OpenAI — Perguntas frequentes sobre upload de arquivos](https://help.openai.com/en/articles/8555545-file-uploads-faq)
- [Microsoft Support — Função XLOOKUP](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929)
- [Central de Ajuda do Google — Colabore com o Gemini no Google Sheets](https://support.google.com/docs/answer/14356410)
- [Central de Ajuda do Google — Organize com o Gemini no Google Sheets](https://support.google.com/docs/answer/13951830)