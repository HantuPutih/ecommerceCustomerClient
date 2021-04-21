<template>
  <div id="app">
    <!-- v-if="loginState" -->
  <div id="nav-container">
    <b-navbar id="nav" toggleable="lg" variant="light" type="light" fixed="top">
      <b-navbar-brand>
        Alpha Centauri
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- category -->
          <b-nav-item href="#" :to="{name: 'Home'}">Home Product</b-nav-item>
          <b-nav-item href="#" :to="{name: 'Work'}">Work Product</b-nav-item>
          <b-nav-item href="#" :to="{name: 'Others'}">Others</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="loginState" >
          <b-nav-item href="#" :to="{name: 'MyCart'}">My Cart</b-nav-item>
          <b-nav-item  @click.prevent="logoutBtn()"> Logout </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item :to="{name: 'Login'}"> login </b-nav-item>
          <b-nav-item :to="{name: 'Register'}"> Register </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <!-- banner hanya di home work dan other -->
  <div class="banner" v-if="showBanners">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="banner in banners" :key="banner.id">
        <banner :banner="banner"></banner>
      </div>
    </b-carousel>
  <br>
  </div>
    <router-view/>
    <br>
    <br>
    <div class="footer">
      <h5>Copyright &copy; 2021 by Farid Juliano </h5>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Swal from 'sweetalert2'
export default {
  components: { Banner },
  methods: {
    logoutBtn () {
      Swal.fire({
        title: 'Logout?',
        text: 'stay shopping with us :(',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('logout')
          Swal.fire(
            'logged out!',
            'have a nice day!',
            'success'
          )
        }
      })
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: {
    loginState () {
      return this.$store.state.loginState
    },
    banners () {
      return this.$store.state.banners
    },
    showBanners () {
      return this.$store.state.showBanners
    }
  },
  created () {
    this.$store.dispatch('getAllBanners')
  }
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 53px;
  background-color: grey;
  color: white;
  text-align: center;
}
.footer h5 {
  text-align: center;
  justify-content: center;
  padding: 15px;
  color: black
}
.carousel-item img {
  height:75vh!important ;
}

.flex-container{
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container-my-cart, .container-home, .container-work, .container-other {
  background-color: #f2f2f0;
  /* width: 1100px; */
  margin: 0% auto;
  box-shadow: 1px 34px 68px 3px rgba(0,0,0,0.58);
  -webkit-box-shadow: 1px 34px 68px 3px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 34px 68px 3px rgba(0,0,0,0.58);
  border-radius: 10px;
}

.container-home{
  background-color: #c2e2c3
}
.container-work {
  background-color: #ABD7EB !important
}

.container-other {
  background-color: #ececec !important
}

.cards{
  /* background-color: lightgray; */
  padding: 20px 20px;
}

.title-prod{
  text-align: center;
  justify-content: center
}

#nav-container{
  margin-bottom: 60px;
}
#nav{
  box-shadow: 1px 1px 20px -6px rgba(0,0,0,0.73);
  -webkit-box-shadow: 2px 6px 26px -6px rgba(0,0,0,0.73);
  -moz-box-shadow: 2px 6px 26px -6px rgba(0,0,0,0.73);
}

/* BASIC */
#login {
  width: 480px;
}

body {
font-family: "Poppins", sans-serif;
background-image: url('./assets/back.jpg');
background-attachment: fixed;
/* height: 100%; */
}

a {
color: #92badd;
display:inline-block;
text-decoration: none;
font-weight: 400;
}

h2 {
text-align: center;
font-size: 16px;
font-weight: 600;
text-transform: uppercase;
display:inline-block;
margin: 40px 8px 10px 8px;
color: #cccccc;
}

/* STRUCTURE */

.wrapper {
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
min-height: 100%;
padding-top: 30px;
}

#formContent {
  background-color: #f2f2f0;
-webkit-border-radius: 10px 10px 10px 10px;
border-radius: 10px 10px 10px 10px;
/* background: #fff; */
padding: 30px;
width: 90%;
max-width: 600px;
position: relative;
padding: 0px;
-webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
text-align: center;
}

#formFooter {
background-color: #f6f6f6;
border-top: 1px solid #dce8f1;
padding: 25px;
text-align: center;
-webkit-border-radius: 0 0 10px 10px;
border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
color: #cccccc;
}

h2.active {
color: #0d0d0d;
border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
background-color: #56baed;
border: none;
color: white;
padding: 15px 80px;
text-align: center;
text-decoration: none;
display: inline-block;
text-transform: uppercase;
font-size: 13px;
-webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
-webkit-border-radius: 5px 5px 5px 5px;
border-radius: 5px 5px 5px 5px;
margin: 5px 20px 40px 20px;
-webkit-transition: all 0.3s ease-in-out;
-moz-transition: all 0.3s ease-in-out;
-ms-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
-moz-transform: scale(0.95);
-webkit-transform: scale(0.95);
-o-transform: scale(0.95);
-ms-transform: scale(0.95);
transform: scale(0.95);
}

input[type=email], input[type=password]  {
background-color: #f6f6f6;
border: none;
color: #0d0d0d;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 5px;
width: 85%;
border: 2px solid #f6f6f6;
-webkit-transition: all 0.5s ease-in-out;
-moz-transition: all 0.5s ease-in-out;
-ms-transition: all 0.5s ease-in-out;
-o-transition: all 0.5s ease-in-out;
transition: all 0.5s ease-in-out;
-webkit-border-radius: 5px 5px 5px 5px;
border-radius: 5px 5px 5px 5px;
}

input[type=email]:focus, input[type=password]:focus {
background-color: #fff;
border-bottom: 2px solid #5fbae9;
}

input[type=text]:placeholder {
color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
-webkit-animation-name: fadeInDown;
animation-name: fadeInDown;
-webkit-animation-duration: 1s;
animation-duration: 1s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
0% {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
100% {
opacity: 1;
-webkit-transform: none;
transform: none;
}
}

@keyframes fadeInDown {
0% {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
100% {
opacity: 1;
-webkit-transform: none;
transform: none;
}
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
opacity:0;
-webkit-animation:fadeIn ease-in 1;
-moz-animation:fadeIn ease-in 1;
animation:fadeIn ease-in 1;

-webkit-animation-fill-mode:forwards;
-moz-animation-fill-mode:forwards;
animation-fill-mode:forwards;

-webkit-animation-duration:1s;
-moz-animation-duration:1s;
animation-duration:1s;
}

.fadeIn.first {
-webkit-animation-delay: 0.4s;
-moz-animation-delay: 0.4s;
animation-delay: 0.4s;
}

.fadeIn.second {
-webkit-animation-delay: 0.6s;
-moz-animation-delay: 0.6s;
animation-delay: 0.6s;
}

.fadeIn.third {
-webkit-animation-delay: 0.8s;
-moz-animation-delay: 0.8s;
animation-delay: 0.8s;
}

.fadeIn.fourth {
-webkit-animation-delay: 1s;
-moz-animation-delay: 1s;
animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
display: block;
left: 0;
bottom: -10px;
width: 0;
height: 2px;
background-color: #56baed;
content: "";
transition: width 0.2s;
}

.underlineHover:hover {
color: #0d0d0d;
}

.underlineHover:hover:after{
width: 100%;
}

/* OTHERS */

*:focus {
outline: none;
}

#icon {
width:60%;
}

</style>
