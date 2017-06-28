import Vue from 'vue'

export default {
  login (user, cb, errorCb) {
    Vue.http.post('http://localhost:4000/login', { user }).then(response => {
      console.log(response.body)
      cb(response.body)
    }, response => errorCb())
  }
}
