import React, {useState} from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/10d@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure
    });
  }
  
  if (weatherData.ready) {
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
        <h2 className="cityName">{weatherData.city}</h2>
        <ul>
          <li>Last updated: Saturday 15.00</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
          </div>
          <div className="col-6">
            <div className="extraData">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/hr</li>
              <li>Pressure: {weatherData.pressure} hPa</li>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "275de0c841d02a257509e4dea098d5d3";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div>
        <center>
          <p><Loader
          type="Puff"
          color="orange"
          height={100}
          width={100}
          timeout={2000} //3 secs
          /></p>
       </center> 
      </div>
    )
  }
}