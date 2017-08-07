<template>
  <div id='app'>
    <router-view class='view-header' name='header'></router-view>
    <router-view class='view-nav' name='nav'></router-view>
    <router-view class='view-main'></router-view>
    <router-view class='view-footer' name='footer'></router-view>
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

html,
body {
  min-height: 100vh;
}

#app {
  display: grid;
  grid-template-areas: 'header'
                       'nav'
                       'main'
                       'footer';
  grid-template-rows: min-content min-content auto min-content;
  min-height: 100vh;
}

.view-header {
  grid-area: header;
}

.view-nav {
  grid-area: nav;
}

.view-main {
  grid-area: main;
}

.view-footer {
  grid-area: footer;
}

.view-main {
  background-color: $white-bis;
}
</style>
