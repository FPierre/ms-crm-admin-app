<template>
  <div class='login-component'>
    <div class='field'>
      <label class='label'>Name</label>

      <p class='control'>
        <input type='text' class='input' placeholder='Email' v-model='email'>
      </p>
    </div>

    <div class='field'>
      <label class='label'>Password</label>

      <p class='control'>
        <input type='password' class='input' placeholder='Password' v-model='password'>
      </p>
    </div>

    <div class='field'>
      <p class='control'>
        <button class='button is-primary' @click='login'>Login</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      const credentials = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('users/login', { credentials })
    }
  }
}
</script>
