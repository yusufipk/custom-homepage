import "./App.css";
import React, { Component } from "react";
import Time from "./components/time/time-component";
import Forecast from "./components/fetch weather/weather-fetch";
import Card from "./components/card/card-component";
import { cards } from "./data/card1";
import { card2 } from "./data/card2";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>
          <Time />
        </h1>
        <Forecast />
        <div className="Cards">
          <Card title="Sık Girdiğim Siteler" list={cards} />
          <Card title="Reddit" list={card2} />
        </div>
      </div>
    );
  }
}

export default App;
