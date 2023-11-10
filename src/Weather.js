import React, { useState } from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
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
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Search"
                />
              </div>
              <h1 id="city">Rome</h1>

              <span className="date" id="date">
                <FormattedDate date={weatherData.date} />
              </span>
              <span id="description" className="text-capitalize">
                {weatherData.description}
              </span>
              <span id="humidity">Humidity: {weatherData.humidity}%</span>
              <span id="wind">Wind: {weatherData.wind}mph</span>

              <div className="d-flex weather-temperature">
                <img src="" alt="Clear" id="icon" />
                <span className="temperature" id="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°F</span>
              </div>
              <div className="weather-forecast" id="forecast">
                <div className="row">
                  <div className="col-2">
                    <div className="weather-forecast-date">Mon</div>
                    <img
                      src="https://openweathermap.org/img/wn/01d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperatures">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        18°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        12°{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="weather-forecast-date">Tues</div>
                    <img
                      src="https://openweathermap.org/img/wn/01d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperatures">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        19°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        27°{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="weather-forecast-date">Wed</div>
                    <img
                      src="https://openweathermap.org/img/wn/01d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperatures">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        22°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        29°{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="weather-forecast-date">Thu</div>
                    <img
                      src="https://openweathermap.org/img/wn/01d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperatures">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        21°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        27°{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="weather-forecast-date">Fri</div>
                    <img
                      src="https://openweathermap.org/img/wn/01d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperatures">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        17°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        23°{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="weather-forecast-date">Sat</div>
                    <img
                      src="https://openweathermap.org/img/wn/01d@2x.png"
                      alt=""
                      width="42"
                    />
                    <div className="weather-forecast-temperatures">
                      <span className="weather-forecast-temperature-max">
                        {" "}
                        16°{" "}
                      </span>
                      <span className="weather-forecast-temperature-min">
                        {" "}
                        25°{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
