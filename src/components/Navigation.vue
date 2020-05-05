<template>
  <header class="header-main" data-header-main>
    <div class="header-main__inner container">
      <div class="header-mobile-left"></div>
      <div class="header-desktop-item left">
        <ul class="header-desktop__list">
          <li class="list-item"><a href="">Men</a></li>
          <li class="list-item"><a href="">Women</a></li>
          <li class="list-item"><a href="">Gift Guide</a></li>
          <li class="list-item"><a href="">Sale</a></li>
        </ul>
      </div>
      <div class="header-desktop-item center">
        <a href="/" title="Tommy John Home" class="header-logo" aria-label="Tommy John Logo" tabindex="0">
          <img alt="Tommy John Logo" src="../assets/images/tj-logo_horizontal.svg"/>
        </a>
      </div>
      <div class="header-desktop-item right">
        <ul class="header-desktop__list">
          <li class="header-list-item search-item">
            <img alt="Search Icon" src="../assets/images/svg-search.svg"/>
            <input type="text" placeholder="Search"/>
          </li>
          <li class="header-list-item account-item">Hi, Sign-in<i class="icon-down-open"></i></li>
          <li class="header-list-item cart-item"><i class="icon-shopping-cart"></i> (1)</li>
        </ul>
      </div>
      <div class="header-mobile-right"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>


<style lang="scss">

@font-face {
  font-family: "Basetica";
  src: url("../assets/fonts/basetica-regular.woff") format("woff");
  font-weight: 400;
}

  @font-face {
  font-family: "Fontello";
  src: url("../assets/fonts/fontello.eot");
  src: url( "../assets/fonts/fontello.eot?#iefix") format('embedded-opentype'),
      url("../assets/fonts/fontello.woff") format('woff'),
      url("../assets/fonts/fontello.woff2") format('woff2'),
      url("../assets/fonts/fontello.ttf")  format('truetype'),
      url("../assets/fonts/fontello.svg") format('svg');
  font-style: normal;
  font-weight: 400;
}

$basetica: "Basetica", sans-serif;
$fontello: "Fontello";
$grey-dark: #4d4d4d;
$grey-light: #f5f5f5;
$grey-neutral: #767676;
$red: #b73d31;
$blue-light: #587679;
$white: #FFFFFF;

  .header-main__promo {
    @media screen and (min-width: 1280px) {
      height: 50px;
      line-height: 50px;
      background-color: $grey-light;
      font-family: $basetica;
      color: $grey-dark;
      font-size: 14px;
    }
  }

.header-main {
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
  
    .header-desktop-item {
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

      &.left {
        ul {
          text-align: left;
        }

        li {
          &:not(:last-child){
            margin-right: 40px;
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

      &.right{
        text-align: right;
        font-size: 14px;

        li {
          &:not(:last-child){
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
                content: '\e812';
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
                content: '\e822';
                font-style: normal;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 480px) {

  }
   @media screen and (min-width: 600px) {
    
  }
   @media screen and (min-width: 768px) {
    
  }
   @media screen and (min-width: 992px) {
    
  }
   @media screen and (min-width: 1024px) {
    
  }
   @media screen and (min-width: 1440px) {
    
  }
}


</style>