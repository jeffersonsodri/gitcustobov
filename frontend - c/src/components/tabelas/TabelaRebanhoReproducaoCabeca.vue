<template>
  <v-layout v-resize="onResize" column class="lateral">
    <v-data-table
      hide-actions
      :headers="headers5"
      :items="desserts5"
      class="elevation-1"
      :hide-headers="isMobile"
    >
      <template v-slot:items="props5">
        <tr v-if="!isMobile" class="elevation-1">
          <td>{{ props5.item.name }}</td>
          <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasInicial }}</td>
          <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasFinal }}</td>
        </tr>
        <tr v-else style="border: solid 1px">
          <td>
            <ul class="titulo">
              <li>{{props5.item.name}}</li>
            </ul>
            <ul class="flex-content">
              <li class="flex-item" data-label="Cabeça Inicial">
                {{props5.item.rebanhoReproducaoCabecasInicial}}
                <hr>
              </li>
              <li class="flex-item" data-label="Cabeça Final">
                {{props5.item.rebanhoReproducaoCabecasFinal}}
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
    headers5: [
      {
        text: "Rebanho de Reprodução",
        align: "left",
        sortable: false,
        value: "name"
      },

      {
        text: "Cabeças Inicial",
        value: "rebanhoReproducaoCabecasInicial",
        align: "center"
      },

      {
        text: "Cabeças Final",
        value: "rebanhoReproducaoCabecasFinal",
        align: "center"
      }
    ],
    desserts5: [
      {
        name: "SUBTOTAL",

        rebanhoReproducaoCabecasInicial: "erro",

        rebanhoReproducaoCabecasFinal: "erro"
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
        return BibliotecaDeCalculos.RebanhoDeReproducao(
          form.RebanhoDeReproducao
        );
      })
      .then(
        g => (
          //reprodução

          (this.desserts5[0].rebanhoReproducaoCabecasInicial = g.subtotalDeCabecasInicial()),
          (this.desserts5[0].rebanhoReproducaoCabecasFinal = g.subtotalDeCabecasFinal())
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
