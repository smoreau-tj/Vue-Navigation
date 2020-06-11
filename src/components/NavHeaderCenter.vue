<template>
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
</template>

<script>
  export default {
    name: "NavHeaderCenter",
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
        width: 118px;

        @media screen and (min-width: 480px) {
          width: 182px;
          vertical-align: middle;
        }
      }
    }
  }
}

</style>