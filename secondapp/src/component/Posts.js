import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Posts extends Component {

    render(){
        return(
            <div class="panel-group">
                <div class="panel panel-success">
                    <div class="panel-heading">Posts Heading</div>
                    <div class="panel-body">
                        Posts Content
                        <h3>JavaScript</h3>
                        <Link to="/posts/Javascript" className="btn btn-info">Details</Link>
                        <h3>React</h3>
                        <Link to="/posts/React" className="btn btn-info">Details</Link>
                        <h3>NodeJs</h3>
                        <Link to="/posts/Node" className="btn btn-info">Details</Link>
                        <h3>Redux</h3>
                        <Link to="/posts/Redux" className="btn btn-info">Details</Link>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Posts