<template>
  <div 
    class="fixed-banner-module-container"
    :class="{'desktop-right-under-image': moduleData.contentAlignmentDesktop === 'right' && moduleData.desktopUnderImage }"
  >
    <div class="fixed-banner-module_image-container">
      <ImageElement
        :elementData="moduleData.image" 
      />
    </div>
    <div 
      class="fixed-banner-module_text-container"
      :class="[
        {'left': moduleData.contentAlignmentDesktop === 'left'},
        {'center': moduleData.contentAlignmentDesktop === 'center'},
        {'right': moduleData.contentAlignmentDesktop === 'right'},
        {'stacked-cta' : moduleData.stackCtas },
        {'desktop-under-image' : moduleData.desktopUnderImage },
      ]"
    >
      <TitleElement
        :elementData="moduleData.titleText"
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
  max-width: 1184px;

  @media screen and (min-width: 512px) {
    width: calc(100% - 48px);
    margin: 0 auto;
  }


  @media screen and (min-width: 768px) {
    width: calc(100% - 96px);
    margin: 0 auto;
  }

  .fixed-banner-module_text-container {
    position: relative;
    padding: 24px 24px 0 24px;
    max-width: 1088px;

    @media screen and (min-width: 1024px) {
      position: absolute;
      margin: 0 auto;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      padding: 0;
      // padding-bottom: unset;
      // bottom: unset;
      left: 24px;
      right: 24px;
      width: auto;
    }

  
    &.desktop-under-image{
      position: relative;
      transform: unset;
      padding-top: 24px;
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
          .vue-cta-container {
            margin-left: 0;
          }
        }
      }
    }

    &.center {
      @media screen and (min-width: 512px) {
        text-align: center;
        left: 0;
        right: 0;

      }
    }

    &.right {      
      @media screen and (min-width: 512px) {
        text-align: left;
        right: 24px;
        left: auto;
      }

      @media screen and (min-width: 768px) {
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

  //Module container class styling to 
  //solve for desktop edge case of right justifed content below image.
  &.desktop-right-under-image {
    @media screen and (min-width: 512px) {
      text-align: right;
    }

    .right {
      &.desktop-under-image {
        @media screen and (min-width: 512px) {
          display: inline-block;
        }
      }
    }

  }
}

</style>