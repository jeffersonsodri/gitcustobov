<template>
  <div>
    <apexchart width="500" type="pie" :options="options" :series="series" :width="largura"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import Formulario from "../../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
export default {
  components: {
    apexchart: VueApexCharts
  },
  data: () => ({
    options: {
      legend: {
        position: "top"
      },
      colors: [
        "#BF343F",
        "#A7E4F2",
        "#32736C",
        "#D9B504",
        "#F2811D",
        "#BFBFBF",
        "#A63C76",
        "#128BA6",
        "#F279A6",
        "#590222",
        "#BFBFBF",
        "#D9B504",
        "#F2811D",
        "#A7E4F2",
        "#128BA6"
      ],
      labels: [
        "F 36+ Abate",
        "F 36+",
        "F 24-36 Abate",
        "F 24-36",
        "F 12-24 Abate",
        "F 12-24",
        "F 0-12",
        "M 0-12 ",
        "M 12-24",
        "M 12-24 Abate",
        "M 24-36",
        "M 24-36 Abate",
        "M 36+",
        "M 36+ Abate",
        "Touros"
      ],
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return parseFloat(val).toFixed(2) + "%";
        }
      }
    },
    series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    largura: "100%",
    comprimento: "200%",
    formulario: ""
  }),

  beforeCreate() {
    console.log("oi");
    var db = new Dexie("simulacao");
    db.version(1).stores({
      simulacao: "id,formularioDB"
    });

    db.simulacao
      .get(1)
      .then(f => (this.formulario = new Formulario(f.formularioDB)))
      .then(function(form) {
        return BibliotecaDeCalculos.RebanhoDeVenda(
          form.DadosDasReceitas.ReceitaAnualAbate,
          form.DadosDasReceitas.ReceitaAnual
        );
      })
      .then(
        g => (
          //recria/ engorda
          (this.series[0] = g.calculaPorcentagemVendasFemeas36Abate() * 100),
          (this.series[1] = g.calculaPorcentagemVendasFemeas36() * 100),
          (this.series[2] = g.calculaPorcentagemVendasFemeas2436Abate() * 100),
          (this.series[3] = g.calculaPorcentagemVendasFemeas2436() * 100),
          (this.series[4] = g.calculaPorcentagemVendasFemeas1224Abate() * 100),
          (this.series[5] = g.calculaPorcentagemVendasFemeas1224() * 100),
          (this.series[6] = g.calculaPorcentagemVendasFemeas012() * 100),
          (this.series[7] = g.calculaPorcentagemVendasMachos012() * 100),
          (this.series[8] = g.calculaPorcentagemVendasMachos1224() * 100),
          (this.series[9] = g.calculaPorcentagemVendasMachos1224Abate() * 100),
          (this.series[10] = g.calculaPorcentagemVendasMachos2436() * 100),
          (this.series[11] = g.calculaPorcentagemVendasMachos2436Abate() * 100),
          (this.series[12] = g.calculaPorcentagemVendasMachos36() * 100),
          (this.series[13] = g.calculaPorcentagemVendasMachos36Abate() * 100),
          (this.series[14] = g.calculaPorcentagemVendasTouros() * 100),
          console.log("Imprimindo", this.series)
        )
      );
  }
};
</script>
<style scoped>
</style>
