import Vue from 'vue'
import VueResource from 'vue-resource'
import io from 'socket.io-client'

Vue.use(VueResource)

export default {
  signIn ({ email, password }, cb, errorCb) {
    console.log('vuex api signIn', email, password)

    Vue.http.post('http://localhost:4001/signIn', { email, password })
      .then(res => {
        console.log('vuex post signIn', res.body.token)

        const token = res.body.token

        const socket = io.connect('http://localhost:5554/authentication', { query: `token=${token}` })

        socket.on('connect', () => {
          console.log('connect')
          socket.emit('test', { token })
        })

        socket.on('unauthorized', (err, cb) => {
          console.log('err', err)
        })

        cb(token)
      })
      .catch(err => errorCb(err))
  },

  test ({ socketToken }, cb, errorCb) {
    console.log('vuex api test', socketToken)

    /*
    socket.emit('test', { socketToken }, (email, err) => {
      console.log('vuex socket emit test', email)

      if (err) {
        console.log('err', err)
        errorCb(err)
      }

      cb(email)
    })
    */
  }
}
