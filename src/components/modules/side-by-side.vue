<template>
  <div class="vue-module-container side-by-side-module-container">
    <div class="side-container side-one-container">
      <div class="side-module_image-container">
        <ImageElement
        :elementData="moduleData.side1.imageData" />
      </div>
      <div class="side-module_text-container">
        <TitleElement
          :elementData="moduleData.side1.titleData"
        />
        <SubtitleElement
          :elementData="moduleData.side1.subtitleData"
        />
        <CtaElement
          v-for="(cta, index) in moduleData.side1.ctaData"
          :key="index"
          :elementData="cta"     
        />
      </div>
    </div>
    <div class="side-container side-two-container">
      <div class="side-module_image-container">
        <ImageElement
        :elementData="moduleData.side2.imageData" />
      </div>
      <div class="side-module_text-container">
        <TitleElement
          :elementData="moduleData.side2.titleData"
        />
        <SubtitleElement
          :elementData="moduleData.side2.subtitleData"
        />
        <CtaElement
          v-for="(cta, index) in moduleData.side2.ctaData"
          :key="index"
          :elementData="cta"     
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
  margin-bottom: 24px;
  max-width: 1184px;
  display: flex;


  @media screen and (min-width: 512px) {
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 96px);
  }

  .side-container {
    @media screen and (min-width: 512px) {
      width: 50%;
      display: inline-block;
    }

    &.side-one-container {
      @media screen and (min-width: 512px) {
        margin-right: 8px;
      }

      @media screen and (min-width: 768px) {
        margin-right: 12px;
      }
    }

    &.side-two-container {
      @media screen and (min-width: 512px) {
        margin-left: 8px;
      }

      @media screen and (min-width: 768px) {
        margin-left: 12px;
      }
    }
  }

}

</style>