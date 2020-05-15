<template>
<li class="level-zero-container">
  <NavItem class="level-zero-item"
    :title="navItemData.title"
    :titleUrl="navItemData.titleUrl"
    :titleColor="navItemData.titleColor"
    />
    <ul class="nav-item__list level-one-list"
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

  // old CSS ^

  .level-zero-container {
    display: none;

    @media screen and (min-width: 1024px) {
      // margin-right: 40px;
      display: inline-block;
      z-index: 2;
    }

    //for testing
    &:first-child .level-one-list {
      display: block;
    }

    &:nth-child(-n+2){
      display: inline-block;
      width: 50%;

      @media screen and (min-width: 1024px) {
        width: unset;
      }
    }

    &:hover {

      .level-zero-item {
        @media screen and (min-width: 1024px) {
          position: relative;
          border-bottom: 2px solid $blue;
          z-index: 2;
        }

        a {
          span {
            color: $blue;
          }
        }
      }

      .level-one-list {
        @media screen and (min-width: 1024px) {
          display: block;
        }
      }
    }

    .level-one-list {
      display: none;

      @media screen and (min-width: 1024px) {
        position: absolute;
        left: 0;
        list-style-type: none;
        width: 100%;
        top: 66px;
        background-color: $white;
        border-top: solid 1px $grey;
        padding-top: 16px;
      }
    }
  }

</style>