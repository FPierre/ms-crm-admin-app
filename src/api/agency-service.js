import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const resource = Vue.resource('http://localhost:4000/agencies{/id}')

export default {
  index (cb, errorCb) {
    resource.query().then(response => {
      cb(response.body)
    }, response => errorCb())
  },

  show (id, cb, errorCb) {
    resource.get({ id: id }).then(response => {
      cb(response.body)
    }, response => errorCb())
  },

  create (agency, cb, errorCb) {
    resource.save({ agency }).then(response => {
      cb(response.body)
    }, response => errorCb())
  }
}
