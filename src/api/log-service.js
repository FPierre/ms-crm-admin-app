import io from 'socket.io-client'

export default {
  update (cb, errorCb) {
    const socket = io('http://localhost:5555')
    socket.on('logUpdate', logs => cb(logs))
    socket.on('disconnect', errorCb())
  }
}
