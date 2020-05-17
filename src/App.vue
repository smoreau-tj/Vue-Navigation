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
        "mobileImage":"https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=130", 
        "desktopImage":"",
        "backgroundColor": "#24A3E3",
        "isFirstDoubleWide": true, 
        "levelTwoCats": [
          {
            "title": "Brief",
            "titleUrl": "/mens-underwear-brief",
            "mobileImage":"",
            "desktopImage": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=130",
            "doubleDesktopImage": "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
          },
          {
            "title": "Trunks",
            "titleUrl": "/mens-underwear-trunk",
            "mobileImage":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
            "desktopImage":"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
            "doubleDesktopImage": "https://tjproduction.imgix.net/products/Pack1.jpg?w=260"
          }
        ]
      },
      {
        "title": "Undershirts", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/Undershirts", 
        "mobileImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tanks.jpg?v=1589743701", 
        "desktopImage":"",
        "levelTwoCats": [
          {
            "title": "Tanks",
            "titleUrl": "/mens-lounge-shirts",
            "mobileImage":"",
            "desktopImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tanks.jpg?v=1589743701",
            "doubleDesktopImage": ""
          }
        ]
      },
      {
        "title": "Loungewear", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/loungewear", 
        "mobileImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/lounge.jpg?v=1589743701", 
        "desktopImage":"",
        "levelTwoCats": [
          {
            "title": "Lounge Pants",
            "titleUrl": "/mens-lounge-pants",
            "mobileImage":"",
            "desktopImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/lounge.jpg?v=1589743701",
            "doubleDesktopImage": ""
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
        "mobileImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701", 
        "desktopImage":"",
        "backgroundColor": "#24A3E3",
        "isFirstDoubleWide": false, 
          "levelTwoCats": [
          {
            "title": "Bralette",
            "titleUrl": "/womens-brallete",
            "mobileImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
            "desktopImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/bra.jpg?v=1589743701",
            "doubleDesktopImage": ""
          }
        ] 
      },
      {
        "title": "Underwear", 
        "titleHoverColor": "#587679", 
        "titleUrl": "/womens-underwear", 
        "mobileImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/w-underwear.jpg?v=1589744069", 
        "desktopImage":"",
          "levelTwoCats": [
          {
            "title": "Boyshort",
            "titleUrl": "/womens-brallete",
            "mobileImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
            "desktopImage":"https://cdn.shopify.com/s/files/1/0019/1466/7055/files/boyshort.jpg?v=1589744069",
            "doubleDesktopImage": ""
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
      // navLevelZeroData : [
      //   {
      //   id: 1, 
      //   title: "Men", 
      //   titleColor: "#4D4D4D", 
      //   titleUrl: "/mens-underwear", 
      //   },
      //   {id: 2, title: "Women"},
      //   {id: 3, title: "Gift Guide"},
      //   {id: 4, title: "Underwear"}
      // ],
      // navLevelOneData: [
      //   {
      //     id: 1,
      //     parentId: 1, 
      //     title: "Underwear", 
      //     titleHoverColor: "#587679", 
      //     titleUrl: "/underwear", 
      //     mobileImage:"", 
      //     desktopImage:"", 
      //   },
      //   {
      //     id: 2,
      //     parentId: 1, 
      //     title: "Undershirts", 
      //     titleHoverColor: "#587679", 
      //     titleUrl: "/Undershirts", 
      //     mobileImage:"", 
      //     desktopImage:"", 
      //   },
      //   {
      //     id: 3,
      //     parentId: 2, 
      //     title: "Bras", 
      //     titleHoverColor: "#587679", 
      //     titleUrl: "/Bras", 
      //     mobileImage:"", 
      //     desktopImage:"", 
      //   }
      // ],
      // navLevelTwoData: [
      //   {
      //     id: 1,
      //     parentId: 1,
      //     title: "Brief",
      //     titleUrl: "/mens-underwear-brief",
      //     mobileImage:"",
      //     desktopImage: "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=130",
      //     doubleDesktopImage: "https://tjproduction.imgix.net/products/M_10000131000_400007P_S_grande_b753719b-4d9b-4ef7-a698-269cdddb25e2.jpg?w=260"
      //   },
      //   {
      //     id: 2,
      //     parentId: 1,
      //     title: "Trunks",
      //     titleUrl: "/mens-underwear-trunk",
      //     mobileImage:"",
      //     desktopImage:"https://tjproduction.imgix.net/products/Pack1.jpg?w=130",
      //     doubleDesktopImage: "https://tjproduction.imgix.net/products/Pack1.jpg?w=260"
      //   },
      //   {
      //     id: 3,
      //     parentId: 2,
      //     title: "Loung Shirts",
      //     titleUrl: "/mens-lounge-shirts",
      //     mobileImage:"",
      //     desktopImage:"",
      //     doubleDesktopImage: ""
      //   },
      // ]
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
