<template>
<div class="vue-subtitle-container">
  <div
    class="vue-subtitle_text"
    :style="cssVars"
  >
    {{elementData.text}}
  </div>
</div>
</template>

<script>
export default {
  name:"SubtitleElement",
  props: {
    elementData: Object
  },
  computed: {
    cssVars () {
      return {
        '--mobile-hide': this.elementData.mobileHide ? 'none' : 'block',
        '--mobile-color': this.elementData.mobileColor ? this.elementData.mobileColor : '#FFFFFF',
        '--mobile-font': this.elementData.mobileFont ? this.elementData.mobileFont : 'Basetica',
        '--desktop-color': this.elementData.desktopColor ? this.elementData.desktopColor : '#FFFFFF' ,
        '--desktop-font': this.elementData.desktopFont ? this.elementData.desktopFont : 'Basetica',
        '--desktop-hide': this.elementData.desktopHide ? 'none' : 'block',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-subtitle_text {
  color: var(--mobile-color);
  font-family: var(--mobile-font);
  display: var(--hide-mobile);
  font-size: 16px;

  @media screen and (min-width: 568px) {
    color: var(--desktop-color);
    font-family: var(--desktop-font);
    display: var(--hide-desktop);
  }
}

</style>