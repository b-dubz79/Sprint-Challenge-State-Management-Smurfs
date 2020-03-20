import React from 'react'

const Smurf = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h3>{props.height}</h3>
        </div>
    )
    
}

export default Smurf