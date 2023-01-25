$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "line": 2,
  "name": "Alugar Filme",
  "description": "Como um usuário \nEu quero cadastrar aluguéis de filmes\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 9
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 10
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "o preço do aluguel será de R$ 3",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "a data da entrega será em 1 dia",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "And "
});
formatter.match({
  "location": "AlugarFilmesSteps.um_filme(DataTable)"
});
formatter.result({
  "duration": 246137500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 2531700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 4759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.a_data_da_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 611900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 102600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "não será possível por falta de estoque",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 60100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.não_será_possível_por_falta_de_estoque()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 134200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Deve dar condições especiais para categoria estendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel será de R$ \u003cvalor\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data da entrega será em \u003cqtdDias\u003e dias",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuação recebida será de \u003cpontuacao\u003e pontos",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 33,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;1"
    },
    {
      "cells": [
        "4",
        "estendido",
        "8",
        "3",
        "2"
      ],
      "line": 34,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 35,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;3"
    },
    {
      "cells": [
        "10",
        "estendido",
        "20",
        "3",
        "2"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Deve dar condições especiais para categoria estendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja estendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel será de R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data da entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 112900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "estendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.que_o_tipo_do_aluguel_seja_estendido(String)"
});
formatter.result({
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 30
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.a_data_da_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 304100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.a_pontuação_recebida_será_de_pontos(int)"
});
formatter.result({
  "duration": 94300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Deve dar condições especiais para categoria estendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel será de R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data da entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuação recebida será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 97500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.que_o_tipo_do_aluguel_seja_estendido(String)"
});
formatter.result({
  "duration": 91400,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 85600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 85700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.a_data_da_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 288400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.a_pontuação_recebida_será_de_pontos(int)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Deve dar condições especiais para categoria estendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preço do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja estendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel será de R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data da entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 138200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 97500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "estendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.que_o_tipo_do_aluguel_seja_estendido(String)"
});
formatter.result({
  "duration": 58900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 88300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 30
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 85800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.a_data_da_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 308700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.a_pontuação_recebida_será_de_pontos(int)"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condições especiais para categoria estendida",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-especiais-para-categoria-estendida;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel será de R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data da entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuação recebida será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 237100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.que_o_tipo_do_aluguel_seja_estendido(String)"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 30
    }
  ],
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 72400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.a_data_da_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 279400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.a_pontuação_recebida_será_de_pontos(int)"
});
formatter.result({
  "duration": 71900,
  "status": "passed"
});
});