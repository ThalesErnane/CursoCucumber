package br.ce.wcaquino.converters;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import cucumber.api.Transformer;

public class DateConverter extends Transformer<Date> {

	@Override
	public Date transform(String value) {
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		try {
			Date retorno = dateFormat.parse(value);
			return retorno;
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}

	}

}
