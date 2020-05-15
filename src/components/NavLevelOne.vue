<template>
<li class="level-one-container">
  <NavItem class="level-one-item"
    :title="levelOneData.title"
    :titleUrl="levelOneData.titleUrl"
    :titleColor="levelOneData.titleColor"
   />
   <ul class="nav-item__list level-two-list"
      v-if="levelOneData.levelTwoCats"
    >
      <NavLevelTwo
        v-for="levelTwoData in levelOneData.levelTwoCats"
        :key="levelTwoData.id"
        :levelTwoData="levelTwoData"
      />
    </ul>
  </li>
</template>


<script>
import NavItem from './NavItem.vue'
import NavLevelTwo from './NavLevelTwo.vue'


export default {
  name: "NavLevelOne",
  components: {
    NavItem,
    NavLevelTwo
  },
  props: {
    levelOneData: Object
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
      margin: 0;
      text-align: left;
      width: 230px;
      display: inline-block;
    }
  }

  .level-two-list {
    list-style-type: none;

    @media screen and (min-width: 1024px) {
      position: absolute;
      left: 278px;
      width: calc(100% - 278px);
      top: 24px;
    }
  }

  .level-one-container{
    &:first-child {
      @media screen and (min-width: 1024px) {
        padding-top: 16px;
      }
    }


  }

</style>