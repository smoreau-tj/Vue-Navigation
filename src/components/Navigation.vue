<template>
  <header class="header-main" data-header-main>
    <div class="header-main__inner container">
      <div class="nav-item-container left">
        <NavLevelZero class="level-zero-list" :navLevelZeroData=navLevelZeroData />
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
    <div class="sub-nav-container">
      <NavLevelOne class="level-one-list" :navLevelOneData=navLevelOneData />
      <NavLevelTwo class="level-two-list" :navLevelTwoData=navLevelTwoData />
    </div>
  </header>
</template>

<script>
import NavLevelZero from './NavLevelZero.vue'
import NavLevelOne from './NavLevelOne.vue'
import NavLevelTwo from './NavLevelTwo.vue'


export default {
  name: "Navigation",
  components: {
    NavLevelZero,
    NavLevelOne,
    NavLevelTwo
  },
  props: {
    navLevelZeroData: Array,
    navLevelOneData: Array,
    navLevelTwoData: Array,
  }
};

</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.header-main {
  background-color: $white;
  
  @media screen and (min-width: 1280px) {
    position: sticky;
    top: 0;
    left: 0;
  }

  .header-main__inner {
    @media screen and (min-width: 1280px) {
      height: 66px;
      padding: 0 48px;
      background-color: $white;
    }

    .nav-item-container {
      display: none;
      font-family: $basetica;
      color: $grey-dark;

      @media screen and (min-width: 1280px) {
        display: inline-block;
        width: 33.3333%;
        font-size: 16px;
        line-height: 66px;
      }
    }

    .header-item {
      display: none;
      font-family: $basetica;
      color: $grey-dark;

      @media screen and (min-width: 1280px) {
        display: inline-block;
        width: 33.3333%;
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
        font-size: 14px;

        li {
          &:not(:last-child) {
            margin-right: 24px;
          }

          &.search-item {
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

  .sub-nav-container {
    @media screen and (min-width: 1280px) {
      border-top: solid 1px $grey;
      padding-top: 8px;
      height: 431px;
    }
  }
}
</style>
