<template>
<li class="level-two-container">
  <NavItem class="level-two-item"
    :title="levelTwoData.title"
    :titleUrl="levelTwoData.titleUrl"
    :titleColor="levelTwoData.titleColor"
    :desktopImage="levelTwoData.desktopImage"
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
    levelTwoData: Object

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

</style>