import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" component={Home}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;