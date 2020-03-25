import React, { Component } from 'react';
import Weather from '../components/Weather';

class Main extends Component {
  state = {
    weather: null
  };

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = async () => {
    const response = await fetch("/weather");
    const weatherD = await response.json();
    this.setState({
      weather: weatherD
    });
  };


  render() {
    // console.log("state", this.state);
    const { weather } = this.state
    // console.log("weather", weather)
    return (
      <div>
        <h2>Current Weather</h2>
        {weather ? <Weather weatherData={weather} /> : "Loading"}
        daily temp for the week
      </div>
    );
  }
}

export default Main;