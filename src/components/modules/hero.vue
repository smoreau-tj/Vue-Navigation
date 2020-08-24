<template>
  <div 
    class="vue-module-container hero-module-container"
    :class="moduleData.contentAlignment"
  >
    <div class="hero-module_image-container">
      <ImageElement 
        :elementData="moduleData.imageData"
      />
    </div>
    <div class="hero-module_text-container">
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
  }
}
</script>

<style lang="scss" scoped>

.hero-module-container {
  position: relative;

  .hero-module_text-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 32px;

    @media screen and (min-width: 512px) {
      margin: 0;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      padding-bottom: unset;
      bottom: unset;

    }
  }
}

</style>