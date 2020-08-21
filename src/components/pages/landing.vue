<template>
  <div><h1><strong>Landing Page</strong></h1>
    <HeroModule />
    <FixedBannerModule />
    <SideBySideModule />
    <ThreePanelModule />
  </div>
</template>

<script>
import HeroModule from '../modules/hero.vue'
import FixedBannerModule from '../modules/fixed-banner.vue'
import SideBySideModule from '../modules/side-by-side.vue'
import ThreePanelModule from '../modules/three-panel.vue'


export default {
  name:"LandingPage",
  components: {
    HeroModule,
    FixedBannerModule,
    SideBySideModule,
    ThreePanelModule
  }
}
</script>

<style lang="scss" scoped>

</style>