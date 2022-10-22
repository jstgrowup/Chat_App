

// import './App.css'
import { useState } from "react"
import io from "socket.io-client"
import Chat from './Components/Chat'
const socket = io.connect("http://localhost:8080")

function App() {
  const [username, setusername] = useState("")
  const [room, setroom] = useState("")
  const [bool, setbool] = useState(false)
  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", room)
    }
  }

  return (
    <div className="App">
      <div>

        <h3>Join the Chat</h3>
        <input type="text" placeholder='Room ID' onChange={(e) => setroom(e.target.value)} />
        <input type="text" placeholder='hey' onChange={(e) => setusername(e.target.value)} />
        <button onClick={joinRoom}>Join a room</button>
      </div>
      <div>

        <Chat socket={socket} username={username} room={room} />
      </div>
    </div>
  )
}

export default App
