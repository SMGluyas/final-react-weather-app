import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h2 className="cityName">{props.data.city}</h2>
        <ul>
          <li><FormattedDate date={props.data.date} /></li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <WeatherIcon IconData={props.data.icon} />
            <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
          </div>
          <div className="col-6">
            <div className="extraData">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/hr</li>
              <li>Pressure: {props.data.pressure} hPa</li>
            </div>
          </div>
        </div>
    </div>
  )
}