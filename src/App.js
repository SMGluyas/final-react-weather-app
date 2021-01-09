import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">
          Weather App
        </h1>
        <Weather />
        <footer>This project was coded by SG <a href="https://github.com/SMGluyas/final-react-weather-app" target="_blank" rel="noreferrer">open sourced</a> on Github</footer>
      </div>
    </div>
  );
}
