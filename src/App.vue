<template>
  <div id="app">
    <SiteNotice/>
    <Navigation />
    <LandingPage />
    
    <!-- <img alt="Tommy John Hero" src="./assets/images/home-hero-sample.png" style="width: 100%;"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>


<script>

// import {client} from './lib/sanity.js';
import SiteNotice from './components/SiteNotice.vue';
import Navigation from './components/Navigation.vue';
import LandingPage    from './components/pages/landing.vue'
// import HelloWorld from './components/HelloWorld.vue';



export default {
  name: 'App',
  components: {
    SiteNotice,
    Navigation,
    LandingPage,
    // HelloWorld,
  }
}

</script>

<style lang="scss">


body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
