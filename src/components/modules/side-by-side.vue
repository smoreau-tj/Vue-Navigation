<template>
  <div 
    class="side-by-side-module-container"
    :class="{'mobile-reverse-sides' : moduleData.prioritizedSide === 'rightSide'}"

  >
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
          {'stacked-cta' : !moduleData.leftSide[0].stackCtas },
          {'desktop-under-image' : !moduleData },
          {'over-bottom-image' : !moduleData },
        ]"
      >
        <TitleElement
          :elementData="moduleData.leftSide[0].titleText"
        />
        <SubtitleElement
          :elementData="moduleData.leftSide[0].subtitle"
        />
        <div 
          class="vue-cta-container"
          v-for="(cta, index) in moduleData.leftSide[0].cta"
          :key="index"
          :class="'index-' + index"
        >
          <CtaElement 
            :elementData="cta"
            class="side-module__cta"
          />
        </div>
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
          {'desktop-under-image' : !moduleData },
          {'over-bottom-image' : !moduleData },
        ]"
      >
        <TitleElement
          :elementData="moduleData.rightSide[0].titleText"
        />
        <SubtitleElement
          :elementData="moduleData.rightSide[0].subtitle"
        />
        <div 
          class="vue-cta-container"
          v-for="(cta, index) in moduleData.rightSide[0].cta"
          :key="index"
          :class="'index-' + index"
        >
          <CtaElement 
            :elementData="cta"
            class="side-module__cta"
          />
        </div>
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

  &.mobile-reverse-sides {
    display: flex;
    flex-flow: column;

    @media screen and (min-width: 512px) {
      flex-flow: unset;
    }

    .side-container {
      &.side-two-container {
        order: 1;
        margin-bottom: 32px;

        @media screen and (min-width: 512px) {
          order: unset;
          margin-bottom: unset;
        }
      }

      &.side-one-container {
        order: 2;
        margin-bottom: 0;

        @media screen and (min-width: 512px) {
          order: unset;
          margin-bottom: unset;
        }
      }
    }
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
      position: relative;
      width: 100%;
      padding-top: 24px;
      max-width: 1088px;

      @media screen and (min-width: 1024px) {
        position: absolute;
        margin: 0 auto;
        padding-top: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 24px;
        right: 24px;
        width: auto;
      }

      //extensive styling for text over bottom of image
      &.over-bottom-image {
        position: absolute;
        bottom: 24px;
        top: unset;
        transform: unset;
        width: calc(100% - 48px);
        margin: 0 auto;
        left: 0;
        right: 0;

        @media screen and (min-width: 512px) {
          bottom: 16px;
          width: calc(100% - 16px);
        }

        @media screen and (min-width: 768px) {
          bottom: 24px;
          width: calc(100% - 32px);
        }

        @media screen and (min-width: 1024px) {
          width: calc(100% - 64px);
        }

        &.stacked-cta,
        &:not(.stacked-cta) {
          .vue-cta-container {
            @media screen and (min-width: 512px) {
              display: inline-block;
              width: calc(50% - 2px);
            }

            @media screen and (min-width: 768px) {
              width: calc(50% - 4px);
            }

            @media screen and (min-width: 1024px) {
              width: calc(50% - 8px);
            }

            &.index-1 {
              margin-top: 8px;

              @media screen and (min-width: 512px) {
                margin-top: 0;
                margin-left: 4px;
              } 

              @media screen and (min-width: 768px) {
                margin-left: 8px;
              }

              @media screen and (min-width: 1024px) {
                margin-left: 16px;
              }
            }

            .side-module__cta {
              width: auto;
              font-size: 14px;

              @media screen and (min-width: 512px) {
                font-size: 10px;
              }

              @media screen and (min-width: 768px) {
                font-size: 12px;
              }

              @media screen and (min-width: 1024px) {
                font-size: 14px;
              }

              @media screen and (min-width: 1280px) {
                font-size: 16px;
              }
            }
          }
        }
      }
      

      &.desktop-under-image{
        @media screen and (min-width: 1024px) {
          position: relative;
          top: unset;
          transform: unset;
          padding-top: 24px;
          left: 0;
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
          @media screen and (min-width: 1280px) {
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
          .vue-cta-container {
            @media screen and (min-width: 1280px) {
              margin-left: 0;
            }
          }
          
        }
      }

      &.stacked-cta {
        .vue-cta-container {
          @media screen and (min-width: 1280px) {
            display: block;
          }

          &.index-1{
            @media screen and (min-width: 1280px) {
              margin-top: 16px;
            }
          }
        }
      }

      &:not(.stack-cta) {
        &:not(.over-bottom-image) {
          .vue-cta-container {
            display: block;

            @media screen and (min-width: 1280px) {
              display: inline-block;
            }

            &.index-1{
              margin-top: 16px;

              @media screen and (min-width: 1280px) {
                margin-left: 8px;
                margin-top: 0;
              }
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
}

</style>