/* global hmSensor */
/**
   * @zh 天气预报传感器
   * @en Weather Forecasts sensor
   * @deprecated https://github.com/orgs/zepp-health/discussions/83
   * @example
   * ```js
   * import { Weather } from '@zos/sensor'
   *
   * const weather = new Weather()
   * const { forecastData, tideData, cityName } = weather.getForecast()
   *
   * console.log(cityName)
   *
   * for (let i = 0; i < forecastData.count; i++) {
   *   const element = forecastData.data[i]
   *   console.log('Index' + element.index)
   *   console.log('Highest temperature' + element.high)
   *   console.log('Lowest temperature' + element.low)
   * }
   *
   * for (let i = 0; i < tideData.count; i++) {
   *   const element = tideData.data[i]
   *   console.log('Sunrise' + element.sunrise.hour + element.sunrise.minute)
   *   console.log('Sunset' + element.sunset.hour + element.sunset.minute)
   * }
   * ```
   */
export class Weather {
  #weather

  constructor () {
    this.#weather = hmSensor.createSensor(hmSensor.id.WEATHER)
  }

  /**
   * @zh 获取天气预报数据
   * @en Get weather forecast data
   */
  getForecastWeather () {
    return this.#weather.getForecastWeather()
  }
}
