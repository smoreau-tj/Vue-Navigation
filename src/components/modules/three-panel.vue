<template>
<div class="vue-module-container three-panel-module">
  <h2>
    <strong>Three Panel Module</strong>
  </h2>
  <div><h3>Panel 1</h3>
    <ImageElement />
    <TitleElement />
  </div>
  <div><h3>Panel 2</h3>
    <ImageElement />
    <TitleElement />
  </div>
  <div><h3>Panel 3</h3>
    <ImageElement />
    <TitleElement />
  </div>
</div>
</template>

<script>
import ImageElement from '../elements/image.vue'
import TitleElement from '../elements/title.vue'

export default {
  name:"ThreePanelModule",
  components: {
    ImageElement,
    TitleElement,
  }
}
</script>

<style lang="scss" scoped>

</style>