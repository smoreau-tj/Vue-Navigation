<template>
  <div id="app">
    <SiteNotice/>
    <Navigation/>
    <img alt="Tommy John Hero" src="./assets/images/home-hero-sample.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SiteNotice from './components/SiteNotice.vue'
import Navigation from './components/Navigation.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    SiteNotice,
    Navigation,
    HelloWorld,
  }
}
</script>

<style>
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
