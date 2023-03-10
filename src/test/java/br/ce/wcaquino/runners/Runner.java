package br.ce.wcaquino.runners;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = { "br.ce.wcaquino.steps", "br.ce.wcaquino.config" },
		tags = {"@unitários", "not @ignore"},
		plugin = {"pretty", "html:target/report-html"},
		// plugin = {"pretty", "json:target/report-json"},
		monochrome = false,
		snippets = SnippetType.CAMELCASE,
		 dryRun = false,
		 strict = false)
public class Runner {

}
