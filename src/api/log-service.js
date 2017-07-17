import io from 'socket.io-client'

export default {
  stream (cb, errorCb) {
    const socket = io.connect('http://localhost:5555/monitoring')

    socket.on('connect', () => console.log('connected'))

    socket.on('statusUpdate', logs => {
      console.log('statusUpdate')
      cb(logs)
    })

    socket.on('disconnect', err => {
      console.log(err)
      errorCb()
    })
  }
}
