<template>
  <v-layout v-resize="onResize" column class="lateral">
    <v-data-table
      :headers="headers6"
      :items="desserts6"
      class="elevation-1"
      :hide-headers="isMobile"
    >
      <template v-slot:items="props6">
        <tr v-if="!isMobile" class="elevation-1">
          <td>{{ props6.item.name }}</td>
          <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasInicial }}</td>
          <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasFinal }}</td>
        </tr>
        <tr v-else style="border: solid 1px">
          <td>
            <ul class="titulo">
              <li>{{props6.item.name}}</li>
            </ul>
            <ul class="flex-content">
              <li class="flex-item" data-label="Cabeça Inicial">
                {{props6.item.rebanhoRecriaCabecasInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Cabeça Final">
                {{props6.item.rebanhoRecriaCabecasFinal}}
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
    headers6: [
      {
        text: "Rebanho de Recria/ Engorda",
        align: "left",
        sortable: false,
        value: "name"
      },

      {
        text: "Cabeças Inicial",
        value: "rebanhoRecriaCabecasInicial",
        align: "center"
      },

      {
        text: "Cabeças Final",
        value: "rebanhoRecriaCabecasFinal",
        align: "center"
      }
    ],
    desserts6: [
      {
        name: "SUBTOTAL",

        rebanhoRecriaCabecasInicial: "erro",

        rebanhoRecriaCabecasFinal: "erro"
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

        var bibliotecas = [
          BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),

          BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria),

          BibliotecaDeCalculos.RebanhoTotal(
            BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),
            BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria)
          )
        ];

        return bibliotecas;
      })
      .then(
        g => (
          (this.desserts6[0].rebanhoRecriaCabecasInicial = g[1].subtotalDeCabecasInicial()),
          (this.desserts6[0].rebanhoRecriaCabecasFinal = g[1].subtotalDeCabecasFinal())
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
<style scoped>
</style>
