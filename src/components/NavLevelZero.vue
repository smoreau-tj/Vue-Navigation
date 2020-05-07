<template>
  <ul class="header-item__list">
      <!-- <li class="list-item"><a href="">Men</a></li>
      <li class="list-item"><a href="">Women</a></li>
      <li class="list-item"><a href="">Gift Guide</a></li>
      <li class="list-item"><a href="">Sale</a></li> -->
      <NavItem 
        v-for="navItem in navLevelZeroData" 
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
  name: "NavLevelZero",
  components: {
    NavItem,
  },
  props: {
    navLevelZeroData: Array
  }
};
</script>