<template>
<div>
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
      <v-btn to="/" color="green lighten-4" x-large rounded>Retour</v-btn>
    </v-toolbar>
  </header>
  </nav>
  <v-stepper v-model="e1"
  width="600px"
  class="mx-auto my-12"
  >
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      color="green lighten-1"
      >
        Nom/Prénom
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        color="green lighten-1"
      >
        Dilemme 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"
      color="green lighten-1">
        Dilemme 2
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mx-auto my-12"
          color="green lighten-4"
          height="170px"
          width="500">   
          <v-form>
            <v-container>
      
          <v-text-field
            label="Prénom"
            outlined
            
          ></v-text-field>
       
          <v-text-field
            label="Nom"
            outlined
          ></v-text-field>
       
    </v-container>
  </v-form></v-card>

        <v-btn
          color="green lighten-4"
          @click="e1 = 2"
        >
          Valider
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mx-auto my-12"
          color="green lighten-4"
          height="200px"
        ><v-form>
                <v-container>
      <v-textarea 
      
      background-color="green lighten-4"
      color="black"
      label="Proposition n°1"
      v-model="Proposition1"
    ></v-textarea>
              
                </v-container>
              </v-form>
        </v-card>

        <v-btn
          color="green lighten-4"
          @click="e1 = 3"
        >
          Valider
        </v-btn>

        <v-btn text
        @click="e1 = 1">
          Retour
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mx-auto my-12"
          color="green lighten-4"
          height="200px"
        >
        <v-form >
                <v-container>
          <v-textarea
      background-color="green lighten-4"
      color="black"
      label="Proposition n°2"
      v-model="Proposition2"
    ></v-textarea>
              
                </v-container>
              </v-form></v-card>

        <v-btn
          color="green lighten-4"
          @click="submit()"
        >
          Valider
        </v-btn>
        <v-snackbar
            v-model="snackbar"
           :timeout="timeout">
           Proposition bien envoyée!
        </v-snackbar>

        <v-btn text
        @click="retour()">
          Retour
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
 <!--<v-row align="center" justify="space-around">
    <v-btn to="/" icon color="green lighten-1">
    <v-icon size="75px">mdi-home</v-icon>
  </v-btn>
  </v-row>-->
</div> 

</template>

<script >
  import { io } from "socket.io-client";
  const socket = io("ws://localhost:3000");
  export default {
      data: () => ({
        snackbar: false,
        e1: 1,
        timeout: 2000,
        Proposition1: '',
        Proposition2: '',
      }),
      methods: {
        hello(){
          console.log("hello");
        },
        async submit(){
          this.snackbar = true;
          console.log("test : ",this.Proposition1+"|"+this.Proposition2+"|0|0|True|0");
          socket.emit("prop",this.Proposition1+"|"+this.Proposition2+"|0|0|True|0");
        },
        async retour(){
          this.e1 = 2;
          console.log("test");
          //rien ne s'affiche v-btn qui ne marche pas ?
        },
        
      },
      mounted : function(){
        this.hello();
        socket.emit("test","page submit");
    },
    }
</script>
<style>
.home {
    background-color: rgb(233, 255, 233) ;
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

  
</style>