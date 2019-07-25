import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListMovies from '../component/list_movies';

class MoviesList extends Component {

    componentWillMount(){
        this.props.MoviesList();
    }

    render(){
        return(
            <div>
                <ListMovies datalist={this.props.mydata}></ListMovies>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        mydata:state.movies
    }
}

export default connect(mapStateToProps,actions)(MoviesList);