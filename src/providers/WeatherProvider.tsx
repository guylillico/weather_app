import { createContext, useState, ReactNode } from "react"
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
    feels_like?: number
    temp_min?: number
    temp_max?: number
    pressure?: number
    humidity?: number
  }
  wind?: {
    speed: number
    deg: number
  }
  clouds?: {
    all: number
  }
  weather?: WeatherItem[]
  sys?: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  name?: string
}

interface WeatherContextType {
  openWeatherData?: WeatherData
}

export const WeatherContext = createContext<WeatherContextType>({})

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [openWeatherData, setOpenWeatherData] = useState<WeatherData>({
    main: {
      temp: 20,
    },
  })

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
