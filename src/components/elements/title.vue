<template>
<div class="vue-title-container">
  <div 
    class="vue-title_text"
    :style="cssVars"
  >
    {{elementData.text}}
  </div>
</div>
</template>

<script>
export default {
  name:"TitleElement",
  props: {
    elementData: Object
  },
  computed: {
    cssVars () {
      return {
        '--mobile-color': this.elementData.mobileColor ? this.elementData.mobileColor : '#FFFFFF',
        '--mobile-font': this.elementData.mobileFont ? this.elementData.mobileFont : 'Basetica',
        '--desktop-color': this.elementData.desktopColor ? this.elementData.desktopColor : '#FFFFFF',
        '--desktop-font': this.elementData.desktopFont ? this.elementData.desktopFont : 'Basetica',
        '--desktop-drop-shadow': this.elementData.desktopDropShadow ? '0 0 90px rgba(0,0,0,0.50)' : 'none',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-title_text {
  color: var(--mobile-color);
  font-family: var(--mobile-font);
  font-size: 28px;
  display: block;

  @media screen and (min-width: 568px) {
    color: var(--desktop-color);
    font-family: var(--desktop-font);
    text-shadow: var(--desktop-drop-shadow);
    font-size: 40px;
  }
}

</style>