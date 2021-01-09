import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Search over 200,000 cities here..." className="form-control" autoFocus="on" />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
          <div className="col-1">
            <button className="btn btn-success"><i className="fas fa-map-marker-alt"></i></button>
          </div>
        </div>
      </form>
      <h2 className = "cityName">Auckland</h2>
      <ul>
        <li>Last updated: Saturday 15.00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Mostly cloudy" />
          <span className="temperature">15</span><span className="unit">°C</span>
        </div>
        <div className="col-6">
          <div className="extraData">
            <li>Humidity: 70%</li>
            <li>Wind: 20 km/hr</li>
            <li>Pressure: 998 hPa</li>
          </div>
        </div>
      </div>
    </div>
  )
}