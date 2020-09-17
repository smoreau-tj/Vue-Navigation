<template>
  <video class="video" autoplay muted playsinline preload loop>
    <source data-min-width="768" :data-src="elementData.videoUrlDesktop" type="video/mp4">
    <source data-max-width="767" :data-src="elementData.videoUrlMobile" type="video/mp4">
  </video>
</template>

<script>
export default {
  name:"VideoElement",
  props : {
    elementData: Object
  }
}
</script>

<style scoped>


</style>