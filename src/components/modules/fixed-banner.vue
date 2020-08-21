<template>
<div><h2><strong>Fixed Banner Module</strong></h2>
    <ImageElement />
    <TitleElement />
    <SubtitleElement />
    <CtaElement />
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
  }
}
</script>

<style lang="scss" scoped>

</style>