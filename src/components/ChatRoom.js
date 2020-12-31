import React, { useEffect, useState } from 'react';
import { useRouteMatch} from 'react-router-dom'

const ChatRoom = ({socket}) => {
    const history = useRouteMatch()
    const roomId = history.params.id
    const userName = localStorage.getItem('user')
    const [message, setMessage] =useState('')
    const [messages,setMessages]= useState([])
    const [members, setMembers] = useState([])
    const token = localStorage.getItem('token')
    
    useEffect(()=>{
        socket.on('members', (members)=>{
            setMembers((prev)=> [...members, ...prev ])
        })
    },[])

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
    }, [0])

    useEffect(()=>{
       if(socket){
            socket.emit('joinRoom', roomId)
       }

        return ()=>{
            socket.emit('leaveRoom', roomId)
        }
    },[0])

    return (
        <div>
            <header className='header'>
                <h1 style={{marginRight:'15px'}} >Let's Talk</h1>
                <p className="fa fa-comments fa-2x" aria-hidden="true"></p>
            </header>
            <section className='chat-section'>
                <div className='members'>
                    <div className='members-label'>
                        Available members
                    </div>
                    <div className='avail-members'>
                        {
                            members.length > 0 ?
                            members.map((member, i)=><div key={i} className="memb-names"> <p className='online'></p> <p >{member} </p></div>) :
                            <p>Ooops group is empty </p>
                        }
                    </div>
                </div>
                <div className='chat-main'>
                    <div className='chat-header'>
                        <div className='chat-logo'>
                            <p className='ball' ></p>
                            <h3>Let's Talk</h3>
                        </div>
                    </div>
                    <div className='chat-body'>
                        {messages && messages.map(message=>(
                            <div key={message.message.id} className={message.name.trim().toLowerCase() === userName.toLowerCase() ? 'mychat' : 'others'}>
                                <div className={message.name.trim().toLowerCase() === userName.toLowerCase() ? 'alias' : 'o-alias'}>
                                    {message.name[0].toUpperCase()}
                                </div>
                                <div className='a-msg'>{message.message.message} </div>
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
            </section>
        </div>
    );
};

export default ChatRoom;