import React from "react";

export default function ForecastDay(props) {

    function temperatureHigh() {
        let temperature = Math.round(props.forecastData.temperature.maximum);
        return `${temperature}°`;

    }

    function temperatureLow() {
        let temperature = Math.round(props.forecastData.temperature.minimum);
        return `${temperature}°`;
    }

    function forecastDay() {
        let date = new Date(props.forecastData.time * 1000);
        let forecastDay = date.getDay();

        let forecastWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        return forecastWeekDays[forecastDay];
    }

    function forecastIcon() {
        let forecastIcon = (props.forecastData.condition.icon_url);
        return forecastIcon;
    }

    function forecastDescription() {
        let forecastDescription = props.forecastData.condition.description;
        return forecastDescription;
    }

    

    return (
        <div>
            <div className="forecastDay">{forecastDay()}</div>
            <img className="forecastIcon" src={forecastIcon()} alt={forecastDescription()} />

            <br />
            
            <span className="forecastHigh">{temperatureHigh()}  </span> 
            <span className="temperatureDivider">|</span> 
            <span className="forecastLow"> {temperatureLow()}</span>
    
        </div>
    );
}