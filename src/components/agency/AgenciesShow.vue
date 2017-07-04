<template>
  <div class='agencies-show-component'>
    <gmap-map :center='center' :zoom='6' style='height: 20vh' :options='options'></gmap-map>
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
    }
  },
  created () {
    this.$store.dispatch('agencies/show', { id: this.$route.params.id })
  }
}
</script>
