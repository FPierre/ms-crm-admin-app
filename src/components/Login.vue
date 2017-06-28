<template>
  <div class="login-component">
    <h1>Log In</h1>

    <input type='text' placeholder='name' v-model='name'>
    <input type='password' placeholder='password' v-model='password'>
    <button @click.prevent='login'>Login</button>

    <agencies-list></agencies-list>
  </div>
</template>

<script>
import AgenciesList from '@/components/agency/AgenciesIndex'

export default {
  data () {
    return {
      name: null,
      password: null
    }
  },
  created () {
    this.$store.dispatch('index')
  },
  methods: {
    login () {
      this.$store.dispatch('login', { name: this.name, password: this.password })
    }
  },
  components: {
    AgenciesList
  }
}
</script>
