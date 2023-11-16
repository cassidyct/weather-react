import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.min);
    return `${temperature}°`;
  }
  return (
    <div>
      <div className="weather-forecast-date">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
