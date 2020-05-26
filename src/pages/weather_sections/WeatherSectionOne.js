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
            // "humidity":"?"
            //wartosci poczatkowe z API wtedy nei trzeba ifow w konstrukcji
            // main:{temp:0}
            //weather:[]
        },
        days: []
    }
  
    handleInfo = () => {
        const value = this.refs.city.value

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=a2cb26e617cc58ac37a49b5139b69f8b`)
        .then(res => res.json())
        .then(temp => {
            temp = temp.list
            console.log(temp)
            this.setState({current: temp[0], days: temp.slice(1, 6)})
            // console.log(temp)
        })
        .catch(err => alert("nie bangla"))
            

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
                                {/* current.main ? current.main.temp : 0 */}
                                    <WeatherTemp temperature={ current.main ? (Math.floor(current.main.temp - 273.15)) : 0}/>
                                   {current.weather && <WeatherIcon icon={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}/>} 
                                </div>
                                <div className="col d-flex mainParam-right ">
                                        <ul>
                                            
                                            <li>
                                                <WeatherTextSpan text="Wilgotnotność"/>
                                              {current.main && <WeatherTextSpan text={current.main.humidity} sign=" %"/> }  
                                            </li>
                                            
                                        
                                            <li>
                                            <WeatherTextSpan text="Prędkość wiatru"/>
                                              {current.wind && <WeatherTextSpan text={current.wind.speed} sign=" m/s" /> }  
                                            </li>
                                            <li>
                                            <WeatherTextSpan text="Ciśnienie"/>
                                              {current.main && <WeatherTextSpan text={current.main.pressure} sign=" hPa" /> }  
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="sideParam">
                                <div className="col d-flex justify-content-center">
                                    <h3>Godzinowa</h3>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <ul>
                                        {days.map(item => 
                                             <li>
                                                <WeatherDay day={item.dt_txt.slice(11,16)} />
                                                <WeatherIcon icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                                                <WeatherTemp temperature={(Math.floor(item.main.temp - 273.15))} />
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


