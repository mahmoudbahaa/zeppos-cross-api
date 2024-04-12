// #if API==2.0
import { Time as Tme } from '@zos/sensor'
import { UNSUPPORTED } from '../../_constants'

/**
   * @zh 时间/日期传感器
   * @en Time/Date Sensor
   * @example
   * ```js
   * import { Time } from '@zos/sensor'
   *
   * const time = new Time()
   * const currentTime = time.getTime()
   * ```
   */
export class Time {
  #time
  constructor () {
    this.#time = new Tme()
  }

  /**
     * @zh 获取 UTC 时间戳，单位毫秒
     * @en Gets the UTC timestamp in milliseconds
     */
  getTime () {
    return this.#time.getTime()
  }

  /**
     * @zh 获取当前日期的年份
     * @en Get the year of the current date
     */
  getFullYear () {
    return this.#time.getFullYear()
  }

  /**
     * @zh 获取当前日期的月份，范围 1 - 12，返回 `1` 代表 1 月
     * @en Get the month of the current date, range 1 - 12, return `1` for January
     */
  getMonth () {
    return this.#time.getMonth()
  }

  /**
     * @zh 获取当前日期的天数，即一个月中的哪一天，范围 1 - 31
     * @en Get the number of days of the current date, i.e. the day of the month, in the range 1 - 31
     */

  getDate () {
    return this.#time.getDate()
  }

  /**
     * @zh 获取当前时间的小时数
     * @en Get the number of hours of the current time
     */
  getHours () {
    return this.#time.getHours()
  }

  /**
     * @zh 获取当前时间的分钟数
     * @en Get the number of minutes of the current time
     */
  getMinutes () {
    return this.#time.getMinutes()
  }

  /**
     * @zh 获取当前时间的秒数
     * @en Get the number of seconds of the current time
     */
  getSeconds () {
    return this.#time.getSeconds()
  }

  /**
     * @zh 获取当前时间对应一周中的第几天，范围 1 - 7，返回 `1` 代表星期一
     * @en Get the current time corresponding to the day of the week, range 1 - 7, return `1` for Monday
     */
  getDay () {
    return this.#time.getDay()
  }

  /**
     * @zh 获取当前系统时间格式，12 小时/24 小时，值参考小时格式常量
     * @en Get the current system time format, 12-hour format or 24-hour format，value reference hour format constants
     * @constants hour_format
     * @version 2.1
     */
  getHourFormat () {
    return this.#time.getHourFormat()
  }

  /**
     * @zh 获取当前时间格式（12 小时/24 小时）下的小时数
     * @en Get the number of hours in the current time format (12-hour format or 24-hour format)
     * @version 2.1
     */
  getFormatHour () {
    return this.#time.getFormatHour()
  }

  /**
     * @zh 注册每分钟结束事件监听回调函数
     * @en Register end-of-minute event listener callback function
     * @version 2.1
     */
  onPerMinute (callback) {
    this.#time.onPerMinute(callback)
  }

  /**
     * @zh 注册每天结束事件监听回调函数
     * @en Register the end-of-day event listener callback function
     * @version 2.1
     */
  onPerDay (callback) {
    this.#time.onPerDay(callback)
  }

  /**
     * @zh 获取公历节日，如果没有节日，则返回字符串 `'INVALID'`
     * @en Get gregorian holidays, or return the string `'INVALID'` if there is no holiday
     */
  getFestival () {
    return this.#time.getFestival()
  }

  /**
     * @zh 获取中国农历年份，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar year, only works when system language is set to Chinese
     */
  getLunarYear () {
    return this.#time.getLunarYear()
  }

  /**
     * @zh 获取中国农历月份，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar month, only works when system language is set to Chinese
     */
  getLunarMonth () {
    return this.#time.getLunarMonth()
  }

  /**
     * @zh 获取中国农历日期，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar day, only works when system language is set to Chinese
     */
  getLunarDay () {
    return this.#time.getLunarDay()
  }

  /**
     * @zh 获取中国农历节日，仅在系统语言设置为中文时生效，如果没有节日，则返回字符串 `'INVALID'`
     * @en Get Chinese lunar holidays, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no holiday
     */
  getLunarFestival () {
    return this.#time.getLunarFestival()
  }

  /**
     * @zh 获取中国农历节气，仅在系统语言设置为中文时生效，如果没有节气，则返回字符串 `'INVALID'`
     * @en Get Traditional Chinese Solar Terms, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no Solar Term
     */
  getSolarTerm () {
    return this.#time.getSolarTerm()
  }

  /**
     * @zh 获取当天显示的节日字符串，仅在系统语言设置为中文时生效，优先级依次是公历节日、中国农历节日、中国农历节气，
     * @en Get the holiday strings displayed on that day, the priority is Gregorian holidays, Chinese lunar holidays, Chinese lunar festivals in that order, only when the system language is set to Chinese
     */
  getShowFestival () {
    return this.#time.getShowFestival()
  }

  /**
     * @zh 获取中国农历当前月的月历信息，仅在系统语言设置为中文时生效
     * @en Get the monthly calendar information of the current month of Chinese lunar calendar, only works when the system language is set to Chinese
     */
  getLunarMonthCalendar () {
    return this.#time.getLunarMonthCalendar()
  }

  /**
     * @zh 注册日出事件监听回调函数，仅当设备天气信息时才会生效
     * @en Register the Sunrise event listener callback function to take effect only when the device weather information
     * @version 3.0
     */
  onSunrise (callback) {
    throw new Error(UNSUPPORTED)
  }

  /**
     * @zh 注册日落事件监听回调函数，仅当设备天气信息时才会生效
     * @en Register the Sunset event listener callback function to take effect only when the device weather information
     * @version 3.0
     */
  onSunset (callback) {
    throw new Error(UNSUPPORTED)
  }

  /**
     * @zh 注册手机修改时间事件监听回调函数
     * @en Register the phone modify time event listening callback function
     * @version 3.0
     */
  onPhoneTimeSetting (callback) {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
