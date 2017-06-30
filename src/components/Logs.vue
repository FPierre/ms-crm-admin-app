<template>
  <Table border :columns='columns6' :data='logs'></Table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      columns6: [
        { title: 'event', key: 'event' },
        { title: 'created at', key: 'createdAt' }
      ]
    }
  },
  computed: mapGetters(['logs']),
  created () {
    this.$store.dispatch('update')
  }
}
</script>
