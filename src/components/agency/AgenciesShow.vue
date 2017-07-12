<template>
  <div class='agencies-show-component'>
    <div class='container'>
      <h1 class='title'>{{ agency.name }}</h1>
      <h2 class='subtitle'>{{ address }}</h2>

      <gmap-map :center='center' :zoom='6' style='height: 300px' :options='options'></gmap-map>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      options: {}
    }
  },
  computed: {
    ...mapGetters({
      agency: 'agencies/current'
    }),
    center () {
      return { lat: this.agency.lat, lng: this.agency.lng }
    },
    address () {
      return `${this.agency.street}`
    }
  },
  created () {
    this.$store.dispatch('agencies/show', { id: this.$route.params.id })
  }
}
</script>
