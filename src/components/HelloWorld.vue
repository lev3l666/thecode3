<template>
  <div>
  <h1 class="title">¡Estamos construyendo algo genial!</h1>
  <div id="octopus">
    <img src="../assets/construction-octopus.svg" alt="Hello there!" >
    <p id="octopus-text">{{days}}D {{hours}}H<br>
      {{minutes}}M {{seconds}}S</p>
  </div>
  <a href="https://api.whatsapp.com/send?phone=573135469034&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
  </a>
  <a href="https://www.instagram.com/thec0de3/" class="float instagram" target="_blank">
    <i class="fa fa-instagram my-float instagram"></i>
  </a>
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
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');

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
.float{
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:black;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 2px 2px 3px rgb(26,204,206);
  z-index:100;
}

.my-float{
  margin-top:16px;
}

.instagram {
  background-color: #E1306C !important;
  right: 120px !important;
}

</style>
