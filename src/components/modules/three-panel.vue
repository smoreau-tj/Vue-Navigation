<template>
<div class="three-panel-module-container">
    <!-- <TitleElement
      class="three-panel_title"
      :elementData="moduleData.mainTitle" 
   /> -->
  <div class="panels-wrapper">
    <div class="panel-container"
      v-for="(panel, index) in moduleData.panels"
      :key="index"
    >
      <div class="panel_image-container">
        <ImageElement
          :elementData="panel.image" 
        />
      </div>
      <div class="panel_cta-container">
        <CtaElement
          v-for="(cta, index) in panel.cta"
          :key="index"
          :elementData="cta"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ImageElement from '../elements/image.vue'
import CtaElement from '../elements/cta.vue'

// import TitleElement from '../elements/title.vue'

export default {
  name:"ThreePanelModule",
  components: {
    ImageElement,
    CtaElement
    // TitleElement,
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

