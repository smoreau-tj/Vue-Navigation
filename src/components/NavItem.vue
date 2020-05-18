<template>
  <div class="list-item">
    <a href="">
      <img class="mobile-image" v-if="mobileImage" :src="mobileImage"/>
      <img class="level-two-image" v-if="levelTwoImage" :src="levelTwoImage"/>
      <span class="nav-item-title">{{title}}</span>
      <i class="icon-right-open"></i>
    </a>
  </div>
</template>


<script>
export default {
  name: "navItem",
  props: {
    title: String,
    titleUrl: String,
    titleColor: String,
    mobileImage: String,
    levelTwoImage: String,
  },
};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  .list-item {
    list-style-type: none;

    a {
      text-decoration: none;
      color: $grey-dark;
      font-family: $basetica;
    }

    &.level-zero-item {
      @media screen and (min-width: 1024px) {
        margin-right: 40px;
      }

      a {
        font-family: $basetica-bold;

        @media screen and (min-width: 1024px) {
          font-family: $basetica;
        }
      }
    }

    &.level-one-item {
      height: 70px;
      line-height: 70px;
      background-color: $lightest-grey;
      margin-bottom: 4px;
      position: relative;
      text-align: left;

      @media screen and (min-width: 1024px) {
        height: 46px;
        line-height: 46px;
        background-color: unset;
        margin-bottom: unset;
        cursor: pointer;
        width: 230px;
      }

      a {
        width: 100%;
        text-align: left;

        @media screen and (min-width: 1024px) {
          font-size: 16px;
          margin-left: 48px;
          width: unset;
          display: unset;
          text-align: unset;
        }

        .mobile-image {
          display: inline;
          height: 70px;
          position: absolute;
          right: 16px;

          @media screen and (min-width: 1024px) {
            display: none;
          }
        }

        .nav-item-title {
          margin-left: 16px;
          font-size: 14px;

          @media screen and (min-width: 1024px) {
            margin-left: unset;
            font-size: unset;
          }
        }
      }

      .icon-right-open {
        display: none;

        @media screen and (min-width: 1024px) {
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

      &:hover {
        @media screen and (min-width: 1024px) {
          background-color: $grey-light;
        }

        .nav-item-title {
          @media screen and (min-width: 1024px) {
            font-family: $basetica-bold;
            color: $blue;
          }
        }

        .icon-right-open {
            @media screen and (min-width: 1024px) {
            font-weight: bold;
            color: $blue;
          }
        }
      }
    }

    &.level-two-item {
      height: 70px;
      line-height: 70px;
      background-color: $lightest-grey;
      margin-bottom: 4px;
      position: relative;
      text-align: left;

      @media screen and (min-width: 1024px) {
        vertical-align: top;
        margin-right: 8px;
        background-color: unset;
        margin-bottom: unset;
        height: unset;
        line-height: 1;
      }

      a {
        @media screen and (min-width: 1024px) {
          display: block;
        }

        .level-two-image {
          display: inline;
          height: 70px;
          position: absolute;
          right: 16px;
          
          @media screen and (min-width: 1024px) {
            position: relative;
            height: 174px;
            right: unset;
          }
        }

        .nav-item-title {
          margin-left: 16px;
          font-size: 14px;

          @media screen and (min-width: 1024px) {
            display: block;
            font-size: 12px;
            margin-left: unset;
          }
        }
      }

      &:hover {
        .nav-item-title {
          @media screen and (min-width: 1024px) {
            text-decoration: underline;
          }
        }
      }
    }
  }


</style>
