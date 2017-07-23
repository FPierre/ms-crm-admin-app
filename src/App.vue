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
$green: #37d48c;
$primary: $green;
$family-sans-serif: -apple-system, BlinkMacSystemFont, 'Raleway', sans-serif;
$radius: 2px;

@import '~bulma/bulma.sass';

.view-nav {
  margin-bottom: 2rem;
}
</style>
