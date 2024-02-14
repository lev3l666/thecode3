<template>
  <v-app>
    <v-main>
      <theLanding/>
    </v-main>
  </v-app>
</template>

<script>
import TheLanding from './components/LandingPage.vue';

export default {
  name: 'App',

  components: {
    TheLanding,
  },

  data: () => ({
    //
  }),
};
</script>

