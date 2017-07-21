<template>
  <div class='app-header-component'>
    <nav class='navbar is-transparent'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='https://github.com/FPierre'>MS CRM</a>

        <div class='navbar-burger burger' data-target='navMenuExample'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id='navMenuExample' class='navbar-menu'>
        <div class='navbar-start'>
          <div class='navbar-item has-dropdown is-hoverable'>
            <a class="navbar-link">CRM</a>

            <div class='navbar-dropdown'>
              <router-link :to="{ name: 'AgenciesIndex' }" class='navbar-item'>Agencies</router-link>
              <router-link :to="{ name: 'LeadsIndex' }" class='navbar-item'>Leads</router-link>
            </div>
          </div>
        </div>
      </div>

      <router-link class='nav-item is-hidden-mobile' :to="{ name: 'UsersIndex' }">Users</router-link>
      <router-link class='nav-item is-hidden-mobile' :to="{ name: 'LogsIndex' }">Logs</router-link>
      <a class='nav-item is-hidden-mobile' @click='signOut'>Sign out</a>
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
