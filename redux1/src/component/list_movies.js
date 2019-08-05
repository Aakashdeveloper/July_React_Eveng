import React from 'react';

const ListMovies = (props) => {

    const listMov = ({datalist}) => {
        if(datalist){
            return datalist.map((data) => {
                return (
                    <h1>{data.name}</h1>
                )
            })
        }
    }

    return(
        <div>
            {listMov(props)}
        </div>
    )
}

export default ListMovies;
