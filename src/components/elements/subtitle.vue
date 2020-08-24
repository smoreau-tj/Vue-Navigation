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
        '--mobile-color': this.elementData.mobileColor,
        '--mobile-font': this.elementData.mobileFont,
        '--desktop-color': this.elementData.desktopColor,
        '--desktop-font': this.elementData.desktopFont,
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-subtitle_text {
  color: var(--mobile-color);
  font-family: var(--mobile-font);

  @media screen and (min-width: 568px) {
    color: var(--desktop-color);
    font-family: var(--desktop-font);
  }
}

</style>