<template>
  <div id="ew">
    <img src="../assets/construction-octopus.svg" alt="Hello there!" class="center">
    <h1>Days: {{days}}</h1>
    <h1>minutes: {{minutes}}</h1>
    <h1>seconds: {{seconds}}</h1>
    <h1>hours: {{hours}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      days: 30,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countDownDate: '',
      now: '',
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.countDownDate = new Date('May 31, 2022 23:59:59').getTime();
      setInterval(() => {
        this.now = new Date().getTime();
        const distance = this.countDownDate - this.now;
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },
  },
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

#contador {
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
}
</style>
