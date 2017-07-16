<template>
  <div class='users-nav-component'>
    <div class='tabs is-centered'>
      <ul>
        <li class='is-active'>
          <router-link :to="{ name: 'UsersIndex' }">
            <span class='icon is-small'><i class='fa fa-list'></i></span>
            <span>List</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsersNew' }">
            <span class='icon is-small'><i class='fa fa-plus'></i></span>
            <span>New</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
