import React from 'react';

const Training = (props) => {
    return ( 
    <div className="col d-flex justify-content-center trening_container">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>           
    )
}

export { Training }