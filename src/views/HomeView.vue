
<template>
  <div class="home margeHaut">
    <v-row align = "center" justify = "center">
      <p id="titre" 
        class="text-center"
        v-show="showTuPreferes">
        Tu préfères ...
      </p> 
      <p id="titre" 
        class="text-center margePourcentageGauche"
        v-show="!showTuPreferes">
          <strong>30%</strong>
      </p>  
      <p id="titre" 
        class="text-center margePourcentageDroite"
        v-show="!showTuPreferes"><v-spacer></v-spacer> <strong>70%</strong>
      </p>
    </v-row>
    <v-spacer></v-spacer> 
    <div>
      <v-hover
        v-slot="{ hover }"
      >
        <v-btn @click='clickBoutons()'
            :elevation="hover ? 10 : 4"
            :class="{ 'on-hover': hover }"
            :height="tailleBoutons.gauche"
            :width="tailleBoutons.longueur" 
            rounded
            :style="{ 'background-color': hover ? 'red' : '#E57373' }"
            class="boutonGauche"
            >
            Bouton de gauche
        </v-btn>
      </v-hover>
    
      <v-hover
        v-slot="{ hover }"
      >
        <v-btn 
          @click='clickBoutons()'
          :elevation="hover ? 10 : 4"
          :class="{ 'on-hover': hover }"
          :height="tailleBoutons.droite"
          :width="tailleBoutons.longueur"
          rounded
          :style="{ 'background-color': hover ? 'blue' : '#42A5F5'}"
          class = "boutonDroite" 
        >
            Bouton de droite
        </v-btn>
      </v-hover>
    </div>
    <br/>
    <p id = "suivant"
      class = "text-center"
      v-show="!showTuPreferes">Noter pour passer au suivant</p>
    <div v-show="!showTuPreferes">
      <icone-like/>
    </div>
    <div align="center" class = "margeHaut at-bottom"> 
      <bouton-mode/>
    </div>
  </div>
</template>

<script>
import BoutonMode from '@/components/BoutonMode.vue'
import IconeLike from '@/components/IconeLike.vue'

  export default {
    data () {
      return {
        tailleBoutons: {
          gauche: "45vh",
          droite: "45vh",
          longueur: "38%",
        },
        tailleBoutonsResultats: {
          gauche: "9vh",
          droite: "21vh",
        },
        tailleMax : "45vh",
        showTuPreferes:true,
      }
    },
    components: {
      BoutonMode,IconeLike,
    },
    methods: {
      async clickBoutons () {
        this.tailleBoutons.gauche = this.tailleBoutonsResultats.gauche,
        this.tailleBoutons.droite = this.tailleBoutonsResultats.droite,
        this.showTuPreferes = false
      }
    },
  }
</script>

<style>
  #titre {
    font-size: 40px;
  }
  #suivant {
    font-size: 30px;
  }
  .boutonDroite{
    margin-right: 10%;
    margin-left: 2%;
  }
  .boutonGauche{
    margin-left: 10%;
    margin-right: 2%;
  }
  .margeHaut{
    margin-top: 3vh;
  }
  .margePourcentageGauche{
    margin-right: 15%;
  }
  .margePourcentageDroite{
    margin-left: 15%;
  }
  
  .at-bottom{
  position : fixed;
  bottom: 10vh;
  width:100%
  }
  .transitionBoutons{
    height: 45vh;
    transition : height 1s; 
  }
  .nouvelleTaille{
    height: 10vh;
  }
.bloc { 
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

</style>