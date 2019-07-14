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
        "#590222"
      ],
      labels: [
        "Touros",
        "Vacas",
        "F 36+",
        "F 24-36",
        "F 12-24",
        "F 0-12",
        "M 012",
        "M 12-24",
        "M 24-36",
        "M 36+"
      ],
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return parseFloat(val.toFixed(2)) + "%";
        }
      }
    },
    series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    largura: "100%",
    comprimento: "200%",
    formulario: ""
  }),

  beforeCreate() {
    var db = new Dexie("simulacao");
    db.version(1).stores({
      simulacao: "id,formularioDB"
    });

    db.simulacao
      .get(1)
      .then(f => (this.formulario = new Formulario(f.formularioDB)))
      .then(function(form) {
        var biblioteca = [
          BibliotecaDeCalculos.RebanhoTotal(
            BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),
            BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria)
          )
        ];

        return biblioteca;
      })
      .then(
        g => (
          //recria/ engorda
          (this.series[0] = g[0].composicaoCabecaTouroUA() * 100),
          (this.series[1] = g[0].composicaoCabecaVacaUA() * 100),
          (this.series[2] = g[0].composicaoCabecaFemeas36UA() * 100),
          (this.series[3] = g[0].composicaoCabecaFemeas2436UA() * 100),
          (this.series[4] = g[0].composicaoCabecaFemeas1224UA() * 100),
          (this.series[5] = g[0].composicaoCabecaFemeas012UA() * 100),
          (this.series[6] = g[0].composicaoCabecaMachos012UA() * 100),
          (this.series[7] = g[0].composicaoCabecaMachos1224UA() * 100),
          (this.series[8] = g[0].composicaoCabecaMachos2436UA() * 100),
          (this.series[9] = g[0].composicaoCabecaMachos36UA() * 100)
        )
      );
  }
};
</script>
<style scoped>
</style>
