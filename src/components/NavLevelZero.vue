<template>
<li class="level-zero-container"
  @click="toggleActive"
  :class="{ active: isActive }"
>
  <NavItem class="level-zero-item"
    :title="navItemData.title"
    :titleUrl="navItemData.titleUrl"
    :titleColor="navItemData.titleColor"
    />
    <ul class="nav-item__list level-one-list"
      v-if="navItemData.levelOneCats"
    >
      <NavLevelOne 
        v-for="(levelOneData,index) in navItemData.levelOneCats"
        :key="index"
        :mobileGenderTitle="navItemData.title"
        :levelOneData="levelOneData"
        :isActive="activeIndex === index"
        @onActiveLevelOneItem ="onActiveLevelOneItem(index)"
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
    navItemData: Object,
    isActive : Boolean,    
  },
  data () {
    return {
      activeIndex: null
    }
  },
  methods : {
    toggleActive() {
      this.$emit('onActiveItem');
    },
    onActiveLevelOneItem(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      }
      else {
        this.activeIndex = index;
      }
    }
  }


};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  .level-zero-container {
    display: none;

    @media screen and (min-width: 1024px) {
      display: inline-block;
      z-index: 2;
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
    }

    .level-one-list {
      position: absolute;
      padding: 0;
      list-style-type: none;
      width: 268px;
      margin: 16px 24px 24px 24px;
      left: 0;


      @media screen and (min-width: 1024px) {
        width: 100%;
        top: 66px;
        background-color: $white;
        border-top: solid 1px $grey;
        padding-left: 0;
        min-height: 440px;
        margin: 0;
      }
    }
  }

</style>