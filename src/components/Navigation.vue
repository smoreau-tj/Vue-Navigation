<template>
  <header class="header-main" data-header-main>
    <div class="header-main__inner container">
      <div class="header-mobile-left"></div>
      <div class="header-desktop-item left">
        <ul class="header-desktop__list">
          <li class="list-item"><a href="">Example 1</a></li>
          <li class="list-item"><a href="">Example 2</a></li>
          <li class="list-item"><a href="">Example 3</a></li>
          <li class="list-item"><a href="">Example 4</a></li>
        </ul>
      </div>
      <div class="header-desktop-item center">
        <a href="/" title="Tommy John Home" class="header-logo" aria-label="Tommy John Logo" tabindex="0">
        TJ Logo
        </a>
      </div>
      <div class="header-desktop-item right">
        <ul class="header-desktop__list">
          <li class="header-list-item">Search</li>
          <li class="header-list-item">Sign-in</li>
          <li class="header-list-item">Cart</li>
        </ul>
      </div>
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
    @media screen and (min-width: 1280px) {
    
  }

  .header-main__inner {
    @media screen and (min-width: 1280px) {
      height: 66px;
      padding: 0 48px;
    }
  }

  .header-desktop-item {
    display: none;

    @media screen and (min-width: 1280px) {
      display: inline-block;
      width: 33.3333%;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style-type: none;
        display: inline-block;
      }
    }

    &.left {
      ul {
        text-align: left;
      }

      li {
        &:not(:last-child){
          margin-right: 40px;
        }
      }
    }

    &.right{
      li {
         &:not(:last-child){
          margin-right: 24px;
        }
      }
    }
  }

  @media screen and (min-width: 480px) {

  }
   @media screen and (min-width: 600px) {
    
  }
   @media screen and (min-width: 768px) {
    
  }
   @media screen and (min-width: 992px) {
    
  }
   @media screen and (min-width: 1024px) {
    
  }
   @media screen and (min-width: 1440px) {
    
  }
}


</style>