import React, { Component } from "react";
import "./weather-fetch.scss";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        response: 1,
        weather: [
          {
            icon: "04n",
          },
        ],
        main: {
          temp: 285.66,
        },
      },
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      if (json.cod !== 401) {
        this.setState({ weather: json });
      }

      this.setState({ response: 1 });
    } catch (err) {
      console.log("Error:", err);
    }
  }

  render() {
    function kelvinToCelsius(kel) {
      let celsius = kel - 273.15;
      return celsius.toFixed(2);
    }

    if (this.state.weather.response === 1) {
      return <div />;
    }

    return (
      <div className="forecast">
        <img
          src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
          alt=""
        />
        İstanbul Hava Durumu: {kelvinToCelsius(this.state.weather.main.temp)}
        °С
      </div>
    );
  }
}
export default Forecast;
