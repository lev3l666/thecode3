<template>
  <v-app id="inspire">
    <table class="thing">
      <tr v-for="(theme, index) in themes" :key="index" >
        <td>
          <v-avatar class="theme-option" size="40" @click="changeTheme(theme)" :style="`background-color:${theme.dark.primary};`">
            <div class="white--text text-h5">{{ index }}</div>
          </v-avatar>
        </td>
      </tr>
      
    </table>
    <v-main style="padding-bottom: 0px">
      <v-row>
        <!-- <v-col cols="12">
          <TheHeader/>
        </v-col>
        <v-col cols="12">
          <thePortfolio/>
        </v-col> -->
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

<script>
// import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
// import thePortfolio from './thePortfolio.vue';
import calamarOficinista from './svg/calamarOficinista.vue';
import submarinoImg from './svg/submarinoImg.vue';
import colors from 'vuetify/es5/util/colors'
export default {
  name: 'TheLanding',
  components: {
    TheFooter,
    // thePortfolio,
    // TheHeader,
    calamarOficinista,
    submarinoImg,
},
  data: () => ({
    menu: false,
    themes: [
      {
        name: "Code3",
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
          error: "#ff5252"
        }
      },
      {
        name: "Theme 1",
        dark: {
          primary: "#21CFF3",
          accent: "#FF4081",
          secondary: "#21dc79",
          success: "#86af3f",
          info: "#f34fc6",
          warning: "#FB8C00",
          error: "#FF5252"
        },
        light: {
          primary: "#22daff",
          accent: "#ff6b99",
          secondary: "#26ff8c",
          success: "#a5d64c",
          info: "#ff53d0",
          warning: "#ff8e00",
          error: "#ff5252"
        }
      },
      {
        name: "Theme 2",
        dark: {
          primary: "#ff0000",
          accent: "#7CB342",
          secondary: "#689F38",
          success: "#4CAF50",
          info: "#6156d8",
          warning: "#1565C0",
          error: "#FF7043"
        },
        light: {
          primary: "#ffa450",
          accent: "#a1e754",
          secondary: "#92de4e",
          success: "#6dff74",
          info: "#7365ff",
          warning: "#2e8ac0",
          error: "#ff5e3c"
        }
      }
    ]
  }),
  mounted() {
  },
  methods: {
    changeTheme(theme) {
      // close menu
      this.menu = false;
      const name = theme.name;
      const dark = theme.dark;
      const light = theme.light;
      // set themes
      Object.keys(dark).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = dark[i];
      });
      Object.keys(light).forEach(i => {
        this.$vuetify.theme.themes.light[i] = light[i];
      });
      // also save theme name to disable selection
      this.$vuetify.theme.themes.name = name;
    },
  },
};
</script>
<style>

.footer-component {
  /* background-image: url(../assets/bckgcode05.svg); */
  background-size: cover;
  padding-top: 10%;
  position: absolute;
  bottom: 0;
  left: 10%;
  z-index: 800;
}
  .theme-option  {
    position:relative;
    margin-top: 5px;
    /* background-color: rgb(131, 6, 6); */
    box-shadow: 0px 0px 4px black;
    cursor: pointer;
  }

  .thing {
    position: sticky;
    top: 50%;
    left: 100%;
    width: 50px;
    height: 100%;
    background-color: var(--v-primary-base);
    border-radius: 25px;
    box-shadow: 0px 0px 10px var(--v-primary-base);
    /* background: #73AD21; */
    z-index: 9999;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
  }

  body {
    /* margin: 0;
    padding: 0;
    width: 100%;
    height: 100%; */
    background-color: var(--v-background-base);
    }
</style>
