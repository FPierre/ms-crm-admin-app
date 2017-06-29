<template>
  <div class='logs-component'>
    <ul>
      <li v-for='{ name, createdAt } in logs'>{{ name }} {{ createdAt }}</li>
    </ul>
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
