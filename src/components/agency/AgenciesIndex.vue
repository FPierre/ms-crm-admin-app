<template>
  <div class='agencies-index-component'>
    <div class='container'>
      <div class='box'>
        <nav class='level'>
          <div class='level-left'>
            <div class='level-item has-text-centered'>
              <div>
                <p class='heading'>Agencies</p>
                <p class='title'>{{ total }}</p>
              </div>
            </div>
          </div>

          <div class='level-right'>
            <div class='level-item'>
              <div class='field has-addons'>
                <p class='control'>
                  <input type='text' class='input' placeholder='Search by name' v-model='searchQuery'>
                </p>

                <p class='control'>
                  <button class='button' @click='search'>Search</button>
                </p>
              </div>
            </div>

            <div class='level-item'>
              <pagination :page='page' :pages='pages' @navigate='navigate'></pagination>
            </div>
          </div>
        </nav>
      </div>

      <div class='box' v-if='agencies.length'>
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
              <td class='has-text-centered'>
                <router-link :to="{ name: 'UsersShow', params: { id: _responsibleId }}" v-if='responsible'>
                    {{ responsible.firstName }} {{ responsible.lastName }}
                </router-link>
                <vue-loader type='bubbles' color='#00d1b2' v-else></vue-loader>
              </td>
              <td>
                {{ humanizedCreatedAt(createdAt) }}
                <small>(<timeago :since='createdAt'></timeago>)</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueLoader from 'vue-loading-template'
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      searchQuery: null
    }
  },
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
    },
    search () {
      console.log('search')
      this.$store.dispatch('agencies/index', { query: this.searchQuery })
    },
    humanizedCreatedAt (date) {
      const d = new Date(date)
      return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}h${d.getMinutes()}`
    }
  },
  components: {
    VueLoader,
    Pagination
  }
}
</script>

<style scoped>
.agencies-index-component {
  padding: 3rem 0;
}
</style>
