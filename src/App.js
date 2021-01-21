import "./App.css";
import React, { Component } from "react";
import Time from "./components/time/time-component";
import Forecast from "./components/fetch weather/weather-fetch";
import Card from "./components/card/card-component";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const card1 = ["deneme", "deneme2"];
    return (
      <div className="App">
        <h1>
          <Time />
        </h1>
        <Forecast />
        <Card list={card1} />
      </div>
    );
  }
}

export default App;
