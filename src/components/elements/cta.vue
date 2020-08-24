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
        '--desktop-stack-ctas': this.elementData.stackCtas ? 'block' : 'inline-block',
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
  border-radius: 2px;
  font-size: 14px;
  font-family: 'Basetica Bold';
  display: block;
  width: calc(100% - 48px);
  margin-left: 24px;
  height: 45px;
  line-height: 45px;
  text-decoration: none;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (min-width: 512px) {
    color: var(--desktop-color);
    background-color: var(--desktop-background-color);
    border: 2px solid var(--desktop-border-color);
    border-radius: 2px;
    font-size: 16px;
    width: 250px;
    height: 45px;
    line-height: 45px;
    display: var(--desktop-stack-ctas);
    margin-left: 0;
  }

  &:nth-child(2){
    margin-left: 8px;
  }
}

</style>