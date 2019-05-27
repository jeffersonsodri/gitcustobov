<template>
  <v-layout v-resize="onResize" column class="lateral">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      :hide-headers="isMobile"
    >
      <template v-slot:items="props">
        <tr v-if="!isMobile" class="elevation-1">
          <td>{{ props.item.name }}</td>

          <td class="text-xs-center">{{ props.item.rebanhoReproducaoPesoVivoInicial }}</td>
          <td class="text-xs-center">{{ props.item.rebanhoReproducaoPesoVivoFinal }}</td>

          <td class="text-xs-center">{{ props.item.rebanhoReproducaoValorEstoqueGadoInicial }}</td>
          <td class="text-xs-center">{{ props.item.rebanhoReproducaoValorEstoqueGadoFinal }}</td>
        </tr>

        <tr v-else style="border: solid 1px">
          <td>
            <ul class="titulo">
              <li>{{props.item.name}}</li>
            </ul>
            <ul class="flex-content">
              <li class="flex-item" data-label="Peso vivo Rebanho Inicial (kg)">
                {{props.item.rebanhoReproducaoPesoVivoInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Peso vivo Rebanho Final (kg)">
                {{props.item.rebanhoReproducaoPesoVivoFinal}}
                <hr>
              </li>
              <li class="flex-item" data-label="Valor Estoque Inicial (R$)">
                {{props.item.rebanhoReproducaoValorEstoqueGadoInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Valor Estoque Final (R$)">
                {{props.item.rebanhoReproducaoValorEstoqueGadoFinal}}
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
    headers: [
      {
        text: "Rebanho de Reprodução",
        align: "left",
        sortable: false,
        value: "name"
      },

      {
        text: "Peso vivo total do rebanho(kg) Inicial",
        value: "rebanhoReproducaoPesoVivoInicial",
        align: "left"
      },
      {
        text: "Peso vivo total do rebanho(kg) Final",
        value: "rebanhoReproducaoPesoVivoFinal",
        align: "left"
      },

      {
        text: "Valor estoque gado (R$) Inicial",
        value: "rebanhoReproducaoValorEstoqueGadoInicial",
        align: "right"
      },
      {
        text: "Valor estoque gado (R$) Final",
        value: "rebanhoReproducaoValorEstoqueGadoFinal",
        align: "right"
      }
    ],
    desserts: [
      {
        name: "Touros",
        rebanhoReproducaoPesoVivoInicial: "erro",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "erro",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Vacas (Matrizes)",
        rebanhoReproducaoPesoVivoInicial: "erro",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "erro",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      },
      {
        name: "SUBTOTAL",

        rebanhoReproducaoPesoVivoInicial: "erro",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "erro",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      },

      {
        name: "Diferença no Estoque e Valor Do Gado de Cria (final-inicial)",
        rebanhoReproducaoPesoVivoInicial: "-",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "-",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
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

        return BibliotecaDeCalculos.RebanhoDeReproducao(
          form.RebanhoDeReproducao
        );
      })
      .then(
        g => (
          //reprodução

          (this.desserts[0].rebanhoReproducaoPesoVivoInicial = g.pesoVivoTotalDoRebanhoInicialTouro()),
          (this.desserts[0].rebanhoReproducaoValorEstoqueGadoInicial = g.valorEstoqueInicialTouro()),
          (this.desserts[1].rebanhoReproducaoPesoVivoInicial = g.pesoVivoTotalDoRebanhoInicialVaca()),
          (this.desserts[1].rebanhoReproducaoValorEstoqueGadoInicial = g.valorEstoqueInicialVaca()),
          (this.desserts[2].rebanhoReproducaoPesoVivoInicial = g.subtotalDoPesoVivoTotalInicial()),
          (this.desserts[2].rebanhoReproducaoValorEstoqueGadoInicial = g.subtotalDoValorDoEstoqueInicial()),
          (this.desserts[0].rebanhoReproducaoPesoVivoFinal = g.pesoVivoTotalDoRebanhoFinalTouro()),
          (this.desserts[0].rebanhoReproducaoValorEstoqueGadoFinal = g.valorEstoqueFinalTouro()),
          (this.desserts[1].rebanhoReproducaoPesoVivoFinal = g.pesoVivoTotalDoRebanhoFinalVaca()),
          (this.desserts[1].rebanhoReproducaoValorEstoqueGadoFinal = g.valorEstoqueFinalVaca()),
          (this.desserts[2].rebanhoReproducaoPesoVivoFinal = g.diferencaDePesoNoEstoque()),
          (this.desserts[2].rebanhoReproducaoValorEstoqueGadoFinal = g.diferencaNoValorDoEstoque()),
          (this.desserts[3].rebanhoReproducaoPesoVivoFinal = g.subtotalDoPesoVivoTotalFinal()),
          (this.desserts[3].rebanhoReproducaoValorEstoqueGadoFinal = g.subtotalDoValorDoEstoqueFinal())
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
