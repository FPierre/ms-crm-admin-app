import Vue from 'vue'
import VueResource from 'vue-resource'
import io from 'socket.io-client'

Vue.use(VueResource)

const custom = {
  history: { method: 'GET', url: 'http://localhost:4000/agencies/:id/history' }
}
const resource = Vue.resource('http://localhost:4000/agencies{/id}', {}, custom)
const socket = io.connect('http://localhost:5554/agencies')

export default {
  index ({ page, query }, cb, errorCb) {
    console.log('index', page, query)

    socket.emit('index', { page, query }, (err, paginatedAgencies) => {
      console.log('index', paginatedAgencies)
      err ? errorCb(err) : cb(paginatedAgencies)
    })
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
