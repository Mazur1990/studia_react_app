import React from 'react';
const Gallery = (props) => {
    return ( 
    <div className="col-12 col-sm grid">
        <img src={props.image} className="grid-image" />
    </div>          
    )
}

export { Gallery }