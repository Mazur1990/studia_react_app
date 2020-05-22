import React, {Component} from 'react';

class WeatherTemp extends Component {
    render(){

        return ( 
            <div className="temp">
                <h2>{this.props.temperature} *C</h2>
            </div>               
        )
    }
}

export { WeatherTemp }