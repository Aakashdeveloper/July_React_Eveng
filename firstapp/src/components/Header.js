import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    
    constructor(){
        super()

        this.state={
            title:'React App',
            userInput:'User text Here'
        }
        
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value:'User text Here'})
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('header clicked')}}>

                {this.state.title}

                </div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                </center>
                <p>{this.state.userInput}</p>
            </header>
        )
    }
}

export default Header;



