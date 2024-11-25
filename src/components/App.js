import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import './../styles/App.css';

const App = () => {
  
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  useEffect(() => {
   
  }, []); 

  return (
    <div>
      {}
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
