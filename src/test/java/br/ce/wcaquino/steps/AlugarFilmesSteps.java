package br.ce.wcaquino.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.servicos.AluguelService;
import br.ce.wcaquino.utils.DateUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AlugarFilmesSteps {

	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private String tipoAluguel;
	
	@Given("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
		filme = new Filme();
		filme.setEstoque(arg1);
	}

	@And("^que o preço do aluguel seja R\\$ (\\d+)$")
	public void queOPreçoDoAluguelSejaR$(int arg1) throws Throwable {
		filme.setAluguel(arg1);
	}

	@When("^alugar$")
	public void alugar() throws Throwable {
		try {
			nota = aluguel.alugar(filme, tipoAluguel);
		} catch (Exception e) {
			erro = e.getMessage();
		}

	}

	@Then("^o preço do aluguel será de R\\$ (\\d+)$")
	public void oPreçoDoAluguelSeráDeR$(int precoAluguel) throws Throwable {
		Assert.assertEquals(precoAluguel, nota.getPreco());
	}

	@And("^e data de entrega será no dia seguinte$")
	public void eDataDeEntregaSeráNoDiaSeguinte() throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, 1);
		Date dataRetorno = nota.getDataEntrega();
		Calendar calRetorno = Calendar.getInstance();
		calRetorno.setTime(dataRetorno);

		Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
		Assert.assertEquals(cal.get(Calendar.MONTH), calRetorno.get(Calendar.MONTH));
		Assert.assertEquals(cal.get(Calendar.YEAR), calRetorno.get(Calendar.YEAR));
	}

	@And("^o estoque do filme será (\\d+) unidade$")
	public void oEstoqueDoFilmeSeráUnidade(int arg1) throws Throwable {
		Assert.assertEquals(arg1, filme.getEstoque());
	}

	@Then("^não será possível por falta de estoque$")
	public void não_será_possível_por_falta_de_estoque() throws Throwable {
		Assert.assertEquals("Filme sem estoque!", erro);
	}
	

@Given("^que o tipo do aluguel seja estendido$")
public void que_o_tipo_do_aluguel_seja_estendido() throws Throwable {
	tipoAluguel = "estendido";
}

@Then("^a data da entrega será em (\\d+) dias$")
public void a_data_da_entrega_será_em_dias(int arg1) throws Throwable {
	Date dataEsperada = DateUtil.obterDataCOmDiferencaDias(3);
	Date dataReal = nota.getDataEntrega();
	
	DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	Assert.assertEquals(format.format(dataEsperada),format.format(dataReal));
}

@Then("^a pontuação recebida será de (\\d+) pontos$")
public void a_pontuação_recebida_será_de_pontos(int arg1) throws Throwable {

}

}