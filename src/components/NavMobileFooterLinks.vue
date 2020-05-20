<template>
<div class="nav-footer-container mobile">
  <ul>
    <li><a href="">1-800-708-3490</a></li>
    <li><a href="">Help</a></li>
    <li><a href="">Shipping &#38; Returns</a></li>
    <li><a href="">Store Locator</a></li>
    <li><a href="">Press</a></li>
    <li><a href="">Jobs</a></li>
  </ul>
  <div class="mobile-account-item">
    <a href="/account">
      <span class="mobile-account-icon"></span>
      <span class="mobile-account-text">Hi, Sign In</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "NavMobileFooterLinks"
};
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.nav-footer-container {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: none;
  }

  ul {
    list-style-type: none;
    text-align: left;
    font-size: 12px;
    font-family: $basetica;
    margin-left: 24px;
    padding: 0;

    li {
      margin-bottom: 8px;

      a {
        text-decoration: none;
        color: $grey-neutral;
      }
    }
  }

  .mobile-account-item {
    height: 50px;
    background-color: $grey-light;
    line-height: 50px;
    text-align: left;

    a {
      text-decoration: none;
      color: $grey-dark;

      .mobile-account-icon {
        font-family: $fontello;
        margin-left: 32px;
        margin-right: 16px;

        &::before {
          content: '\e823';
        }
      }
    }
  }
}
</style>
