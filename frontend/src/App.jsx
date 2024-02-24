import io from 'socket.io-client'
import { useState, useEffect, createContext } from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import GameRoom from './components/GameRoom'

const socket = io('https://react-chat-back-l0oy.onrender.com')

export const MyContext = createContext()

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [socketID, setSocketID] = useState(null)
  const [username, setUsername] = useState('')

  // Console log of username from Sidebar component
  socket.emit('setUsername', username)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message) return

    const newMessage = {
      body: message,
      from: 'Me',
      id: socketID,
    }
    setMessages([...messages, newMessage])
    socket.emit('message', message)
    setMessage('')
  }

  useEffect(() => {
    socket.on('message', receiveMessage)
    socket.on('socketID', (id) => {
      setSocketID(id)
    })
    socket.on('username', (username) => {
      setUsername(username)
    })

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message])

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center flex-row justify-around">
      <MyContext.Provider value={{ username, setUsername }}>
        <Sidebar username={username} />
      </MyContext.Provider>

      <Chat
        message={message}
        messages={messages}
        socketID={socketID}
        username={username}
        handleSubmit={handleSubmit}
        setMessage={setMessage}
      />

      {/* <GameRoom /> */}
    </div>
  )
}

export default App
