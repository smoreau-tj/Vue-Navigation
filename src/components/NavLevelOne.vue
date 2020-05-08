<template>
  <ul class="nav-item__list">
    <NavItem class="level-one-item"
      v-for="navItem in navLevelOneData" 
      :key="navItem.id" 
      :title="navItem.title"
      :titleUrl="navItem.titleUrl"
      :titleColor="navItem.titleColor"
  />
  </ul>
</template>


<script>
import NavItem from './NavItem.vue'


export default {
  name: "NavLevelOne",
  components: {
    NavItem,
  },
  props: {
    navLevelOneData: Array
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  ul {
    @media screen and (min-width: 1280px) {
      margin: 0;
      padding: 0;
      text-align: left;
      width: 230px;
      display: inline-block;
    }
  }

</style>