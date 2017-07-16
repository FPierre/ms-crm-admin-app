<template>
  <div class='logs-index-component'>
    <div class='columns'>
      <div class='column'>
        <table class='table is-bordered is-striped'>
          <thead>
            <tr>
              <th>Event</th>
              <th>Model</th>
              <th>Note</th>
              <th>User</th>
              <th>Created at</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='{ event, model, note, user, createdAt } in logs'>
              <td>{{ event }}</td>
              <td>{{ model }}</td>
              <td>{{ note }}</td>
              <td>{{ user }}</td>
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
    logs: 'logs/logs'
  }),
  created () {
    this.$store.dispatch('logs/stream')
  }
}
</script>
