<template>
<div class="vue-module-container three-panel-module-container">
  <div class="three-panel_title">
    <TitleElement
      :elementData="moduleData.mainTitle" 
   />
  </div>
  <div class="panels-wrapper">
    <div class="panel-container panel-one-container">
      <div class="panel_image-container">
        <ImageElement
          :elementData="moduleData.panel1.imageData" 
        />
      </div>
      <div class="panel_text-container">
        <TitleElement
          :elementData="moduleData.panel1.titleData" 
        />
      </div>
    </div>
    <div class="panel-container panel-two-container">
      <div class="panel_image-container">
        <ImageElement
          :elementData="moduleData.panel2.imageData" 
        />
      </div>
      <div class="panel_text-container">
        <TitleElement
          :elementData="moduleData.panel2.titleData" 
        />
      </div>
    </div>
    <div class="panel-container panel-three-container">
      <div class="panel_image-container">
        <ImageElement
          :elementData="moduleData.panel3.imageData" 
        />
      </div>
      <div class="panel_text-container">
        <TitleElement
          :elementData="moduleData.panel3.titleData" 
        />
      </div>
    </div>
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
  },
  props : {
    moduleData: Object
  }
}
</script>

<style lang="scss" scoped>

</style>