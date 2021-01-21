import React, { Component } from "react";
import "./time-component.scss";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  currentTime() {
    this.setState({
      time: new Date(),
    });
  }
  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <div className="clock">{this.state.time.toLocaleTimeString("en-GB")}</div>
    );
  }
}

export default Time;
