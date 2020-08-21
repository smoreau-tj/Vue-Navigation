<template>
  <div 
    class="module-container"
    :class="contentAlignment"
  >
    <h2>
      <strong>Hero Module</strong>
    </h2>
    <ImageElement 
      :elementData="imageData"
    />
    <TitleElement
      :elementData="titleData"
    />
    <SubtitleElement
      :elementData="subtitleData"
    />
    <CtaElement
      v-for="(cta, index) in ctaData"
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
  },
  data (){
    return {
      contentAlignment: this.moduleData.contentAlignment,
      imageData: this.moduleData.imageData,
      titleData: this.moduleData.titleData,
      subtitleData: this.moduleData.subtitleData,
      ctaData: this.moduleData.ctaData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>