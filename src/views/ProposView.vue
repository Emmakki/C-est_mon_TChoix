<template>
<div>
<v-btn color="success">Retour page d'accueil</v-btn>
  <v-stepper v-model="e1"
  width="600px"
  class="mx-auto my-12"
  >
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      color="green lighten-4"
      >
        Nom/Prénom
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        color="green lighten-4"
      >
        Dilemme 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"
      color="green lighten-4">
        Dilemme 2
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mx-auto my-12"
          color="green lighten-4"
          height="170px"
          width="500">   <v-form>
    <v-container>
      
          <v-text-field
            v-model="first"
            label="Prénom"
            outlined
            
          ></v-text-field>
       
          <v-text-field
            v-model="last"
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
        ><v-form v-model="valid">
                <v-container>
                 
              
                      <v-textarea
      background-color="green lighten-4"
      color="black"
      label="Proposition n°1"
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
        <v-form v-model="valid">
                <v-container>
          <v-textarea
      background-color="green lighten-4"
      color="black"
      label="Proposition n°2"
    ></v-textarea>
              
                </v-container>
              </v-form></v-card>

        <v-btn
          color="green lighten-4"
        >
          Valider
        </v-btn>

        <v-btn text
        @click="e1 = 2">
          Retour
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>