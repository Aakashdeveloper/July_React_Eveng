import React, {Component} from 'react';
import {connect} from 'react-redux';
import { latestNews,articleNews,latestGallery } from '../actions';
import LatestNews from '../component/home/LatestNews'
import ArticleNews from '../component/home/ArticleNews';
import Gallery from '../component/home/GalleryNews';
import { bindActionCreators } from 'redux';

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews();
        this.props.latestGallery()
    }
    
    render(){
        return(
            <div>
                <LatestNews latestData={this.props.article.latest}/>
                <ArticleNews articleData={this.props.article.other}/>
                <Gallery galData={this.props.gal.galdata}/>
            </div>
        )
    }
}

// Will recive the state from reducers
function mapStateToProps(state){
    console.log(state)
    return{
        article:state.articles,
        gal:state.gallery
    }
}

// Will disptach actions for reducers
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,latestGallery},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);