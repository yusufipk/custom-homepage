import React, { Component } from "react";
import "./weather-fetch.scss";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=yourapikey"
    );
    const json = await response.json();
    this.setState({ weather: json });
  }

  render() {
    if (!this.state.weather) {
      return <div />;
    }
    function kelvinToCelsius(kel) {
      let celsius = kel - 273.15;
      return celsius.toFixed(2);
    }

    return (
      <div className="forecast">
        <img
          src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
          alt=""
        />
        İstanbul Hava Durumu: {kelvinToCelsius(this.state.weather.main.temp)}°С
      </div>
    );
  }
}
export default Forecast;
