<template>
  <div class='leads-show-component'>
    <div class='container'>
      <h1 class='title'>{{ identity }}</h1>
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
      lead: 'leads/current'
    }),
    center () {
      return { lat: this.lead.lat, lng: this.lead.lng }
    },
    address () {
      return `${this.lead.street}`
    },
    identity () {
      return `${this.lead.gender} ${this.lead.firstName} ${this.lead.lastName}`
    }
  },
  created () {
    this.$store.dispatch('leads/show', { id: this.$route.params.id })
  }
}
</script>
