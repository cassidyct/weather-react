import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature">
          {Math.round(celsius())}
        </span>
        <span className="units">
          {" "}
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
