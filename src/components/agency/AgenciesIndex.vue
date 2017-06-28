<template>
  <div class='agencies-index-component'>
    <h1>Agencies index</h1>

    <ul>
      <li v-for='{ name } in agencies'>{{ name }}</li>
    </ul>
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
