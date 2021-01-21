import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
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
      <div className="App">
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;
