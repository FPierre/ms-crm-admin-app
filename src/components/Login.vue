<template>
  <div class='login-component'>
    <div class='columns is-gapless'>
      <div class='column is-half'>
        <section class='hero is-dark is-fullheight'>
          <div class='hero-body'>
            <div class='container'>
              <div class='columns'>
                <div class='column is-half is-offset-one-quarter'>
                  <h1 class='title'>Log in</h1>

                  <div class='field'>
                    <p class='control has-icons-left'>
                      <input type='email' class='input' placeholder='Email*' v-model='email' autofocus required>
                      <span class='icon is-left'>
                       <i class='fa fa-envelope'></i>
                      </span>
                    </p>
                  </div>

                  <div class='field'>
                    <p class='control has-icons-left'>
                      <input type='password' class='input' placeholder='Password*' v-model='password' required>
                      <span class='icon is-left'>
                        <i class='fa fa-lock'></i>
                      </span>
                    </p>
                  </div>

                  <div class='field'>
                    <p class='control'>
                      <button class='button' @click='login'>Login</button>
                    </p>
                  </div>

                  <button class='button is-warning' @click='test'>Test</button>
                  <button class='button is-danger' @click='reset'>Reset token</button>
                  <p>token: {{ token }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class='column'>
        <section class='hero is-primary is-fullheight'>
          <div class='hero-body'>
            <div class='container'>
              <div class='columns'>
                <div class='column is-offset-1'>
                  <article class='media'>
                    <figure class='media-left'>
                      <span class='icon is-large'>
                        <i class='fa fa-rocket fa-rotate-270'></i>
                      </span>
                    </figure>

                    <div class='media-content'>
                      <div class='content'>
                        <h1 class='title'>MS CRM</h1>
                        <h2 class='subtitle'>Productivity-centric CRM</h2>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
  computed: {
    token () {
      return this.$store.state.authentication.token
    }
  },
  mounted () {
    // TODO: use authentication/isAuthenticated instead
    if (this.$store.state.authentication.token) {
      this.$router.push({ name: 'AgenciesIndex' })

      this.$store.commit('authentication/startAgencyManager')
    }
  },
  methods: {
    login () {
      this.$store.dispatch('authentication/signIn', { email: this.email, password: this.password })
    },

    test () {
      this.$store.dispatch('authentication/test')
    },

    reset () {
      this.$store.commit('authentication/clearToken')
    }
  }
}
</script>
