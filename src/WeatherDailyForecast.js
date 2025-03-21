import React, { useState, useEffect } from "react";
import "./WeatherDailyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherDailyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.locationName.city]);
  
    function showForecast(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherDailyForecast">
                <h3>Weather Forecast:</h3>
                <br />
                <div className="row">
                    {forecastData.map(function (forecastData, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay forecastData={forecastData} />
                                </div>
                            );
                            }
                        }                  
                    )}
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