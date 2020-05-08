<template>
  <div id="app">
    <SiteNotice/>
    <Navigation :navLevelZeroData=navLevelZeroData :navLevelOneData=navLevelOneData :navLevelTwoData=navLevelTwoData />
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
  },
  data () {
    return {  
      navLevelZeroData : [
        {
        id: 1, 
        title: "Men", 
        titleColor: "#4D4D4D", 
        titleUrl: "/mens-underwear", 
        },
        {id: 2, title: "Women"},
        {id: 3, title: "Gift Guide"},
        {id: 4, title: "Underwear"}
      ],
      navLevelOneData: [
        {
          id: 1,
          parentTitle: "Men", 
          title: "Underwear", 
          titleHoverColor: "#587679", 
          titleUrl: "/underwear", 
          mobileImage:"", 
          desktopImage:"", 
        },
        {
          id: 2,
          parentTitle: "Men", 
          title: "Undershirts", 
          titleHoverColor: "#587679", 
          titleUrl: "/Undershirts", 
          mobileImage:"", 
          desktopImage:"", 
        }
      ],
      navLevelTwoData: [
        {
          id: 1,
          parentTitle: "Underwear",
          title: "Brief",
          titleUrl: "/mens-underwear-brief",
          mobileImage:"",
          desktopImage: "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=130",
          doubleDesktopImage: "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
        },
        {
          id: 2,
          parentTitle: "Underwear",
          title: "Trunks",
          titleUrl: "/mens-underwear-trunk",
          mobileImage:"",
          desktopImage:"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          doubleDesktopImage: "https://tjproduction.imgix.net/products/Pack1.jpg?w=260"
        }
      ]
    }
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
