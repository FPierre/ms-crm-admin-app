<template>
  <div class='users-index-component'>
    <div class='columns'>
      <div class='column'>
        <table class='table is-bordered is-striped'>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='{ name } in users'>
              <th>{{ name }}</th>
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
  computed: mapGetters(['users']),
  created () {
    this.$store.dispatch('index')
  }
}
</script>
