import React, { useState } from "react";
import axios from "axios";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState("");
    //const [forecastCity, setForecastCity] = useState (props.defaultCity);
  
    
    function showForecast(response) {
        console.log(response.data);
        setForecastData(response.data.daily);
        setLoaded(true);
             
    }

    if (loaded) {
        return (
            <div className="WeatherDailyForecast">
                <h3>Weather Forecast:</h3>
            <div className="row">
                <div className="col">
                    Thu
                    <br />

                    <img className="forecastIcon" src={forecastData[0].icon} alt={forecastData[0].condition.description} />
                    <br />
                    
                    19 10


                </div>
            </div>
        </div>
        );
    } else {
        const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let url = `https://api.shecodes.io/weather/v1/forecast?query=${"Timbuktu"}&key=${apiKey}&units=imperial`
        axios.get(url).then(showForecast);
        
        return null;
    }
    
}