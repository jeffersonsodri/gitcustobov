<template>
  <v-expansion-panel v-model="panel[0]" expand class="panel">
    <v-expansion-panel-content>
      <template v-slot:header>
        <h2>Dados Gerais do Rebanho de Reprodução</h2>
      </template>

      <rebanho-reproducao/>
      <rebanho-reproducao-cabeca/>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import TabelaRebanhoReproducao from "../tabelas/TabelaRebanhoReproducao.vue";
import TabelaRebanhoReproducaoCabeca from "../tabelas/TabelaRebanhoReproducaoCabeca.vue";
export default {
  components: {
    "rebanho-reproducao": TabelaRebanhoReproducao,
    "rebanho-reproducao-cabeca": TabelaRebanhoReproducaoCabeca
  },

  data: () => ({
    panel: [1]
  })
};
</script>
<style scoped>
@media screen and (max-width: 991px) {
  .panel {
    margin-top: 3%;
    padding-bottom: 3%;
    background-color: white;
    box-shadow: 0 4px 15px black;
  }
}

@media screen and (min-width: 992px) {
  .panel {
    margin-top: 2%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 10px black;
  }
}
</style>
