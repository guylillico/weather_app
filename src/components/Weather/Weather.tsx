import React from "react"
import { WeatherContext } from "../../providers/WeatherProvider"
import Spinner from "../Spinner/Spinner"
import { Wrapper, TemperatureNow, TempUnit } from "./Weather.styled"

const Weather: React.FC = () => {
  const { openWeatherData } = React.useContext(WeatherContext)

  if (openWeatherData) console.log(openWeatherData)

  return (
    <Wrapper>
      <>
        {openWeatherData?.main ? (
          <TemperatureNow>
            {Math.round(openWeatherData?.main.temp)}
            <TempUnit>&deg;C</TempUnit>
          </TemperatureNow>
        ) : (
          <Spinner />
        )}
      </>
    </Wrapper>
  )
}

export default Weather
