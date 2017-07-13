<template>
  <div class='users-index-component'>
    <div class='columns'>
      <div class='column'>
        <table class='table is-bordered is-striped'>
          <thead>
            <tr>
              <th>Identity</th>
              <th>Created at</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='{ _id, firstName, lastName, createdAt } in users'>
              <td>
                <router-link :to="{ name: 'UsersShow', params: { id: _id }}">
                  {{ firstName }} {{ lastName }}
                </router-link>
              </td>
              <td>{{ createdAt }}</td>
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
