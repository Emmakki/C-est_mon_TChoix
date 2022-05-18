<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <FootBar />
  </v-app>
</template>

<script>
import FootBar from '@/components/FootBar.vue'

export default {
  name: 'App',
  components: {FootBar},
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