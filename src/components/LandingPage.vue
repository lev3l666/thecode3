<template>
  <v-app id="inspire">
    <the-header/>
    <footerImg class="footer-background"/>
    <div class="thing2">
      <div>
        <svg id="salpicadura" width="100%" height="100%" viewBox="0 0 820 799" xmlns="http://www.w3.org/2000/svg">
            <g id="salpicadura-inner" @mouseenter="toFancy()" @mouseleave="toSimple()" >
                <path id="salpi-small" d="m 773.47615,148.7604 c 8.84,6 20.59,-1 28.42,-8.26 7.83,-7.26 17.55,-15.83 27.76,-12.63 8.48,2.66 12.54,12.46 13.25,21.32 0.71,8.86 -0.78,18 1.56,26.55 1.84936,6.38659 5.91645,11.90394 11.47,15.56 10.92,7.49 0.67,411.66 0,411.78 -7.16,1.34 -12.44,8.12 -16.71,14.32 l -15.7,22.79 c -5.17,7.5 -10.47,17.34 -5.71,25.12 4.24,6.94 14.32,8 19.37,14.39 4.86,6.15 2.71,16.5 -4.2,20.21 -6.91,3.71 -16.72,-0.24 -19.14,-7.69 -1.28,-3.91 -0.7,-8.18 -1.36,-12.24 -2.45,-15.08 -25.19,-21.59 -35.25,-10.1 -3.14,3.6 -4.91,8.16 -6.48,12.67 -6.23461,17.88985 -10.3036,36.46217 -12.12,55.32 -0.44,4.6 -0.8,9.39 -3.13,13.38 -5.63,9.67 -19.21,10 -30.37,9.21 -2.79,-14.22 8.11,-27 16.78,-38.58 8.67,-11.58 15.47,-28.81 5.79,-39.59 -11.07,-12.35 -33.09,-4.41 -46.68,-13.91 -10.08,-7 -13.66,-22.49 -25.51,-25.75 -9.1,-2.5 -18.37,3.94 -24,11.51 -5.63,7.57 -9.3,16.65 -16,23.29 -6.7,6.64 -18.35,10 -25.43,3.73 -9.47,-8.35 -2.13,-24.6 8.33,-31.68 10.46,-7.08 23.86,-10.66 31.17,-21 10.66,-15.06 2,-37.43 -13.13,-48 -6.13,-4.28 -13.92,-7.3 -21,-5 -12.34,4 -21.33,22.52 -32.85,16.58 -5.09,-7.88 0.48,-18.72 8.18,-24.08 7.7,-5.36 17.23,-7.59 25,-12.87 7.77,-5.28 13.54,-15.93 8.71,-24 -6.36,-10.59 -22.35,-6.31 -33.74,-1.53 -11.39,4.78 -28.85,6.08 -31.96,-5.82 -2.81,-10.7 10.78,-18.91 21.81,-18.08 11.03,0.83 21.59,6.4 32.6,5.37 13.26,-1.24 24.08,-12.19 28.76,-24.65 4.68,-12.46 4.28,-26.23 3,-39.48 -0.63,-6.34 -1.54,-12.9 -5,-18.25 -7,-10.79 -21.52,-13.11 -34.3,-14.4 -3.86,-5 -0.89,-12.44 3.71,-16.7 4.6,-4.26 10.63,-6.88 14.77,-11.59 10.52,-12 0.37,-34.62 -15.57,-34.74 -12.66,-0.13 -28.78,9.52 -35.51,-1.15 -4.19,-6.67 1.17,-15.88 8.39,-19 7.22,-3.12 15.44,-2.25 23.34,-2.33 7.9,-0.08 16.61,-1.56 21.39,-7.81 7.12,-9.31 0.44,-24 -10.2,-28.86 -10.64,-4.86 -23.11,-2.76 -34.42,0.33 -7.62,2.08 -15.38,4.58 -23.24,3.85 -7.86,-0.73 -16,-5.7 -17.55,-13.45 -2,-10 8.2,-19.12 18.39,-20.11 10.19,-0.99 20,3.52 29.43,7.52 9.43,4 19.86,7.64 29.72,4.88 15.76,-4.35 22.79,-22.65 25.48,-38.81 2.69,-16.16 4,-34.15 15.74,-45.61 6.44,-6.3 15.24,-9.69 21.86,-15.8 6.62,-6.11 10.39,-17.34 4.2,-23.89 -3.05,-3.24 -7.9,-4.58 -10.34,-8.3 -2.58,-3.93 -1.56,-9.34 1,-13.28 7.79,-12 29.16,-10.48 35.16,2.52 1.5,3.25 2.15,6.92 4.28,9.8 7.44,10.05 24.93,0.53 27,-11.79 2.07,-12.32 -4.33,-24.28 -7.39,-36.410002 -3.06,-12.13 -0.62,-28.2 11.28,-32.06 12.79,-4.14 24.91,10.28 25.34,23.74 0.43,13.46 -6.12,26.000002 -9.17,39.000002 -2.34,10.07 1.51,24.79 11.77,23.52 z" fill-rule="nonzero" fill="rgb(var(--v-theme-primary))"/>
                <path id="salpi-big" v-show="false" d="m 857.59044,419.24821 v 194.36 c 0,11.86 -2.84,23.7 -2.14,35.56 0.34,5.78 1.3,26.19 -4.51,30 -5.4,3.47 -19.74,-3.52 -25.56,-4.64 -8.76,-1.68 -19.77,0.12 -23.27,7.92 -4.41,9.84 6.38,20.37 5.29,31 -0.86,8.36 -9.56,14.77 -18.41,15.14 -8.85,0.37 -17.32,-4.32 -23,-10.77 -7.23,-8.23 -12.37,-20.35 -23.58,-21.73 -9.89,-1.22 -18.61,8.06 -19.28,17.48 -0.32,4.46 0.59,9.31 -1.92,13.09 -5.42,8.11 -19.4,2.3 -24.34,-6.08 -4.94,-8.38 -6.91,-19.16 -15.46,-24.31 -9.54,-5.76 -24.35,0.58 -26.1,11.17 -1.06,6.41 1.17,14.73 -4.68,18.1 -5.19,3 -12.2,-1.93 -13.21,-7.6 -1.01,-5.67 1.87,-11.26 4.6,-16.4 2.73,-5.14 5.48,-10.82 4.19,-16.45 -2.16,-9.38 -14.14,-13.37 -24.27,-13.3 -12.66,0.1 -25.82,4.38 -33.81,13.67 -7.99,9.29 -9.3,24.06 -1,33.09 3.09,3.35 7.58,6.48 7.35,10.92 -0.2517,2.06844 -1.16345,4.00065 -2.6,5.51 -6.28456,7.20535 -15.84065,10.66036 -25.28,9.14 -3,-0.5 -6.08,-1.61 -8,-3.88 -3.46,-4.14 -1.67,-10.41 1.71,-14.62 3.38,-4.21 8.11,-7.36 11.15,-11.79 8.48,-12.33 -0.54,-30.56 -15.09,-35.75 -14.55,-5.19 -31.38,0.19 -43.24,9.71 -7,5.63 -12.75,12.6 -19.9,18.07 -7.15,5.47 -16.47,9.45 -25.44,7.53 -8,-1.7 -15,-7.9 -23.15,-7.16 -9.25,0.84 -15.07,12.55 -9.87,19.84 1.67,2.34 4.14,4.13 5.52,6.64 4,7.32 -4.68,16.57 -13.36,15.9 -8.68,-0.67 -15.34,-8.07 -18,-15.93 -2.66,-7.86 -2.42,-16.29 -3.24,-24.51 -0.82,-8.22 -3.1,-16.89 -9.55,-22.45 -10,-8.63 -28.55,-5 -34.1,6.71 -3.55,7.48 -2.06,16.13 -0.7,24.23 1.36,8.1 2.38,16.92 -1.91,24 -4.29,7.08 -16.13,10.45 -21.66,4.14 -3.89,-4.44 -2.81,-11.16 -0.17,-16.35 2.64,-5.19 6.62,-9.81 8.3,-15.35 4.47,-14.8 -10.5,-30 -26.65,-31.77 -16.15,-1.77 -31.73,6.22 -44.38,15.89 -10.36,7.9 -23.84,17.68 -35.33,11.35 -1.93,-1.07 -3.7,-2.58 -5.9,-2.94 -3.34,-0.54 -6.39,1.69 -9.05,3.68 -7.19,5.4 -19.89,8.92 -23.78,1 -2.9,-5.84 2.58,-12.27 8.12,-16 5.54,-3.73 12.25,-7.69 13,-14.11 0.87,-7.48 -7.81,-13.43 -15.76,-13.19 -14.4,0.43 -30.75,10.31 -28.77,25.18 0.52,3.89 2,7.9 0.31,11.61 -4.36,9.66 -23.42,8.71 -36.81,5.79 l 28.61,-48.52 c 1.63,-2.76 3.29,-5.77 2.29,-8.69 -2.91,-8.44 -21.05,-5.48 -29.15,0.92 -8.1,6.4 -17,15.35 -28.66,13.25 -14.829995,-2.69 -11.6,-20.05 0.86,-26.48 12.46,-6.43 29.11,-7.37 41.45,-13.91 13.79,-7.3 19.73,-21.57 13.79,-33.2 -5.94,-11.63 -23.27,-19.63 -40.29,-18.6 -11.33,0.68 -26.5,3.54 -31.119995,-4 -4.37,-8 11.369995,-13.93 23.149995,-13.37 11.78,0.56 26.26,2.48 33.16,-4.49 8.9,-9 -7.64,-21.14 -22.86,-21 -15.22,0.14 -29,6.61 -44.109995,8.07 -15.11,1.46 -34.29,-6.63 -30.3,-17.3 3.5,-9.35 21.28,-11.09 33.85,-7.86 12.569995,3.23 24.129995,9.45 37.459995,9.45 12.75,0 24.09,-5.92 32.91,-12.62 9.71,-7.37 17.85,-16.71 17.79,-26.92 -0.06,-10.21 -11,-20.77 -25.1,-20.62 -16.16,0.16 -31.83,13.27 -45.74,7.29 -9.789995,-4.21 -8.999995,-15.45 -1.55,-21.71 7.45,-6.26 18.84,-9 29.42,-12 10.58,-3 21.67,-7.23 26.26,-14.8 7.06,-11.67 -9.51,-26.75 -26.72,-24.32 -10.79,1.52 -20,8.31 -30.93,7.51 -9.369995,-0.69 -16.749995,-8 -14.869995,-14.69 1.88,-6.69 12.589995,-11.35 21.589995,-9.32 5.4,1.22 9.61,4.31 14.74,6.05 15.48,5.27 34.52,-4 39.73,-15.82 5.21,-11.82 0.39,-24.7 -5.79,-36.29 -6.18,-11.59 -13.83,-23.15 -14.37,-35.57 -0.56,-12.89 6.69,-25.33 15.77,-36.41 6.68,-8.15 14.62,-16.21 16.38,-25.62 1.76,-9.41 -5.56,-20.58 -18.46,-21.72 -5.84,-0.52 -11.62,1.05 -17.49,1.28 -10,0.4 -20.46,-3.76 -24.17,-10.54 -3.71,-6.78 0.74,-15.63 10.1,-18.26 8.59,-2.41 18.09,0.44 26.63,2.94 8.54,2.5 18.78,4.59 26.52,1 6.21,-2.92 6.4,-10.47 0.81,-13.72 -4.52,-2.63 -15.62,2 -21.74,0.81 -6.12,-1.19 -11.38,-6.37 -8.66,-10.62 3,-4.68 12.25,-4.79 17.57,-8.2 8.82,-5.67 2.5,-16.47 -6.22,-22.23 -40.24,-26.62 -0.33,-53.689996 11.08,-27.26 4.12,9.54 3.08,20.52 7.09,30.11 6.78,16.25 27.6,24.68 45.74,21.5 8.46,-1.48 16.79,-5.33 21.78,-12 4.99,-6.67 5.89,-16.34 0.71,-22.85 -2.25,-2.82 -5.42,-4.89 -7.49,-7.83 -5.11,-7.25 -1.46,-17.87 6,-22.919996 7.46,-5.05 17.5,-5.52 26.53,-3.82 4.52,10.529996 -5,21.839996 -4.85,33.209996 0.13,10.87 9.41,20.11 20.05,24.18 10.64,4.07 22.45,4.06 33.92,4 24.17,-0.16 38.71,-20.46 28.85,-42.76 -1.36,-3.06 -3.17,-5.93 -4.53,-9 -5.246,-12.307475 -2.90802,-26.537931 6,-36.519996 2.36811,-2.802999 5.37618,-4.994741 8.77,-6.39 9.44,-3.48 21.4,3.55 22.29,13.11 1.23,13.21 -13.11,21 -17.56,32.199996 -4.31,10.87 1,28 8.53,37.26 12.37,15.26 54.74,25.15 65.43,3.56 1.82,-3.68 1.45,-7.74 2.82,-11.52 4.57,-12.64 31.62,-16.59 42.56,-6.22 2.88,2.73 4.6,6 7.34,8.82 6.06,6.19 17.26,9.48 27.53,8.08 12.23,-1.67 27.46,-15.27 30.5,-26.76 2.7,-10.22 -3.41,-20.389996 -7.69,-30.109996 -4.28,-9.72 -6.06,-22.69 2.63,-29.26 3.1788,-2.248447 6.96663,-3.476178 10.86,-3.52 7.9379,-0.273959 15.5437,3.195679 20.54,9.37 4.6939,6.083361 5.9572,14.142106 3.35,21.37 -3.62,9.7 -13.84,16.639996 -15.73,26.769996 -1.56,8.42 3.22,16.89 9.64,22.9 6.23,5.82 15,10.19 23.54,8.48 8.54,-1.71 15.12,-11.62 10.64,-18.73 -1.68,-2.67 -4.52,-4.5 -6.54,-7 -4.24,-5.11 -4.19,-13.17 0.55,-17.86 4.74,-4.689996 13.79,-4.819996 18.28,0.09 4.25,4.63 3.67,11.71 1.47,17.49 -2.2,5.78 -5.76,11.14 -6.85,17.19 -1.09,6.05 1.3,13.39 7.44,15.36 6.14,1.97 12.86,-2.56 15.91,-8.05 6.55,-11.83 6.81,-27.85 20.26,-35.7 13.79,-7.999996 25.73,2.45 21.3,16 -2.1,6.43 -4.89,13.87 0.63,19.12 5.17,4.91 15.08,5.29 23.51,4.53 15.56,-1.4 32.29,-6.17 38.82,-16.54 6.84,-10.86 0.15,-23.35 -3.13,-35.049996 -2.86,-10.21 -2.79,-21.46 4.72,-30.33 7.51,-8.87 24.18,-14.15 36.92,-9.37 12.24,4.58 16.35,16.33 13.64,26.14 -2.71,9.81 -10.61,18.369996 -17.14,27.179996 -6.53,8.81 -11.94,18.84 -9.1,28.64 2.84,9.8 17.1,18.3 30.1,15 9.44,-2.4 14.64,-9.72 17.55,-16.68 2.91,-6.96 4.64,-14.49 10.87,-20.18 9.52,-8.69 23.34,-7.48 28,1.58 5.8,11.19 0,32.37 0,44.47 z" fill-rule="nonzero" fill="rgb(var(--v-theme-primary))"/>
            </g>
        </svg>
      </div>
      <div class="thing" @mouseenter="toFancy()" @mouseleave="toSimple()">
        <span v-for="(theme, index) in themes" :key="index" class="avatar-container">
            <v-avatar @updated="viewThemes('all')" v-if="viewElements.includes(index)" class="theme-option" size="40" @click="toggleTheme(theme.name)" :style="`background-image:linear-gradient(180deg, ${theme.dark.primary} 0%, ${theme.dark.secondary} 80%, ${theme.dark.background} 100%);`">
            <h4 :style="`color: ${theme.dark.secondary}; font-size: 0.8em;`">{{theme.name}}</h4>
            </v-avatar>
        </span>
      </div>
    </div>    
    <v-main style="padding-bottom: 0px">
      <v-row>
        <v-col cols="12">
          <submarinoImg/>
        </v-col>
        <v-col cols="12">
          <calamar-oficinista/>
          
        </v-col>
        <v-col cols="12" style="padding-bottom: 0%;">
          <TheFooter style="width: 100%"/>
        </v-col>
      </v-row>
      
      <!--  -->
      
    </v-main>
  </v-app>
</template>
<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme (themeName) {
  // theme.global.name.value = theme.global.current.value.dark ? 'code3DefaultDark' : 'myCustomLightTheme'
  theme.global.name.value = themeName;
}
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>
<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
import footerImg from "./svg/footerImg.vue";
// import thePortfolio from './thePortfolio.vue';
import calamarOficinista from './svg/calamarOficinista.vue';
import submarinoImg from './svg/submarinoImg.vue';
import colors from 'vuetify/util/colors'
import Lenis from '@studio-freight/lenis'

// import salpicaduraBanner from './svg/salpicaduraBanner.vue';
export default {
  name: 'TheLanding',
  components: {
    TheFooter,
    // thePortfolio,
    TheHeader,
    calamarOficinista,
    submarinoImg,
    footerImg,
    // salpicaduraBanner,
},
  data: () => ({
    menu: false,
    snap: null,
      salpiSmall: null,
      salpiBig: null,
      salpiSmallPoints: null,
      salpiBigPoints: null,
      viewElements: [0],
    themes: [
      {
        name: "code3DefaultDark",
        dark: {
          primary: '#09ffff',
          secondary: colors.blueGrey.lighten2,
          accent: colors.blueGrey.darken3,
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          filledText: colors.green.accent,
          background: '#383838',
          cardBackground: '#383838'
        },
        light: {
          primary: "#22daff",
          accent: "#ff6b99",
          secondary: "#26ff8c",
          success: "#a5d64c",
          info: "#ff53d0",
          warning: "#ff8e00",
          error: "#ff5252",
          background: '#383838',
        }
      },
      {
        name: "blue",
        dark: {
          primary: "#21CFF3",
          accent: "#FF4081",
          secondary: "#21dc79",
          success: "#86af3f",
          info: "#f34fc6",
          warning: "#FB8C00",
          error: "#FF5252",
          background: '#383838',
        },
        light: {
          primary: "#22daff",
          accent: "#ff6b99",
          secondary: "#26ff8c",
          success: "#a5d64c",
          info: "#ff53d0",
          warning: "#ff8e00",
          error: "#ff5252",
          background: '#383838',
        }
      },
      {
        name: "red",
        dark: {
          primary: "#ff0000",
          accent: "#7CB342",
          secondary: "#689F38",
          success: "#4CAF50",
          info: "#6156d8",
          warning: "#1565C0",
          error: "#FF7043",
          background: '#383838',
        },
        light: {
          primary: "#ffa450",
          accent: "#a1e754",
          secondary: "#92de4e",
          success: "#6dff74",
          info: "#7365ff",
          warning: "#2e8ac0",
          error: "#ff5e3c",
          background: '#383838',
        }
      }
    ]
  }),
  mounted() {
    let self = this;
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src =
      "https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js";
    s.onload = function () {
      console.log("Snap is loaded");
      // eslint-disable-next-line no-undef
      self.snap = Snap("#salpicadura");
      self.init();
    };
    document.body.appendChild(s);
  },
  methods: {
    viewThemes(which){
      if (which == "zero") {
        this.viewElements= []
      }
      if (which == "one") {
        this.viewElements= [0]
      }
      if (which == "all") {
        this.viewElements= [0,1,2]
      }
    },
    init() {
        // eslint-disable-next-line no-undef
        this.salpiSmall = Snap.select('#salpi-small');
        // eslint-disable-next-line no-undef
        this.salpiBig = Snap.select('#salpi-big');
        this.salpiSmallPoints = this.salpiSmall.node.getAttribute('d');
        this.salpiBigPoints = this.salpiBig.node.getAttribute('d');

    },
    toFancy (){
        let self = this;
        // self.viewThemes("zero")
        setTimeout(function(){
            // eslint-disable-next-line no-undef
            self.salpiSmall.animate({ d: self.salpiBigPoints }, 1000, mina.backout);
            self.viewThemes("all")
        }, 100);
        
    },
    toSimple (){
       let self = this;
      //  self.viewThemes("zero")
        setTimeout(function(){
            // eslint-disable-next-line no-undef
            self.salpiSmall.animate({ d: self.salpiSmallPoints }, 1000, mina.backout); 
            self.viewThemes("one")
        }, 100);
    }  
  },
};
</script>
<style>
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
#salpicadura { 
    filter: drop-shadow(0px 0px 0.5vw rgb(var(--v-theme-primary)))  brightness(0.7);
    }

.footer-background {
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: cover;
}

.footer-component {
  /* background-image: url(../assets/bckgcode05.svg); */
  background-size: cover;
  padding-top: 10%;
  position: absolute;
  bottom: 0;
  left: 0%;
  background-color: transparent !important;
  opacity: 0;
  z-index: 800;
}
  .theme-option  {
    position:relative;
    margin-top: 5px;
    margin-right: 0.5em;
    /* background-color: rgb(131, 6, 6); */
    box-shadow: 0px 0px 4px black;
    cursor: pointer;
    overflow: hidden;
    /* animation: aparecer 0.5s ease-in-out; */
  }
  .avatar-container {
    animation: aparecer 0.5s ease-in-out;
  }

  .theme-option:hover  {
    animation: grow 0.2s forwards linear;
    }

  @keyframes grow {
    0%  {
        transform: scale(1);
    }
    100%  {
        transform: scale(1.3);
    }
}

  @keyframes aparecer {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      }
  }

  .thing {
    position:absolute;
    top:17%;
    right:0%;
  }

    .thing2 {
    position: sticky;
    top: 30%;
    left: 100%;
     width: 300px;
    height: 400px;
    /* border-radius: 25px; */
    /* box-shadow: 0px 0px 10px rgb(var(--v-theme-primary)); */
    /* background: #73AD21; */
    z-index: 9999;
    /* display: flex; */
  }

  body {
    background-color: var(--v-theme-background);
    }
</style>
