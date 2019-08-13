import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { postData } from '../actions';


class FormsContainer extends Component {
    constructor(){
        super()

        this.state={
            fname:'John',
            lname:'Stephen'
        }

        this.handleChangeFname = this.handleChangeFname.bind(this);
        this.handleChangeLname = this.handleChangeLname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFname(event){
        this.setState({fname:event.target.value})
    }
    handleChangeLname(event){
        this.setState({lname:event.target.value})
    }

    handleSubmit(event){
        this.props.postData(this.state.fname,this.state.lname);
        alert('data submitted');
    }
    render(){
        return(
            <div class="container">
                <form>
                    <div className="form-group">
                        <label>FirstName</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.fname}
                                onChange={this.handleChangeFname}
                                id="fname"/>
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.lname}
                                onChange={this.handleChangeLname}
                                id="lname"/>
                    </div>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({postData}, dispatch)
}

export default connect(null, mapDispatchToProps)(FormsContainer)