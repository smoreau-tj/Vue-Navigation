<template>
  <ul class="nav-item__list">
    <NavItem class="level-two-item" v-on="$listeners"
      v-for="navItem in navLevelTwoData" 
      :key="navItem.id" 
      :title="navItem.title"
      :titleUrl="navItem.titleUrl"
      :titleColor="navItem.titleColor"
      :desktopImage="navItem.desktopImage"
      :parentId="navItem.parentId"
      :level="level"
      :showLevelTwoItems="showLevelTwoItems"
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
    navLevelTwoData: Array,
    showLevelTwoItems: Number

  },
  data() {
    return {
      level: 2
    }
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