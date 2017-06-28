<template>
  <nav class='nav-extended black'>
    <div class='nav-wrapper'>
      <a href='#!' class='brand-logo'>CRM</a>

      <ul class='right hide-on-med-and-down'>
        <li><router-link :to='{ name: "Login" }'>Login</router-link></li>
        <li><router-link :to='{ name: "AgenciesIndex" }'>Agencies</router-link></li>
      </ul>
    </div>

    <div class='nav-content'>
      <span class='nav-title'>{{ $route.meta.title }}</span>

      <a class='btn-floating btn-large halfway-fab waves-effect waves-light teal'>
        <i class='material-icons'>add</i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>
