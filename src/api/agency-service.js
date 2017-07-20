import Vue from 'vue'
import VueResource from 'vue-resource'

import io from 'socket.io-client'

Vue.use(VueResource)

const resource = Vue.resource('http://localhost:4000/agencies{/id}')
const socket = io.connect('http://localhost:5554/agencies')

export default {
  index ({ page, query }, cb, errorCb) {
    console.log('index', page, query)

    socket.emit('index', { page, query }, (err, paginatedAgencies) => {
      console.log('index', paginatedAgencies)

      if (err) {
        errorCb()
      }

      cb(paginatedAgencies)
    })

    /*
    socket.on('connect', () => console.log('connected'))
    socket.on('disconnect', err => errorCb(err))
    */
  },

  show ({ id }, cb, errorCb) {
    console.log('show')

    socket.emit('show', { id }, (err, agency) => {
      console.log('show', agency)

      if (err) {
        errorCb(err)
      }

      cb(agency)
    })
  },

  create ({ agency, user }, cb, errorCb) {
    resource.save({ agency, user })
      .then(res => cb(res.body))
      .catch(() => errorCb())
  }
}
