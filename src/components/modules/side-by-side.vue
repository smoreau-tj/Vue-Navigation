<template>
<div><h2><strong>Side-by-Side Module</strong></h2>
  <div><h3>Side 1</h3>
    <ImageElement />
    <TitleElement />
    <SubtitleElement />
    <CtaElement />
  </div>
  <div><h3>Side 2</h3>
    <ImageElement />
    <TitleElement />
    <SubtitleElement />
    <CtaElement />
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
  }
}
</script>

<style lang="scss" scoped>

</style>