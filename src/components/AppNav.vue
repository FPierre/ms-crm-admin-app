<template>
  <div class='app-nav-component'>
    <nav class='nav'>
      <div class='container'>
        <div class='nav-left'>
          <a class='nav-item'>
            <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo'>
          </a>

          <router-link class='nav-item is-hidden-mobile is-active' :to="{ name: 'AgenciesIndex' }">Home</router-link>
          <router-link class='nav-item is-hidden-mobile' :to="{ name: 'UsersIndex' }">Users</router-link>
          <router-link class='nav-item is-hidden-mobile' :to="{ name: 'AgenciesIndex' }">Agencies</router-link>
          <router-link class='nav-item is-hidden-mobile' :to="{ name: 'Logs' }">Logs</router-link>
        </div>

        <span class='nav-toggle'>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class='nav-right nav-menu'>
          <router-link class='nav-item is-hidden-tablet is-active' :to="{ name: 'AgenciesIndex' }">Home</router-link>
          <router-link class='nav-item is-hidden-tablet' :to="{ name: 'UsersIndex' }">Users</router-link>
          <router-link class='nav-item is-hidden-tablet' :to="{ name: 'AgenciesIndex' }">Agencies</router-link>
          <router-link class='nav-item is-hidden-tablet' :to="{ name: 'Logs' }">Logs</router-link>

          <a class='nav-item'>
            <figure class='image is-16x16' style='margin-right: 8px;'>
              <img src='http://bulma.io/images/jgthms.png'>
            </figure>
            Profile
          </a>
          <a class='nav-item'>Log out</a>
        </div>
      </div>
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
