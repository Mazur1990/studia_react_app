import React, {Component} from 'react';
import {WeatherIcon} from './weather_components/WeatherIcon'
import {WeatherTemp} from './weather_components/WeatherTemp'
import {WeatherDay} from './weather_components/WeatherDay'
import {WeatherTextSpan} from './weather_components/WeatherTextSpan'

class WeatherSectionOne extends Component{
    state={
        current:{
            "temp": 0,
            "date": "",
            //wartosci poczatkowe z API wtedy nei trzeba ifow w konstrukcji
            // main:{temp:0}
            //weather:[]
        },
        days: []
    }
    handleInputInfo = (e) => {
 
    }
    handleInfo = () => {
        const value = this.refs.city.value

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=a2cb26e617cc58ac37a49b5139b69f8b`)
        .then(res => res.json())
        .then(temp => {
            temp = temp.list
            this.setState({current: temp[0], days: temp.slice(1, 6)})
            // console.log(temp)
        })
        .catch(err => alert("not bangla"))
            

    }

    render(){
        const {current, days} =this.state
        return ( 
            <section id = "weather">
                <div className = "container">
                    <div className = "row information">
                        <div className="col-12 weatherTable">
                                <div className="col d-flex stify-cojustify-content-center titleAndSearch">
                                    <h1>Pogoda na dzisiejszy trening</h1>
                                    <div className="col d-flex juntent-center titleAndSearch">
                                        <input placeholder="Wpisz nazwę miejscowości" ref="city"></input>
                                        <button className="btn" onClick={this.handleInfo}>Szukaj</button>
                                    </div>
                                </div>
        
                            <div className="mainParam d-flex justify-content-center">
                                <div className="col d-flex mainParam-left">
                                    <WeatherTemp temperature={current.main ? current.main.temp : 0}/>
                                   {current.weather && <WeatherIcon icon={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}/>} 
                                </div>
                                <div className="col d-flex mainParam-right ">
                                        <ul>
                                            <li>
                                                <WeatherTextSpan text="test"/>
                                                <WeatherTextSpan text="test"/>
                                            </li>
                                            {/* <li>
                                                <WeatherTextSpan text="test"/>
                                                 <WeatherTextSpan text="test"/>
                                            </li>
                                            <li>
                                                <WeatherTextSpan text="test"/>
                                                <WeatherTextSpan text="test"/>
                                            </li> */}
                                        </ul>
                                </div>
                            </div>
                            <div className="sideParam">
                                <div className="col d-flex justify-content-center">
                                    <h3>Terminowa</h3>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <ul>
                                        {days.map(item => 
                                             <li>
                                                <WeatherDay day={item.dt_txt} />
                                                <WeatherIcon icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                                                <WeatherTemp temperature={item.main.temp} />
                                              </li>
                                            )}
                                       
                               
                                    </ul>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </section>
            )
    }
}


export { WeatherSectionOne }


