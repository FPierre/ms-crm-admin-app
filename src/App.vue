<template>
  <div id='app'>
    <router-view name='header'></router-view>
    <router-view name='nav'></router-view>

    <main>
      <router-view></router-view>
    </main>

    <router-view name='footer'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
@import 'node_modules/bulma/bulma.sass';

body {
  font-family: 'Raleway', sans-serif;
}

main {
  margin-top: 2rem;
}
</style>
