import React from "react"
import { WeatherContext } from "../../providers/WeatherProvider"
import Spinner from "../Spinner/Spinner"
import { Wrapper, TemperatureNow, TempUnit, LocationText, Description } from "./Weather.styled"

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
        </>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  )
}

export default Weather
