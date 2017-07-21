import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const custom = {
  history: { method: 'GET', url: 'http://localhost:4000/agencies/:id/history' }
}
const resource = Vue.resource('http://localhost:4000/agencies{/id}', {}, custom)

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
  },

  update ({ agency }, cb, errorCb) {
    resource.update({ agency })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  history ({ id }, cb, errorCb) {
    resource.history({ id })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  }
}
