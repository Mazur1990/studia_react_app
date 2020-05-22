import React from 'react';

const WeatherIcon = (props) => {
    return ( 
        <div className="icon">
            <img src={props.icon} alt=""/>
        </div>               
    )
}

export { WeatherIcon }

// https://img.icons8.com/ios/50/000000/cloud.png