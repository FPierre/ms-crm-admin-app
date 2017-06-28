<template>
  <div id="app">
    <router-link :to='{ name: "Login" }'>Login</router-link>
    <router-link :to='{ name: "AgenciesIndex" }'>Agencies</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

export default {
  name: 'app'
}
</script>
