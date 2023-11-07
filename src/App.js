import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Rome" />
      <footer>
        <div>
          <a href="https://github.com/cassidyct/weather-react">
            Open-source code
          </a>{" "}
          by Cassidy
        </div>
      </footer>
    </div>
  );
}
