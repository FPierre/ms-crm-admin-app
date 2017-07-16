<template>
  <div class='agencies-index-component'>
    <div class='columns'>
      <div class='column'>
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
    agencies: 'agencies/agencies'
  }),
  created () {
    this.$store.dispatch('agencies/index')
  }
}
</script>
