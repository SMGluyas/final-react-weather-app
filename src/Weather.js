import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Loader from 'react-loader-spinner';
import BackgroundAnimation from "./BackgroundAnimation";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure
    });
  }

  function findWeatherInfo() {
    const apiKey = "275de0c841d02a257509e4dea098d5d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    findWeatherInfo();
  }

  function findLocalWeatherInfo(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "275de0c841d02a257509e4dea098d5d3";
    let geoLocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(geoLocationUrl).then(handleResponse);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(findLocalWeatherInfo);
  }

  function handleLocationSubmit(event) {
    event.preventDefault();
    getCurrentPosition();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <BackgroundAnimation />
        <form onSubmit={handleSubmit}> 
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Search over 200,000 cities here..." className="form-control" autoFocus="on" onChange={updateCity} />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            <div className="col-1">
              <button className="btn btn-success" onClick={handleLocationSubmit}><i className="fas fa-map-marker-alt"></i></button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast city={weatherData.city}/>
      </div>
    );
  } else {
    findWeatherInfo();
    return (
      <div>
        <center>
          <Loader
          type="Puff"
          color="orange"
          height={100}
          width={100}
          timeout={2000} //3 secs
          />
       </center> 
      </div>
    )
  }
}
