<template>
  <picture>
    <source
      :srcset="elementData.mobileImage ? convertImageRef(elementData.mobileImage) : 'https://placehold.it/800x700'"
      media="(max-width: calc(32rem - 0.0625rem))"
    >
    <source
      :srcset="elementData.desktopImage ? convertImageRef(elementData.desktopImage) : 'https://placehold.it/1600x700'"
      media="(min-width: 32rem)"
    >
    <img
      :src="elementData.mobileImage ? convertImageRef(elementData.mobileImage) : 'https://placehold.it/800x700'"
      class="vue-image"
      :alt="elementData.desktopAltText ? elementData.desktopAltText : 'Tommy John Image'"
    />
    </picture>
</template>

<script>
import {client} from '../../lib/sanity.js';
import imageUrlBuilder from '@sanity/image-url'

export default {
  name:"ImageElement",
  props : {
    elementData: Object
  },
  methods: {
    convertImageRef: function(imageRef){
      const builder = imageUrlBuilder(client);
        function urlFor(source) {
          return builder.image(source)
        }
      return urlFor(imageRef).url()
    }
  },
}
</script>

<style lang="scss" scoped>

.vue-image {
  position: relative;
  display: block;
  width: 100%;
}

</style>