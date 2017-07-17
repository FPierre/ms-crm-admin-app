import Vue from 'vue'
import VueResource from 'vue-resource'

import io from 'socket.io-client'

Vue.use(VueResource)

const resource = Vue.resource('http://localhost:4000/agencies{/id}')

export default {
  index ({ page }, cb, errorCb) {
    const socket = io.connect('http://localhost:5554/agencies')

    // socket.on('connect', () => console.log('connected'))
    console.log('index')

    // setInterval(() => {
    socket.emit('index', {}, data => {
      console.log('index', data)
      cb(data)
    })
    // }, 2000)

    /*
    socket.on('disconnect', err => {
      console.log(err)
      errorCb()
    })
    */

    /*
    resource.query({ page })
      .then(res => cb(res.body))
      .catch(() => errorCb())
    */
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
