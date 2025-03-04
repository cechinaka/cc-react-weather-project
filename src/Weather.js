import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";


export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState (props.defaultCity);

    function showWeather (response) {
        console.log(response);
        setWeatherData({
            ready: true,
            city: response.data.city,
            dateTime: new Date(response.data.time*1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            temperature: Math.round(response.data.temperature.current),
            humidity: Math.round(response.data.temperature.humidity),
            wind: Math.round(response.data.wind.speed),
        });
    }

    function search() {
        const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(url).then(showWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {

    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="searchBar w-100" autoFocus="on" onChange={updateCity} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />

        </div>
    );
} else {
    
    search();
    
    return (
    <div>
        <p>Loading...</p>
    </div>);
}
}