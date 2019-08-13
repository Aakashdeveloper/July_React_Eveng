import React,{Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Details from '../container/Details';
import FormsContainer from '../container/FormsContainer';

import Footer from './Footer';
import Header from './Header';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/details/:id" component={Details}/>
                <Route exact path="/forms" component={FormsContainer}/>
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;