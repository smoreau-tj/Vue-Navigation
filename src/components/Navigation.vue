<template>
  <header class="header-main" data-header-main>
    <div class="header-main__inner container">
      <div 
        class="mobile-menu-toggle" 
        @click="showMobileMenu = !showMobileMenu"
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
        <ul class="nav-item__list level-zero-list">
        <NavLevelZero 
          v-for="(navItemData, index) in visibleNavData"
          :key="index"
          :navItemData="navItemData"
          :isActive="activeIndex === index"
          @onActiveItem="onActiveItem(index)"
          />
        </ul>
      </div>
      <div class="mobile-overlay"></div>
      <div class="header-item center">
        <a
          href="/"
          title="Tommy John Home"
          class="header-logo"
          aria-label="Tommy John Logo"
          tabindex="0"
        >
          <img
            alt="Tommy John Logo"
            src="../assets/images/tj-logo_horizontal.svg"
          />
        </a>
      </div>
      <div class="header-item right">
        <ul class="header-item__list">
          <li class="search-item">
            <img alt="Search Icon" src="../assets/images/svg-search.svg" />
            <input type="text" title="search" name="search" id="search" aria-label="search" placeholder="Search" />
          </li>
          <li class="account-item">
            Hi, Sign-in<i class="icon-down-open"></i>
          </li>
          <li class="cart-item">
            <i class="icon-shopping-cart"></i> (1)
          </li>
        </ul>
      </div>
 
    </div>
  </header>
</template>

<script>
import NavLevelZero from './NavLevelZero.vue'

export default {
  name: "Navigation",
  components: {
    NavLevelZero,
  },
  props: {
    navData: Array
  },
  data () {
    return {
      showMobileMenu: false,
      activeIndex: 0
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
    }
  },
  computed : {
    toggleMobileMenu() {
      return this.showMobileMenu ? 'active' : '';
    },
    visibleNavData() {
      return this.navData.filter(function(n){
        return n.displayCollection != "none"
      });
    },
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.header-main {
  background-color: $white;
  
  @media screen and (min-width: 1024px) {
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


      @media screen and (min-width: 1024px) {
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

      @media screen and (min-width: 1024px) {
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

        @media screen and (min-width: 1024px) {
          transform: unset;
          z-index: unset;
        }
      }

      .mobile-search-close-container {
        display: block;
        height: 46px;
        line-height: 46px;
        padding: 16px 16px 0 16px;

        @media screen and (min-width: 1024px) {
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

        @media screen and (min-width: 1024px) {
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

      @media screen and (min-width: 1024px) {
        display: none;
      }
    }

    .header-item {
      font-family: $basetica;
      color: $grey-dark;

      @media screen and (min-width: 1024px) {
        display: inline-block;
        font-size: 16px;
        line-height: 66px;
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          list-style-type: none;
          display: inline-block;

          a {
            text-decoration: none;
            color: $grey-dark;

            &:hover {
              color: $blue-light;
            }
          }
        }
      }

      &.center {
        width: 118px;
        margin: auto;
        position: absolute;
        top: 20px;
        left: 0;
        bottom: 0;
        right: 0;

        @media screen and (min-width: 480px) {
          width: 33.3333%;
          margin: 0 auto;
          display: inline-block;
          position: relative;
          left: unset;
          bottom: unset;
          right: unset;
          top: unset;
        }

        @media screen and (min-width: 1024px) {
          width: 182px;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }

        a {
          display: inline-block;

          img {
            width: 118px;

            @media screen and (min-width: 480px) {
              width: 182px;
              vertical-align: middle;
            }
          }
        }
      }

      &.right {
        text-align: right;
        width: 50%;
        display: inline-block;
        height: 66px;
        line-height: 66px;

        @media screen and (min-width: 480px) {
          width: 33.3333%;
        }

        @media screen and (min-width: 1024px) {
          font-size: 14px;
          width: 50%;
        }

        li {
          &:not(:last-child) {
            margin-right: 24px;
          }

          &.search-item {
            display: none;

            @media screen and (min-width: 1024px) {
              display: inline-block;
            }

            img {
              vertical-align: middle;
            }

            input {
              width: 134px;
              border: none;
              border-bottom: 1px solid $grey-neutral;
              font-size: 14px;
              font-family: "Basetica";
              color: $grey-dark;
              margin-left: 8px;

              &::placeholder {
                color: $grey-neutral;
              }

              &::-ms-input-placeholder {
                color: $grey-neutral;
              }
            }
          }

          &.account-item {
            display: none;

            @media screen and (min-width: 1024px) {
              display: inline-block;
            }

            .icon-down-open {
              font-family: $fontello;
              font-size: 16px;
              margin-left: 8px;
              cursor: pointer;

              &::before {
                content: "\e812";
                font-style: normal;
                position: relative;
                top: 4px;
                font-weight: bold;
              }
            }
          }

          &.cart-item {
            color: $red;

            .icon-shopping-cart {
              font-family: $fontello;
              cursor: pointer;

              &::before {
                content: "\e822";
                font-style: normal;
              }
            }
          }
        }
      }
    }
  }
}
</style>
