<template>
  <li class="list-item"><a href="">{{title}}</a></li>
</template>


<script>
export default {
  name: "navItem",
  props: {
    title: String,
    titleUrl: String,
    titleColor: String
  }
};
</script>
