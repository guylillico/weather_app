import React from "react"
import { WeatherContext } from "../../providers/WeatherProvider"
import { Wrapper } from "./Weather.styled"

const Weather: React.FC = () => {
  const { openWeatherData } = React.useContext(WeatherContext)

  if (openWeatherData) console.log(openWeatherData)

  return <Wrapper>Weather</Wrapper>
}

export default Weather
