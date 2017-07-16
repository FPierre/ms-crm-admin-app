<template>
  <div class='app-nav-component'>
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
          <a class='navbar-item is-hidden-mobile'>
            Home
          </a>

          <div class='navbar-item has-dropdown is-hoverable'>
            <a class="navbar-link">CRM</a>

            <div class='navbar-dropdown'>
              <router-link :to="{ name: 'LeadsIndex' }" class='navbar-item'>
                Leads
              </router-link>

              <router-link :to="{ name: 'AgenciesIndex' }" class='navbar-item'>
                Agencies
              </router-link>

              <hr class='navbar-divider'>

              <div class='navbar-item'>
                <div>version <p class='has-text-info'>0.4.3</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link class='nav-item is-hidden-mobile' :to="{ name: 'UsersIndex' }">Users</router-link>
      <router-link class='nav-item is-hidden-mobile' :to="{ name: 'LogsIndex' }">Logs</router-link>
    </nav>

    <router-view name='nav'></router-view>
  </div>
</template>
