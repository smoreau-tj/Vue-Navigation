<template>
<div class="vue-subtitle-container">
  <div
    class="vue-subtitle_text"
    :style="cssVars"
  >
    {{elementData.title}}
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
        '--mobile-hide': this.elementData.displaySubtitle === 'Desktop Only' || this.elementData.displaySubtitle === 'None' ? 'none' : 'block',
        '--mobile-color': this.elementData.subTextOptions.mobileTextColor ? this.elementData.subTextOptions.mobileTextColor.hex : '#737373',
        '--mobile-font': this.elementData.subTextOptions.mobileFont ? this.elementData.subTextOptions.mobileFont : 'Basetica-Regular',
        '--desktop-color': this.elementData.subTextOptions.desktopTextColor ? this.elementData.subTextOptions.desktopTextColor.hex : '#737373' ,
        '--desktop-font': this.elementData.subTextOptions.desktopFont ? this.elementData.subTextOptions.desktopFont : 'Basetica-Regular',
        '--desktop-hide': this.elementData.displaySubtitle === 'Mobile Only' || this.elementData.displaySubtitle === 'None' ? 'none' : 'block',
      }
    }
  }
}
</script>

<style lang="scss" scoped>


.vue-subtitle-container {
  margin: 0 auto 16px auto;

  @media screen and (min-width: 512px) {
    margin: 0 auto 24px auto;
  }
}

.vue-subtitle_text {
  color: var(--mobile-color);
  font-family: var(--mobile-font);
  display: var(--hide-mobile);
  font-size: 16px;
  
  @media screen and (min-width: 512px) {
    color: var(--desktop-color);
    font-family: var(--desktop-font);
    display: var(--hide-desktop);
  }
}

</style>