@funcionais
Feature:  Cadastro de contas
	Como um usuário
	Gostaria de cadastrar contas 
	Para que eu possa distribuir meu dinheiro de uma forma mais 
	organizada

Background: 
	Given que estou acessando a aplicação 
	When informo o usuário "talesernani@gmail.com"
	And a senha "th@les123"
	And seleciono entrar 
	Then visualizo a página inicial 
	When seleciono contas 
	And seleciono Adicionar 

@ignore
Scenario: Deve inserir uma conta com sucesso
	And informo a conta "Conta de Teste"
	And seleciono Salvar
	Then a conta é inserida com sucesso 

@ignore		
Scenario: Não deve inserir uma conta sem nome
	And seleciono Salvar
	Then sou notificado que o nome da conta é obrigatorio 

@ignore
Scenario: Não deve inserir uma conta com nome existente
	And informo a conta "Conta mesmo nome"
	And seleciono Salvar
	Then sou notificado que já existe uma conta com esse nome
	
Scenario Outline: Deve validar regras de cadastro contas
	When informo a conta "<conta>"
	And seleciono Salvar 
	Then recebo a mensagem "<mensagem>"
	    
Examples: 
  | conta  | mensagem | 
  | Conta de Teste   | Conta adicionada com sucesso! | 
  |                  | Informe o nome da conta       | 
	| Conta mesmo nome | Já existe uma conta com esse nome!|	
	