<template>
  <v-app>
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
<style lang="scss">
main {
  background-color: rgb(233, 255, 233);
}
</style>