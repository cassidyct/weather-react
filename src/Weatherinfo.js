import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
export default function Weatherinfo(props) {
  return (
    <div>
      <h1 id="city">{props.data.city}</h1>

      <span className="date" id="date">
        <FormattedDate date={props.data.date} />
      </span>
      <div id="description" className="text-capitalize">
        {props.data.description}
      </div>
      <span id="humidity">Humidity: {props.data.humidity}%</span>
      <div id="wind"> Wind: {props.data.wind}mph</div>

      <div className="d-flex weather-temperature">
        <div className="float-left weather-icon">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <WeatherTemperature fahrenheit={props.data.temperature} />
      </div>
    </div>
  );
}
