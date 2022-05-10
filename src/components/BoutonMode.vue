<template>
  <v-sheet
    width = 423px
    class="rounded-card"
  >
  
    <v-card
      color = "#C8E6C9"
      flat
      width = 423px
      
    >
        <v-btn-toggle
          v-model="text"
          mandatory
          class = "police-boutons"
          center
          group
        >
          <div class=marge-droite>
            <v-btn value="Aléatoire"
              @click='choisirMode("Aléatoire")'
              :ripple="false"
              color="#C8E6C9"
              rounded
              depressed
            >
              Aléatoire
            </v-btn>
          </div>
          <div class=marge-droite>
            <v-btn value="Les + difficiles"
              @click='choisirMode("Les + difficiles")'
              :ripple="false"
              color="#C8E6C9"
              rounded
              depressed
            >
            <!-- style="color:blue" -->
              Les + difficiles
            </v-btn>
          </div>
          <div>
            <v-btn value="Les + aimés"
              @click='choisirMode("Les + aimés")'
              :ripple="false"
              color="#C8E6C9"
              rounded
              depressed
            >
              Les + aimés
            </v-btn>
          </div>
        </v-btn-toggle>

  </v-card>
  </v-sheet>
</template>

<script>
  export default {
    name: 'BoutonMode',

    data: () => ({
      text: "Aléatoire",
    }),
    methods: {
      async choisirMode (mode) {
        console.log("test",mode)
      }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Titillium+Web&display=swap');
.police-boutons {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
}
.couleur-bouton{
  color: #ffffff
}
.marge-droite{
  margin-right:0.5em;
}
.marge-gauche{
  margin-left:0.5em;
}
.rounded-card{
  border-radius: 9999px  ;
  overflow: hidden;
}
.v-sheet.v-card {
  border-radius: 9999px;
}
</style>