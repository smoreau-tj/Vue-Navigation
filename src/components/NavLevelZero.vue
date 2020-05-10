<template>
  <ul class="nav-item__list">
    <NavItem class="level-zero-item" v-on="$listeners"
      v-for="navItem in navLevelZeroData"
      :key="navItem.id" 
      :id="navItem.id"
      :title="navItem.title"
      :titleUrl="navItem.titleUrl"
      :titleColor="navItem.titleColor"
      :level="level"
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
    navLevelZeroData: Array,
  },
  data () {
    return {
      level: 0
    }
  }

};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  ul {
    margin: 0;
    border-top: 0.5px solid $grey;
    border-bottom: 0.5px solid $grey;
    height: 80px;
    line-height: 80px;
    padding: 0;

    @media screen and (min-width: 1152px) {
      text-align: left;
      border-top: unset;
      border-bottom: unset;
      height: unset;
      line-height: unset;
    }
  }

</style>