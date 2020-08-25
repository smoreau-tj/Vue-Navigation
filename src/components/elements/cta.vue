<template>
<a 
  :href="elementData.href" 
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
        '--mobile-color': this.elementData.mobileColor ? this.elementData.mobileColor : '#4D4D4D',
        '--mobile-background-color': this.elementData.mobileBackgroundColor ? this.elementData.mobileBackgroundColor : '#FFFFFF',
        '--mobile-border-color': this.elementData.mobileBorderColor ? this.elementData.mobileBorderColor : '#FFFFFF',
        '--desktop-color': this.elementData.desktopColor ? this.elementData.desktopColor : '#4D4D4D',
        '--desktop-background-color': this.elementData.desktopBackgroundColor ? this.elementData.desktopBackgroundColor : '#FFFFFF',
        '--desktop-border-color': this.elementData.desktopBorderColor ? this.elementData.desktopBorderColor : '#FFFFFF',
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
  font-family: 'Basetica Bold';
  display: block;
  width: 266px;
  margin: 0 auto;
  height: 48px;
  line-height: 48px;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  opacity: 1;

  @media screen and (min-width: 512px) {
    color: var(--desktop-color);
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