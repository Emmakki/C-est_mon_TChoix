<template>
  <div class="home">
    <p id="titre" class="text-center">Tu préfères ....</p>  
    <v-spacer></v-spacer>
    <v-row justify="space-around">
        <v-col md="1">
        <v-hover
          v-slot="{ hover }"
        >
          <v-btn 
              :elevation="hover ? 10 : 4"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="350"
              width="350" 
              rounded
              :style="{ 'background-color': hover ? '#E57373' : 'red' }"
              >
              Bouton de gauche
          </v-btn>
        </v-hover>
      </v-col>

      <v-col md="3">
        <v-hover
          v-slot="{ hover }"
        >
          <v-btn 
              :elevation="hover ? 10 : 4"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="350"
              width="350" 
              rounded
              :style="{ 'background-color': hover ? '#42A5F5' : 'blue' }"
              >
              Bouton de droite
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>



export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
  #titre {
    font-size: 40px;
  }

</style>