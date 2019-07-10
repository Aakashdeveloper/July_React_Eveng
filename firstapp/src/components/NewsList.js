import React from 'react';

const NewsList = (props) => {
    console.log("form news list>>>>",props)

    const output= props.datalist.map((item)=>{
        return(
            <div>
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })

    return(
        <div>{output}</div>
    )
}

export default NewsList