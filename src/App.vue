<template>
  <div id="app">
    <OnConstruction/>
  </div>
</template>

<script>
import OnConstruction from './components/OnConstruction.vue';

export default {
  name: 'App',
  components: {
    OnConstruction,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
