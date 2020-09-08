<template>
<div class="vue-title-container">
  <div 
    class="vue-title_text"
    :style="cssVars"
  >
    {{elementData.title}}
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
        '--mobile-hide': this.elementData.displaytitle === 'Desktop Only' || this.elementData.displaytitle === 'None' ? 'none' : 'block',
        '--mobile-color': this.elementData.modulesOptions.mobileTextColor ? this.elementData.modulesOptions.mobileTextColor.hex : '#FFFFFF',
        '--mobile-font': this.elementData.modulesOptions.mobileFont ? this.elementData.modulesOptions.mobileFont : 'Basetica',
        '--desktop-color': this.elementData.modulesOptions.desktopTextColor ? this.elementData.modulesOptions.desktopTextColor.hex : '#FFFFFF',
        '--desktop-font': this.elementData.modulesOptions.desktopFont ? this.elementData.modulesOptions.desktopFont : 'Basetica',
        '--desktop-drop-shadow': this.elementData.modulesOptions.dropShadow ? '0 0 90px rgba(0,0,0,0.50)' : 'none',
        '--desktop-hide': this.elementData.displaytitle === 'Mobile Only' || this.elementData.displaytitle === 'None' ? 'none' : 'block',

      }
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-title-container {
  .vue-title_text {
    color: var(--mobile-color);
    font-family: var(--mobile-font);
    font-size: 24px;
    display: block;

    @media screen and (min-width: 512px) {
      color: var(--desktop-color);
      font-family: var(--desktop-font);
      text-shadow: var(--desktop-drop-shadow);
      line-height: 30px;
      margin-bottom: 8px;
    }
  }

  &.hero-module__title {
    .vue-title_text {
      font-size: 28px;

      @media screen and (min-width: 512px) {
        font-size: 40px;
        line-height: 46px;
      }
    }
  }

  &.three-panel_title {
    .vue-title_text {
      font-size: 20px;
      margin-bottom: 16px;
      line-height: 1;

      @media screen and (min-width: 512px) {
        font-size: 24px;
      }

      @media screen and (min-width: 1024px) {
        font-size: 28px;
      }
    }
  }

  &.panel_title {
    .vue-title_text {
      font-size: 16px;
      line-height: 1;
      margin-top: 16px;
      text-align: left;

      @media screen and (min-width: 512px) {
        font-size: 14px;
      }

      @media screen and (min-width: 1024px) {
        font-size: 20px;
      }
    }
  }
}

</style>