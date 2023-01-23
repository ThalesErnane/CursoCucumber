Feature: Aprender Cucumber
	Como um aluno 
	Eu quero aprender utilizar Cucumber
	Para que eu possa automatizar critérios de aceitação 

  Scenario: Deve executar especificação 
	Given que criei o arquivo corretamente 
	When executá-lo
	Then a especificação deve finalizar com sucesso 
	
	Scenario: Deve incrementar contador
	Given que valor do contador é 15 
	When eu incrementar em 3
	Then o valor do contador é 18 
	
	Scenario: Deve calcular atraso no prazo de entrega 
	Given que o prazo é dia 05/04/2018
	When a entrega atrasar em 2 dias 
	Then a entrega será efetuada em 07/04/2018
	
	Scenario: Deve calcular atraso no prazo de entrega da China
	Given que o prazo é dia 05/04/2018
	When a entrega atrasar em 2 meses
	Then a entrega será efetuada em 05/06/2018
	

   Scenario: Deve criar steps genéricos para estes passos
   Given que o ticket é AF345
   Given que valor da passagem é R$ 230,45
   Given que o nome do passageiro é "Fulano da Silva"
   Given que o telefone do passageiro é 9999-9999
   When criar os steps
   Then o teste vai funcionar 
   
   Scenario: Deve aproveitar os steps "Dado" do cenário anterior 
   Given que o ticket é AF345
   And que o ticket especial é AB167
   And que valor da passagem é R$ 1120,23
   And que o nome do passageiro é "Eduardo da Silva"
   And que o telefone do passageiro é 9888-9999

   Scenario: Deve negar todos os steps "Dado" do cenário anterior 
   Given que o ticket é CD123
   And que o ticket é AG1234
   And que valor da passagem é R$ 1.1345,56
   And que o nome do passageiro é "Ronaldo Nazario Soldanha de Paulo Gueto"
   And que o telefone do passageiro é 7778-9999
   And que o telefone do passageiro é 877-9999
   


   

   
   
 
 