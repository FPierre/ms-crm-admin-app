import Vue from 'vue'
import VueResource from 'vue-resource'
// import auth from '@/auth'

Vue.use(VueResource)

const custom = {
  login: { method: 'POST', url: 'http://localhost:4000/users/login' }
}

const resource = Vue.resource('http://localhost:4000/users{/id}', {}, custom)

export default {
  index ({ page }, cb, errorCb) {
    resource.query({ page })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  show (id, cb, errorCb) {
    resource.get({ id })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  create (user, cb, errorCb) {
    resource.save({ user })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  login (credentials, cb, errorCb) {
    console.log('user-service login')

    resource.login({ credentials })
      .then(res => {
        console.log(res)

        // localStorage.setItem('id_token', data.id_token)
        // localStorage.setItem('access_token', data.access_token)

        // this.user.authenticated = true

        Vue.$router.go('agencies')
      })
      .catch(err => {
        console.log(err)
      })
  }
}
