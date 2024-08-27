import React from 'react';


function WeatherIcon({ img, imgAlt }) {
  return (
    <div className="weather-icon">
      <img src={img} alt={imgAlt} />
    </div>
  );
}

export default WeatherIcon;
