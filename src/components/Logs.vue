<template>
  <div class='agencies-index-component'>
    <div class='columns'>
      <div class='column'>
        <table class='table is-bordered is-striped'>
          <thead>
            <tr>
              <th><abbr title='Identifiant'>ID</abbr></th>
              <th>Event</th>
              <th>Created at</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='{ id, event, createdAt } in logs'>
              <th>{{ id }}</th>
              <td>{{ event }}</td>
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
  computed: mapGetters(['logs']),
  created () {
    this.$store.dispatch('update')
  }
}
</script>
