import React, { useEffect, useState } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'

const ChatRoom = ({socket}) => {
    const history = useRouteMatch()
    const roomId = history.params.id
    const [message, setMessage] =useState('')
    const [messages,setMessages]= useState([])

    const sendMessage = ()=>{
        socket.emit('sendMessage', {message, roomId})
    }
    useEffect(()=>{
        socket.on('new-message', (message)=>{
            // setMessage(prev=> [...message, ...prev])
            console.log(message)
        })
    }, [messages])

    useEffect(()=>{
        // console.log(socket)
       if(socket){
            socket.emit('joinRoom', roomId)
       }

        return ()=>{
            socket.emit('leaveRoom', roomId)
        }
    },)

    // console.log(history.params.id)
    return (
        <div>
            <header className='header'>
                <h1 style={{marginRight:'15px'}} >Let's Talk</h1>
                <p className="fa fa-comments fa-2x" aria-hidden="true"></p>
            </header>
            <div className='chat-main'>
                <div className='chat-header'>
                    <div className='chat-logo'>
                        <p className='ball' ></p>
                        <h3>Let's Talk</h3>
                    </div>
                </div>
                <div className='chat-body'>
                    <div className='mychat'>segun</div>
                    <div className='others'>james</div>
                </div>
                <div className='chat-input-div'>
                    <input type='text' className='chat-input' value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <div className='chat-btn'>Send</div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;