import React, {Component} from 'react';
import Banner from './Banner';
import ArtistList from './artistList';

const url= 'http://localhost:8900/artists';

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            artists:''
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    artists:data
                })
            })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList artistData={this.state.artists}/>
            </div>
        )
    }
}


export default Home;