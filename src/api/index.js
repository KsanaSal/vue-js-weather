import axios from 'axios'

const API_KEY = 'bc30c3cfc81935a26e8fa51ad2166ffe'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export function getWeatherData(city) {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}
