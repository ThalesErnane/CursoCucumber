@tag
Feature: Alugar Filme
	Como um usuário 
	Eu quero cadastrar aluguéis de filmes
	Para controlar preços e datas de entrega 

  Scenario: Deve alugar um filme com sucesso
    Given um filme com estoque de 2 unidades 
    And que o preço do aluguel seja R$ 3 
    When alugar
    Then o preço do aluguel será de R$ 3 
 		And a data da entrega será em 1 dia 
    And o estoque do filme será 1 unidade
    
 Scenario: Não deve alugar filme sem estoque 
 		Given um filme com estoque de 0 unidades
 		When alugar
 		Then não será possível por falta de estoque
 		And o estoque do filme será 0 unidade
 		
 Scenario Outline: Deve dar condições especiais para categoria estendida	
  	Given um filme com estoque de 2 unidades
 		And que o preço do aluguel seja R$ <preco>
 		And que o tipo do aluguel seja <tipo>
 		When alugar
 		Then o preço do aluguel será de R$ <valor>
 		And a data da entrega será em <qtdDias> dias 
 		And a pontuação recebida será de <pontuacao> pontos   
 		
 		| preco | tipo      | valor | qtdDias | pontuacao |
 		|   4   | estendido |   8   |    3    |     2     | 
 		
 Scenario: Deve dar condições especiais para categoria estendida
 		Given um filme com estoque de 2 unidades
 		And que o preço do aluguel seja R$ 4
 		And que o tipo do aluguel seja estendido 
 		When alugar
 		Then o preço do aluguel será de R$ 8
 		And a data da entrega será em 3 dias 
 		And a pontuação recebida será de 2 pontos   
 		
 Scenario: Deve alugar para categoria comum 
 		Given um filme com estoque de 2 unidades
 		And que o preço do aluguel seja R$ 4
 		And que o tipo do aluguel seja comum 
 		When alugar
 		Then o preço do aluguel será de R$ 4
 		And a data da entrega será em 1 dia
 		And a pontuação recebida será de 1 ponto  