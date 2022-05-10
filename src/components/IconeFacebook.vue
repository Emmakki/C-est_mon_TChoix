<template>
    <div class="text-center" >
        <v-btn
            plain
            icon
            class="marge-droite"
            :ripple="false"
            @click = "publierFacebook()"
        >
            <v-icon size="24px">
                mdi-facebook
            </v-icon>
        </v-btn>

        <v-btn
            plain
            icon
            class="marge-gauche marge-droite"
            :ripple="false" 
            @click = "publierTwitter()"
        >
            <v-icon size="24px">
                mdi-twitter
            </v-icon>
        </v-btn>

        <v-btn
            plain
            icon
            class="marge-gauche marge-droite"
            :ripple="false" 
        >

            <v-icon size="24px">
                mdi-instagram
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
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods:{
        publierTwitter(){
            window.location.href = "https://twitter.com/intent/tweet?hashtags=CestMonTChoix&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=CestMonTChoix%20est%20un%20jeu%20vraiment%20cool%2C%20essaie%20le%20toi%20aussi%20!&url=http%3A%2F%2F192.168.43.222%3A8080%2F"
        },
        publierFacebook(){
            window.location.href = "https://www.facebook.com/dialog/share?app_id=184484190795&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2a0d48b428d6c%26domain%3Dwww.fbrell.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fwww.fbrell.com%252Ff1aa8bc6aaebf34%26relation%3Dopener&display=popup&e2e=%7B%7D&fallback_redirect_uri=http%3A%2F%2Fwww.fbrell.com%2FSharing%2F2%2520-%2520FB.ui%2520Dialogs%3Ffbclid%3DIwAR1whirAHKjI-rInAcqMzsXTBaIbxcvGtUfgqoiYWWq91zSDg0o3QYUYHEI&href=http%3A%2F%2F192.168.43.222%3A8080%2F&locale=en_US&next=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ad531e1109e4%26domain%3Dwww.fbrell.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fwww.fbrell.com%252Ff1aa8bc6aaebf34%26relation%3Dopener%26frame%3Df1dd4a05b58e14c%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey"
        }
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
.marge-droite{
  margin-right:0.5em;
}
.marge-gauche{
  margin-left:0.5em;
}
.rounded-card{
  border-radius: 9999px  ;
  overflow: hidden;
};
</style>