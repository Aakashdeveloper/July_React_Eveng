import React, {Component} from 'react';
import Header from './Header';

const url= 'http://localhost:8900/artists';

class Artist extends Component {
    constructor(props){
        super(props);

        this.state={
            artist:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.artistid)
        fetch(`${url}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then((data)=> {
            this.setState({
                artist:data
            })
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Artist;