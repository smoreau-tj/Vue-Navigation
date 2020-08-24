<template>
  <div 
    class="vue-module-container hero-module"
    :class="moduleData.contentAlignment"
  >
    <h2>
      <strong>Hero Module</strong>
    </h2>
    <ImageElement 
      :elementData="moduleData.imageData"
    />
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

</style>