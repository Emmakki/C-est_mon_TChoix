<template>
  <nav>
  <header>
    <v-toolbar height="140" color="green lighten-2">
    <v-btn  text to="/" class="font-weight-light" id="transparant" height="150" width="150">
    <div>
     <v-img alt="logo" height="140" max-width="150" src="../assets/TChoix.png" ></v-img>
     </div>
     </v-btn>
     <v-spacer></v-spacer>
     <v-toolbar-title>
     <p class="TITRE" >C'est mon TChoix</p>
     </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/propos" color="green lighten-4" x-large rounded v-show="showBouton">Proposition</v-btn>
      <v-btn to="/" color="green lighten-4" x-large rounded v-show="!showBouton">Retour</v-btn>
    </v-toolbar>
  </header>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.TITRE{
  font-size:5vw;
  font-weight: bold;
}
#transparant::before {
   background-color: transparent !important;
}
.v-toolbar__title {
    margin-bottom: -10px;
}

</style>