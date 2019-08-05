import React, {Component} from 'react';
import { connect}  from 'react-redux';
import { selectedNews,clearSelectedNews } from '../actions';
import { bindActionCreators} from 'redux';
import LikeCounter  from './LikeCounter';

 
class Details extends Component {
    
    componentWillMount(){
        this.props.selectedNews(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearSelectedNews()
    }

    renderNews=({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:<strong>{data.author}</strong></span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                            <div>
                                <LikeCounter
                                    articleId={data.id}
                                    likes={data.likes[0]}
                                    dislikes={data.likes[1]}
                                >
                                </LikeCounter>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.article)}
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