import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            Weather Information:
            <h1>{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.dateTime} /></li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img className="weatherIcon" src={props.data.icon} alt={props.data.description} />
                    {" "}<span className="temperatureValue">{props.data.temperature}</span>
                    <span className="temperatureUnit">°F</span>
                </div>
               <div className="col-6">
                <ul>
                    <li><span className="description text-capitalize">{props.data.description}</span></li>
                    <li>Humidity: <span className="humidityValue">{props.data.humidity}</span>%</li>
                    <li>Wind: <span className="windValue">{props.data.wind}</span> <small>MPH</small></li>
                </ul>
                </div>

            </div>
        </div>
    );
}