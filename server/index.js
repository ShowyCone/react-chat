import express from 'express'
import http from 'http'
import {Server as SocketServer} from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

io.on('connection', socket => {
  // console.log('rooms: ', socket.rooms)
  // console.log('client: ', socket.client)
  // console.log('local: ', socket.local)

  socket.username = `Anonymous[${socket.id.slice(0, 6)}]`
  socket.on('setUsername', (username) => {
    socket.username = username || `Anonymous[${socket.id.slice(0, 6)}]`
    socket.emit('username', socket.username)
  })
  socket.on('message', (body) => {
    socket.broadcast.emit('message', {
      body,
      from: socket.username,
      id: socket.id.slice(0, 6),
    })
  })

  socket.emit('socketID', socket.id.slice(0, 6))
  socket.emit('username', socket.username)
})

server.listen(3000)
console.log('Server on port', 3000)