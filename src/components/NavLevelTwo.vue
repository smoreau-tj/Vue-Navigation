<template>
<li class="level-two-container"
  :class="[
  {'desktop-hover': levelTwoData.displayCollection === 'desktop' || levelTwoData.displayCollection === 'all'  },
  {'desktop-only': levelTwoData.displayCollection === 'desktop' },
  {'mobile-only': levelTwoData.displayCollection === 'mobile' }
]">
  <NavItem class="level-two-item"
    :title="levelTwoData.text"
    :titleUrl="levelTwoData.navUrl"
    :titleColor="levelTwoData.styleColor ? levelTwoData.styleColor.hex : '#4d4d4d'"
    :backgroundColor="levelTwoData.BackgroundColor ? levelTwoData.BackgroundColor.hex : '#f5f5f5'"
    :levelTwoImage="levelTwoData.navImage ? levelTwoData.navImage.navImage : null"
    :altText="levelTwoData.navImage ? levelTwoData.navImage.imageAltText : null"
  />
</li>
</template>


<script>
import NavItem from './NavItem.vue'


export default {
  name: "NavLevelTwo",
  components: {
    NavItem,
  },
  props: {
    levelTwoData: Object,
    index: Number

  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

  ul {
    margin: 16px 24px 24px 24px;
    padding: 0;
    text-align: left;

    @media screen and (min-width: 1024px) {
      margin: 0 auto;
      padding: 24px 42px 0 42px;
      text-align: left;
      width: calc(100% - 314px);
      display: inline-block;
      vertical-align: top;
    }
  }

  .level-two-container {
    display: block;
    margin: 2px 24px 2px 24px;

    @media screen and (min-width: 1024px) {
      display: inline-block;
      margin: unset;
      padding-top: 0;
    }

    &:last-of-type {
      margin-bottom: 72px;

      @media screen and (min-width: 1024px) {
        margin-bottom: unset;
      }
    }

    &.desktop-only {
      display: none;

      @media screen and (min-width: 1024px) {
        display: inline-block;
      }
    }

    &.mobile-only {
      display: block;

      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

</style>