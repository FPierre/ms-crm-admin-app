<template>
  <div class='app-nav-component'>
    <nav class='nav has-shadow'>
      <div class='container'>
        <div class='nav-left'>
          <a class='nav-item'>
            <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo'>
          </a>

          <router-link class='nav-item is-hidden-mobile is-active' :to='{ name: "AgenciesIndex" }'>Home</router-link>
          <router-link class='nav-item is-hidden-mobile' :to='{ name: "AgenciesIndex" }'>Agencies</router-link>
          <router-link class='nav-item is-hidden-mobile' :to='{ name: "Logs" }'>Logs</router-link>
        </div>

        <span class='nav-toggle'>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class='nav-right nav-menu'>
          <router-link class='nav-item is-hidden-tablet is-active' :to='{ name: "AgenciesIndex" }'>Home</router-link>
          <router-link class='nav-item is-hidden-tablet' :to='{ name: "AgenciesIndex" }'>Agencies</router-link>
          <router-link class='nav-item is-hidden-tablet' :to='{ name: "Logs" }'>Logs</router-link>

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
  </div>
</template>
