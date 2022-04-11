<template>
  <div>
    <h1 class="title">Estamos construyendo algo genial!</h1>
   <div id="octopus">
      <img src="../assets/construction-octopus.svg" alt="Hello there!" >
      <p id="octopus-text">{{days}}D {{hours}}H<br>
        {{minutes}}M {{seconds}}S</p>
   </div>
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
@import url('https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100;400&display=swap');

html {
  background: url('../assets/construction-background.svg') no-repeat center center !important;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-color: rgb(28, 28, 28) !important;
}
#octopus {
  display: inline-block;
  position: relative;
  /* this will center the image in the container */
  margin: 0 auto;
  width: 100%;
}
.title {
  font-family: 'Anek Tamil', sans-serif;
  font-size: 4.5vw;
  font-weight: 100;
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

#octopus-text {
  font-family: 'Anek Tamil', sans-serif;
  text-align: center;
  font-size: 1.4vw;
  color: black;
  text-shadow: 1px 1px 2px black;
  position: absolute;
  top: 19.8vw;
  left: 1.5vw;
  width: 100%;
  height: 100%;
  transform: rotate(-14deg);
}
</style>
