<template>
    <div class="text-center" >
        <v-btn
            @click='clickLike()'
            plain
            icon
            class="decalage-droite"
            :ripple="false"
            
            
            color = "green darken-1"
        >
            <v-icon size="60px">
                mdi-thumb-down
            </v-icon>
        </v-btn>

        <v-btn
            
            plain
            icon
            class="decalage-gauche"
            :ripple="false" 
            
            color = "green darken-1"
        >
            <v-icon size="60px">
                mdi-thumb-up
            </v-icon>
        </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'BoutonMode',
    components: {
	},
    data: () => ({
      
    }),
    methods:{
        publierTwitter(){
           
        },
        publierFacebook(){
            
        },
        async clickLike () {
          this.showTuPreferes = true
      },
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Titillium+Web&display=swap');
.police-boutons {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
}
.couleur-bouton{
  color: #00000000
}
.decalage-droite{
  margin-right:3vw;
}
.decalage-gauche{
  margin-left:3vw;
}
.rounded-card{
  border-radius: 9999px  ;
  overflow: hidden;
};
</style>