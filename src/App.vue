<template>
  <v-app class= "grey lighten-4">
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <FootBar />
    
    
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FootBar from '@/components/FootBar.vue'

export default {
  name: 'App',
  components: { NavBar, FootBar},
  data () {
    return {
      
    }
  }
}
</script>
