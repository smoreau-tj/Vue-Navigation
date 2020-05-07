<template>
  <li class="list-item"><a href="">{{title}}</a></li>
</template>


<script>
export default {
  name: "navItem",
  props: {
    title: String,
    titleUrl: String,
    titleColor: String,
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_global.scss";
  li {
    list-style-type: none;
    display: inline-block;

    &.level-zero {
      margin-right: 40px;
    }

    a {
      text-decoration: none;
      color: $grey-dark;

      &:hover {
        color: $blue-light;
      }
    }
  }
</style>
