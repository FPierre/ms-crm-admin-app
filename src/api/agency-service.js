import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const resource = Vue.resource('http://localhost:4000/agencies{/id}')

export default {
  index ({ page }, cb, errorCb) {
    resource.query({ page })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  show ({ id }, cb, errorCb) {
    resource.get({ id })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  create ({ agency, user }, cb, errorCb) {
    resource.save({ agency, user })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  }
}
