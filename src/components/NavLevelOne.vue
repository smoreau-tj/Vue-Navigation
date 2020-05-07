<template>
  <ul class="header-item__list">
    <NavItem class="level-one"
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