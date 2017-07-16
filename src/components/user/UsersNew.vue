<template>
  <div class='users-new-component'>
    <div class='columns'>
      <div class='column'>
        <div class='field'>
          <label class='label'>First name</label>

          <p class='control'>
            <input type='text' class='input' placeholder='First name' v-model='firstName'>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Last name</label>

          <p class='control'>
            <input type='text' class='input' placeholder='Last name' v-model='lastName'>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Email</label>

          <p class='control'>
            <input type='email' class='input' placeholder='Email' v-model='email'>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Access</label>

          <p class='control'>
            <span class='select'>
              <select v-model='access'>
                <option value='guest'>Guest</option>
                <option value='advisor'>Advisor</option>
                <option value='commercial'>Commercial</option>
                <option value='administrator'>Administrator</option>
              </select>
            </span>
          </p>
        </div>

        <div class='field'>
          <label class='label'>Password</label>

          <p class='control'>
            <input type='password' class='input' placeholder='Password' v-model='password'>
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
export default {
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      access: 'guest'
    }
  },
  methods: {
    create () {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        access: this.access.value
      }

      this.$store.dispatch('users/create', { user })
    }
  }
}
</script>
