import React from 'react';
import {Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import Home from './components/Home'


const App = () =>{

  return(
    <div>
      <Route path='/' exact component={SignIn} />
      <Route path='/home' component={Home}/>
    </div>
  )
}
export default App;
