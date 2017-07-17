<template>
  <div class='agencies-show-component'>
    <div class='container'>
      <nav class='level'>
        <div class='level-left'></div>

        <div class='level-right'>
          <p class='level-item'>
            <router-link :to="{ name: 'AgenciesEdit', params: { id: agency._id } }" class='button is-outlined'>
              Update
            </router-link>
          </p>

          <p class='level-item'>
            <router-link :to="{ name: 'AgenciesDelete', params: { id: agency._id } }" class='button is-danger is-outlined'>
              Delete
            </router-link>
          </p>
        </div>
      </nav>

      <h1 class='title'>{{ agency.name }}</h1>
      <h2 class='subtitle'>{{ address }}</h2>

      <gmap-map :center='center' :zoom='6' style='height: 300px' :options='options'></gmap-map>

      {{ h }}
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
      agency: 'agencies/current',
      h: 'agencies/history'
    }),
    center () {
      return { lat: this.agency.lat, lng: this.agency.lng }
    },
    address () {
      return `${this.agency.street} ${this.agency.zipCode} ${this.agency.city}, ${this.agency.country}`
    }
  },
  created () {
    this.$store.dispatch('agencies/show', { id: this.$route.params.id })
    this.$store.dispatch('agencies/history', { id: this.$route.params.id })
  }
}
</script>
