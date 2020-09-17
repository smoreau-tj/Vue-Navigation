<template>
  <header class="header-main" data-header-main>
    <div class="header-main__inner container">
      <div 
        class="mobile-menu-toggle" 
        @click="showMobileMenu = !showMobileMenu; onMobileMenuClick();"
      >
        <img alt="Tommy John Menu" src="../assets/images/svg-hamburger.svg"/>
      </div>
      <div 
        class="nav-item-container left"
        :class="toggleMobileMenu"
      >
        <div class="mobile-search-close-container">
          <span class="mobile-search-toggle">
            <img alt="mobile search icon" src="../assets/images/svg-mobile-search.svg">
          </span>
          <span class="mobile-menu-close-btn" @click="showMobileMenu = !showMobileMenu">&times;</span>
        </div>
        <ul class="nav-item__list level-zero-list" @mouseenter="onDesktopMenuHover()">
        <NavLevelZero 
          v-for="(navItemData, index) in visibleNavData"
          :key="index"
          :navItemData="navItemData"
          :isActive="activeIndex === index"
          @onActiveItem="onActiveItem(index)"
          :device="device"
          :heapDefaultTab="visibleNavData[activeIndex].collectionTitle"
          />
        </ul>
      </div>
      <div class="mobile-overlay"  @click="showMobileMenu = !showMobileMenu"></div>
      <NavHeaderCenter>
      </NavHeaderCenter>
      <NavHeaderRight>
      </NavHeaderRight>
    </div>
  </header>
</template>

<script>
// import {client} from '../lib/sanity.js';
import NavLevelZero from './NavLevelZero.vue'
import NavHeaderCenter from './NavHeaderCenter.vue'
import NavHeaderRight from './NavHeaderRight.vue'


export default {
  name: "Navigation",
  components: {
    NavLevelZero,
    NavHeaderCenter,
    NavHeaderRight
  },
  mounted() {
    // const queryString = "*[_type=='navigation' && isNavLive == true]";
    // client.fetch(queryString).then(data => {
    //   console.log('data', data);
    //   this.navData = data[0].navigationType;
    // }).catch( error => {console.log(error)});
  },
  data () {
    return {
      navData: [],
      showMobileMenu: false,
      activeIndex: 0,
      device: window.innerWidth > 1151 ? 'desktop' : 'mobile',
      heapData: {
        defaultTab: null,
        firstLevel: null,
        secondLevel: null,
        thirdLevel: null,
        thirdLevelType: null,
        position: 1,
      }
    }
  },
  methods : {
     onActiveItem(index) {
      if (this.activeIndex === index) {
        this.activIndex = null;
      }
      else {
        this.activeIndex = index;
      }
    },
    onMobileMenuClick (){
      this.device = 'mobile';
    },
    onDesktopMenuHover(){
      if(window.innerWidth > 1151) {
        this.device = 'desktop';
      }
    }
  },
  computed : {
    toggleMobileMenu() {
      return this.showMobileMenu ? 'active' : ''
    },
    visibleNavData() {
      return this.navData.filter(function(n){
        return n.displayCollection != 'none'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.header-main {
  background-color: $white;
  
  @media screen and (min-width: 1152px) {
    position: sticky;
    top: 0;
    left: 0;
  }

  .header-main__inner {
      height: 66px;
      padding: 0 16px;
      background-color: $white;

    @media screen and (min-width: 768px) {
      padding: 0 48px;
    }

    @media screen and (min-width: 1280px) {
      max-width: 1280px;
      margin: 0 auto;
    }

    .mobile-menu-toggle {
      width: 50%;
      display: inline-block;
      height: 66px;
      line-height: 66px;
      text-align: left;
      cursor: pointer;

      @media screen and (min-width: 480px) {
        width: 33.3333%;
      }


      @media screen and (min-width: 1152px) {
        display: none;
      }

      img {
        width: 16px;

        @media screen and (min-width: 480px) {
          width: unset;
        }
      }
    }

    .nav-item-container {
      font-family: $basetica;
      color: $grey-dark;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      transition: transform 0.3s;
      transform: translateX(-100%);
      box-shadow: 0 10px 80px 0 rgba(0,0,0,0.10);
      width: 100%;

      @media screen and (min-width: 480px) {
        width: 320px;
      }

      @media screen and (min-width: 1152px) {
        display: inline-block;
        width: 50%;
        font-size: 16px;
        line-height: 66px;
        height: unset;
        position: unset;
        left: unset;
        top: unset;
        background-color: none;
        transition: unset;
        transform: unset;
        box-shadow: none;
        vertical-align: bottom;
      }

      &.active {
        z-index: 2;
        transform: translateX(0);

        @media screen and (min-width: 1152px) {
          transform: unset;
          z-index: unset;
        }
      }

      .mobile-search-close-container {
        display: block;
        height: 46px;
        line-height: 46px;
        padding: 16px 16px 0 16px;

        @media screen and (min-width: 1152px) {
          display: none;
        }

        .mobile-search-toggle {
          display: inline-block;
          width: 50%;
          text-align: left;
          cursor: pointer;

          img {
            width: 16px;
          }
        }

        .mobile-menu-close-btn {
          display: inline-block;
          width: 50%;
          font-size: 28px;
          font-family: $basetica;
          color: $blue;
          text-align: right;
          cursor: pointer;
        }
      }

      .level-zero-list {
        margin: 0;
        padding: 0;
        text-align: center;
        height: 76px;
        line-height: 75px;
        border-top: .5px solid $grey;
        border-bottom: .5px solid $grey;

        @media screen and (min-width: 1152px) {
          height: 66px;
          text-align: left;
          line-height: inherit;
          border-top: unset;
          border-bottom: unset;
        }
      }
    }

    .mobile-overlay {
      display: none;
    }

    .nav-item-container.active + .mobile-overlay {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(245,245,245,0.85);

      @media screen and (min-width: 1152px) {
        display: none;
      }
    }
  }
}
</style>
