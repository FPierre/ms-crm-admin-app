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
            </tr>
          </thead>

          <tbody>
            <tr v-for='{ name, activities, commercialStatus, responsible } in agencies'>
              <th>{{ name }}</th>
              <td>{{ activities }}</td>
              <td>{{ commercialStatus }}</td>
              <td>{{ responsible.name }}</td>
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
