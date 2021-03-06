import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  function time() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();

    return (
      `${hours}:00`
    )
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp)
    return (`${temperature}°C`)
  }
  
  return (
    <div className="ForecastInfo col">
      {time()}
      <WeatherIcon IconData={props.data.weather[0].icon} />
      <strong>{temperature()}</strong>
    </div>
  )
}