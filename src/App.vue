<template>
  <div id="app">
    <SiteNotice/>
    <Navigation :navData="navData" />
    <img alt="Tommy John Hero" src="./assets/images/home-hero-sample.png" style="width: 100%;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>

import {client} from './lib/sanity.js';
import SiteNotice from './components/SiteNotice.vue';
import Navigation from './components/Navigation.vue';
import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'App',
  components: {
    SiteNotice,
    Navigation,
    HelloWorld,
  },
  data () {
    return {
      navData: [],
    }},
  mounted() {
    const queryString = "*[_type=='navigation' && isNavLive == true]";
    client.fetch(queryString).then(data => {
      console.log('data', data);
      this.navData = data[0].navigationType;
    }).catch( error => {console.log(error)});
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
