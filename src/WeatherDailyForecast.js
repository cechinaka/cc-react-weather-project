import React, { useState, useEffect } from "react";
import "./WeatherDailyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherDailyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    let fCity = props.locationName.city;
    let fCountry = props.locationName.country;
    let data = props.dailyForecastData;

    useEffect(() => {}, []);
  

    function showForecast(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {

        return (
            <div className="WeatherDailyForecast">
                <h3>Weather Forecast:</h3>
                <h5>{fCity}, <small>{fCountry}</small></h5>
            <div className="row">
                <div className="col">
                    <ForecastDay forecastData={forecastData[0]} />
                    <p>{data}</p>
                </div>
            </div>
        </div>
        );

    } else {
        let latitude = props.cityCoordinates.latitude;
        let longitude = props.cityCoordinates.longitude;
        let apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`
        
        axios.get(url).then(showForecast);

        return null;
    }
    
}