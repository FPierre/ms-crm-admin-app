<template>
  <div class='users-index-component'>
    <div class='container'>
      <nav class='level'>
        <div class='level-left'>
          <div class='level-item'>
            <p class='is-5'>{{ total }} users</p>
          </div>

          <div class='level-item'>
            <div class='field has-addons'>
              <p class='control'>
                <input type='text' class='input' placeholder='Find an user'>
              </p>

              <p class='control'>
                <button class='button'>Search</button>
              </p>
            </div>
          </div>
        </div>

        <div class='level-right'>
          <pagination :page='page' :pages='pages' @navigate='navigate'></pagination>
        </div>
      </nav>

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
            <td>
              <timeago :since='createdAt'></timeago>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'

export default {
  computed: {
    ...mapGetters({
      users: 'users/users',
      total: 'users/total',
      pages: 'users/pages'
    }),
    page () {
      return parseInt(this.$route.query.page) || 1
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    navigate (page) {
      this.$router.push({ name: 'UsersIndex', query: { page } }, this.fetch)
    },
    fetch () {
      this.$store.dispatch('users/index', { page: this.page })
    }
  },
  components: {
    Pagination
  }
}
</script>
