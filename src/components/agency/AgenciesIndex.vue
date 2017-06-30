<template>
  <Table :columns='columns1' :data='agencies'></Table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      columns1: [
        { title: 'id', key: 'id' },
        { title: 'name', key: 'name' },
        { title: 'commercial status', key: 'commercialStatus' }
      ]
    }
  },
  computed: mapGetters(['agencies']),
  created () {
    this.$store.dispatch('index')
  }
}
</script>
