package br.ce.wcaquino.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class InserirContasSteps {

	private WebDriver driver;
	
	@After
	public void fecharBrowser() {
		driver.quit();
	}

	@Given("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
		driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me");
	}

	@When("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String usuario) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(usuario);
	}

	@When("^a senha \"([^\"]*)\"$")
	public void aSenha(String senha) throws Throwable {
		driver.findElement(By.id("senha")).sendKeys(senha);
	}

	@When("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Then("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Bem vindo, thales!", texto);
	}

	@When("^seleciono contas$")
	public void selecionoContas() throws Throwable {
		driver.findElement(By.linkText("Contas")).click();
	}

	@When("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@When("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String texto) throws Throwable {
		driver.findElement(By.id("nome")).sendKeys(texto);
	}

	@When("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Then("^a conta é inserida com sucesso$")
	public void aContaÉInseridaComSucesso() throws Throwable {
		String text = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", text);
	}

	@Then("^sou notificado que o nome da conta é obrigatorio$")
	public void souNotificadoQueONomeDaContaÉObrigatorio() throws Throwable {
		String text = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", text);
	}

	@Then("^sou notificado que já existe uma conta com esse nome$")
	public void souNotificadoQueJáExisteUmaContaComEsseNome() throws Throwable {
		String text = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", text);
	}
}
