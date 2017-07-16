<template>
  <div class='log-nav-component'>
    <div class='tabs is-centered'>
      <ul>
        <li class='is-active'>
          <router-link :to="{ name: 'AgenciesIndex' }">
            <span class='icon is-small'><i class='fa fa-list'></i></span>
            <span>List</span>
          </router-link>
        </li>
        <li>
          <span class='tag is-success' v-if='connected'>Connected</span>
          <span class='tag is-warning' v-else>Disconnected</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    connected: 'logs/connected'
  })
}
</script>
