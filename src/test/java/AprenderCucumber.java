import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;
import org.junit.experimental.theories.FromDataPoints;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AprenderCucumber {

	 // Cenário de Teste 01
	@Given("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
	}

	@When("^executá-lo$")
	public void executáLo() throws Throwable {
	}

	@Then("^a especificação deve finalizar com sucesso$")
	public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {
	}
	
	 // Cenário de Teste 02
	// -------------------------------------------------------------------------- // 
	private int contador = 0;
	
	@Given("^que valor do contador é (\\d+)$")
	public void queValorDoContadorÉ(int arg1) throws Throwable {
		contador = arg1;
	}

	@When("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
		contador = contador + arg1;
	}

	@Then("^o valor do contador é (\\d+)$")
	public void oValorDoContadorÉ(int arg1) throws Throwable {
		System.out.println(arg1);
		System.out.println(contador);
		
		Assert.assertTrue(arg1 == contador);
		Assert.assertEquals(arg1, contador);
	}
	
	 // Cenário de Teste 03
	// ------------------------------------------------------------------------ // 
	
	Date entrega = new Date();
	
	@Given("^que o prazo é dia (\\d+)/(\\d+)/(\\d+)$")
	public void queOPrazoÉDia(int dia, int mes, int ano) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, dia);
		cal.set(Calendar.MONTH, mes - 1);
		cal.set(Calendar.YEAR, ano);
		entrega = cal.getTime();
	}

	@When("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int diasAtraso, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, diasAtraso);		
		}
	
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, diasAtraso);		
		}
		entrega = cal.getTime();
	}

	@Then("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String data) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(data, dataFormatada);
		
	}
	
	// -------------------------------------------------------------------------------- //
	

@Given("^que o ticket( especial)? é (A.\\d{3})$")
public void que_o_ticket_é_AF(String tipo, String arg1) throws Throwable {
}

@Given("^que valor da passagem é R\\$ (\\d+),(\\d+)$")
public void que_valor_da_passagem_é_R$(int arg1, int arg2) throws Throwable {
}

@Given("^que o nome do passageiro é \"(.{5,20})\"$")
public void que_o_nome_do_passageiro_é(String arg1) throws Throwable {

}

@Given("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
public void que_o_telefone_do_passageiro_é(int arg1, int arg2) throws Throwable {

}

@When("^criar os steps$")
public void criar_os_steps() throws Throwable {

}

@Then("^o teste vai funcionar$")
public void o_teste_vai_funcionar() throws Throwable {
}



}
