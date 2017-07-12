<template>
  <div class='app-nav-component'>
    <nav class='navbar is-transparent'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='http://bulma.io'>
          <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28'>
        </a>

        <div class='navbar-burger burger' data-target='navMenuExample'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id='navMenuExample' class='navbar-menu'>
        <div class='navbar-start'>
          <a class='navbar-item is-hidden-mobile is-active'>
            Home
          </a>

          <div class='navbar-item has-dropdown is-hoverable'>
            <router-link :to="{ name: 'AgenciesIndex' }" class='navbar-link is-active'>
              Agencies
            </router-link>

            <div class='navbar-dropdown'>
              <router-link :to="{ name: 'AgenciesIndex' }" class='navbar-item is-active'>
                List
              </router-link>

              <router-link :to="{ name: 'AgenciesNew' }" class='navbar-item'>
                New
              </router-link>

              <router-link :to="{ name: 'AgenciesNew' }" class='navbar-item'>
                Search
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
      <router-link class='nav-item is-hidden-mobile' :to="{ name: 'Logs' }">Logs</router-link>
    </nav>

    <div class='tabs is-centered'>
      <ul>
        <li class='is-active'>
          <router-link :to="{ name: 'AgenciesIndex' }">
            <span class='icon is-small'><i class='fa fa-list'></i></span>
            <span>List</span>
          </router-link>
        </li>
        <li>
          <a>
            <span class='icon is-small'><i class='fa fa-search'></i></span>
            <span>Search</span>
          </a>
        </li>
        <li>
          <router-link :to="{ name: 'AgenciesNew' }">
            <span class='icon is-small'><i class='fa fa-plus'></i></span>
            <span>New</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
