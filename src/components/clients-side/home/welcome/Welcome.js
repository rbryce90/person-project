import React, { Component } from "react";
import axios from "axios";
import "./welcome.css";

export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      temp: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?zip=85003&APPID=c297a5a7fe855de9c8f9e2fc267941bd&units=imperial"
      )
      .then(response => {
        this.setState({
          weather: response.data,
          temp: response.data.main.temp
        });
      });
  }
  render() {
    let { weather, temp } = this.state;
    return (
      <div className="welcome">
        <h1> Welcome to Bryce's Blog</h1>
        <h1>
          Currently, the weather in {weather.name} is {temp} degrees!{" "}
        </h1>{" "}
        <br />
      </div>
    );
  }
}

export default Welcome;
