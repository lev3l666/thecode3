<template>
  <div id="ew">
    <img src="../assets/construction-octopus.svg" alt="Hello there!" class="center">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style>
html {
  background: url('../assets/construction-background.svg') no-repeat center center !important;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-color: rgb(28, 28, 28) !important;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
