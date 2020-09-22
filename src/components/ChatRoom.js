import React from 'react';

const ChatRoom = () => {
    return (
        <div className='chat-main'>
            <div className='chat-header'>
                <div className='chat-logo'>
                    <h3>Let's Talk</h3>
                    <p>log</p>
                </div>
            </div>
            <div className='chat-body'></div>
            <div className='chat-input-div'>
                <input type='text' className='chat-input' />
                <div className='chat-btn'>Send</div>
            </div>
        </div>
    );
};

export default ChatRoom;