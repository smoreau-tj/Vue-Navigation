<template>
<li class="level-one-container"
  @click="toggleActiveLevelOne"
  :class="{ active: isActive }"
>
  <NavItem class="level-one-item"
    :title="levelOneData.title"
    :titleUrl="levelOneData.titleUrl"
    :titleColor="levelOneData.titleColor"
    :mobileImage="levelOneData.image"
   />
   <ul class="nav-item__list level-two-list"
      v-if="levelOneData.levelTwoCats"
    >
      <li class="mobile-title-container">
        <i class="icon-left-close"> </i>
        <span v-if="mobileGenderTitle === 'Men' || 'Women'" class="level-two-mobile-title">
          {{mobileGenderTitle + "'s " + levelOneData.title}}
        </span>
        <span v-else class="level-two-mobile-title">
          {{levelOneData.title}}
        </span>
      </li>
      <li class="shop-all-item">
        <a :href="levelOneData.titleUrl">
          <span class="nav-item-title">
            All {{levelOneData.title}}
          </span>
        </a>
      </li>
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
    levelOneData: Object,
    isActive : Boolean,
    mobileGenderTitle: String,
  },
  methods : {
    toggleActiveLevelOne() {
      this.$emit('onActiveLevelOneItem');
    }
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
    width: 100%;
    margin: 0 24px 24px 0;
    height: 100%;
    z-index: 3;
    background-color: white;


    @media screen and (min-width: 1024px) {
      position: absolute;
      left: 278px;
      width: calc(100% - 278px);
      top: 24px;
      height: unset;
      margin: unset;
      z-index: unset;
      background-color: unset;
    }

    .mobile-title-container {
      text-align: center;
      height: 56px;
      line-height: 56px;
      border-bottom: .5px solid $grey;

      @media screen and (min-width: 1024px) {
        display: none;
      }

      .icon-left-close {
        font-family: $fontello;
        color:$blue;
        font-size: 24px;
        position: absolute;
        left: 24px;

        &::before {
          font-style: normal;
          content:"\e819";
        }
      }

      .level-two-mobile-title {
        font-size: 14px;
      }
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