<template>
<v-expansion-panel v-model="panel[0]" expand class="panel">
        <v-expansion-panel-content>
          <template v-slot:header>
            <h2>Gráficos do Rebanho</h2>
          </template>

          <div class="grafico">
            <v-layout row wrap>

              <v-flex xs12 md6>
                <v-card>
                  <tab-grafico-composicao-do-rebanho-por-cabeca/>
                </v-card>
              </v-flex>

              <v-flex xs12 md6>
                <v-card>
                  <tab-grafico-composicao-do-rebanho-por-ua/>
                </v-card>
              </v-flex>

              

            </v-layout>
          </div>

          <div class="grafico1">
            <v-layout row wrap>
              <v-flex xs12 md12>
                <v-card>
                  <tab-grafico-composicao-do-rebanho-por-categoria-animal/>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          
          
        </v-expansion-panel-content>
      </v-expansion-panel>

    
</template>
<script>
import TabGraficoComposicaoDoRebanhoPorCabeca from "../tabs/TabGraficoComposicaoDoRebanhoMedioPorCabeca.vue";
import TabGraficoComposicaoDoRebanhoPorUa from "../tabs/TabGraficoComposicaoDoRebanhoMedioPorUa.vue";
import TabGraficoValorDoRebanhoMedioPorCategoriaAnimal from "../tabs/TabGraficoValorDoRebanhoMedioPorCategoriaAnimal.vue";
import BotaoVisualizarFormulario from "../botoes/BotaoVisualizarFormulario.vue";
export default {
  components: {
    "tab-grafico-composicao-do-rebanho-por-cabeca": TabGraficoComposicaoDoRebanhoPorCabeca,
    "tab-grafico-composicao-do-rebanho-por-ua": TabGraficoComposicaoDoRebanhoPorUa,
    "tab-grafico-composicao-do-rebanho-por-categoria-animal": TabGraficoValorDoRebanhoMedioPorCategoriaAnimal,
    "botao-visualizar-formulario": BotaoVisualizarFormulario
  },

  data: () => ({
    panel: [1]
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
    margin-right: 1%;
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
}
</style>
