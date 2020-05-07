<template>
  <ul class="header-item__list">
    <NavItem class="level-two"
      v-for="navItem in navLevelTwoData" 
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
  name: "NavLevelTwo",
  components: {
    NavItem,
  },
  props: {
    navLevelTwoData: Array
  }
};
</script>