
<template>
  <v-layout v-resize="onResize" column class="lateral">
    <v-data-table
      hide-actions
      :headers="headers2"
      :items="desserts2"
      class="elevation-1"
      :hide-headers="isMobile"
    >
      <template v-slot:items="props2">
        <tr v-if="!isMobile" class="elevation-1">
          <td>{{ props2.item.name }}</td>
          <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoPorCabecaMedia }}</td>
          <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoVivoInicial }}</td>
          <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoVivoFinal }}</td>
          <td class="text-xs-center">{{ props2.item.rebanhoRecriaValorEstoqueGadoInicial }}</td>
          <td class="text-xs-center">{{ props2.item.rebanhoRecriaValorEstoqueGadoFinal }}</td>
        </tr>
        <tr v-else style="border: solid 1px">
          <td>
            <ul class="titulo">
              <li>{{props2.item.name}}</li>
            </ul>

            <ul class="flex-content">
              <li class="flex-item" data-label="Peso médio Cabeça (kg)">
                {{props2.item.rebanhoRecriaPesoPorCabecaMedia}}
                <hr>
              </li>

              <li class="flex-item" data-label="Peso Vivo Inicial (kg)">
                {{props2.item.rebanhoRecriaPesoVivoInicial}}
                <hr>
              </li>

              <li class="flex-item" data-label="Peso Vivo Final (kg)">
                {{props2.item.rebanhoRecriaPesoVivoFinal}}
                <hr>
              </li>

              <li class="flex-item" data-label="Valor Estoque Inicio (R$)">
                {{props2.item.rebanhoRecriaValorEstoqueGadoInicial }}
                <hr>
              </li>

              <li class="flex-item" data-label="Valor Estoque Fim (R$)">
                {{props2.item.rebanhoRecriaValorEstoqueGadoFinal}}
                <hr>
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-layout>
</template>
<script>
import Formulario from "../../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
import estiloIsMobile from "../../../public/style/estiloIsMobile.css";
export default {
  data: () => ({
    formulario: "",
    isMobile: false,
    headers2: [
      {
        text: "Rebanho de Recria/Engorda",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "Peso por cabeça(kg) Média",
        value: "rebanhoRecriaPesoPorCabecaMedia",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Inicial",
        value: "rebanhoRecriaPesoVivoInicial",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Final",
        value: "rebanhoRecriaPesoVivoFinal",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Inicial",
        value: "rebanhoRecriaValorEstoqueGadoInicial",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Final",
        value: "rebanhoRecriaValorEstoqueGadoFinal",
        align: "center"
      }
    ],
    desserts2: [
      {
        name: "Fêmeas + 36 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Fêmeas 24-36 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Fêmeas 12-24 meses ",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Fêmeas 0-12 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos 0-12 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos 12-24 meses ",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos 24-36 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos + 36 meses inclusive tourunos ",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Diferença",
        rebanhoRecriaPesoPorCabecaMedia: "-",
        rebanhoRecriaPesoVivoInicial: "-",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "-",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      }
    ]
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
        console.log(form);
        console.log(form.RebanhoDeRecria);

        return BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria);
      })
      .then(
        g => (
          //recria/ engorda

          (this.desserts2[0].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoFemeas36()),
          (this.desserts2[0].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialFemeas36()),
          (this.desserts2[0].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalFemeas36()),
          (this.desserts2[0].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueFemeas36()),
          (this.desserts2[0].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueFemeas36()),
          (this.desserts2[1].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoFemeas2436()),
          (this.desserts2[1].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialFemeas2436()),
          (this.desserts2[1].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalFemeas2436()),
          (this.desserts2[1].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueFemeas2436()),
          (this.desserts2[1].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueFemeas2436()),
          (this.desserts2[2].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoFemeas1224()),
          (this.desserts2[2].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialFemeas1224()),
          (this.desserts2[2].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueFemeas1224()),
          (this.desserts2[2].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueFemeas1224()),
          (this.desserts2[2].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalFemeas1224()),
          (this.desserts2[3].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoFemeas012()),
          (this.desserts2[3].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialFemeas012()),
          (this.desserts2[3].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalFemeas012()),
          (this.desserts2[3].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueFemeas012()),
          (this.desserts2[3].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueFemeas012()),
          (this.desserts2[4].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoMachos012()),
          (this.desserts2[4].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialMachos012()),
          (this.desserts2[4].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueMachos012()),
          (this.desserts2[4].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueMachos012()),
          (this.desserts2[4].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalMachos012()),
          (this.desserts2[5].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoMachos1224()),
          (this.desserts2[5].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialMachos1224()),
          (this.desserts2[5].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalMachos1224()),
          (this.desserts2[5].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueMachos1224()),
          (this.desserts2[5].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueMachos1224()),
          (this.desserts2[6].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoMachos2436()),
          (this.desserts2[6].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialMachos2436()),
          (this.desserts2[6].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalMachos2436()),
          (this.desserts2[6].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueMachos2436()),
          (this.desserts2[6].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueMachos2436()),
          (this.desserts2[7].rebanhoRecriaPesoPorCabecaMedia = g.calculaMediaPesoMachos36()),
          (this.desserts2[7].rebanhoRecriaPesoVivoInicial = g.calculaPesoTotaldoRebanhoInicialMachos36()),
          (this.desserts2[7].rebanhoRecriaPesoVivoFinal = g.calculaPesoTotaldoRebanhoFinalMachos36()),
          (this.desserts2[7].rebanhoRecriaValorEstoqueGadoInicial = g.calculaValorInicialEstoqueMachos36()),
          (this.desserts2[7].rebanhoRecriaValorEstoqueGadoFinal = g.calculaValorFinalEstoqueMachos36()),
          (this.desserts2[8].rebanhoRecriaPesoVivoFinal = g.diferencaDePesoNoEstoque()),
          (this.desserts2[8].rebanhoRecriaValorEstoqueGadoFinal = g.diferencaNoValorDoEstoque())
        )
      );
  },

  methods: {
    onResize() {
      if (window.innerWidth < 1490) {
        this.isMobile = true;
      } else this.isMobile = false;
    }
  }
};
</script>