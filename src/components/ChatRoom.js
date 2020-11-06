import React, { useEffect } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'

const ChatRoom = ({socket}) => {
    const history = useRouteMatch()

    useEffect(()=>{
        socket.emit('join-room', history.params.id )
    })

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
                    <input type='text' className='chat-input' />
                    <div className='chat-btn'>Send</div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;