// to require lib module
import React from 'react'
import ReactDom from 'react-dom';

import Home from './Home';

// Logical and html
const App = () => {
    return(
        <div>
            <Home/>
            <hr/>
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
