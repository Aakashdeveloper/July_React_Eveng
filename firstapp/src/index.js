// to require lib module
import React,{Component} from 'react'
import ReactDom from 'react-dom';

import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';

// Logical and html
class App extends Component {
    constructor(props){
        super(props);

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    filterNews(keyword){
        const output = this.state.news.filter((data)=>{
            return data.title.indexOf(keyword)> -1;
        })

        this.setState({filtered:output})
    }


    render(){
        return(
            <div>
                <Header newsSearch={(userText)=>{this.filterNews(userText)}}/>
                <hr/>
                <NewsList datalist={this.state.filtered}/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))



// To make it availabe outside

/*

const App = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Home/>
            <h1>My First React App</h1>
            <h2>This is Second Tag</h2>
            <div>
                <h1>This is from second div</h1>
            </div>
        </div>
    )
}*/