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
        <NavLevelZero 
        class="level-zero-list" 
        :navLevelZeroData=navLevelZeroData
        @level-zero-active="getLevelOneToShow"
         />
        <div class="sub-nav-container">
          <NavLevelOne 
            class="level-one-list" 
            :navLevelOneData=navLevelOneData
            @level-one-active="getLevelTwoToShow"
            :showLevelOneItems="showLevelOneItems"
          />
          <NavLevelTwo 
            class="level-two-list" 
            :navLevelTwoData=navLevelTwoData
            :showLevelTwoItems="showLevelTwoItems"
          />
        </div>
        <NavMobileFooterLinks />
      </div>
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
            <input type="text" placeholder="Search" />
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
import NavLevelOne from './NavLevelOne.vue'
import NavLevelTwo from './NavLevelTwo.vue'
import NavMobileFooterLinks from './NavMobileFooterLinks.vue'


export default {
  name: "Navigation",
  components: {
    NavLevelZero,
    NavLevelOne,
    NavLevelTwo,
    NavMobileFooterLinks
  },
  props: {
    navLevelZeroData: Array,
    navLevelOneData: Array,
    navLevelTwoData: Array,
  },
  data () {
    return {
      showLevelOneItems: 1,
      showLevelTwoItems: 1,
      showMobileMenu: false,
    }
  },
  methods: {
    getLevelOneToShow(value){
      console.log('Show Level one elements with this id', value);
      this.showLevelOneItems = value;
    },
    getLevelTwoToShow(value){
      console.log('show level two elements with this id', value);
      this.showLevelTwoItems = value;
    }
  },
  computed : {
    toggleMobileMenu() {
      return this.showMobileMenu ? 'active' : '';
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

    .mobile-menu-toggle {
      width: 33.3333%;
      display: inline-block;
      height: 66px;
      line-height: 66px;
      text-align: left;
      cursor: pointer;

      @media screen and (min-width: 1152px) {
        display: none;
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


      @media screen and (min-width: 768px) {
        width: 264px;
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
      }

      &.active {
        transform: translateX(0);

        @media screen and (min-width: 1152px) {
          transform: unset;
        }
      }

      &:hover {
        .sub-nav-container {
          @media screen and (min-width: 1152px) {
            display: block;
          }
        }
      }

      .mobile-search-close-container {
        display: block;
        height: 46px;
        line-height: 46px;
        padding: 16px 16px 16px;

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

      .sub-nav-container {
        @media screen and (min-width: 768px) {
          display: block;
          position: relative;
        }

        @media screen and (min-width: 1152px) {
          display: none;
          border-top: solid 1px $grey;
          padding-top: 8px;
          height: 431px;
          position: absolute;
          width: 100%;
          left: 0;
          background-color: white;
          top: 66px;
        }

        &:hover {
          display: block;
        }
      }
    }

    .header-item {
      font-family: $basetica;
      color: $grey-dark;

      @media screen and (min-width: 1152px) {
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
        display: inline-block;
        min-width: 118px;
        width: 33.3333%;

        @media screen and (min-width: 1152px) {
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
            // height: 36px;
            width: 182px;
            vertical-align: middle;
          }
        }
      }

      &.right {
        text-align: right;
        width: 33.3333%;
        display: inline-block;
        height: 66px;
        line-height: 66px;

        @media screen and (min-width: 1152px) {
          font-size: 14px;
          width: 50%;
        }
        li {
          &:not(:last-child) {
            margin-right: 24px;
          }

          &.search-item {
            display: none;

            @media screen and (min-width: 1152px) {
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

            @media screen and (min-width: 1152px) {
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
