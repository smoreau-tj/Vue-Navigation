<template>
  <ul class="nav-item__list">
    <NavItem class="level-two-item"
      v-for="navItem in navLevelTwoData" 
      :key="navItem.id" 
      :title="navItem.title"
      :titleUrl="navItem.titleUrl"
      :titleColor="navItem.titleColor"
      :desktopImage="navItem.desktopImage"
    />
  </ul>
</template>


<script>
import NavItem from './NavItem.vue'


export default {
  name: "NavLevelTwo",
  components: {
    NavItem,
  },
  props: {
    navLevelTwoData: Array
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

  ul {
    @media screen and (min-width: 1280px) {
      margin: 0 auto;
      padding: 24px 42px 0 42px;
      text-align: left;
      width: calc(100% - 314px);
      display: inline-block;
      vertical-align: top;
    }
  }

</style>