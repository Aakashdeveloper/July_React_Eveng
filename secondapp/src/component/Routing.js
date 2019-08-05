import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './Posts';
import Profile from './Profile';
import Home from './Home';
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <Link to='/' className="navbar-brand">NareshIT</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/lifecycle">LifeCycle</Link></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/posts/:myname" component={PostDetails}></Route>
                    <Route path="/lifeCycle" component={LifeCycle}></Route>
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;