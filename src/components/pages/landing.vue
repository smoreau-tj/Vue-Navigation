<template>
  <div><h1><strong>Landing Page</strong></h1>
    <HeroModule />
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
        moduleName: "Hero",
        moduleData: {
          contentAlignment: "left",
          imageData: {
            href: "/image-link",
            mobileUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/6Bs7Vjnxr3xMBa8oVe8XDq/aebdcb3f414721b55af06eaa75a5e4a3/Hero_3_4.jpg",
            desktopUrl:"./assets/images/home-hero-sample.png",
            altText:"Tommy John Underwear"
          },
          titleData:{
            text:"Lorem Ipsum",
            dropShadow: true,
            mobileColor: "#FFFFFF",
            mobileFont: "Basetica-Bold",
            desktopColor: "#4D4D4D",
            desktopFont: "Basetica",
          },
          subTitleData:{
            text:"Lorem ipsum dolor sit amet, consectetur ipiscing elit.",
            mobileColor: "#00424a",
            mobileFont: "Basetica",
            desktopColor: "#FFFFFF",
            desktopFont: "Basetica-Bold",
          },
          ctaData: {
            stackCtas: false,
            cta1: {
              type: "skeleton",
              text:"CTA 1",
              href:"/cta-1",
              mobileBackgroundColor:"#FFFFFF",
              mobileColor: "#4D4D4D",
              mobileBorderColor: "#4D4D4D",
              desktopBackgroundColor:"#00424a",
              desktopColor: "#FFFFFF",
              desktopBorderColor: "#00424a",
            },
            cta2: {
              type: "skeleton",
              text:"CTA 2",
              href:"/cta-2",
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