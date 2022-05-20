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
  <v-card 
   class="mx-auto my-12"
  height="400px"
  width="550px">
    
  <v-card 
   class="mx-auto my-12"
          height="380px"
          width="500px"
          flat>
    
  <v-form>   
  <v-container
  height="400px"
  width="550px">
    
          
                                <v-text-field
                                
                            background-color="green lighten-4"
                                  label="Prénom"
                                  outlined
                                  
                                ></v-text-field>
                            
                                <v-text-field
                                
                            background-color="green lighten-4"
                                  label="Nom"
                                  outlined
                                ></v-text-field>
                          
                            <v-text-field
                            
                            background-color="green lighten-4"
                            color="black"
                            label="Proposition n°1"
                            v-model="Proposition1"
                            outlined
                          ></v-text-field>
                                    
                              
                                <v-text-field
                            background-color="green lighten-4"
                            color="black"
                            label="Proposition n°2"
                            v-model="Proposition2"
                            outlined
                          ></v-text-field>
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
           <template>
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
        </v-snackbar>
             
  </v-container>          
          
              </v-form> 
             </v-card>
             
  </v-card>

       
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
        timeout: 10000,
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
.card{
  border-radius: 10px
}
  
</style>