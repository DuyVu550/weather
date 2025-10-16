import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import clear_img from "../assets/clear.png";
import cloud_img from "../assets/cloud.png";
import drizzle_img from "../assets/drizzle.png";
import rain_img from "../assets/rain.png";
import humidity_img from "../assets/humidity.png";
import react_img from "../assets/react.svg";
import search_img from "../assets/search.png";
import snow_img from "../assets/snow.png";
import wind_img from "../assets/wind.png";

const Weather = () => {
  const API_KEY = "fd7f479ede8339360cbc4cb32369cb40";
  const inputRef = useRef();
  const allIcons = {
    "01d": clear_img,
    "01n": clear_img,
    "02d": cloud_img,
    "02n": cloud_img,
    "03d": cloud_img,
    "03n": cloud_img,
    "04d": drizzle_img,
    "04n": drizzle_img,
    "09d": rain_img,
    "09n": rain_img,
    "10d": rain_img,
    "10n": rain_img,
    "13d": snow_img,
    "13n": snow_img,
  };
  const [weatherData, setWeatherData] = useState(false);
  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_img;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {}
  };
  useEffect(() => {
    search("Stockholm");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" ref={inputRef} placeholder="Search City" />
        <img
          src={search_img}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <img src={weatherData.icon} className="weather-icon" />
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_img} alt="" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_img} alt="" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
