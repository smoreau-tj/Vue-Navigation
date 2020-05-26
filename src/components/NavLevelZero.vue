<template>
<li class="level-zero-container"
  @click="toggleActive"
  :class="{ active: isActive }"
>
  <NavItem class="level-zero-item"
    :title="navItemData.collectionTitle"
    :titleUrl="navItemData.collectionUrl"
    :titleColor="navItemData.TitleColor.hex"
    :clickableText="navItemData.clickableTitle"
    />
    <ul class="nav-item__list level-one-list"
      v-if="visibleLevelOneData"
    >
      <li class="mobile-all level-one-container">
        <div class="list-item level-one-item">
          <a :href="navItemData.collectionUrl">
            <span class="nav-item-title">
              {{'All ' + navItemData.collectionTitle}}
            </span>
            <i class="icon-right-open"></i>
          </a>
        </div>
      </li>

      <NavLevelOne 
        v-for="(levelOneData,index) in visibleLevelOneData"
        :key="index"
        :mobileGenderTitle="navItemData.collectionTitle"
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
  },
  computed : {
    visibleLevelOneData() {
      return this.navItemData.subnavigation.filter(function(d){
        return !d.hideNav
      });
    }
  }


};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  .level-zero-container {
    display: none;
    cursor: pointer;

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
      width: calc(100% - 48px);
      margin: 16px 24px 24px 24px;
      left: 0;

      @media screen and (min-width: 480px) {
        width: 268px;
      }

      @media screen and (min-width: 1024px) {
        width: 100%;
        top: 66px;
        background-color: $white;
        border-top: solid 1px $grey;
        padding-left: 0;
        min-height: 440px;
        margin: 0;
      }

      .mobile-all {
        height: 50px;
        line-height: 50px;
        background-color: $grey-light;
        margin-bottom: 4px;
        font-size: 14px;
        text-align: left;

        @media screen and (min-width: 1024px) {
          display: none;
        }

        .level-one-item{
          margin-left: 16px;

          a {
            text-decoration: none;
            color: $grey-dark;

            .icon-right-open {
              font-family: $fontello;
              position: absolute;
              right: 32px;
              font-size: 24px;
              color: var(--title-color);
              z-index: 1;


              &::before {
                content: '\e818';
                font-style: normal;
              }
            }
          }
        }
      }
    }
  }

</style>