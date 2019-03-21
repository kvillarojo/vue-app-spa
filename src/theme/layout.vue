<template>
    <div>
      <app-header></app-header>
      <section class="main-section section">
        <div class="container content">
          <router-view></router-view>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
</template>
<script>
import Header from './AppHeader.vue'
import Footer from './AppFooter.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
<style lang="scss">

</style>
