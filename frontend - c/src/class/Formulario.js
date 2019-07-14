import RebanhoDeReproducao from './RebanhoDeReproducao.js'
import RebanhoDeRecria from './RebanhoDeRecria.js'
import DadosDasReceitas from './DadosDasReceitas.js'
export default class Formulario {

    constructor(formulario = '') {

        this.ano = formulario.ano;
        this.fazenda = formulario.fazenda;
        this.municipio = formulario.municipio;


        this.RebanhoDeReproducao = new RebanhoDeReproducao(formulario.RebanhoDeReproducao);

        this.RebanhoDeRecria = new RebanhoDeRecria(formulario.RebanhoDeRecria);

        this.DadosDasReceitas = new DadosDasReceitas(formulario.DadosDasReceitas);

        this.rebanhoMedioAnualEstimadoCabeca = formulario.rebanhoMedioAnualEstimadoCabeca;
        this.rebanhoMedioAnualEstimadoUA = formulario.rebanhoMedioAnualEstimadoUA;


    }





}