<template>
  <div class='leads-nav-component'>
    <div class='tabs is-centered'>
      <ul>
        <li class='is-active'>
          <router-link :to="{ name: 'LeadsIndex' }">
            <span class='icon is-small'><i class='fa fa-list'></i></span>
            <span>List</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
