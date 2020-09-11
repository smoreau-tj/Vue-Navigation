<template>
  <div 
    class="hero-module-container"
    :style="cssVars"
  >
    <div class="hero-module_image-container">
      <ImageElement 
        :elementData="moduleData.image"
      />
    </div>
    <div 
      class="hero-module_text-container"
      :class="[
        {'left': moduleData.contentAlignmentDesktop === 'left'},
        {'center': moduleData.contentAlignmentDesktop === 'center'},
        {'right': moduleData.contentAlignmentDesktop === 'right'},
        {'stacked-cta' : moduleData.stackCtas }
      ]"
    >
      <TitleElement
        :elementData="moduleData.titleText"
        class="hero-module__title"
      />
      <SubtitleElement
        :elementData="moduleData.subtitle"
      />
      <div 
        class="vue-cta-container"
        v-for="(cta, index) in moduleData.cta"
        :key="index"
        :class="'index-' + index"
      >
        <CtaElement :elementData="cta"/>
      </div>
    </div>
      <VideoElement
        v-if="moduleData.image.desktopFormat === 'MP4'"
        class="vue-video"
        :elementData="moduleData.image"
      />
  </div>
</template>

<script>
import ImageElement from '../elements/image.vue'
import VideoElement from '../elements/video.vue'
import TitleElement from '../elements/title.vue'
import SubtitleElement from '../elements/subtitle.vue'
import CtaElement from '../elements/cta.vue'

export default {
  name:"HeroModule",
  components: {
    ImageElement,
    VideoElement,
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
        '--desktop-padding-left': this.moduleData.paddingRange ? this.moduleData.paddingRange + 'px' : '120px',
        '--desktop-padding-right': this.moduleData.paddingRange ? this.moduleData.paddingRange + 'px': '120px',        
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.hero-module-container {
  position: relative;
  overflow: hidden;

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
      left: 48px;
      right: 48px;
    }

    @media screen and (min-width: 1280px) {
      left: var(--desktop-padding-left);
      right: var(--desktop-padding-right);
    }

    &.left {
      @media screen and (min-width: 512px) {
        text-align: left;
      }

      &.stacked-cta {
        @media screen and (min-width: 512px) {
          .vue-cta-container {
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
          .vue-cta-container {
            margin-left: 0;
          }
        }
      }
    }

    &.stacked-cta {
      .vue-cta-container {
        @media screen and (min-width: 512px) {
          display: block;
        }

        &.index-1{
          margin-top: 16px;
        }
      }
    }

    //styling for break in responsive grid between 512 and 568px
    &:not(.stacked-cta) {
      .vue-cta-container {
        @media screen and (min-width: 512px) {
          display: inline-block;
        }

        &.index-1{
          margin-top: 16px;

          @media screen and (min-width: 568px) {
            margin-left: 16px;
            margin-top: 0;
          }
        }
      }
    }
  }

  .vue-video {
    display: none;
  }
}

</style>