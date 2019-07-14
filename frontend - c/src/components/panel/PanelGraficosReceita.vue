<template>
  <v-expansion-panel v-model="panel[0]" expand class="panel">
    <v-expansion-panel-content>
      <template v-slot:header>
        <h2>Gráficos das Receitas</h2>
      </template>

      <v-container grid-list-md text-xs-center text-md-center>
        <v-layout row wrap>
          <v-layout justify-center align-center>
            <v-flex xs12 sm12 md7>
              <div class="divider2">
                <span>
                  <b>Composição da receita de venda de animais (R$)</b>
                </span>
              </div>
              <v-divider></v-divider>
              <v-card>
                <tab-grafico-receita/>
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import TabGraficoDaReceita from "../tabs/TabGraficoDaReceita.vue";
import BotaoVisualizarFormulario from "../botoes/BotaoVisualizarFormulario.vue";
export default {
  components: {
    "tab-grafico-receita": TabGraficoDaReceita,
    "botao-visualizar-formulario": BotaoVisualizarFormulario
  },

  data: () => ({
    panel: [0]
  })
};
</script>
<style scoped>
@media screen and (max-width: 991px) {
  .grafico {
    margin-top: 5%;

    margin-bottom: 3%;
  }

  .panel {
    margin-top: 3%;
    padding-bottom: 3%;
    background-color: white;
    box-shadow: 0 4px 15px black;
  }

  .button {
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .divider2 {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 110%;
  }
}

@media screen and (min-width: 992px) {
  .grafico {
    display: inline-block;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .grafico1 {
    display: inline-block;
    margin-top: 2%;
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 5%;
  }

  .panel {
    margin-top: 2%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 10px black;
  }

  .button {
    margin-bottom: 2%;
  }
  .divider2 {
    font-size: 150%;
    margin-top: 5%;
    margin-left: 5%;
  }
}
</style>
