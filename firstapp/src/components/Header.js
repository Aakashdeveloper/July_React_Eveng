import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    
    constructor(){
        super()

        this.state={
            title:'React App'
        }
        
    }

    inputChange(event){
        console.log(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('header clicked')}}>

                {this.state.title}
                
                </div>
                <center>
                    <input onChange={this.inputChange}/>
                </center>
                <p>User text Here</p>
            </header>
        )
    }
}

export default Header;



