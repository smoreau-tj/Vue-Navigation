<template>
  <div 
    class="vue-module-container hero-module-container"
    :class="moduleData.contentAlignment"
    :style="cssVars"
  >
    <div class="hero-module_image-container">
      <ImageElement 
        :elementData="moduleData.imageData"
      />
    </div>
    <div 
      class="hero-module_text-container"
    >
      <TitleElement
        :elementData="moduleData.titleData"
      />
      <SubtitleElement
        :elementData="moduleData.subtitleData"
      />
      <CtaElement
        v-for="(cta, index) in moduleData.ctaData"
        :key="index"
        :elementData="cta"
      />
    </div>
  </div>
</template>

<script>
import ImageElement from '../elements/image.vue'
import TitleElement from '../elements/title.vue'
import SubtitleElement from '../elements/subtitle.vue'
import CtaElement from '../elements/cta.vue'

export default {
  name:"HeroModule",
  components: {
    ImageElement,
    TitleElement,
    SubtitleElement,
    CtaElement
  },
  props : {
    moduleData: Object
  },
  computed: {
    cssVars () {
      return { 
        '--desktop-stack-ctas': this.moduleData.ctaData.cta1.stackCtas ? 'block' : 'inline-block',
        '--desktop-ctas-margin': this.moduleData.ctaData.cta1.stackCtas ? '16px auto 0 auto' : '0 0 0 8px',
        '--desktop-padding-left': this.moduleData.paddingLeft ? this.moduleData.paddingLeft : '120px',
        '--desktop-padding-right': this.moduleData.paddingRight ? this.moduleData.paddingRight : '0',
        '--desktop-content-align': this.moduleData.contentAlignment ? this.moduleData.contentAlignment  : 'left',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.hero-module-container {
  position: relative;
  overflow: hidden;
  // padding-left: var(--desktop-padding-left);
  // padding-right: var(--desktop-padding-right);

  .hero-module_text-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 48px;

    @media screen and (min-width: 512px) {
      margin: 0 auto;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      padding-bottom: unset;
      bottom: unset;
      text-align: var(--desktop-content-align);
    }

    .vue-cta {
      @media screen and (min-width: 512px) {
        display: var(--desktop-stack-ctas);
      }

      &:nth-of-type(2){
        margin-top: 16px;

        @media screen and (min-width: 512px) {
          margin: var(--desktop-ctas-margin);
        }
      }
    }
  }
}

</style>