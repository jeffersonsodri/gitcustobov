<template>
  <v-expansion-panel v-model="panel[0]" expand class="panel">
    <v-expansion-panel-content>
      <template v-slot:header>
        <h2>Dados Gerais do Rebanho de Recria/Engorda</h2>
      </template>

      <rebanho-recria-engorda/>
      <rebanho-recria-engorda-cabeca/>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import TabelaRebanhoRecriaEngorda from "../tabelas/TabelaRebanhoRecriaEngorda.vue";
import TabelaRebanhoRecriaEngordaCabeca from "../tabelas/TabelaRebanhoRecriaEngordaCabeca.vue";
export default {
  components: {
    "rebanho-recria-engorda": TabelaRebanhoRecriaEngorda,
    "rebanho-recria-engorda-cabeca": TabelaRebanhoRecriaEngordaCabeca
  },

  data: () => ({
    panel: [1]
  })
};
</script>
<style scoped>
h2 {
  color: #00695c;
}
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
