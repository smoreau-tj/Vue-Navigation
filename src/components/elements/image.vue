<template>
<a :href="imageData.href ? imageData.href : '' ">
  <picture>
    <source
      :srcset="imageData.mobileUrl ? imageData.mobileUrl : 'https://placehold.it/800x700'"
      media="(max-width: calc(32rem - 0.0625rem))"
    >
    <source
      :srcset="imageData.desktopUrl ? imageData.desktopUrl : 'https://placehold.it/1600x700'"
      media="(min-width: 32rem)"
    >
    <img
      :src="imageData.mobileUrl ? imageData.mobileUrl : 'https://placehold.it/800x700'"
      class="home-hero__image"
      :alt="imageData.altText ? imageData.altText : 'Tommy John Image'"
    />
    </picture>
  </a>
</template>

<script>
export default {
  name:"ImageElement",
  props : {
    elementData: Object
  },
  data () {
    return {
      imageData: this.elementData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>