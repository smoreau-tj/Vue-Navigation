<template>
<div class="three-panel-module-container">
    <TitleElement
      class="three-panel_title"
      :elementData="moduleData.mainTitle" 
   />
  <div class="panels-wrapper">
    <div class="panel-container panel-one-container">
      <div class="panel_image-container">
        <ImageElement
          :elementData="moduleData.panel1.imageData" 
        />
      </div>
      <div class="panel_text-container">
        <TitleElement
          class="panel_title"
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
          class="panel_title"
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
          class="panel_title"
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

.three-panel-module-container {
  position: relative;
  overflow: hidden;
  max-width: 1184px;

  @media screen and (min-width: 768px) {
    width: calc(100% - 96px);
    margin: 0 auto;
  }

  .panels-wrapper {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    flex-wrap: nowrap;
     -webkit-overflow-scrolling: touch;

     &::-webkit-scrollbar {
      display: none;
    }
  }

  .panel-container {
    display: inline-block;
    margin: 0 auto;
    width: calc(33.333333% - 16px);
    min-width: 215px;

    @media screen and (min-width: 512px) {
      min-width: unset;
    }


    &:nth-of-type(1){
      margin-right: 12px;
    }
    &:nth-of-type(2){
      margin-left: 12px;
      margin-right: 12px;
    }
    &:nth-of-type(3){
      margin-left: 12px;
    }
  }
}

</style>

