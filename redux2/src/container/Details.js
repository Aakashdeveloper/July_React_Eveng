import React, {Component} from 'react';
import { connect}  from 'react-redux';
import { selectedNews,clearSelectedNews } from '../actions';
import { bindActionCreators} from 'redux';

 
class Details extends Component {
    
    componentWillMount(){
        this.props.selectedNews(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearSelectedNews()
    }

    render(){
        return(
            <div>
                <h1>Articles</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        article:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews,clearSelectedNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);