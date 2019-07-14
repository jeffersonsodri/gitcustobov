<template>
  <v-container grid-list-md text-xs-center>
    <v-content>
      <h1>Relatórios</h1>
      <br>
      <panel-tabela-rebanho-reproducao/>
      <panel-tabela-rebanho-recria-engorda/>
      <panel-tabela-rebanho-total/>
      <panel-graficos-rebanho/>
    </v-content>

    <!-- Botão de reduzir os painéis-->
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          v-if="showButton"
          absolute
          fab
          transition="slide-y-reverse-transition"
          right
          dark
          color="teal"
          @click="none"
          class="botaoNone"
        >
          <v-icon dark>keyboard_arrow_down</v-icon>
        </v-btn>
      </template>
      <span>Fechar Painéis</span>
    </v-tooltip>
    <v-snackbar v-model="snackbar" right :timeout="4000" top>
      {{ text }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
import Formulario from "../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
import PanelGraficosRebanho from "../components/panel/PanelGraficosRebanho.vue";
import PanelTabelaRebanhoReproducao from "../components/panel/PanelTabelaRebanhoReproducao.vue";
import PanelTabelaRebanhoRecriaEngorda from "../components/panel/PanelTabelaRebanhoRecriaEngorda.vue";
import PanelTabelaRebanhoTotal from "../components/panel/PanelTabelaRebanhoTotal.vue";

export default {
  components: {
    "panel-graficos-rebanho": PanelGraficosRebanho,
    "panel-tabela-rebanho-reproducao": PanelTabelaRebanhoReproducao,
    "panel-tabela-rebanho-recria-engorda": PanelTabelaRebanhoRecriaEngorda,
    "panel-tabela-rebanho-total": PanelTabelaRebanhoTotal
  },

  data: () => ({
    panel: [1, 1, 1, 1],
    formulario: "",
    resultadoCalculoReproducao: "",
    form: "",
    active: null,
    showButton: false,
    offsetTop: 0
  }),
  methods: {
    none() {
      this.panel = [];
    },
    onScroll(e) {
      this.offsetTop = goTo.number;
      if (goTo.number > 2) {
        this.showButton = true;
      } else this.showButton = false;
    }
  }
};
</script>
<style scoped>
h2 {
  color: #00695c;
}
.botaoNone {
  border: solid black 1px;
  position: fixed;
  margin-bottom: 0;
  z-index: 997;
  bottom: 45px;
  right: 24px;
}
@media screen and (max-width: 991px) {
  .container {
    position: absolute;
    padding: 1%;

    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }
}

@media screen and (min-width: 992px) {
  h2 {
    color: #00695c;
  }

  .container {
    margin-top: 2%;
    position: absolute;
    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }

  h1 {
    font-size: 250%;
  }
}
</style>
