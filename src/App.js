import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import io from 'socket.io-client'
import Alert from './components/Alert'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Register from './components/Register'
import ChatRoom from './components/ChatRoom'
import Auth from './components/Auth'


const App = () =>{

  const [socket, setSocket] =useState(null)

  const socketInit = ()=>{
      const token = localStorage.getItem('token')
      const newSock = io('http://localhost:8000', {
          query:{
              id:token
          }
      })

      newSock.on('connect', (message)=>{
          Alert('success', 'connected')
          console.log('socket connected', message)
      })
      newSock.on('disconnection',()=>{
          setSocket(null)
          Alert('error', 'socket disconnected')
      })
      
      setSocket(newSock)
  }
  useEffect(()=>{
    socketInit()
  },[])

  return(
    <div>
      <Route path='/' exact component={Auth(SignIn, null)} />
      <Route path='/register' component={Register} />
      <Route path='/home' component={Auth(Home, true)}/>
      <Route path={`/chat/:id`}>
        <ChatRoom socket={socket} />
      </Route>
    </div>
  )
}
export default App;
