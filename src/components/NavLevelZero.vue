<template>
<li class="level-zero-container"
  :class="[
    {'desktop-only': navItemData.displayCollection === 'desktop' },
    {'mobile-only': navItemData.displayCollection === 'mobile' },
    { active: isActive }
  ]"
  @click="toggleActive"
  >
 
  <NavItem class="level-zero-item"
    :title="navItemData.collectionTitle"
    :titleUrl="navItemData.collectionUrl ? navItemData.collectionUrl : null"
    :titleColor="navItemData.TitleColor ? navItemData.TitleColor.hex : '#4d4d4d'"
    :clickableText="navItemData.clickableTitle"
    />
    <ul class="nav-item__list level-one-list"
      v-if="visibleLevelOneData"
    >
      <li class="mobile-all" v-if="navItemData.collectionUrl">
        <div class="list-item level-one-item">
          <a :href="navItemData.collectionUrl ? navItemData.collectionUrl : null ">
            <span class="nav-item-title">
              {{'All ' + navItemData.collectionTitle}}
            </span>
            <img class="mobile-image" 
              v-if="navItemData.mobileImage.navImage" 
              :src="convertImageRef(navItemData.mobileImage.navImage)"
              :alt="navItemData.mobileImage.imageAltText ? navItemData.mobileImage.imageAltText : null" >
          </a>
        </div>
      </li>
      <NavLevelOne 
        v-for="(levelOneData,index) in visibleLevelOneData"
        :key="index"
        :index="index"
        :mobileGenderTitle="navItemData.collectionTitle"
        :levelOneData="levelOneData"
        :isActive="activeIndex === index"
        @onActiveLevelOneItem ="onActiveLevelOneItem(index)"
        :device="device"
      />
      <NavMobileFooterLinks />
    </ul>
  </li>
</template>


<script>
import {client} from '../lib/sanity.js';
import NavItem from './NavItem.vue'
import NavLevelOne from './NavLevelOne.vue'
import NavMobileFooterLinks from './NavMobileFooterLinks.vue'
import imageUrlBuilder from '@sanity/image-url'




export default {
  name: "NavLevelZero",
  components: {
    NavItem,
    NavLevelOne,
    NavMobileFooterLinks
  },
  props: {
    navItemData: Object,
    isActive : Boolean,
    device: String
  },
  data () {
    return {
      activeIndex: null,
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
    },
    convertImageRef(imageRef){
      const builder = imageUrlBuilder(client);
        function urlFor(source) {
          return builder.image(source)
        }
      return urlFor(imageRef).url()
    }
  },
  computed : {
    visibleLevelOneData() {
      let device = this.device;
      return this.navItemData.subnavigation.filter(function(d){
        return (d.displayCollection === "all" || d.displayCollection === device);
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  .level-zero-container {
    display: inline-block;
    cursor: pointer;
    width: 50%;

    @media screen and (min-width: 1152px) {
      width: unset;
      z-index: 2;
    }

    &.desktop-only {
      display: none;

      @media screen and (min-width: 1152px) {
        display: inline-block;
      }
    }

    &.mobile-only {
      display: inline-block;

      @media screen and (min-width: 1152px) {
        display: none;
      }
    }

    &:nth-child(n+3){
      display: none;

      @media screen and (min-width: 1152px) {
        display: inline-block;
      }
    }

    &:hover {
      .level-zero-item {
        @media screen and (min-width: 1152px) {
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
      padding: 0 24px 0 24px;
      list-style-type: none;
      width: calc(100% - 48px);
      margin: 16px 0 0 0;
      left: 0;
      top: 138px;
      overflow: auto;
      bottom: 0;

      @media screen and (min-width: 480px) {
        width: 272px;
      }

      @media screen and (min-width: 1152px) {
        width: 100%;
        top: 66px;
        background-color: $white;
        border-top: solid 1px $grey;
        padding: 0;
        min-height: 440px;
        margin: 0;
        overflow: unset;
        bottom: unset;
      }

      .mobile-all {
        height: 50px;
        line-height: 50px;
        background-color: $grey-light;
        margin-bottom: 4px;
        font-size: 14px;
        text-align: left;

        @media screen and (min-width: 1152px) {
          display: none;
        }

        .level-one-item{
          margin-left: 16px;
          position: relative;

          a {
            text-decoration: none;
            color: $grey-dark;
            display: block;

            img {
              display: inline;
              height: 50px;
              position: absolute;
              right: 16px;
              z-index: 2;
            }
          }
        }
      }
    }
  }

</style>