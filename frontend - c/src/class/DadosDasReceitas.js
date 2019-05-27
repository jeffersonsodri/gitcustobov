import ReceitaAnual from './ReceitaAnual.js'
import ReceitaAnualAbate from './ReceitaAnualAbate.js'
export default class DadosDasReceitas {

    constructor(formulario = '') {
        this.retiradaDoProdutorMes = formulario.retiradaDoProdutorMes;
        this.retiradaDoProdutorDedicacaoBovinocultura = formulario.retiradaDoProdutorDedicacaoBovinocultura;

        this.ReceitaAnual = new ReceitaAnual(formulario.ReceitaAnual);

        this.ReceitaAnualAbate = new ReceitaAnualAbate(formulario.ReceitaAnualAbate);

        this.retiradaFamiliaMes = formulario.retiradaFamiliaMes;
        this.retiradaFamiliaDedicacaoBovinocultura = formulario.retiradaFamiliaDedicacaoBovinocultura;

        this.vendaProdutosBovinoculturaCorteValorTotal = formulario.vendaProdutosBovinoculturaCorteValorTotal;
        this.receitaAluguelPastoValorTotal = formulario.receitaAluguelPastoValorTotal;

        this.precoArrobaBoiGordo = formulario.precoArrobaBoiGordo;

    }

}