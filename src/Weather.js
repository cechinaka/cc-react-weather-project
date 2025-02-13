import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});

    function showWeather (response) {
        console.log(response);
        setWeatherData({
            ready: true,
            city: response.data.city,
            dateTime: "Monday 09:00",
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            temperature: Math.round(response.data.temperature.current),
            humidity: Math.round(response.data.temperature.humidity),
            wind: Math.round(response.data.wind.speed),
        });
    }

    if (weatherData.ready) {

    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="searchBar w-100" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>

            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.dateTime}</li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img className="weatherIcon" src={weatherData.icon} alt={weatherData.description} />
                    {" "}<span className="temperatureValue">{weatherData.temperature}</span>
                    <span className="temperatureUnit">°F</span>
                </div>
               <div className="col-6">
                <ul>
                    <li><span className="description text-capitalize">{weatherData.description}</span></li>
                    <li>Humidity: <span className="humidityValue">{weatherData.humidity}</span>%</li>
                    <li>Wind: <span className="windValue">{weatherData.wind}</span> <small>MPH</small></li>
                </ul>
                </div>

            </div>
        </div>
    );
} else {
    
    const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);
    
    return (
    <div>
        <p>Loading...</p>
        </div>);
}
}