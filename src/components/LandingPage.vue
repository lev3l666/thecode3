<template>
  <v-app id="inspire">

    <v-main style="padding-bottom: 0px">
      <v-row>
        <!-- <v-col cols="12">
          <TheHeader/>
        </v-col>
        <v-col cols="12">
          <thePortfolio/>
        </v-col> -->
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
export default {
  name: 'TheLanding',
  components: {
    TheFooter,
    // thePortfolio,
    // TheHeader,
    calamarOficinista
},
  data() {
    return {
      days: 30,
      drawer: null,
    };
  },
  mounted() {
  },
  methods: {
    test() {
    },
  },
};
</script>
