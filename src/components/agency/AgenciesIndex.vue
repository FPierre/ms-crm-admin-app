<template>
  <div class='agencies-index-component'>
    <agencies-new></agencies-new>

    <ul>
      <li v-for='{ name } in agencies'>{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import AgenciesNew from '@/components/agency/AgenciesNew'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['agencies']),
  created () {
    this.$store.dispatch('index')
  },
  components: {
    AgenciesNew
  }
}
</script>
