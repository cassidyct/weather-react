import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Weekday from "./Weekday";

export default function App() {
  return (
    <div className="App">
      <source id="dayVideo" src="./weather.mp4" type="video/mp4" />
      <video
        autoPlay=""
        loop=""
        muted=""
        id="weatherVideo"
        src="src/weather.mp4"
      ></video>
      <div className="weather">
        <div className="container">
          <form className="search-form" id="search-form" />
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                autoComplete="off"
                id="city-input"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
            <h1 id="city">Rome</h1>

            <span className="date" id="date">
              Sun 7:00pm
            </span>
            <span id="description"> Partly Cloudy </span>
            <span id="humidity">Humidity:</span>
            <span id="wind">Wind:</span>

            <div className="d-flex weather-temperature">
              <img src="" alt="Clear" id="icon" />
              <span className="temperature" id="temperature">
                70{" "}
              </span>
              <span className="units">°F</span>
            </div>
            <Weekday />
          </div>
        </div>
      </div>
    </div>
  );
}
