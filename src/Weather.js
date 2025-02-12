import React from "react";
import "./Weather.css";


export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="searchBar" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>Honolulu</h1>
            <ul>
                <li>Monday 08:00</li>
                <li>Mostly Cloudy</li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="" alt="Mostly Cloudy" />
                    {" "}6°F
                </div>
               <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 77%</li>
                    <li>Wind: 15 <small>MPH</small></li>
                </ul>
                </div>

            </div>
        </div>
    );
}