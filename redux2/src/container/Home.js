import React, {Component} from 'react';
import {connect} from 'react-redux';
import { latestNews,articleNews } from '../actions';
import LatestNews from '../component/home/LatestNews'
import { bindActionCreators } from 'redux';

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews();
    }
    
    render(){
        return(
            <div>
                <LatestNews latestData={this.props.article.latest}/>
            </div>
        )
    }
}

// Will recive the state from reducers
function mapStateToProps(state){
    console.log(state)
    return{
        article:state.articles
    }
}

// Will disptach actions for reducers
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);