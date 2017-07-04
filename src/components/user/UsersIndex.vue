<template>
  <div class='users-index-component'>
    <div class='columns'>
      <div class='column'>
        <table class='table is-bordered is-striped'>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='{ firstName, lastName } in users'>
              <td>{{ firstName }}</td>
              <td>{{ lastName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    users: 'users/users'
  }),
  created () {
    this.$store.dispatch('users/index')
  }
}
</script>
