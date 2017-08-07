<template>
  <div class='app-header-component'>
    <nav class='navbar'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='https://github.com/FPierre'>MS CRM</a>
      </div>

      <div class='navbar-menu'>
        <div class='navbar-end'>
          <div class='navbar-item has-dropdown'>
            <a class='navbar-link'>
              <span class='icon'><i class='fa fa-wrench'></i></span>
            </a>

            <div class='navbar-dropdown is-right'>
              <router-link :to='{ name: "UsersIndex" }' class='navbar-item'>Users</router-link>
              <router-link :to='{ name: "LogsIndex" }' class='navbar-item'>Logs</router-link>

              <hr class='navbar-divider'>

              <a class='navbar-item' @click='signOut'>Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$store.commit('authentication/clearToken')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
