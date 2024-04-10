// #if API==2.0
import SENSOR from '@zos/sensor'
import { UNSUPPORTED } from '../../utils/constants'

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
export class Time extends SENSOR.Time {
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
