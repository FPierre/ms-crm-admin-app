<template>
  <div id='app'>
    <app-nav :title='title'></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import AppNav from '@/components/AppNav'

export default {
  name: 'app',
  props: ['title'],
  components: {
    AppNav
  }
}
</script>
