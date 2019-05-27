<template>
  <v-app>
    
    <div>
<navbar/>
<router-view></router-view>
    </div>
  </v-app>
</template>
<script>
 import NavBar from './components/navbar/NavBar.vue'
 
export default {
  
  components:{
    'navbar' : NavBar,
    
  }
 
  
}
</script>
<style scoped>

</style>

