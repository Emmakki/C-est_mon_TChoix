<template>
  
    <v-footer 
      color="green lighten-2"
    >
      <v-card
        flat
        tile
        width="100%"
        class="green lighten-2 text-center"
      >
        <icone-reseaux />
      </v-card>
    </v-footer>

</template>



<script>
import IconeReseaux from '@/components/IconeFacebook.vue'

  export default {
    data: () => ({ value: 1 }),
    components: {
      IconeReseaux,
    },
  }
</script>

<style>
    #footer{
    position:fixed;
    bottom:0;
    }
    .at-bottom{
  position : fixed;
  bottom: 5px;
  width:100%
}
</style>