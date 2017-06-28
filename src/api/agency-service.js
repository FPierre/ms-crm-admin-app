import Vue from 'vue'

export default {
  index (cb, errorCb) {
    Vue.http.get('http://localhost:4000/agencies').then(response => {
      console.log(response.body)
      cb(response.body)
    }, response => errorCb())
  }
}
