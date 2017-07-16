<template>
  <div class='leads-index-component'>
    <div class='container'>
      <nav class='level'>
        <div class='level-left'>
          <div class='level-item'>
            <p class='is-5'>{{ total }} leads</p>
          </div>

          <div class='level-item'>
            <div class='field has-addons'>
              <p class='control'>
                <input type='text' class='input' placeholder='Find a lead'>
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
          <tr v-for='{ _id, gender, firstName, lastName, createdAt } in leads'>
            <td>
              <router-link :to="{ name: 'LeadsShow', params: { id: _id }}">
                {{ gender }} {{ firstName }} {{ lastName }}
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
      leads: 'leads/leads',
      total: 'leads/total',
      pages: 'leads/pages'
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
      this.$router.push({ name: 'LeadsIndex', query: { page } }, this.fetch)
    },
    fetch () {
      this.$store.dispatch('leads/index', { page: this.page })
    }
  },
  components: {
    Pagination
  }
}
</script>
