import Vue from 'vue'

export default {
  index (cb, errorCb) {
    Vue.http.get('http://localhost:4000/agencies').then(response => {
      cb(response.body)
    }, response => errorCb())
  },

  show (id, cb, errorCb) {
    Vue.http.get('http://localhost:4000/agencies/show', { id }).then(response => {
      cb(response.body)
    }, response => errorCb())
  },

  create (agency, cb, errorCb) {
    Vue.http.post('http://localhost:4000/agencies/create', { agency }).then(response => {
      cb(response.body)
    }, response => errorCb())
  }
}
