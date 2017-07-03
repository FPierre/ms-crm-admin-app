import Vue from 'vue'

export default {
  index (cb, errorCb) {
    Vue.http.get('http://localhost:4000/users').then(response => {
      cb(response.body)
    }, response => errorCb())
  },

  login (user, cb, errorCb) {
    Vue.http.post('http://localhost:4000/login', { user }).then(response => {
      console.log(response.body)
      cb(response.body)
    }, response => errorCb())
  }
}
