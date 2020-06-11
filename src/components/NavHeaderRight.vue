<template>
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
</template>

<script>
  export default {
    name: "NavHeaderRight",
  }
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

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

  &.right {
    text-align: right;
    width: 50%;
    display: inline-block;
    height: 66px;
    line-height: 66px;

    @media screen and (min-width: 480px) {
      width: 33.3333%;
    }

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

</style>