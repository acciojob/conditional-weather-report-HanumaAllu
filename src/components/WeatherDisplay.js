import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      {}
      <p style={{ color: temperatureColor }}>Temperature: {temperature}</p>
      <span style={{ color: 'black' }}>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;

