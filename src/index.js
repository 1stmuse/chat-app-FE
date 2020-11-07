import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {socketReducer} from './reducer/reducer'
import './styles/main.css'

import Routes from './App';

const store = createStore(socketReducer)


const App = ()=>{
    return(
        <Provider store={store} >
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


