<template>
  <div id="app">
    <SiteNotice/>
    <Navigation :navData=navData />
    <img alt="Tommy John Hero" src="./assets/images/home-hero-sample.png" style="width: 100%;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
// import client from './lib/sanity.js';
import SiteNotice from './components/SiteNotice.vue';
import Navigation from './components/Navigation.vue';
import HelloWorld from './components/HelloWorld.vue';

require ('dotenv').config();

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: "",
  dataset: 'poc',
  token: "", 
  useCdn: true 
})

console.log('process.env', process.env.ACCESS_TOKEN);

const queryString = "*[_type=='navigation']";

client.fetch(queryString).then(data => {
  console.log('sanity data', data);
});


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
    "titleColor": "#4d4d4d", 
    "titleUrl": "/mens-underwear",
    "hideCollection": false,
    "clickableText": false, 
    "levelOneCats": [
      {
        "title": "Underwear", 
        "titleColor": "#4D4D4D", 
        "titleUrl": "/underwear",
        "hideNavItem": false,
        "image":"https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=130",
        "backgroundColor": "#f5f5f5",
        "isFirstDoubleWide": true, 
        "levelTwoCats": [
          {
            "title": "Brief",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-brief",
            "image": "https://cdn.shopify.com/s/files/1/0019/1466/7055/files/doublewide_jpg.png?v=1590009580"
          },
          {
            "title": "Trunks",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          },
          {
            "title": "Boxer Briefs",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Number Four",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          },
          {
            "title": "Number Five",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Number 6",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          },
          {
            "title": "Number 7",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-brief",
            "image": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Number 8",
            "hideNavItem": false,
            "titleUrl": "/mens-underwear-trunk",
            "image":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
          }
        ]
      },
      {
        "title": "Undershirts", 
        "titleColor": "#4D4D4D",
        "backgroundColor": "#f5f5f5", 
        "titleUrl": "/Undershirts", 
        "image":"",
        "hideNavItem": false, 
        "isFirstDoubleWide": false, 
        "levelTwoCats": [
          {
            "title": "Tanks",
            "hideNavItem": false,
            "titleUrl": "/mens-lounge-shirts",
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tanks.jpg?v=1589743701",
          }
        ]
      },
      {
        "title": "Loungewear", 
        "titleColor": "#4D4D4D",
        "backgroundColor": "#f5f5f5", 
        "titleUrl": "/loungewear", 
        "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/lounge.jpg?v=1589743701", 
        "hideNavItem": false,
        "isFirstDoubleWide": false, 
        "levelTwoCats": [
          {
            "title": "Lounge Pants",
            "hideNavItem": false,
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
    "titleColor": "#4D4D4D", 
    "hideCollection": false,
    "clickableText": true,
    "levelOneCats": [
      {
        "title": "Bras", 
        "titleColor": "#4D4D4D", 
        "titleUrl": "/Bras", 
        "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701", 
        "backgroundColor": "#f5f5f5",
        "hideNavItem": false,
        "isFirstDoubleWide": false, 
          "levelTwoCats": [
          {
            "title": "Bralette",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          },
          {
            "title": "Bras 2",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          },
          {
            "title": "Bras 3",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          },
          {
            "title": "Bras 4",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          },
          {
            "title": "Bras 5",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          },
          {
            "title": "Bras 6",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          },
          {
            "title": "Bras 7",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
          }
        ] 
      },
      {
        "title": "Underwear", 
        "titleColor": "#4D4D4D",
        "backgroundColor": "#f5f5f5", 
        "titleUrl": "/womens-underwear", 
        "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/w-underwear.jpg?v=1589744069", 
        "hideNavItem": false,
        "isFirstDoubleWide": false, 
        "levelTwoCats": [
          {
            "title": "Boyshort",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 2",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 3",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 4",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 5",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 6",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 7",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
          {
            "title": "Underwear 8",
            "titleUrl": "/womens-brallete",
            "hideNavItem": false,
            "image":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
          },
        ] 
      }
    ]
  },
  {
    "title": "Gift Guide",
    "titleColor": "#4D4D4D", 
    "titleUrl": "/mens-underwear",
    "hideCollection": false,
    "clickableText": false,
    "levelOneCats": []

  },
  {
    "title": "Underwear",
    "titleColor": "#4D4D4D", 
    "titleUrl": "/mens-underwear",
    "hideCollection": false,
    "clickableText": false,
    "levelOneCats": [] 
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
