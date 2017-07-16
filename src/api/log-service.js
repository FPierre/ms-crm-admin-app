import io from 'socket.io-client'

export default {
  stream (cb, errorCb) {
    const socket = io('http://localhost:5555')
    socket.on('logStream', logs => cb(logs))
    socket.on('disconnect', errorCb())
  }
}
