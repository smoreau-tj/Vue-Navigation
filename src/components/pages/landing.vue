<template>
  <div>
    <HeroModule
      :moduleData="modulesData.hero"
     />
    <FixedBannerModule
      :moduleData="modulesData.fixedBanner"
    />
    <SideBySideModule
      :moduleData="modulesData.sideBySide"
   />
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
              text:"Hero CTA 1",
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
              text:"Hero CTA 2",
              href:"/cta-2",
              stackCtas: true,
              mobileBackgroundColor:"#4D4D4D",
              mobileColor: "#FFFFFF",
              mobileBorderColor: "#4D4D4D",
              desktopBackgroundColor:"#FFFFFF",
              desktopColor: "#00424a",
              desktopBorderColor: "#00424a",
            },
          }
        },
        fixedBanner: {
          contentAlignment: "right",
          mobileUnderImage: false,
          desktopUnderImage: true,
          imageData: {
            href: "/image-link",
            mobileUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/5kazCVxwlxbv0CKQmMmtQX/7575bd9445277225dd59c5f6cdcfe462/Screen_Shot_2019-11-12_at_4.41.55_PM.png",
            desktopUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/1R4iLotc1Z2o3hb7K90Qz1/05b7793771739724552df68d82958c2a/Banner_16_7.png",
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
            desktopColor: "#4D4D4D",
            desktopFont: "Basetica",
            desktopHide: false
          },
          ctaData: {
            cta1: {
              text:"Banner CTA 1",
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
              text:"Banner CTA 2",
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
        },
        sideBySide: {
          side1: {
            contentAlignment: "right",
            mobileUnderImage: false,
            desktopUnderImage: true,
            imageData: {
              href: "/image-link",
              mobileUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/3G8wFRVOhTtK7d5tS2Id0Z/c7eb76e5a5c55e0a6508ba25beffbad2/Left_Side.png",
              desktopUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/3G8wFRVOhTtK7d5tS2Id0Z/c7eb76e5a5c55e0a6508ba25beffbad2/Left_Side.png",
              altText:"Tommy John Underwear"
            },
            titleData:{
              text: "NYE Dressing",
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
              desktopColor: "#4D4D4D",
              desktopFont: "Basetica",
              desktopHide: false
            },
            ctaData: {
              cta1: {
                text:"Side 1 CTA 1",
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
                text:"Side 1 CTA 2",
                href:"/cta-2",
                stackCtas: false,
                mobileBackgroundColor:"#4D4D4D",
                mobileColor: "#FFFFFF",
                mobileBorderColor: "#4D4D4D",
                desktopBackgroundColor:"#FFFFFF",
                desktopColor: "#00424a",
                desktopBorderColor: "#00424a",
              }
            }
          },
          side2: {
            contentAlignment: "right",
            mobileUnderImage: false,
            desktopUnderImage: true,
            imageData: {
              href: "/image-link",
              mobileUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/1PClV52g9XwIwyz4knaYnM/3072a66bae5e1069293c542ae4e10ce3/Right_Side.png",
              desktopUrl:"https://images.ctfassets.net/d2y5sh3u3ysc/1PClV52g9XwIwyz4knaYnM/3072a66bae5e1069293c542ae4e10ce3/Right_Side.png",
              altText:"Tommy John Underwear"
            },
            titleData:{
              text: "Leggings Draft",
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
              desktopColor: "#4D4D4D",
              desktopFont: "Basetica",
              desktopHide: false
            },
            ctaData: {
              cta1: {
                text:"Side 2 CTA 1",
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
                text:"Side 2 CTA 2",
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
}
</script>

<style lang="scss" scoped>

</style>