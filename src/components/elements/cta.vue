<template>
<a 
  :href="elementData.url" 
  class="vue-cta"
  :style="cssVars"
  type="button"
>  
  {{elementData.text}}
</a>
</template>

<script>
export default {
  name:"CtaElement",
    props: {
    elementData: Object
  },
  computed: {
    cssVars () {
      return {
        '--mobile-color': this.elementData.textColorMobile ? this.elementData.textColorMobile.hex : '#4D4D4D',
        '--mobile-font': this.elementData.mobileFont ? this.elementData.mobileFont : 'Basetica Bold',        
        '--mobile-background-color': this.elementData.backgroundColorMobile ? this.elementData.backgroundColorMobile.hex : 'transparent',
        '--mobile-border-color': this.elementData.borderColorMobile ? this.elementData.borderColorMobile.hex : '#FFFFFF',
        '--desktop-color': this.elementData.textColorDesktop ? this.elementData.textColorDesktop.hex : '#4D4D4D',
        '--desktop-font': this.elementData.desktopFont ? this.elementData.desktopFont : 'Basetica Bold',        
        '--desktop-background-color': this.elementData.backgroundColorDesktop ? this.elementData.backgroundColorDesktop.hex : 'transparent',
        '--desktop-border-color': this.elementData.borderColorDesktop ? this.elementData.borderColorDesktop.hex : '#FFFFFF',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-cta {
  color: var(--mobile-color);
  background-color: var(--mobile-background-color);
  border: 1px solid var(--mobile-border-color);
  box-shadow: 0 2px 2px 0 rgba(200,200,200,0.45);
  border-radius: 2px;
  font-size: 14px;
  font-family: var(--mobile-font);
  display: block;
  width: 266px;
  margin: 0 auto;
  height: 43px;
  line-height: 42px;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  opacity: 1;

  @media screen and (min-width: 512px) {
    color: var(--desktop-color);
    font-family: var(--desktop-font);
    background-color: var(--desktop-background-color);
    border: 2px solid var(--desktop-border-color);
    border-radius: 2px;
    font-size: 16px;
    width: 246px;
    height: 46px;
    line-height: 45px;
  }

  &:hover {
    opacity: .85;
  }
}

</style>