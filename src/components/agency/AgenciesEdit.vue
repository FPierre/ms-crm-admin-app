<template>
  <div class='agencies-edit-component'>
    <div class='container'>
      <div class='field'>
        <label class='label'>Name*</label>

        <p class='control'>
          <input type='text' class='input' placeholder='Name' v-model='name'>
        </p>
      </div>

      <div class='field'>
        <label class='label'>Phone*</label>

        <p class='control'>
          <input type='tel' class='input' placeholder='Phone' v-model='phone'>
        </p>

        <p class='help'>+33 only</p>
      </div>

      <div class='field'>
        <label class='label'>Activities*</label>

        <div class='select'>
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>

      <div class='field'>
        <label class='label'>Commercial status*</label>

        <div class='select'>
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>

      <div class='field'>
        <label class='label'>Responsible user*</label>

        <div class='select'>
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>

      <div class='field'>
        <label class='label'>Address*</label>

        <p class='control'>
          <input type='search' id='address' class='input' placeholder='Address'>
        </p>
      </div>

      <div class='field'>
        <label class='label'>Website</label>

        <p class='control'>
          <input type='text' class='input' placeholder='Website' v-model='website'>
        </p>
      </div>

      <div class='field is-grouped'>
        <p class='control'>
          <button class='button is-success' :class='{ "is-loading": status === "pending" }' @click='update'>Update</button>
        </p>

        <p class='control'>
          <button class='button is-link'>Cancel</button>
        </p>
      </div>
    </div>

    <div class='notifications'>
      <div class='notification' :class='test' v-show='showNotification'>
        <button class='delete is-small' @click='closeNotification'></button>
        {{ status }}
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
      status: null,
      updatedAgency: {
        name: null,
        phone: null,
        website: null,
        commercialStatus: null,
        activities: null
      }
    }
  },
  computed: {
    ...mapGetters({
      agency: 'agencies/current'
    }),
    test () {
      return {
        'is-success': this.status === 'success',
        'is-warning': this.status === 'fail'
      }
    },
    showNotification () {
      return this.status && this.status !== 'pending'
    },
    name: {
      get () {
        return this.agency.name
      },
      set (value) {
        this.updatedAgency.name = value
      }
    },
    phone: {
      get () {
        return this.agency.phone
      },
      set (value) {
        this.updatedAgency.phone = value
      }
    },
    website: {
      get () {
        return this.agency.website
      },
      set (value) {
        this.updatedAgency.phone = value
      }
    }
  },
  created () {
    this.$store.dispatch('agencies/show', { id: this.$route.params.id })
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
    update () {
      const agency = {
        _id: this.agency._id,
        name: this.updatedAgency.name,
        phone: this.updatedAgency.phone,
        street: this.updatedAgency.street,
        country: '',
        city: '',
        zipCode: '',
        lat: 0,
        lng: 0,
        website: this.updatedAgency.website,
        commercialStatus: this.updatedAgency.commercialStatus,
        activities: this.updatedAgency.activities,
        _authorId: '5963e30a57e53e5ef6857439',
        _responsibleId: '5968aff9203a27362f4896f0',
        _algoliaPlaceId: '722737_264482297'
      }

      this.status = 'pending'

      this.$store.dispatch('agencies/update', agency)
        .then(() => {
          this.status = 'success'
        })
        .catch(() => {
          this.status = 'fail'
        })
    },
    closeNotification () {
      console.log('closeNotification')
      this.status = false
    }
  }
}
</script>

<style>
@media screen and (min-width: 769px)
.notifications {
  max-width: 320px;
}

.notifications {
  position: fixed;
  padding: 20px;
  top: 80px;
  right: 0;
  z-index: 1257;
  pointer-events: none;
}
</style>
