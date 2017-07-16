<template>
  <div class='agencies-index-component'>
    <div class='container'>
      <nav class='level'>
        <div class='level-left'>
          <div class='level-item'>
            <p class='is-5'>{{ total }} agencies</p>
          </div>

          <div class='level-item'>
            <div class='field has-addons'>
              <p class='control'>
                <input type='text' class='input' placeholder='Find an agency'>
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
            <th>Name</th>
            <th>Activities</th>
            <th><abbr title='Commercial Status'>CS</abbr></th>
            <th>Responsible</th>
            <th>Created at</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for='{ _id, name, activities, commercialStatus, responsible, createdAt } in agencies'>
            <td>
              <router-link :to="{ name: 'AgenciesShow', params: { id: _id }}">
                {{ name }}
              </router-link>
            </td>
            <td>{{ activities }}</td>
            <td>{{ commercialStatus }}</td>
            <td>
              <router-link :to="{ name: 'UsersShow', params: { id: responsible._id }}">
                {{ responsible.firstName }} {{ responsible.lastName }}
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
      agencies: 'agencies/agencies',
      total: 'agencies/total',
      pages: 'agencies/pages'
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
      this.$router.push({ name: 'AgenciesIndex', query: { page } }, this.fetch)
    },
    fetch () {
      this.$store.dispatch('agencies/index', { page: this.page })
    }
  },
  components: {
    Pagination
  }
}
</script>
