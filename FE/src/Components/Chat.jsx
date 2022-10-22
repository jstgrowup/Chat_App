import React, { useEffect, useState } from 'react'

function Chat({ socket, username, room }) {
    const [messege, setmessege] = useState("")
    const HandlesendMessge = async () => {
        if (messege) {
            const messegeData = {
                curRoom: room,
                author: username,
                messege: messege,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_messege", messegeData)
        }
    }
    useEffect(() => {

  socket.on("recieve_messge",(data)=>{
    
  })

    }, [socket])

    return (
        <div>
            <div className='chat-header'>Live chat</div>
            <div className='chat-body'></div>
            <div className='chat-footer'>
                <input onChange={(e) => setmessege(e.target.value)} type="text" placeholder='enter messese' />
                <button onClick={HandlesendMessge}>{">"}</button>
            </div>
        </div>
    )
}

export default Chat