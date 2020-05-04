<template>
  <header class="header-main" data-header-main>
    <div class="header-main__inner container">
      <div class="header-mobile-left"></div>
      <div class="header-desktop-left">
        <ul class="header-main-menu"></ul>
         <a href="/" title="Tommy John Home" class="header-logo" aria-label="Tommy John Logo" tabindex="0">
          </a>
      </div>
      <ul class="header-desktop-right">
        <li class="header-list-item"></li>
        <li class="header-list-item"></li>
        <li class="header-list-item"></li>
        <li class="header-list-item"></li>
      </ul>
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

.header-main {
  margin-top: 32px;
}


</style>