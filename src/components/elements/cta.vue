<template>
<a 
  :href="elementData.href" 
  class="vue-cta-link"
>
  <button class="vue-cta_button">
    {{elementData.text}}
  </button>
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

.vue-cta-link {
  color: var(--mobile-color);
  background-color: var(--mobile-background-color);
  border: 1px solid var(--mobile-border-color);
  border-radius: 2px;
  font-size: 14px;
  font-family: 'basetica-bold';

  @media screen and (min-width: 1152px) {
    color: var(--desktop-color);
    background-color: var(--desktop-background-color);
    border: 2px solid var(--desktop-border-color);
    border-radius: 2px;
    font-size: 16px;
  }
}

</style>