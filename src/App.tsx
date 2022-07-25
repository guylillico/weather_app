import React from "react"
import Weather from "./components/Weather/Weather"
import { WeatherProvider } from "./providers/WeatherProvider"

const App = () => {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  )
}

export default App
