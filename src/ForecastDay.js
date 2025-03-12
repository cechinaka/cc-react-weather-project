import React from "react";

export default function ForecastDay(props) {

    let forecastWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let forecastDay = forecastWeekDays[props.forecastWeekDay.getDay()];

    return <div>{forecastDay}</div>;
}