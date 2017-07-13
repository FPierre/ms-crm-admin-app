<template>
  <div class='users-show-component'>
    <div class='container'>
      <h1 class='title'>{{ user.firstName }} {{ user.lastName }}</h1>
      <h2 class='subtitle'></h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'users/current'
    })
  },
  created () {
    this.$store.dispatch('users/show', { id: this.$route.params.id })
  }
}
</script>
