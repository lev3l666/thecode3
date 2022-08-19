<template>
  <v-app id="inspire">

    <v-main>
      <!--  -->
      <TheFooter/>
    </v-main>
  </v-app>
</template>

<script>
import TheFooter from './TheFooter.vue';
export default {
  name: 'TheLanding',
  components: {
    TheFooter,
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
