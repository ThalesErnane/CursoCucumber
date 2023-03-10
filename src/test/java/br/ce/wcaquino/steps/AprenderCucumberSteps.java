package br.ce.wcaquino.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AprenderCucumberSteps {

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

	Date entrega = new Date();

	@Given("que o prazo é dia {data}")
	public void queOPrazoÉDia(Date data) throws Throwable {
		entrega = data;
	}

	@When("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int diasAtraso, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);

		if (tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, diasAtraso);
		}

		if (tempo.equals("meses")) {
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

	@Given("^que o ticket( especial)? é (A.\\d{3})$")
	public void que_o_ticket_é_AF(String tipo, String arg1) throws Throwable {
	}

	@Given("^que valor da passagem é R\\$ (\\d+),(\\d+)$")
	public void queValorDaPassagemÉR$(int arg1, int arg2) throws Throwable {
	}

	@Given("^que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroÉ(String arg1) throws Throwable {
	}

	@Given("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroÉ(String telefone) throws Throwable {
	}

	@When("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	}

	@Then("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {
	}

}
