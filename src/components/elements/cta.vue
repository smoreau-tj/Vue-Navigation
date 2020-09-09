<template>
<div class="vue-cta-container">
  <a 
    :href="elementData.url" 
    class="vue-cta"
    type="button"
    :style="cssVars"
    :class="[
      {'regular' : elementData._type === 'regularCta'},
      {'skeleton' : elementData._type === 'skeletonCtaButton'},
      {'text-link' : elementData._type === 'textCta'}
    ]"
  >  
    {{elementData.text}}
  </a>
</div>
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
  border-radius: 4px;
  font-size: 14px;
  font-family: var(--mobile-font);
  display: block;
  width: 266px;
  margin: 0 auto;
  height: 43px;
  line-height: 42px;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.3s ease-in-out;
  -webkit-transition: opacity 0.3s ease-in-out;
  opacity: 1;

  @media screen and (min-width: 512px) {
    color: var(--desktop-color);
    font-family: var(--desktop-font);
    background-color: var(--desktop-background-color);
    border: 1px solid var(--desktop-border-color);
    border-radius: 4px;
    font-size: 16px;
    width: 246px;
    height: 48px;
    line-height: 47px;
  }

  &:hover {
    opacity: .85;
  }

  &.skeleton {
    background-color: transparent;
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: inset 0 0 0 1px var(--mobile-border-color);
      opacity: unset;
      background-color: transparent;

      @media screen and (min-width: 512px) {
        box-shadow: inset 0 0 0 1px var(--desktop-border-color);
      }
    }
  }

  &.text-link {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid var(--mobile-border-color);
    width: auto;
    display: inline-block;
    border-radius: 0;

    @media screen and (min-width: 512px) {
      border-bottom: 2px solid var(--desktop-border-color);
    }
  }
}

</style>