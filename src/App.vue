<template>
  <div id='app' :class='[$route.meta.simpleLayout ? "" : "grid-layout"]'>
    <router-view class='view-header' name='header'></router-view>
    <router-view class='view-sidebar' name='sidebar'></router-view>
    <router-view class='view-main'></router-view>
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
@import '~bulma/sass/utilities/initial-variables';

$green: #37d48c;
$white-bis: #f2f4f5;
$primary: $green;
$family-sans-serif: -apple-system, BlinkMacSystemFont, 'Raleway', sans-serif;
$radius: 2px;
$box-radius: $radius-small;
$box-shadow: 0 2px 3px rgba($grey, .1), 0 0 0 1px rgba($grey, .1);
$menu-item-color: $white;
$menu-item-radius: none;
$menu-list-border-left: 1px solid $grey;
$menu-label-color: $white;

@import '~bulma/bulma';

html,
body {
  min-height: 100vh;
}

.grid-layout {
  display: grid;
  grid-template-areas: 'header header'
                       'sidebar main';
  grid-template-rows: min-content auto;
  grid-template-columns: minmax(150px, 2fr) 10fr;
  min-height: 100vh;
}

.view-header {
  grid-area: header;
}

.view-sidebar {
  grid-area: sidebar;
}

.view-main {
  background-color: $white-bis;
  grid-area: main;
}
</style>
