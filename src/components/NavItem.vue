<template>
  <li class="list-item">
    <a href="">
      <img class="desktop-single-image" v-if="desktopImage" :src="desktopImage"/>
      <span class="nav-item-title">{{title}}</span>
      <i class="icon-right-open"></i>
    </a>
  </li>
</template>


<script>
export default {
  name: "navItem",
  props: {
    title: String,
    titleUrl: String,
    titleColor: String,
    desktopImage: String
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";
  li {
    list-style-type: none;

    a {
      text-decoration: none;
      color: $grey-dark;
      font-family: $basetica;

      &:hover {
        color: $blue-light;
      }
    }
    
    .icon-right-open {
      display: none;
    }

    &.level-zero-item {
      @media screen and (min-width: 1280px) {
        margin-right: 40px;
        display: inline-block;
      }
    }

    &.level-one-item {
      @media screen and (min-width: 1280px) {
        height: 46px;
        line-height: 46px;
        position: relative;
      }

      a {
        @media screen and (min-width: 1280px) {
          font-size: 16px;
          margin-left: 48px;
        }
      }

      .icon-right-open {
        @media screen and (min-width: 1280px) {
          position: absolute;
          display: inline;
          font-family: $fontello;
          right: 16px;
        }

        &::before {
          content: '\e818';
          font-style: normal;
        }
      }
    }

    &.level-two-item {
      @media screen and (min-width: 1280px) {
        display: inline-block;
        vertical-align: top;
        margin-right: 8px;
      }

      a {
        @media screen and (min-width: 1280px) {
          display: block;
        }

        .desktop-single-image {
          @media screen and (min-width: 1280px) {
            display: block;
            max-height: 174px;
            padding-bottom: 8px;
          }
        }

        .nav-item-title {
          @media screen and (min-width: 1280px) {
            display: block;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
