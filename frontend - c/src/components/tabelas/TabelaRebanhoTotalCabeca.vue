<template>
  <v-layout v-resize="onResize" column class="lateral">
    <v-data-table   
      hide-actions
      :headers="headers10"
      :items="desserts10"
      class="elevation-1"
      :hide-headers="isMobile"
    >
      <template v-slot:items="props10">
        <tr v-if="!isMobile" class="elevation-1">
          <td>{{ props10.item.name }}</td>
          <td class="text-xs-center">{{ props10.item.totalRebanhoMedioCabecas }}</td>

          <td class="text-xs-center">{{ props10.item.totalRebanhoMedioUA }}</td>
        </tr>
        <tr v-else style="border: solid 1px">
          <td>
            <ul class="titulo">
              <li>{{props10.item.name}}</li>
            </ul>
            <ul class="flex-content">
              <li class="flex-item" data-label="Total Rebanho Médio Cabeças">
                {{props10.item.totalRebanhoMedioCabecas}}
                <hr>
              </li>
              <li class="flex-item" data-label="Total Rebanho Médio UA">
                {{props10.item.totalRebanhoMedioUA}}
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
    headers10: [
      {
        text: "",
        sortable: false,
        value: "name"
      },
      {
        text: "TOTAL DO REBANHO (MÉDIO) EM CABEÇAS",
        value: "totalRebanhoMedioCabecas",
        align: "center"
      },

      {
        text: "TOTAL DO REBANHO (MÉDIO) EM UA",
        value: "totalRebanhoMedioUA",
        align: "center"
      }
    ],
    desserts10: [
      {
        name: "Rebanho Total",
        totalRebanhoMedioCabecas: "erro",
        totalRebanhoMedioUA: "erro"
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

          (this.desserts10[0].totalRebanhoMedioCabecas = g.rebanhoTotalMedia()),
          (this.desserts10[0].totalRebanhoMedioUA = g.calculaRebanhoTotalUA())
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
