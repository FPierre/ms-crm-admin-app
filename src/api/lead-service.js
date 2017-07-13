import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const resource = Vue.resource('http://localhost:4000/leads{/id}')

export default {
  index (cb, errorCb) {
    resource.query()
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  show (id, cb, errorCb) {
    resource.get({ id })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  }
}
