import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleLikes} from '../actions';

class LikeCounter extends Component {
    addLikes = (opreator) => {
        const newLikes = (opreator) === 'ADD' ? [this.props.likes+1,this.props.dislikes]:[
            this.props.likes, this.props.dislikes+1]
        
        this.props.handleLikes(newLikes, this.props.articleId)
    }
    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Article</h3>
                <div className="addlikes-container">
                    <div className="btn like"
                    onClick={() => this.addLikes('ADD')}>
                        <div className="hits">{this.props.likes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislike"
                     onClick={() => this.addLikes('REMOVE')}>
                        <div className="hits">{this.props.dislikes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({handleLikes},dispatch)
}

export default connect(null, mapDispatchToProps)(LikeCounter)