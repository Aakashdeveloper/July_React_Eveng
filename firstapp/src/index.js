// to require lib module
import React from 'react'
import ReactDom from 'react-dom';

import Home from './components/Home';
import Header from './components/Header'

// Logical and html
const App = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Home/>
            <h1>My First React App</h1>
            <h2>This is Second Tag</h2>
            <div>
                <h1>This is from second div</h1>
            </div>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))



// To make it availabe outside
