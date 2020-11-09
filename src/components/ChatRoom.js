import React, { useEffect, useState } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'

const ChatRoom = ({socket}) => {
    const history = useRouteMatch()
    const roomId = history.params.id
    const userName = localStorage.getItem('user')
    const [message, setMessage] =useState('')
    const [messages,setMessages]= useState([])
    console.log(userName)

    const addMessage=(e)=>{
        e.preventDefault()
        setMessage(e.target.value)
    }
    const sendMessage = ()=>{
        if(message === " ") return
        socket.emit('sendMessage', {message, roomId, userName})
        setMessage('')
    }
    useEffect(()=>{
        socket.on('new-message', (message)=>{
            setMessages(prev=> [...prev, message])
        })
    }, [])

    useEffect(()=>{
       if(socket){
            socket.emit('joinRoom', roomId)
       }

        return ()=>{
            socket.emit('leaveRoom', roomId)
        }
    },[])

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
                    {messages && messages.map(message=>(
                        <div className={message.name.trim().toLowerCase() === userName.toLowerCase() ? 'mychat' : 'others'}>
                           <div>
                               ~{message.name[0]}
                           </div>
                           <div>{message.message} </div>
                        </div>
                    ))}
                </div>
                <div className='chat-input-div'>
                    <input type='text' className='chat-input' 
                        value={message} 
                        onChange={(e)=> addMessage(e)} 
                    />
                    <div className='chat-btn'  onClick={sendMessage}>Send</div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;