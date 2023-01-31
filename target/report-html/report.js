$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastro de contas",
  "description": "Como um usuário\r\nGostaria de cadastrar contas \r\nPara que eu possa distribuir meu dinheiro de uma forma mais \r\norganizada",
  "id": "cadastro-de-contas",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 32,
  "name": "Não deve inserir uma conta com nome existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-existente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "informo o usuário \"talesernani@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "a senha \"th@les123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "visualizo a página inicial",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "seleciono contas",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 18092776700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "talesernani@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 2983911600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "th@les123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 169836400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 2361701000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 161986000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 55868500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 363991700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 87183100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 600151200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 34939700,
  "status": "passed"
});
formatter.after({
  "duration": 1128927100,
  "status": "passed"
});
});