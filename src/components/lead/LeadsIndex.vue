<template>
  <div class='leads-index-component'>
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
            <tr v-for='{ _id, firsName, lastName, createdAt } in leads'>
              <td>
                <router-link :to="{ name: 'LeadsShow', params: { id: _id }}">
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
    leads: 'leads/leads'
  }),
  created () {
    this.$store.dispatch('leads/index')
  }
}
</script>
