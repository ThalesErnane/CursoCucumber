Feature:  Cadastro de contas
	Como um usuário
	Gostaria de cadastrar contas 
	Para que eu possa distribuir meu dinheiro de uma forma mais 
	organizada

Scenario: Deve inserir uma conta com sucesso
	Given que estou acessando a aplicação 
	When informo o usuário "talesernani@gmail.com"
	And a senha "th@les123"
	And seleciono entrar 
	Then visualizo a página inicial 
	When seleciono contas 
	And seleciono Adicionar 
	And informo a conta "Conta de Teste"
	And seleciono Salvar
	Then a conta é inserida com sucesso 
		
Scenario: Não deve inserir uma conta sem nome
	Given que estou acessando a aplicação 
	When informo o usuário "talesernani@gmail.com"
	And a senha "th@les123"
	And seleciono entrar 
	Then visualizo a página inicial 
	When seleciono contas 
	And seleciono Adicionar 
	And seleciono Salvar
	Then sou notificado que o nome da conta é obrigatorio 

	Scenario: Não deve inserir uma conta com nome existente
	Given que estou acessando a aplicação 
	When informo o usuário "talesernani@gmail.com"
	And a senha "th@les123"
	And seleciono entrar 
	Then visualizo a página inicial 
	When seleciono contas 
	And seleciono Adicionar 
	And informo a conta "Conta mesmo nome"
	And seleciono Salvar
	Then sou notificado que já existe uma conta com esse nome
	