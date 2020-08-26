<template>
  <div 
    class="vue-module-container fixed-banner-module-container"
  >
    <div class="fixed-banner-module_image-container">
      <ImageElement
        :elementData="moduleData.imageData" 
      />
    </div>
    <div 
      class="fixed-banner-module_text-container"
      :class="[
        {'left': moduleData.contentAlignment === 'left'},
        {'center': moduleData.contentAlignment === 'center'},
        {'right': moduleData.contentAlignment === 'right'},
        {'stacked-cta' : moduleData.ctaData.cta1.stackCtas },
        {'mobile-under-image' : moduleData.mobileUnderImage },
        {'desktop-under-image' : moduleData.desktopUnderImage },
      ]"
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
  name:"FixedBannerModule",
  components: {
    ImageElement,
    TitleElement,
    SubtitleElement,
    CtaElement
  },
  props : {
    moduleData: Object
  },
}
</script>

<style lang="scss" scoped>
.fixed-banner-module-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;
  max-width: 1184px;


  @media screen and (min-width: 512px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 96px);
    margin: 0 auto;
  }

  .fixed-banner-module_text-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 48px;
    max-width: 1088px;

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

    &.mobile-under-image {
      position: relative;
      transform: unset;
      padding-top: 24px;

      @media screen and (min-width: 768px) {
        position: unset;
        transform: unset;
        padding-top: unset;
      }
    }

    &.desktop-under-image {
      @media screen and (min-width: 768px) {
        position: relative;
        transform: unset;
        padding-top: 24px;
      }
    }

    &.left {
      @media screen and (min-width: 512px) {
        text-align: left;
      }

      @media screen and (min-width: 768px) {
        left: 56px;
        margin-left: 0;
      }

      &.desktop-under-image {
        @media screen and (min-width: 768px) {
          left: 0;
        }
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
        right: 56px;
        margin-right: 0;
      }

      &.desktop-under-image {
        @media screen and (min-width: 768px) {
          right: 0;
        }
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