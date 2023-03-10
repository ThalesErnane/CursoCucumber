package br.ce.wcaquino.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.entidades.TipoAluguel;
import br.ce.wcaquino.servicos.AluguelService;
import br.ce.wcaquino.utils.DateUtil;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class AlugarFilmesSteps {

	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel;

	@Given("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
		filme = new Filme();
		filme.setEstoque(arg1);
	}

	@And("^que o preço do aluguel seja R\\$ (\\d+)$")
	public void queOPreçoDoAluguelSejaR$(int arg1) throws Throwable {
		filme.setAluguel(arg1);
	}

	@Given("^um filme$")
	public void um_filme(DataTable table) throws Throwable {
		Map<String, String> map = table.asMap(String.class, String.class);
		filme = new Filme();
		filme.setEstoque(Integer.parseInt(map.get("estoque")));
		filme.setAluguel(Integer.parseInt(map.get("preco")));
		String tipo = map.get("tipo");
		tipoAluguel = tipo.equals("semanal") ? TipoAluguel.SEMANAL
				: tipo.equals("estendido") ? TipoAluguel.ESTENDIDO : TipoAluguel.COMUM;
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

	@And("^o estoque do filme será (\\d+) unidade$")
	public void oEstoqueDoFilmeSeráUnidade(int arg1) throws Throwable {
		Assert.assertEquals(arg1, filme.getEstoque());
	}

	@Then("^não será possível por falta de estoque$")
	public void não_será_possível_por_falta_de_estoque() throws Throwable {
		Assert.assertEquals("Filme sem estoque!", erro);
	}

	@Given("^que o tipo do aluguel seja (.*)$")
	public void que_o_tipo_do_aluguel_seja_estendido(String tipo) throws Throwable {
		tipoAluguel = tipo.equals("semanal") ? TipoAluguel.SEMANAL
				: tipo.equals("estendido") ? TipoAluguel.ESTENDIDO : TipoAluguel.COMUM;
	}

	@Then("^a data da entrega será em (\\d+) dias?$")
	public void a_data_da_entrega_será_em_dias(int arg1) throws Throwable {
		Date dataEsperada = DateUtil.obterDataCOmDiferencaDias(arg1);
		Date dataReal = nota.getDataEntrega();

		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Then("^a pontuação recebida será de (\\d+) pontos?$")
	public void a_pontuação_recebida_será_de_pontos(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPontuacao());
	}

}