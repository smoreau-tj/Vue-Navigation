<template>
  <div>
    <HeroModule
      :moduleData="modulesData.hero"
     />
    <FixedBannerModule />
    <SideBySideModule />
    <ThreePanelModule />
  </div>
</template>

<script>
import HeroModule from '../modules/hero.vue'
import FixedBannerModule from '../modules/fixed-banner.vue'
import SideBySideModule from '../modules/side-by-side.vue'
import ThreePanelModule from '../modules/three-panel.vue'


export default {
  name:"LandingPage",
  components: {
    HeroModule,
    FixedBannerModule,
    SideBySideModule,
    ThreePanelModule
  },
  mounted() {
    // const queryString = "*[_type=='navigation' && isNavLive == true]";
    // client(this.$store.getters.getNavEnvironment).fetch(queryString).then(data => {
    // }).catch( error => {console.log(error)});
   
  },
  data () {
    return {
      modulesData: {
        hero: {
          contentAlignment: "left",
          paddingLeft: '48px',
          paddingRight: '48px',
          imageData: {
            href: "/image-link",
            mobileUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/6Bs7Vjnxr3xMBa8oVe8XDq/aebdcb3f414721b55af06eaa75a5e4a3/Hero_3_4.jpg",
            desktopUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/2jFgcklsE9PTFo1ifaogE2/4c96c6aa36462d01a647aea129a1e134/Hero_16_7.jpg",
            altText:"Tommy John Underwear"
          },
          titleData:{
            text:"Lorem Ipsum",
            mobileColor: "#FFFFFF",
            mobileFont: "Basetica",
            desktopDropShadow: true,
            desktopColor: "#4D4D4D",
            desktopFont: "Basetica",
          },
          subtitleData:{
            text:"Lorem ipsum dolor sit amet, consectetur ipiscing elit.",
            mobileHide: true,
            mobileColor: "#00424a",
            mobileFont: "Basetica",
            desktopColor: "#FFFFFF",
            desktopFont: "Basetica",
            desktopHide: false
          },
          ctaData: {
            cta1: {
              text:"CTA 1",
              href:"/cta-1",
              stackCtas: false,
              mobileBackgroundColor:"#FFFFFF",
              mobileColor: "#4D4D4D",
              mobileBorderColor: "#4D4D4D",
              desktopBackgroundColor:"#00424a",
              desktopColor: "#FFFFFF",
              desktopBorderColor: "#00424a",
            },
            cta2: {
              text:"CTA 2",
              href:"/cta-2",
              stackCtas: false,
              mobileBackgroundColor:"#4D4D4D",
              mobileColor: "#FFFFFF",
              mobileBorderColor: "#4D4D4D",
              desktopBackgroundColor:"#FFFFFF",
              desktopColor: "#00424a",
              desktopBorderColor: "#00424a",
            },
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>