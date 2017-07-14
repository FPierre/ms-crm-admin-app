<template>
  <div id='app'>
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppNav from '@/components/AppNav'

export default {
  name: 'app',
  components: {
    AppNav,
    AppFooter
  }
}
</script>

<style lang='scss'>
@import 'node_modules/bulma/bulma.sass';

body {
  font-family: 'Raleway', sans-serif;
}
</style>
