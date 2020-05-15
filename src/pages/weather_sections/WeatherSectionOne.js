import React from 'react';

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
                            <div className="temp">
                                <h2>9*C</h2>
                            </div>
                            <div className="icon">
                                <img src="https://img.icons8.com/ios/50/000000/cloud.png"/>
                            </div>
                        </div>
                        <div className="col d-flex mainParam-right ">
                              
                                <ul>
                                    <li>
                                        <span>test 1</span>
                                        <span>test 2</span>
                                    </li>
                                    <li>
                                        <span>test 1</span>
                                        <span>test 2</span>
                                    </li>
                                    <li>
                                        <span>test 1</span>
                                        <span>test 2</span>
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
                                    <div>pon</div>
                                    <div>
                                    <img src="https://img.icons8.com/ios/50/000000/cloud.png"/>
                                    </div>
                                    <div>9*C</div>
                                </li>
                                <li>
                                    <div>wtorek</div>
                                    <div> 
                                    <img src="https://img.icons8.com/ios/50/000000/cloud.png"/>
                                    </div>
                                    <div>test 2</div>
                                </li>
                                <li>
                                    <div>test 1</div>
                                    <div> 
                                        <img src="https://img.icons8.com/ios/50/000000/cloud.png"/> 
                                        </div>
                                    <div>test 2</div>
                                </li>
                                <li>
                                    <div>test 1</div>
                                    <div> 
                                        <img src="https://img.icons8.com/ios/50/000000/cloud.png"/> 
                                        </div>
                                    <div>test 2</div>
                                </li>
                                <li>
                                    <div>test 1</div>
                                    <div> 
                                        <img src="https://img.icons8.com/ios/50/000000/cloud.png"/> 
                                        </div>
                                    <div>test 2</div>
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