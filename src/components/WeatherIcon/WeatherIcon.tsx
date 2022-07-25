import { FC } from "react"
import { Icon } from "./WeatherIcon.styled"

interface WeatherIconProps {
  icon: string
  alt?: string
}

const WeatherIcon: FC<WeatherIconProps> = ({ icon, alt }) => {
  return <Icon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={alt} />
}

export default WeatherIcon
