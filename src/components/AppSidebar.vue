<template>
  <div class='app-sidebar-component'>
  <aside class='menu'>
    <p class='menu-label'>Agencies</p>

    <ul class='menu-list'>
      <li>
        <router-link :to='{ name: "AgenciesIndex" }' class='is-active'>
          <span class='icon is-small'><i class='fa fa-list'></i></span>
          <span>List</span>
        </router-link>
      </li>
      <li>
        <router-link :to='{ name: "AgenciesSearch" }'>
          <span class='icon is-small'><i class='fa fa-search'></i></span>
          <span>Search</span>
        </router-link>
      </li>
      <li>
        <router-link :to='{ name: "AgenciesNew" }'>
          <span class='icon is-small'><i class='fa fa-plus'></i></span>
          <span>New</span>
        </router-link>
      </li>
    </ul>

    <ul class='menu-list'>
      <li>
        <router-link :to='{ name: "LeadsIndex" }'>
          Leads
        </router-link>

        <ul>
          <li>
            <router-link :to='{ name: "AgenciesSearch" }'>
              <span class='icon is-small'><i class='fa fa-search'></i></span>
              <span>Search</span>
            </router-link>
          </li>
          <li>
            <router-link :to='{ name: "AgenciesNew" }'>
              <span class='icon is-small'><i class='fa fa-plus'></i></span>
              <span>New</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  </div>
</template>

<style lang='scss' scoped>
@import '~bulma/sass/utilities/variables';

.app-sidebar-component {
  background-color: $black-ter;
}
</style>
