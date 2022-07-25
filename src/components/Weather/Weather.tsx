import React from "react"
import { WeatherContext } from "../../providers/WeatherProvider"
import Spinner from "../Spinner/Spinner"
import { Wrapper, TemperatureNow, TempUnit, LocationText, Description, Details, Label } from "./Weather.styled"

const Weather: React.FC = () => {
  const { openWeatherData } = React.useContext(WeatherContext)

  if (openWeatherData) console.log(openWeatherData)

  return (
    <Wrapper>
      {openWeatherData?.main ? (
        <>
          <LocationText>{openWeatherData?.name}</LocationText>
          <TemperatureNow>
            {Math.round(openWeatherData?.main.temp)}
            <TempUnit>&deg;C</TempUnit>
          </TemperatureNow>
          <Description>{openWeatherData?.weather[0].description}</Description>
          <Details>
            <div>
              <Label>Feels like</Label>
              {Math.round(openWeatherData.main.feels_like)}&deg;C
            </div>
            <div>
              <Label>Min.</Label>
              {Math.round(openWeatherData.main.temp_min)}&deg;C
            </div>
            <div>
              <Label>Max.</Label>
              {Math.round(openWeatherData.main.temp_max)}&deg;C
            </div>
          </Details>
          {openWeatherData.weather[0]?.icon && (
            <img src={`http://openweathermap.org/img/wn/${openWeatherData.weather[0]?.icon}.png`} alt="" />
          )}
          <Details>
            <div>
              <Label>Humidity</Label>
              {openWeatherData.main.humidity}%
            </div>
            <div>
              <Label>Cloud cover</Label>
              {openWeatherData?.clouds?.all}%
            </div>
            <div>
              <Label>Wind speed</Label>
              {openWeatherData?.wind?.speed} m/s
            </div>
          </Details>
        </>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  )
}

export default Weather
