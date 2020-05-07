<template>
  <ul class="header-item__list">
      <!-- <li class="list-item"><a href="">Men</a></li>
      <li class="list-item"><a href="">Women</a></li>
      <li class="list-item"><a href="">Gift Guide</a></li>
      <li class="list-item"><a href="">Sale</a></li> -->
      <NavItem :navItemData=navLevelTwoData />
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