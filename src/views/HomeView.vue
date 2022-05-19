<template>
  <div class="home">
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
      <v-btn to="/propos" color="green lighten-4" x-large rounded>Proposition</v-btn>
    </v-toolbar>
  </header>
  </nav>
    <v-row align = "center" justify = "center">
      <p id="titre" 
        class="text-center"
        v-show="showTuPreferes">
        
        Tu préfères ...
      </p> 
      <p id="titre" 
        class="text-center margePourcentageGauche"
        v-show="!showTuPreferes">
          <strong>{{pourcentageGauche}}</strong>
      </p>  
      <p id="titre" 
        class="text-center margePourcentageDroite"
        v-show="!showTuPreferes"><v-spacer></v-spacer> <strong><br/>{{pourcentageDroite}}</strong>
      </p>
    </v-row>
    <v-spacer></v-spacer> 
    <div>
      <v-hover
        v-slot="{ hover }"
      >
        <v-btn 
            @click='clickBoutons("gauche")'
            :elevation="hover ? 10 : 4"
            :class="{ 'on-hover': hover }"
            :height="tailleBoutons.gauche"
            :width="tailleBoutons.longueur" 
            rounded
            :style="{ 'background-color': hover ? 'red' : '#E57373' }"
            class="boutonGauche"
            :disabled="!showTuPreferes"
            >
            <div class="tailleBoutons">
            <p class="text-wrap" style="max-width: 40rem;">
              {{ dilemme1 }}</p>
            </div>
        </v-btn>
      </v-hover>
    
      <v-hover
        v-slot="{ hover }"
      >
        <v-btn 
          @click='clickBoutons("droit")'
          :elevation="hover ? 10 : 4"
          :class="{ 'on-hover': hover }"
          :height="tailleBoutons.droite"
          :width="tailleBoutons.longueur"
          rounded
          :style="{ 'background-color': hover ? 'blue' : '#42A5F5'}"
          class = "boutonDroite" 
          :disabled="!showTuPreferes"
        >
          <div class="tailleBoutons" ><p class="text-wrap" style="max-width: 40rem;">{{ dilemme2 }}</p>
          </div>
        </v-btn>
      </v-hover>
    </div>
    <br/>
    <p id = "suivant"
      class = "text-center"
      v-show="!showTuPreferes">Noter pour passer au suivant:</p>
    
    
    <div v-show="!showTuPreferes">
      <div class="text-center" >
        <v-btn
            @click='clickLike("dislike")'
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
            @click='clickLike("like")'
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
      
    </div>

    <div align="center" class = "margeHaut at-bottom"> 
      <bouton-mode v-on:mode='clickMode($event)'/>
    </div>
  </div>
</template>

<script>
import BoutonMode from '@/components/BoutonMode.vue'
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");
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
        mode:"alea",
        cote:"",
        avis:"",
        string:"",
        dilemme1:"SFR",
        dilemme2:"PFR",
        pourcentageGauche:"30%",
        pourcentageDroite:"70%",
        clicsGauche:1,
        clicsDroits:1,
        visible:true,
        nbLike:0,
      }
    },
    components: {
      BoutonMode,
    },
    methods: {
      hello(){
        console.log("hello");
      },
      async calculPourcentage(gauche,droite){
        var somme=gauche+droite;
        var pourcentageGauche = gauche/somme;
        var pourcentageDroite = droite/somme;
        this.pourcentageGauche = Math.trunc(pourcentageGauche*100).toString()+"%";
        this.pourcentageDroite = Math.trunc(pourcentageDroite*100).toString()+"%";
        this.tailleBoutons.gauche = Math.trunc(pourcentageGauche*30).toString()+"vh";
        this.tailleBoutons.droite = Math.trunc(pourcentageDroite*30).toString()+"vh";
        //console.log("test : ",this.tailleBoutonsResultats.droite)
      },
      async clickBoutons (cote) {
        this.tailleBoutons.gauche = this.tailleBoutonsResultats.gauche;
        this.tailleBoutons.droite = this.tailleBoutonsResultats.droite;
        this.showTuPreferes = false;
        this.cote=cote;
       
        if (cote=="droit"){
          this.clicsDroits += 1;
          this.string=this.string.split('|')[0]+ "|"+ this.string.split('|')[1]+ "|"+this.string.split('|')[2]+ "|" + String(this.clicsDroits)
          + "|" + this.string.split('|')[4] + "|" + this.string.split('|')[5];
        }
        if (cote=="gauche"){
          this.clicsGauche += 1;
          this.string=this.string.split('|')[0]+ "|"+ this.string.split('|')[1]+ "|"+String(this.clicsGauche)+ "|"+this.string.split('|')[3]
          + "|" + this.string.split('|')[4] + "|" + this.string.split('|')[5];
        }
        this.calculPourcentage(this.clicsGauche, this.clicsDroits);
      },
      
      async clickLike (avis) {
        this.tailleBoutons.gauche = this.tailleMax;
        this.tailleBoutons.droite = this.tailleMax;
        this.showTuPreferes = true;
        this.avis=avis;
        console.log(this.avis);
        console.log(this.nbLike);

        if (avis=="like"){
          this.nbLike += 1;
          this.string=this.string.split('|')[0]+ "|"+ this.string.split('|')[1]+ "|"+this.string.split('|')[2]+ "|" + this.string.split('|')[3]
          + "|" + this.string.split('|')[4] + "|" + String(this.nbLike);
        }
        if (avis=="dislike"){
          this.nbLike -= 1;
          this.string=this.string.split('|')[0]+ "|"+ this.string.split('|')[1]+ "|"+this.string.split('|')[2]+ "|"+this.string.split('|')[3]
          + "|" + this.string.split('|')[4] + "|" + String(this.nbLike);
        }
        console.log(this.nbLike);
        socket.emit("suivant",this.string);
        socket.on("fromServer", (args) => {
         console.log(socket.id,":",args);
         this.string=args;
         this.saveString(args);
        });
      },
      saveString(args){
        this.dilemme1=args.split('|')[0];
        this.dilemme2=args.split('|')[1];
        this.clicsGauche=parseInt(args.split('|')[2]);
        this.clicsDroits=parseInt(args.split('|')[3]);
        this.visible=args.split('|')[4];
        this.nbLike=parseInt(args.split('|')[5]);
      },
      clickMode(_mode){
        this.mode=_mode;
        console.log(this.mode);
       socket.emit("mode",this.mode);
      },

      destroyed(){
        socket.off("disconnect");
      }

    },
    mounted : function(){
      socket.emit("demandeInitiale","|||||");
      socket.on("start", (args) => {
         this.hello();
         console.log(args);
         this.string=args;
         this.saveString(args);
      });
    },
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Titillium+Web&display=swap');
  #titre {
    font-size: 40px;
    font-weight: bold;
    
  }
  
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
  .tailleBoutons{ 
    font-size : 2vw;
  }
  .TexteDilemme{
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
  .home {
    background-color: rgb(233, 255, 233) ;
  }
  
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