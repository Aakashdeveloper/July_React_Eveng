import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class PostDetails extends Component {
    constructor(props){
        super(props)

        console.log(props)

        this.state={
            title:this.props.match.params.myname
        }
    }
    render(){
        return(
            <div class="panel-group">
                <div class="panel panel-info">
                    <div class="panel-heading">PostDetails Heading</div>
                    <div class="panel-body">
                        <h3>PostDetails Content
                        for {this.state.title}
                        </h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="/posts" className="btn btn-danger">Back</Link>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default PostDetails