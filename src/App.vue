<template>
  <div id='app'>
    <router-view name='header'></router-view>
    <router-view class='view-nav' name='nav'></router-view>
    <router-view></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  created () {
    const token = localStorage.getItem('socketToken')

    if (token) {
      this.$store.commit('authentication/storeToken', token)
    }
  },
  methods: mapMutations(['authentication/storeToken'])
}
</script>

<style lang='scss'>
@import 'node_modules/bulma/bulma.sass';

body {
  font-family: 'Raleway', sans-serif;
}

.view-nav {
  margin-bottom: 2rem;
}
</style>
