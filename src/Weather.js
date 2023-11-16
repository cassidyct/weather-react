import React, { useState } from "react";
import "./App.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather">
          <div className="container">
            <form
              onSubmit={handleSubmit}
              className="search-form"
              id="search-form"
            >
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    autoFocus="on"
                    autoComplete="off"
                    id="city-input"
                    className="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <Weatherinfo data={weatherData} />
            <WeatherForecast coord={weatherData.coord} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
