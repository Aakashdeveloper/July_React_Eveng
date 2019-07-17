import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './Posts';
import Profile from './Profile';
import Home from './Home';
import PostDetails from './PostDetails';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand" href="#">NareshIT</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/posts/:myname" component={PostDetails}></Route>
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;