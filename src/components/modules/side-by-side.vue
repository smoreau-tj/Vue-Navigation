<template>
  <div class="side-by-side-module-container">
    <div 
      class="side-container side-one-container"
      :class="{'desktop-right-under-image': moduleData.leftSide[0].contentAlignment === 'right' && moduleData.leftSide[0].desktopUnderImage }"
    >
      <div class="side-module_image-container">
        <ImageElement
        :elementData="moduleData.leftSide[0].image" />
      </div>
      <div 
        class="side-module_text-container"
        :class="[
          {'left': moduleData.leftSide[0].contentAlignment === 'left'},
          {'center': moduleData.leftSide[0].contentAlignment === 'center'},
          {'right': moduleData.leftSide[0].contentAlignment === 'right'},
          {'stacked-cta' : moduleData.leftSide[0].stackCtas },
          {'mobile-under-image' : moduleData.leftSide[0].mobileUnderImage },
          {'desktop-under-image' : moduleData.leftSide[0].desktopUnderImage },
        ]"
      >
        <TitleElement
          :elementData="moduleData.leftSide[0].titleText"
        />
        <SubtitleElement
          :elementData="moduleData.leftSide[0].subtitle"
        />
        <CtaElement
          v-for="(cta, index) in moduleData.leftSide[0].cta"
          :key="index"
          :elementData="cta"
          :class="'index-' + index"
        />
      </div>
    </div>
    <div 
      class="side-container side-two-container"
      :class="{'desktop-right-under-image': moduleData.rightSide[0].contentAlignment === 'right' && moduleData.rightSide[0].desktopUnderImage }"
    >
      <div class="side-module_image-container">
        <ImageElement
        :elementData="moduleData.rightSide[0].image" />
      </div>
      <div 
        class="side-module_text-container"
        :class="[
          {'left': moduleData.rightSide[0].contentAlignment === 'left'},
          {'center': moduleData.rightSide[0].contentAlignment === 'center'},
          {'right': moduleData.rightSide[0].contentAlignment === 'right'},
          {'stacked-cta' : moduleData.rightSide[0].stackCtas },
          {'mobile-under-image' : moduleData.rightSide[0].mobileUnderImage },
          {'desktop-under-image' : moduleData.rightSide[0].desktopUnderImage },
        ]"
      >
        <TitleElement
          :elementData="moduleData.rightSide[0].titleText"
        />
        <SubtitleElement
          :elementData="moduleData.rightSide[0].subtitle"
        />
        <CtaElement
          v-for="(cta, index) in moduleData.rightSide[0].cta"
          :key="index"
          :elementData="cta"
          :class="'index-' + index"
        />
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
  name:"SideBySideModule",
  components: {
    ImageElement,
    TitleElement,
    SubtitleElement,
    CtaElement
  },
  props : {
    moduleData: Object
  }
}
</script>

<style lang="scss" scoped>

.side-by-side-module-container {
  position: relative;
  overflow: hidden;
  max-width: 1184px;

  @media screen and (min-width: 512px) {
    display: flex;
    width: calc(100% - 48px);
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 96px);
  }

  .side-container {
    margin-bottom: 40px;
    position: relative;

    @media screen and (min-width: 512px) {
      width: 50%;
      display: inline-block;
      margin-bottom: 0;
    }

    .side-module_text-container {
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
        &.desktop-under-image{
          position: relative;
          transform: unset;
          padding-top: 24px;
        }
      }

      &.mobile-under-image {
        &:not(.desktop-under-image){
          position: relative;
          transform: unset;
          padding-top: 24px;

          @media screen and (min-width: 512px) {
            position: absolute;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            padding-top: 0;
          }
        }
      }

      &.desktop-under-image{
        &:not(.mobile-under-image){
          @media screen and (min-width: 512px) {
            position: relative;
            transform: unset;
            padding-top: 24px;
          }
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
              margin-left: 8px;
              margin-top: 0;
            }
          }
        }
      }
    }

    &.side-one-container {
      @media screen and (min-width: 512px) {
        margin-right: 4px;
      }

      @media screen and (min-width: 768px) {
        margin-right: 12px;
      }
    }

    &.side-two-container {
      margin-bottom: 0;

      @media screen and (min-width: 512px) {
        margin-left: 4px;
      }

      @media screen and (min-width: 768px) {
        margin-left: 12px;
      }
    }

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
}

</style>