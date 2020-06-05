<template>
<li class="level-one-container"
  :class="[
    {'desktop-only': levelOneData.displayCollection === 'desktop'},
    {'mobile-only': levelOneData.displayCollection === 'mobile' },
    { active: isActive },
    `index-${index}`
  ]"
>
  <div @click="toggleActiveLevelOne">
    <NavItem class="level-one-item"
      :title="levelOneData.styleName"
      :titleUrl="levelOneData.stylesUrl ? levelOneData.stylesUrl.current : null"
      :titleColor="levelOneData.styleColor ? levelOneData.styleColor.hex : '#4d4d4d'"
      :mobileImage="levelOneData.navItemImage ? levelOneData.navItemImage.navImage : null"
      :altText="levelOneData.navItemImage ? levelOneData.navItemImage.imageAltText : null"

      :backgroundColor="levelOneData.BackgroundColor ? levelOneData.BackgroundColor.hex : '#f5f5f5'"

    />
  </div>
   <ul class="nav-item__list level-two-list"
      :class="[
        {'max-nav-items-doublewide' : visibleLevelTwoData.length > 6 && levelOneData.isFirstDoubleWide },
        {'max-nav-items' : visibleLevelTwoData.length > 7 && !levelOneData.isFirstDoubleWide }
      ]"
      v-if="visibleLevelTwoData.length"
    >
      <li class="mobile-title-container">
        <i class="icon-left-close" @click="toggleActiveLevelOne"> </i>
        <span v-if="mobileGenderTitle === 'Men' || 'Women'" class="level-two-mobile-title">
          {{mobileGenderTitle + "'s " + levelOneData.styleName}}
        </span>
        <span v-else class="level-two-mobile-title">
          {{levelOneData.title}}
        </span>
      </li>
      <li class="shop-all-item"
          :class="{'hide': !levelOneData.stylesUrl}"
      >
        <a :href="levelOneData.stylesUrl ? levelOneData.stylesUrl.current : null">
          <span class="nav-item-title">
            All {{levelOneData.styleName}}
          </span>
        </a>
      </li>
      <NavLevelTwo
        v-for="(levelTwoData, index) in visibleLevelTwoData"
        :key="index"
        :index="index"
        :levelTwoData="levelTwoData"
      />
      <li v-if="visibleLevelTwoData.length > 6 && levelOneData.isFirstDoubleWide" class="links-only doublewide-true">
        <div class="level-two-item"
          v-for="(levelTwoData, index) in visibleLevelTwoData.slice(4, visibleLevelTwoData.length )"
          :key="index"
          >
            <a :href="levelTwoData.navUrl">{{levelTwoData.text}}</a>
        </div>
      </li>
      <li v-else-if="visibleLevelTwoData.length > 7 && !levelOneData.isFirstDoubleWide" class="links-only doublewide-false">
        <div class="level-two-item"
          v-for="(levelTwoData, index) in visibleLevelTwoData.slice(5, visibleLevelTwoData.length )"
          :key="index"
          >
            <a :href="levelTwoData.navUrl">{{levelTwoData.text}}</a>
        </div>
      </li>
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
    index: Number,
    levelOneData: Object,
    isActive : Boolean,
    mobileGenderTitle: String,
    device: String
  },
  methods : {
    toggleActiveLevelOne() {
      this.$emit('onActiveLevelOneItem');
    }
  },
  computed : {
    visibleLevelTwoData() {
      let visibleData = [];
      let device = this.device;
      if(this.levelOneData.style) {
        visibleData = this.levelOneData.style.filter(function(d){
        return (d.displayCollection === "all" || d.displayCollection === device);
      });
    }
      return visibleData
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
    position: fixed;
    top: 63px;
    left: 0;
    display: block;
    overflow: auto;


    @media screen and (min-width: 1024px) {
      position: absolute;
      left: 278px;
      width: calc(100% - 278px);
      top: 24px;
      height: unset;
      margin: unset;
      z-index: unset;
      background-color: unset;
      overflow: unset;
    }

    .mobile-title-container {
      text-align: center;
      height: 56px;
      line-height: 56px;
      border-bottom: .5px solid $grey;
      position: sticky;
      top: 0;
      z-index: 1;
      background-color: white;
      margin-bottom: 8px;

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

    .shop-all-item {
      height: 50px;
      background-color: $lightest-grey;
      margin: 0 24px 6px 24px;
      line-height: 50px;

      @media screen and (min-width: 1024px) {
        margin: 16px 0 16px 0;
        height: unset;
        line-height: 1;
        background-color: transparent;
      }

      &.hide {
        display: none;
      }

      a {
        text-decoration: none;
        display: block;

        .nav-item-title {
          margin-left: 16px;
          font-family: $basetica;
          font-size: 14px;
          color: $grey-dark;

          @media screen and (min-width: 1024px) {
            margin-left: 0;
            text-decoration: underline;
            font-family: $basetica-bold;
          }

          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    &.max-nav-items,
    &.max-nav-items-doublewide {
      height: 100%;

      @media screen and (min-width: 1024px) {
        height: unset;
      }

      .level-two-container:nth-child(n+8){
        @media screen and (min-width: 1024px) {
          display: none;
        }
      }

      .links-only{
        visibility: hidden;

        @media screen and (min-width: 1024px) {
          visibility: visible;
          display: inline-block;
          vertical-align: top;
          margin-left: 16px;
        }

        .level-two-item {
          font-size: 14px;
          margin-bottom: 8px;
          display: block;
          line-height: 1;

          a {
            margin-left: 0;
            text-decoration: none;
            color: $grey-dark;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    &.max-nav-items-doublewide {
      .level-two-container:nth-child(n+7){
        @media screen and (min-width: 1024px) {
          display: none;
        }
      }
    }
  }

  .level-one-container{
    &.index-0{
      @media screen and (min-width: 1024px) {
        padding-top: 16px;
      }
    }
  }

</style>