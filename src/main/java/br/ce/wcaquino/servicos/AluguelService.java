package br.ce.wcaquino.servicos;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.entidades.TipoAluguel;
import br.ce.wcaquino.utils.DateUtil;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipo) {
		if(filme.getEstoque() == 0) throw new RuntimeException("Filme sem estoque!");
		
		NotaAluguel nota = new NotaAluguel();
		
		switch (tipo) {
		case COMUM:
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtil.obterDataCOmDiferencaDias(1));
			nota.setPontuacao(1);
			break;
		case ESTENDIDO:
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtil.obterDataCOmDiferencaDias(3));
			nota.setPontuacao(2);
			break;
		case SEMANAL:
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtil.obterDataCOmDiferencaDias(7));
			nota.setPontuacao(3);
			break;
		default:
			break;
		}
		filme.setEstoque(filme.getEstoque() - 1);
		return nota;
	}
}
