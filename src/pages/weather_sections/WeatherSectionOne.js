import React from 'react';
import {WeatherIcon} from './weather_components/WeatherIcon'
import {WeatherTemp} from './weather_components/WeatherTemp'
import {WeatherDay} from './weather_components/WeatherDay'
import {WeatherTextSpan} from './weather_components/WeatherTextSpan'


const WeatherSectionOne = () => {
    return ( 
    <section id = "weather">
        <div className = "container">
            <div className = "row information">
                <div className="col-12 weatherTable">
                        <div className="col d-flex justify-content-center titleAndSearch">
                            <h1>Pogoda na dzisiejszy trening</h1>
                            <div className="col d-flex justify-content-center titleAndSearch">
                                <input placeholder="Wpisz nazwę miejscowości"></input>
                                <button className="btn">Szukaj</button>
                            </div>
                        </div>

                    <div className="mainParam d-flex justify-content-center">
                        <div className="col d-flex mainParam-left">
                            <WeatherTemp temperature="9*C"/>
                            <WeatherIcon icon="https://img.icons8.com/ios/50/000000/cloud.png"/>
                        </div>
                        <div className="col d-flex mainParam-right ">
                                <ul>
                                    <li>
                                        <WeatherTextSpan text="test"/>
                                        <WeatherTextSpan text="test"/>
                                    </li>
                                    <li>
                                        <WeatherTextSpan text="test"/>
                                         <WeatherTextSpan text="test"/>
                                    </li>
                                    <li>
                                        <WeatherTextSpan text="test"/>
                                        <WeatherTextSpan text="test"/>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="sideParam">
                        <div className="col d-flex justify-content-center">
                            <h3>Terminowa</h3>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <ul>
                                <li>
                                    <WeatherDay day="Poniedziałek" />
                                    <WeatherIcon icon="test"/>
                                    <WeatherTemp temperature="9*C" />
                                </li>
                                <li>
                                    <WeatherDay day="Wtorek" />
                                    <WeatherIcon icon="test"/>
                                    <WeatherTemp />
                                </li>
                                <li>
                                    <WeatherDay day="Wtorek" />
                                    <WeatherIcon icon="test"/>
                                    <WeatherTemp />
                                </li>
                                <li>
                                    <WeatherDay day="Wtorek" />
                                    <WeatherIcon icon="test"/>
                                    <WeatherTemp />
                                </li>
                                <li>
                                    <WeatherDay day="Wtorek" />
                                    <WeatherIcon icon="test"/>
                                    <WeatherTemp />
                                </li>
                                <li>
                                    <WeatherDay day="Wtorek" />
                                    <WeatherIcon icon="test"/>
                                    <WeatherTemp />
                                </li>
                           
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export { WeatherSectionOne }