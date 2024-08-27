import React from 'react';
import WeatherIcon from './WeatherForecastComponents/WeatherIcon';
import WeatherData from './WeatherForecastComponents/WeatherData'
import './WeatherForecast.css'; 

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;
