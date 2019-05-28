<template>
  <v-navbar>
    <v-toolbar app>
      <!-- Faz aparecer item de navegação -->
      <v-toolbar-side-icon class="green--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <!-- Imagem e login do custobov  -->
      <img class="logo" src="../../../public/img/icons/logoCustoBov.png">
      <a href="/relatorio">
        <v-toolbar-title class="headline text-uppercase">
          <span>Login</span>
        </v-toolbar-title>
      </a>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer"  class="navigator" >
      <h2>Navegação CustoBov</h2>
      <v-list v-model="gradient" :gradient="gradient" fill-height>
        <!-- Pega todos os elementos da lista para mostrar o icone e o texto -->
        <v-list-tile v-for="link in link" :key="link.text" router :to="link.route">
          <!-- Ícones da navegação -->
          <v-list-tile-action>
            <v-icon large size="185" color="teal">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <!-- Conteúdo de navegação -->
          <v-list-tile-content>
            <v-list-tile-title class="white--text 45--text">{{link.text}}</v-list-tile-title>
            <!-- <v-btn flat class="white--text" href="link.route">{{link.text}} </v-btn> -->
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-navbar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      gradient: 'to top, #004f48, #13a397',
      link: [
        { icon: "dashboard", text: "Início", route: "/" },
        { icon: "folder", text: "Relatório", route: "/relatorio" },
        { icon: 'trending_up', text: 'Gráficos do Rebanho', route: '/graficos_do_rebanho'}

      ]
    };
  }
};
</script>
<style scoped>
h2 {
  text-align: center;
  color: aliceblue;
  padding: 3%;
  border-bottom: 2px solid white;
}

.navigator {
  background-color: #004f48;
  width: 50%;
}
.logo {
  max-width: 85%;
  max-height: 90%;
}
a {
  text-decoration-line: none;
  color: grey;
}
</style>
