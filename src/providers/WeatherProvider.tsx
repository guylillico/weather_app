import { createContext, useState, useEffect, useCallback, ReactNode } from "react"
import { API_URL, POLLING_INTERVAL } from "../constants/weather"

interface WeatherItem {
  id: number
  main: string
  description: string
  icon: string
}

export interface WeatherData {
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  weather: WeatherItem[]
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  name: string
}

interface WeatherContextType {
  openWeatherData?: WeatherData
}

export const WeatherContext = createContext<WeatherContextType>({})

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [openWeatherData, setOpenWeatherData] = useState<WeatherData>()

  const getOpenWeatherData = useCallback(async (long: number, lat: number) => {
    const response = await fetch(`${API_URL}&lat=${lat}&lon=${long}`)
    return await response.json()
  }, [])

  useEffect(() => {
    let pollInterval: number
    let ignore = false

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        let long = coords.longitude
        let lat = coords.latitude

        getOpenWeatherData(long, lat).then((res) => {
          if (!ignore) {
            setOpenWeatherData(res)
            pollInterval = window.setInterval(
              () => getOpenWeatherData(long, lat).then((res) => console.log("res", res)),
              POLLING_INTERVAL,
            )
          }
        })
      },
      (error) => {
        console.log("Could not find location", error)
      },
    )

    return () => {
      ignore = true
      window.clearInterval(pollInterval)
    }
  }, [getOpenWeatherData])

  return (
    <WeatherContext.Provider
      value={{
        openWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
