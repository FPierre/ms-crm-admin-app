<template>
  <div class='agencies-new-component'>
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
          <label class='label'>Street</label>

          <p class='control'>
            <input type='text' class='input' placeholder='Street' v-model='street'>
          </p>
        </div>

        <div class='field is-grouped'>
          <p class='control'>
            <button class='button is-primary' @click='create'>Submit</button>
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
export default {
  data () {
    return {
      name: null,
      phone: null,
      street: null
    }
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
