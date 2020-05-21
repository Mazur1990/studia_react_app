import React from 'react';

const WeatherTemp = (props) => {
    return ( 
        <div className="temp">
            <h2>{props.temperature}</h2>
        </div>               
    )
}

export { WeatherTemp }