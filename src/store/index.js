import { defineStore } from 'pinia'
import { getWeatherData } from '@/api'

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    city: '',
    weatherData: null
  }),
  actions: {
    async getWeatherData(city) {
      const response = await getWeatherData(city)
      this.weatherData = response.data
      console.log('weatherData: ', this.weatherData)
      this.city = city
    }
  }
})
