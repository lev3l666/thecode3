<template>
 <div>
  <logo-img class="logo-img" style="z-index: 100;"/>
  <pulpo-lineal class="pulpo-lineal" style="position: absolute; z-index: 0;"/>
 </div>
</template>
<script>
import logoImg from './svg/logoImg.vue';
import pulpoLineal from './svg/pulpoLineal.vue';

export default {
  name: 'TheHeader',
  components: {
    logoImg,
    pulpoLineal
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
  body {
    height: 100%;
  }
  div {
    position: relative; display: grid; place-items: center;
  }
</style>
