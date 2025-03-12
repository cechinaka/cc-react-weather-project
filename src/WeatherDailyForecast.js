import React, { useState } from "react";
import axios from "axios";
import "./WeatherDailyForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherDailyForecast(props) {
    const [forecastData, setForecastData] = useState({loaded: false});
  
    
    function showForecast(response) {
        console.log(response);
        setForecastData({
            loaded: true,
            temperatureHigh: Math.round(response.data.daily[0].temperature.maximum),
            temperatureLow: Math.round(response.data.daily[0].temperature.minimum),
            description: response.data.daily[0].condition.description,
            icon: response.data.daily[0].condition.icon_url,
            forecastDays: new Date(response.data.daily[0].time*1000),

        });
             
    }

    function searchForecast() {
        const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.forecastCity}&key=${apiKey}&units=imperial`
        axios.get(url).then(showForecast);
    }

    if (forecastData.loaded) {
        return (
            <div className="WeatherDailyForecast">
                <h3>Weather Forecast:</h3>
            <div className="row">
                <div className="col">
                    <ForecastDay forecastWeekDay={forecastData.forecastDays} />
                    <br />
                    
                    <img className="forecastIcon" src={forecastData.icon} alt={forecastData.description} />
                    <br />

                    {forecastData.temperatureHigh}° {forecastData.temperatureLow}°

                </div>
            </div>
        </div>
        );
    } else {

        searchForecast();
        
        return (
            <div>
                <p>Loading...</p>
            </div>);
    }
    
}