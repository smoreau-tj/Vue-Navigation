<template>
  <div 
    class="vue-module-container hero-module-container"
    :style="cssVars"
  >
    <div class="hero-module_image-container">
      <ImageElement 
        :elementData="moduleData.imageData"
      />
    </div>
    <div 
      class="hero-module_text-container"
      :class="[
        {'left': moduleData.contentAlignment === 'left'},
        {'center': moduleData.contentAlignment === 'center'},
        {'right': moduleData.contentAlignment === 'right'},
        {'stacked-cta' : moduleData.ctaData.cta1.stackCtas }
      ]"
    >
      <TitleElement
        :elementData="moduleData.titleData"
        class="hero-module__title"
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
        '--desktop-padding-left': this.moduleData.paddingLeft ? this.moduleData.paddingLeft : '0',
        '--desktop-padding-right': this.moduleData.paddingRight ? this.moduleData.paddingRight : '0',        
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.hero-module-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

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
      left: 24px;
      right: 24px;
      width: auto;
    }

    @media screen and (min-width: 768px) {
      left: var(--desktop-padding-left);
      right: var(--desktop-padding-right);
    }

    &.left {
      @media screen and (min-width: 512px) {
        text-align: left;
      }

      &.stacked-cta {
        @media screen and (min-width: 512px) {
          .vue-cta {
            margin-left: 0;
          }
        }
      }
    }

    &.center {
      @media screen and (min-width: 512px) {
        text-align: center;
      }

      @media screen and (min-width: 768px) {
        left: 0;
        right: 0;
      }
    }

    &.right {
      @media screen and (min-width: 512px) {
        text-align: left;
      }

      @media screen and (min-width: 768px) {
        left: auto;
      }

      &.stacked-cta {
        @media screen and (min-width: 512px) {
          .vue-cta {
            margin-left: 0;
          }
        }
      }
    }

    &.stacked-cta {
      .vue-cta {
        @media screen and (min-width: 512px) {
          display: block;
        }

        &:nth-of-type(2){
          margin-top: 16px;
        }
      }
    }

    &:not(.stacked-cta) {
      .vue-cta {
        @media screen and (min-width: 512px) {
          display: inline-block;
        }

        &:nth-of-type(2){
          margin-top: 16px;

          @media screen and (min-width: 568px) {
            margin-left: 8px;
            margin-top: 0;
          }
        }
      }
    }
  }
}

</style>