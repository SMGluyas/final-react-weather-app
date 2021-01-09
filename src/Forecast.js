import React, {useState} from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastInfo data={forecast.list[0]} />
        <ForecastInfo data={forecast.list[1]} />
        <ForecastInfo data={forecast.list[2]} />
        <ForecastInfo data={forecast.list[3]} />
        <ForecastInfo data={forecast.list[4]} />
        <ForecastInfo data={forecast.list[5]} />
      </div>
    )
  } else {
    const apiKey = "275de0c841d02a257509e4dea098d5d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    
    return (null);
  }
}