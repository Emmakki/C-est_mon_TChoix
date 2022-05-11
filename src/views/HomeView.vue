
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
              :style="{ 'background-color': hover ? 'red' : '#E57373' }"
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
    <div align="center">
      <bouton-mode/>
    </div>
  </div>
</template>

<script>
import BoutonMode from '@/components/BoutonMode.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      BoutonMode,
    },
  }
</script>

<style>
  #titre {
    font-size: 40px;
  }

  .at-bottom{
  position : fixed;
  bottom: 5px;
  width:100%
}


</style>