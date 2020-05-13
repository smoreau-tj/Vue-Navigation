<template>
  <div class="header-main__promo">
    Free Shipping on $75+ and Free Returns on ALL Orders
  </div>
</template>

<script>
export default {
  name: 'SiteNotice',
}
</script>

<style lang="scss" scoped>
@import "../scss/_global.scss";

.header-main__promo {
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    height: 50px;
    line-height: 50px;
    background-color: $grey-light;
    font-family: $basetica;
    color: $grey-dark;
    font-size: 14px;
  }
}
</style>
