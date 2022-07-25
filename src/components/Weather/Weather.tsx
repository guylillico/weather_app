import React from "react"
import { WeatherContext } from "../../providers/WeatherProvider"
import Spinner from "../Spinner/Spinner"
import { Wrapper } from "./Weather.styled"

const Weather: React.FC = () => {
  const { openWeatherData } = React.useContext(WeatherContext)

  if (openWeatherData) console.log(openWeatherData)

  return <Wrapper>{openWeatherData?.main ? <div>{openWeatherData?.main.temp}</div> : <Spinner />}</Wrapper>
}

export default Weather
