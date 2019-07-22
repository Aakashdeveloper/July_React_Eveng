// 1 Get default state
// 2 SET INITAL STATE
// 3 BEFORE GET CREATED
// 4 RENDER JSX
// 5 After Component is mounted
import React, {Component} from 'react';

class LifeCycle extends Component {
    // 1 Get Default state
    constructor(props){
        super(props)
        console.log('Get Default state')
        // 2 SET INITAL STATE
        this.state={   
            title:'LifeCycle'
        }
        console.log('SET INITAL STATE')
    }

    // 3 BEFORE GET CREATED
    componentWillMount(){
        console.log('Before get created')
       
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.title)
        if(nextState.title===this.state.title){
            return false
        }else{
            return true
        }
    }
    
    render(){
        console.log('RenderJSX')
        return(
            <div>
                <h4>{this.state.title}</h4>
                <div onClick={()=> this.setState({title:'LifeCycle Hook'})}>ClickMe</div>
            </div>
        )
    }

    componentDidMount(){
        console.log('after get created');
        document.querySelector('h4').style.color="red"
    }

    componentWillUnmount(){
        alert('We are going out of the page')
    }


}

export default LifeCycle;