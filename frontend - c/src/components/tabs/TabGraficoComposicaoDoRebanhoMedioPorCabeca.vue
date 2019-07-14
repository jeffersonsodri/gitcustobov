<template>
  <v-flex>
    <v-tabs v-model="active" color="#00695c" dark slider-color="blue">
      <v-flex xs6 sm6 md6>
        <v-tab class="texto">Percentual</v-tab>
      </v-flex>
      <v-flex xs6 sm6 md6>
        <v-tab class="texto">Absoluto</v-tab>
      </v-flex>

      <v-tab-item v-for="n in 2" :key="n">
        <v-card flat>
          <grafico-pizza-percentual v-if="n==1"/>
          <grafico-pizza-absoluto v-else/>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>
<script>
import ComposicaoDoRebanhoMedioPorCabecaPercentual from "../graficos/ComposicaoDoRebanhoMedioPorCabecaPercentual.vue";
import ComposicaoDoRebanhoMedioPorCabecaAbsoluto from "../graficos/ComposicaoDoRebanhoMedioPorCabecaAbsoluto.vue";

export default {
  components: {
    "grafico-pizza-percentual": ComposicaoDoRebanhoMedioPorCabecaPercentual,
    "grafico-pizza-absoluto": ComposicaoDoRebanhoMedioPorCabecaAbsoluto
  },
  data: () => ({
    active: null
  })
};
</script>
<style scoped>
.texto {
  font-size: 10px;
}
.flex {
  background-color: #00695c;
}
</style>
