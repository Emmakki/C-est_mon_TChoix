<template>
  <nav>
    <v-toolbar height="150" color="red accent-3">
    <v-btn  text to="/" class="font-weight-light" id="transparant" height="150" width="150">
    <div id="img">
     <v-img alt="logo" height="150" max-width="150" src="../assets/TChoix.png" ></v-img>
     </div>
     </v-btn>
     <v-spacer></v-spacer>
     <v-toolbar-title><p class="font-weight-black">C'est mon TChoix</p></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/propos" color="red accent-1" x-large rounded>Proposition</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#transparant::before {
   background-color: transparent !important;
}
</style>