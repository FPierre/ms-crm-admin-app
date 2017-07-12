import Vue from 'vue'

export default {
  index (cb, errorCb) {
    Vue.http.get('http://localhost:4000/users')
      .then(res => cb(res.body))
      .catch(() => errorCb())
  },

  login (user, cb, errorCb) {
    Vue.http.post('http://localhost:4000/login', { user })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  }
}
