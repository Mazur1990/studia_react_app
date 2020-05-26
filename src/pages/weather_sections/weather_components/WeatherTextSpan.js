import React from 'react';

const WeatherTextSpan = (props) => {
    return ( 
            <span>{props.text}{props.sign}</span>
    )
}

export { WeatherTextSpan }