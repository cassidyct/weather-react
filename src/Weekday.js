import React from "react";
import "./App.css";

export default function Weekday() {
  return (
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
            <span className="weather-forecast-temperature-max"> 18° </span>
            <span className="weather-forecast-temperature-min"> 12° </span>
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
            <span className="weather-forecast-temperature-max"> 19° </span>
            <span className="weather-forecast-temperature-min"> 27° </span>
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
            <span className="weather-forecast-temperature-max"> 22° </span>
            <span className="weather-forecast-temperature-min"> 29° </span>
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
            <span className="weather-forecast-temperature-max"> 21° </span>
            <span className="weather-forecast-temperature-min"> 27° </span>
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
            <span className="weather-forecast-temperature-max"> 17° </span>
            <span className="weather-forecast-temperature-min"> 23° </span>
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
            <span className="weather-forecast-temperature-max"> 16° </span>
            <span className="weather-forecast-temperature-min"> 25° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
