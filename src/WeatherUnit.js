import React, { useState } from "react";

export default function WeatherUnit(props) {
    const [unit, setUnit] = useState("imperial");

    function convertToMetric(event) {
        event.preventDefault();
        setUnit("metric");
    }

    function showImperial(event) {
        event.preventDefault();
        setUnit("imperial");
    }

    if (unit === 'imperial') {
        return (
        <div className="Unit">
           <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        <div>
                            <img className="weatherIcon" src={props.imperial.icon} alt={props.imperial.description} />
                            {" "}
                            <span className="temperatureValue">{props.imperial.temperature}</span>
                            <span className="temperatureUnit">°F</span>
                        </div>   
                    </div>
            
                </div>
                <div className="col-6">
                    <ul>
                        <li><span className="description text-capitalize">{props.imperial.description}</span></li>
                        <li>Humidity: <span className="humidityValue">{props.imperial.humidity}</span>%</li>
                        <li>Wind: <span className="windValue">{props.imperial.wind}</span> <small>MPH</small></li>
                    </ul>
                </div>
            </div>
            <p className="unitsAll">Imperial | <a href="/" onClick={convertToMetric} className="unitsM">Metric</a></p>
        </div>
    ); 
    } else {
        let celsius = Math.round((props.imperial.temperature - 32) * 5 / 9);
        let kilometers = Math.round(props.imperial.wind * 1.609);
        return (
            <div className="Unit">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex">
                            <div>
                                <img className="weatherIcon" src={props.imperial.icon} alt={props.imperial.description} />
                                {" "}
                                <span className="temperatureValue">{celsius}</span>
                                <span className="temperatureUnit">°C</span>
                            </div>   
                        </div>
                
                    </div>
                    <div className="col-6">
                        <ul>
                            <li><span className="description text-capitalize">{props.imperial.description}</span></li>
                            <li>Humidity: <span className="humidityValue">{props.imperial.humidity}</span>%</li>
                            <li>Wind: <span className="windValue">{kilometers}</span> <small>KPH</small></li>
                        </ul>
                    </div>
                </div>
                <p className="unitsAll"><a href="/" onClick={showImperial} className="unitsI">Imperial</a> | Metric</p>
            </div>
        )
    }
   

}