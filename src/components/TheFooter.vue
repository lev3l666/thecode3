<template>
  <div>
    <footerBG class="footerBG"/>
    <v-row>
      <v-col cols="12" sm="6">
        sa1d5fXifbSBOm7mWRvxTii9UukSmwTRy3UWBKXXysaZylh
      </v-col>
      <v-col cols="12" sm="6">
        sa1d5fXifbSBOm7mWRvxTii9UukSmwTRy3UWBKXXysaZylh
      </v-col>
    </v-row>
    <v-row no-gutters>
      <div class="div-container">
          
          <v-divider color="#09ffff" class="divider" vertical></v-divider>
        </div>
      <v-col cols="12" sm="6">
        <fishImg class="fishImg"/>
      </v-col>
      <v-col cols="12" sm="6">
        dfs
      </v-col>
  </v-row>
  </div>
</template>
<script>
// import footerImg from "../assets/bckgcode05.svg"
import footerBG from "./footerBG.vue";
import fishImg from "./fish.vue";
export default {
  name: 'TheFooter',
  components: {
    footerBG,
    fishImg,
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
<style>
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
  position: absolute;
  bottom: 0;
  z-index: 0;
}
.fishImg {
  z-index: 9999;
  position: absolute;
  width: 17%;
  bottom: 10%;
  right: 55%;
  animation: fishHorizontal 1.5s ease-in-out infinite;
}

@keyframes fishHorizontal {
  0%, 100% {
    left: 30%;
  }
  30% {
    left: 25%;
  }
}
</style>
