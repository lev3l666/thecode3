<template>
  <div id="elFooter">
    <!-- <footerImg class="footer-component" id="mierda"/> -->
    <v-card height="600px" color="transparent">
      <v-footer app bottom absolute padless width="100%" style="width:100% !important; background-color: transparent !important;">
        <v-card
          flat
          tile
          width="100%"
          class="lighten-1 footer-card text-center"
          color="transparent"
        >
        
          <v-row align="center" justify="center" class="ma-12">
            <v-col cols="12" md="6">
              <span>
                <logo-img class="logoImg"/>
                <fish-img class="fishImg"/>
              </span>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-text class="footer-contact">
                <v-icon color="primary">mdi-phone</v-icon><a href="tel:3052792719">(57)305-279-2719</a> <br>
                <v-icon color="primary">mdi-email</v-icon><a href="mailto:contacto@thecode3.com"> contacto@thecode3.com</a><br>
                <v-icon color="primary">mdi-whatsapp</v-icon><a href="https://wa.me/573052792719" target="_blank"> Code 3</a><br>

                <v-icon color="primary">mdi-facebook</v-icon><a href="https://www.facebook.com/C0DE3" target="_blank"> C0DE3</a><br>
                <v-icon color="primary">mdi-instagram</v-icon><a href="https://www.instagram.com/thec0de3" target="_blank"> thec0de3</a>

              </v-card-text>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-card-text class="primary-text">
            Envigado, Colombia {{ new Date().getFullYear() }} — Desarrollo y diseño por <strong>CODE3</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>

    <!-- <footerBG class="footerBG"/> -->
  </div>
</template>
<script>
// import footerImg from "../assets/bckgcode05.svg"
// import footerBG from "./footerBG.vue";
import fishImg from "./svg/fish.vue";
import logoImg from "./svg/logoImg.vue";
// import footerImg from "./svg/footerImg.vue";

export default {
  name: 'TheFooter',
  components: {
    // footerBG,
    // footerImg,
    fishImg,
    logoImg,
},
  data() {
    return {
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
    },
  },
};
</script>
<style scoped>
.footer-card {
  /* background-image: url(../assets/bckgcode05.svg);
  width: 100%;
  background-size: cover;
  padding-top: 10%; */
  background-color: transparent;
  
}

.footer-component {
  /* background-image: url(../assets/bckgcode05.svg); */
  /* background-color: red; */
  /* background-size: cover;
  padding-top: 10%;*/
  z-index: 9999;
}

/* fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
none - The image is not resized
scale-down - the image is */

.footer-contact {
  margin-top:3vw;
  text-shadow: 0px 0px 1vw rgb(0, 0, 0);
  text-align: left;
}

.primary-text {
  color: var(--v-primary-base) !important;
}

.div-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.divider {
  position: absolute;
  top: 65%;
  bottom: 30%;
  height: 100px;
}
.footerBG {
  bottom: 0;
  z-index: 0;
}
.fishImg {
  position: relative;
  z-index: 9999;
  width: 37%;
  animation: fishHorizontal 1.5s ease-in-out infinite;
}
.logoImg {
  width: 63%;
  bottom: 0;
  z-index: 0;
}

@keyframes fishHorizontal {
  0%, 100% {
    left: 4%;
  }
  30% {
    left: -15%;
  }
}
</style>
