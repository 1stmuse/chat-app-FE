import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './styles/main.css'

import Routes from './App';
const App = ()=>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


