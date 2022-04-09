<template>
  <div>
    <h1 class="titulo">Estamos construyendo algo genial!</h1>
    <img src="../assets/construction-octopus.svg" alt="Hello there!" class="center">
    <p id="counterText">{{days}}D {{hours}}H<br>
      {{minutes}}M {{seconds}}S</p>
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
.titulo {
  font-size: 2.5em;
  font-weight: bold;
  color: #fff;
  text-align: center;
  top: 10.5vw;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: top ;
  justify-content: center;
  position: absolute;
}

#counterText {
  text-align: center;
  font-size: 2vh;
  color: black;
  text-shadow: 1px 1px 2px black;
  position: absolute;
  top: 20.5vw;
  left: 1.4vw;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: top ; /** Y-axis align **/
  justify-content: center; /** X-axis align **/
  transform: rotate(-15deg);
}
</style>
