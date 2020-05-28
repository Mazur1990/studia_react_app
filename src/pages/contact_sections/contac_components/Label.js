import React from 'react';

const Label = (props) => {
    return ( 
        <label className="label-input100" for={props.for}>{props.title}</label>         
    )
}

export { Label }