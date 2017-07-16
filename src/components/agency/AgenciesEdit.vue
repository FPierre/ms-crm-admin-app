<template>
  <div class='agencies-edit-component'>
    <div class='columns'>
      <div class='column'>
        <div class='field'>
          <label class='label'>Name</label>

          <p class='control'>
            <input type='text' class='input' placeholder='Name' v-model='name'>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Phone</label>

          <p class='control'>
            <input type='text' class='input' placeholder='Phone' v-model='phone'>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Address</label>

          <p class='control'>
            <input type='search' id='address' class='input' placeholder='Address'>
          </p>
        </div>

        <div class='field is-grouped'>
          <p class='control'>
            <button class='button is-primary' @click='create'>Create</button>
          </p>

          <p class='control'>
            <button class='button is-link'>Cancel</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import places from 'places.js'

export default {
  data () {
    return {
      name: null,
      phone: null,
      country: null,
      city: null,
      zipCode: null,
      street: null,
      lat: null,
      lng: null,
      _algoliaPlaceId: null
    }
  },
  computed: mapGetters({
    agency: 'agencies/current'
  }),
  created () {
    this.$store.dispatch('agencies/show', { id: this.$params.id })
  },
  mounted () {
    const placesAutocomplete = places({
      container: document.querySelector('#address'),
      type: 'address',
      aroundLatLngViaIP: false,
      countries: ['FR']
    })

    placesAutocomplete.on('change', e => {
      // console.log(e.suggestion)

      this.city = e.suggestion.city
      this.country = e.suggestion.country
      this.street = e.suggestion.name
      this.zipCode = e.suggestion.postcode
      this.lat = e.suggestion.latlng.lat
      this.lng = e.suggestion.latlng.lng
      this._algoliaPlaceId = e.suggestion.hit.objectID
    })

    placesAutocomplete.on('clear', () => {
      // this.address = null
    })
  },
  methods: {
    create () {
      const agency = {
        name: this.name,
        phone: this.phone,
        street: this.street,
        commercialStatus: 'inactive',
        activities: 'frenchFriesStand',
        _authorId: '5963e30a57e53e5ef6857439',
        _responsibleId: '5963e30a57e53e5ef6857439',
        _cityId: 1
      }

      this.$store.dispatch('agencies/create', { agency })
    }
  }
}
</script>
