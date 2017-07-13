import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const resource = Vue.resource('http://localhost:4000/users{/id}')

export default {
  index (cb, errorCb) {
    Vue.http.get('http://localhost:4000/users')
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  show (id, cb, errorCb) {
    resource.get({ id })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  login (user, cb, errorCb) {
    Vue.http.post('http://localhost:4000/login', { user })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  }
}
