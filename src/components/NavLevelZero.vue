<template>
<li class="level-zero-container">
  <NavItem class="level-zero-item"
    :title="navItemData.title"
    :titleUrl="navItemData.titleUrl"
    :titleColor="navItemData.titleColor"
    />
    <ul class="nav-item__list"
      v-if="navItemData.levelOneCats"
    >
      <NavLevelOne 
        v-for="levelOneData in navItemData.levelOneCats"
        :key="levelOneData.id"
        :levelOneData="levelOneData"
      />
    </ul>
  </li>
</template>


<script>
import NavItem from './NavItem.vue'
import NavLevelOne from './NavLevelOne.vue'


export default {
  name: "NavLevelZero",
  components: {
    NavItem,
    NavLevelOne
  },
  props: {
    navItemData: Object
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

    @media screen and (min-width: 1024px) {
      text-align: left;
      border-top: unset;
      border-bottom: unset;
      height: unset;
      line-height: unset;
    }
  }

</style>