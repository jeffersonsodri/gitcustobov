<template>
<v-flex>
<v-tabs  v-model="active"  color="#00695c" dark >

      <v-flex xs6 sm6 md6 >
        
                <v-tab  class="texto">Percentual</v-tab>
        
      </v-flex>
      <v-flex xs6 sm6 md6>
        
                <v-tab  class="texto">Absoluto</v-tab>
        
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
import ValorDoRebanhoMedioPorCategoriaAnimalPercentual from "../graficos/ValorDoRebanhoMedioPorCategoriaAnimalPercentual.vue";
import ValorDoRebanhoMedioPorCategoriaAnimalAbsoluto from "../graficos/ValorDoRebanhoMedioPorCategoriaAnimalAbsoluto.vue";

export default {
  components: {
    "grafico-pizza-percentual": ValorDoRebanhoMedioPorCategoriaAnimalPercentual,
    "grafico-pizza-absoluto": ValorDoRebanhoMedioPorCategoriaAnimalAbsoluto
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


