<template>
  <div class='agencies-index-component'>
    <table class='table is-bordered is-striped'>
      <thead>
        <tr>
          <th><abbr title='Identifiant'>ID</abbr></th>
          <th>Name/th>
          <th><abbr title='Commercial Status'>CS</abbr></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for='{ id, name, commercialStatus } in agencies'>
          <th>{{ id }}</th>
          <td>{{ name }}</td>
          <td>{{ commercialStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['agencies']),
  created () {
    this.$store.dispatch('index')
  }
}
</script>
