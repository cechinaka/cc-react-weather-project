import React from "react";

export default function FormattedDate(props) {
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let date = props.date.getDate();
    let year = props.date.getFullYear();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[props.date.getMonth()];

    return <div>{day}, {month} {date}, {year} 
    <br />
    Last updated: {hours}:{minutes}</div>;

}