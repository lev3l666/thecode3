<template>
  <div id="app">
    <footerBG/>
  </div>
</template>
<script>
// import footerImg from "../assets/bckgcode05.svg"
import footerBG from "./footerBG.vue";
export default {
  name: 'TheFooter',
  components: {
    footerBG,
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
</style>
