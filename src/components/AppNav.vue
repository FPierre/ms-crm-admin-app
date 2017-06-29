<template>
  <div class='app-nav-component'>
    <nav class='nav-extended blue-grey darken-4'>
      <div class='nav-wrapper'>
        <a href='#!' class='brand-logo'>CRM</a>

        <a href='#' data-activates='mobile-demo' class='button-collapse'><i class='material-icons'>menu</i></a>

        <ul class='right hide-on-med-and-down'>
          <li><router-link :to='{ name: "Logs" }'>Logs</router-link></li>
          <li><router-link :to='{ name: "Login" }'>Login</router-link></li>
          <li><router-link :to='{ name: "AgenciesIndex" }'>Agencies</router-link></li>
        </ul>

        <ul class='side-nav' id='mobile-demo'>
          <li><router-link :to='{ name: "Logs" }'>Logs</router-link></li>
          <li><router-link :to='{ name: "Login" }'>Login</router-link></li>
          <li><router-link :to='{ name: "AgenciesIndex" }'>Agencies</router-link></li>
        </ul>
      </div>

      <div class='nav-content'>
        <span class='nav-title'>{{ $route.meta.title }}</span>

        <a class='btn-floating btn-large halfway-fab waves-effect waves-light teal' href='#modal1'>
          <i class='material-icons'>add</i>
        </a>
      </div>
    </nav>

    <div id='modal1' class='modal bottom-sheet'>
      <router-view name='modal'></router-view>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $(document).ready(() => {
      $('.button-collapse').sideNav({ closeOnClick: true, draggable: true })
      $('.modal').modal()
    })
  }
}
</script>
