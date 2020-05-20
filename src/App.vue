<template>
  <div id="app">
    <SiteNotice/>
    <!-- <Navigation :navLevelZeroData=navLevelZeroData :navLevelOneData=navLevelOneData :navLevelTwoData=navLevelTwoData /> -->
    <Navigation :navData=navData />

    <img alt="Tommy John Hero" src="./assets/images/home-hero-sample.png" style="width: 100%;">
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
      "navData" : [
  {
    "title": "Men", 
    "titleColor": "#4D4D4D", 
    "titleUrl": "/mens-underwear",
    "hideCollection": false,
    "clickableText": true, 
    "levelOneCats": [
      {
        "title": "Underwear", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/underwear", 
        "image":"https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=130", 
        "backgroundColor": "#24A3E3",
        "isFirstDoubleWide": true, 
        "levelTwoCats": [
          {
            "title": "Brief",
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Trunks",
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          },
          {
            "title": "Boxer Briefs",
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Number Four",
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          },
          {
            "title": "Number Five",
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Number 6",
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          },
          {
            "title": "Number 7",
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Number 8",
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          }
        ]
      },
      {
        "title": "Undershirts", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/Undershirts", 
        "image":"", 
        "isFirstDoubleWide": false, 
        "levelTwoCats": [
          {
            "title": "Tanks",
            "titleUrl": "/mens-lounge-shirts",
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tanks.jpg?v=1589743701",
          }
        ]
      },
      {
        "title": "Loungewear", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/loungewear", 
        "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/lounge.jpg?v=1589743701", 
        "isFirstDoubleWide": false, 
        "levelTwoCats": [
          {
            "title": "Lounge Pants",
            "titleUrl": "/mens-lounge-pants",
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/lounge.jpg?v=1589743701",
            
          }
        ]
      }
    ]
  },
  {
    "title": "Women",
    "titleUrl": "/womens-all",
    "hideCollection": false,
    "clickableText": true,
    "levelOneCats": [
      {
        "title": "Bras", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/Bras", 
        "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701", 
        "backgroundColor": "#24A3E3",
        "isFirstDoubleWide": false, 
          "levelTwoCats": [
          {
            "title": "Bralette",
            "titleUrl": "/womens-brallete",
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          }
        ] 
      },
      {
        "title": "Underwear", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/womens-underwear", 
        "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/w-underwear.jpg?v=1589744069", 
        "isFirstDoubleWide": false, 
        "levelTwoCats": [
          {
            "title": "Boyshort",
            "titleUrl": "/womens-brallete",
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          }
        ] 
      }
    ]
  },
  {
    "title": "Gift Guide"
  },
  {
    "title": "Underwear"
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
