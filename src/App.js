import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className="header">What's the Weather?</h1>
        <Weather defaultCity="Timbuktu" />
        <footer className="footer">
          This project was coded by {" "}
          <a href="https://github.com/cechinaka" target="_blank" rel="noreferrer">
          Christie Chinaka</a> and is on {" "}
          <a href="https://github.com/cechinaka/cc-react-weather-project" target="_blank" rel="noreferrer">
          GitHub</a> 
          {" "} and hosted on {" "}
          <a href="https://golden-liger-09cb10.netlify.app/" target="_blank" rel="noreferrer">
          Netlify</a>.
        </footer>
      </div>
    </div>
  );
}


