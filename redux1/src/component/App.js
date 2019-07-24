import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

    componentWillMount(){
        this.props.MoviesList();
    }

    render(){
        return(
            <div>
                <h1>React Redux</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
}

export default connect(mapStateToProps,actions)(App);