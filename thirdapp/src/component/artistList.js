import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props) => {
    console.log(">>>in Artists>>>", props)

    const renderList = ({artistData}) => {
        if(artistData){
            return artistData.map((data) => {
                const styles= {
                    background: `url('/images/covers/${data.cover}.jpg')`
                }
                return(
                    <Link key={data.id} to={`/artist/${data.id}`} 
                        className="artist_item"
                        style={styles}>
                        <div>{data.name}</div>
                    </Link>
                )
            })
        }
        
    }

    return(
        <div className="artist_list">
            <h4>Artist List</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList;