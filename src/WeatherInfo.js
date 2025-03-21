import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}, <small>{props.data.country}</small></h1>
            <ul>
                <li><FormattedDate date={props.data.dateTime} /></li>
            </ul>
            <br />
            

            <div>
                <WeatherUnit imperial={props.data} />
            </div>
        </div>
    );
}