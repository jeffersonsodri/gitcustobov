<template>
  <v-layout v-resize="onResize" column class="lateral">
    <v-data-table
      hide-actions
      :headers="headers7"
      :items="desserts7"
      class="elevation-1"
      :hide-headers="isMobile"
    >
      <template v-slot:items="props7">
        <tr v-if="!isMobile" class="elevation-1">
          <td>{{ props7.item.name }}</td>
          <td class="text-xs-center">{{ props7.item.rebanhoTotalCabecasInicial }}</td>
          <td class="text-xs-center">{{ props7.item.rebanhoTotalCabecasFinal }}</td>
          <td class="text-xs-center">{{ props7.item.rebanhoTotalPesoVivoInicial }}</td>
          <td class="text-xs-center">{{ props7.item.rebanhoTotalPesoVivoFinal }}</td>
          <td class="text-xs-center">{{ props7.item.rebanhoTotalValorEstoqueGadoInicial }}</td>
          <td class="text-xs-center">{{ props7.item.rebanhoTotalValorEstoqueGadoFinal }}</td>
        </tr>
        <tr v-else style="border: solid 1px">
          <td>
            <ul class="titulo">
              <li>{{props7.item.name}}</li>
            </ul>
            <ul class="flex-content">
              <li class="flex-item" data-label="Cabeça Inicial">
                {{props7.item.rebanhoTotalCabecasInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Cabeça Final">
                {{props7.item.rebanhoTotalCabecasFinal}}
                <hr>
              </li>
              <li class="flex-item" data-label="Peso vivo total Inicial (kg)">
                {{props7.item.rebanhoTotalPesoVivoInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Peso vivo total Final (kg)">
                {{props7.item.rebanhoTotalPesoVivoFinal}}
                <hr>
              </li>
              <li class="flex-item" data-label="Valor estoque Inicial (R$)">
                {{props7.item.rebanhoTotalValorEstoqueGadoInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Valor estoque FInal (R$)">
                {{props7.item.rebanhoTotalValorEstoqueGadoFinal}}
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
    headers7: [
      {
        text: "Rebanho Total",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "Cabeças Inicial",
        value: "rebanhoTotalCabecasInicial",
        align: "center"
      },

      {
        text: "Cabeças Final",
        value: "rebanhoTotalCabecasFinal",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Inicial",
        value: "rebanhoTotalPesoVivoInicial",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Final",
        value: "rebanhoTotalPesoVivoFinal",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Inicial",
        value: "rebanhoTotalValorEstoqueGadoInicial",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Final",
        value: "rebanhoTotalValorEstoqueGadoFinal",
        align: "center"
      }
    ],
    desserts7: [
      {
        name: "TOTAL",
        rebanhoTotalCabecasInicial: "erro",
        rebanhoTotalCabecasFinal: "erro",
        rebanhoTotalPesoVivoInicial: "erro",
        rebanhoTotalPesoVivoFinal: "erro",
        rebanhoTotalValorEstoqueGadoInicial: "erro",
        rebanhoTotalValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Diferença no Estoque Total de Gado(Final-Inicial)",
        rebanhoTotalCabecasInicial: "-",
        rebanhoTotalCabecasFinal: "erro",
        rebanhoTotalPesoVivoInicial: "-",
        rebanhoTotalPesoVivoFinal: "erro",
        rebanhoTotalValorEstoqueGadoInicial: "-",
        rebanhoTotalValorEstoqueGadoFinal: "erro"
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

        return BibliotecaDeCalculos.RebanhoTotal(
          BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),
          BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria)
        );
      })
      .then(
        g => (
          //rebanho Total

          (this.desserts7[0].rebanhoTotalCabecasInicial = g.totalCabecaInicial()),
          (this.desserts7[0].rebanhoTotalCabecasFinal = g.totalCabecaFinal()),
          (this.desserts7[0].rebanhoTotalPesoVivoInicial = g.totalPesoVivoInicialDoRebanho()),
          (this.desserts7[0].rebanhoTotalPesoVivoFinal = g.totalPesoVivoFinalDoRebanho()),
          (this.desserts7[0].rebanhoTotalValorEstoqueGadoInicial = g.totalValorEstoqueInicial()),
          (this.desserts7[0].rebanhoTotalValorEstoqueGadoFinal = g.totalValorEstoqueFinal()),
          (this.desserts7[1].rebanhoTotalCabecasFinal = g.diferencaDeCabecasEstoqueTotal()),
          (this.desserts7[1].rebanhoTotalPesoVivoFinal = g.diferencaPesovivoTotal()),
          (this.desserts7[1].rebanhoTotalValorEstoqueGadoFinal = g.diferencaValorTotal())
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