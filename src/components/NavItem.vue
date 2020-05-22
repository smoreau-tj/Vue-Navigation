<template>
  <div class="list-item" :style="cssVars">
    <a href="" :class="{'disable-link' : !clickableText }">
      <img class="mobile-image" alt="" v-if="mobileImage" :src="mobileImage"/>
      <img class="level-two-image" alt="" v-if="levelTwoImage" :src="levelTwoImage"/>
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
    backgroundColor: String,
    mobileImage: String,
    levelTwoImage: String,
    clickableText: Boolean
  },
  computed: {
    cssVars () {
      return {
        '--background-color': this.backgroundColor,
        '--title-color': this.titleColor
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";

  div.list-item {
    list-style-type: none;

    a {
      text-decoration: none;
      color: var(--title-color);
      font-family: $basetica;

      .nav-item-title {
        color: var(--title-color);
      }

      .icon-right-open {
        color: var(--title-color);
      }
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

        &.disable-link {
          pointer-events: none;
        }
      }
    }

    &.level-one-item {
      height: 70px;
      line-height: 70px;
      background-color: var(--background-color);
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
          z-index: 2;

          @media screen and (min-width: 1024px) {
            display: none;
          }
        }

        .nav-item-title {
          margin-left: 16px;
          font-size: 14px;
          color: var(--title-color);


          @media screen and (min-width: 1024px) {
            margin-left: unset;
            font-size: unset;
          }
        }

        .icon-right-open {
          font-family: $fontello;
          position: absolute;
          right: 32px;
          font-size: 24px;
          color: var(--title-color);
          z-index: 1;

          @media screen and (min-width: 1024px) {
            display: inline;
            right: 16px;
            font-size: 20px;
          }

          &::before {
            content: '\e818';
            font-style: normal;
          }
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
      background-color: $grey-light;
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
        display: block;

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
