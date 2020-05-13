<template>
  <li class="list-item" @mouseenter="updateHoverState(true, parentId, level, id)" @mouseleave="updateHoverState(false, parentId, level, id)">
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
    desktopImage: String,
    parentId: Number,
    level: Number,
    id: Number,
    showLevelOneItems: Number,
    showLevelTwoItems: Number
  },
  data() {
    return {
      hoverState: false,
      activeLevelZero: false,
      activeLevelOne: false,
    }
  },
  methods: {
    updateHoverState(isHover, pId, currentLevel, levelZeroId) {
      if(currentLevel === 0){
        this.$emit("level-zero-active", levelZeroId);
        this.$emit("preselect-level-one");
      }
      if(currentLevel === 1){
        this.$emit("level-one-active", pId);
      }
      

      console.log('hover state updated', isHover, "parentId is", pId, "current level is", currentLevel, "level zero id is", levelZeroId);
      //   console.log("On level 0!!!!!");
      //   this.$emit("levelZeroActive", levelZeroId);
      // }
      
      // if(currentLevel === 1){
      //   console.log('ON LEVEL 1!!!!!');
      // }
      // this.hoverState = isHover;
      // this.$emit("level-zero-active", levelZeroId);

    }
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
        color: $blue;
      }
    }
    
    .icon-right-open {
      display: none;
    }

    &.level-zero-item {
      display: none;

      a {
        font-family: $basetica-bold;

        @media screen and (min-width: 1024px) {
          font-family: $basetica;
        }
      }

      &:nth-child(-n+2){
        display: inline-block;
        width: 50%;

        @media screen and (min-width: 1024px) {
          width: unset;
        }
      }

      @media screen and (min-width: 1024px) {
        margin-right: 40px;
        display: inline-block;
        z-index: 2;
        position: relative;
      }

      &:hover {
        @media screen and (min-width: 1024px) {
          border-bottom: 2px solid $blue;
        }
      }
    }

    &.level-one-item {
      height: 50px;
      line-height: 50px;
      background-color: $lightest-grey;
      margin-bottom: 4px;
      position: relative;

      @media screen and (min-width: 1024px) {
        height: 46px;
        line-height: 46px;
        background-color: unset;
        margin-bottom: unset;
        cursor: pointer;
      }

      a {
        @media screen and (min-width: 1024px) {
          font-size: 16px;
          margin-left: 48px;
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
      height: 50px;
      line-height: 50px;
      background-color: $lightest-grey;
      margin-bottom: 4px;
      position: relative;

      @media screen and (min-width: 1024px) {
        display: inline-block;
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

        .desktop-single-image {
          //this styling should be for mobile image, will replace soon.
          position: absolute;
          height: 50px;
          right: 16px;

          @media screen and (min-width: 1024px) {
            display: block;
            max-height: 174px;
            padding-bottom: 8px;
            position: unset;
            height: unset;
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
