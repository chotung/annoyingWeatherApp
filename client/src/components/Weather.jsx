import React from 'react'

export default function Weather(props) {
  // the daily has for the week 
  const { currently, daily, hourly, minutely } = props.weatherData
  // console.log(currently, daily, hourly, minutely);
  console.log("Currently", currently);
  const {
    temperature,
    humidity,
    time,
    uvIndex,
    visibility,
    pressure,
    windSpeed,
    windGust,
    windBearing
  } = currently;
  
  return (
    <div>
      <ul>
        <li>Temperature: {temperature}</li>
        <li>Humidity: {humidity}</li>
        <li>time: {time}</li>
        <li>uvIndex: {uvIndex}</li>
        <li>visibility: {visibility}</li>
        <li>pressure: {pressure}</li>
        <li>windSpeed: {windSpeed}</li>
        <li>windGust: {windGust}</li>
        <li>windBearing: {windBearing}</li>
      </ul>
    </div>
  );
}
