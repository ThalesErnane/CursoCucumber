package br.ce.wcaquino.servicos;

import java.util.Calendar;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.utils.DateUtil;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, String tipoAluguel) {
		if(filme.getEstoque() == 0) throw new RuntimeException("Filme sem estoque!");
		
		NotaAluguel nota = new NotaAluguel();
		
		if("estendido".equals(tipoAluguel)) {
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtil.obterDataCOmDiferencaDias(3));
			nota.setPontuacao(2);
		} else {
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtil.obterDataCOmDiferencaDias(1));
			nota.setPontuacao(1);
		}

		filme.setEstoque(filme.getEstoque() - 1);
		return nota;
	}
}
