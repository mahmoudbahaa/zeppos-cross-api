// #if API==2.0
import SENSOR from '@zos/sensor'
import { UNSUPPORTED } from '../../util/constants'

/**
   * @zh 血氧传感器
   * @en Blood oxygen Sensor
   * @permissionCode data:user.hd.spo2
   * @example
   * ```js
   * import { BloodOxygen } from '@zos/sensor'
   *
   * const bloodOxygen = new BloodOxygen()
   * const { value } = bloodOxygen.getCurrent()
   * const lastDay = bloodOxygen.getLastDay()
   * const callback = () => {
   *   console.log(bloodOxygen.getCurrent())
   * }
   *
   * bloodOxygen.onChange(callback)
   * bloodOxygen.stop()
   * bloodOxygen.start()
   * // When not needed for use
   * bloodOxygen.offChange(callback)
   * ```
   */
export class BloodOxygen extends SENSOR.BloodOxygen {
  /**
   * @zh 获取最近 `hour` 个小时的血氧测量数据，结果按照时间顺序排序
   * @en Obtain blood oxygen measurements for the last `hour` and sort the results in chronological order
   * @version 3.0
   */
  // @ts-ignore
  getLastFewHour (hour) {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
