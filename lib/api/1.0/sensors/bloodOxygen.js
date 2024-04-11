// #if API==1.0
/* global hmSensor */

import { UNSUPPORTED } from '../../_constants'

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
export class BloodOxygen {
  #spo2
  constructor () {
    this.#spo2 = hmSensor.createSensor(hmSensor.id.SPO2)
  }

  /**
   * @zh 获取当前测量的血氧结果
   * @en Get the current measured blood oxygen result
   */
  getCurrent () {
    return { value: this.#spo2.current, time: this.#spo2.time, retCode: this.#spo2.time.retcode }
  }

  /**
   * @zh 返回过去 24 小时平均血氧数据，数组长度为 24
   * @en Returns the average blood sample data for the past 24 hours, with an array length of 24
   */
  getLastDay () {
    return this.#spo2.hourAvgofDay
  }

  /**
   * @zh 开始血氧测量，建议在调用 `start` 方法前，调用 `stop` 来停止上一次测量
   * @en Start blood oxygen measurement, it is recommended to call `stop` to stop the last measurement before calling the `start` method
   * @version 2.1
   */
  start () {
    return this.#spo2.start()
  }

  /**
   * @zh 停止血氧测量
   * @en Cancel blood oxygen measurement
   * @version 2.1
   */
  stop () {
    return this.#spo2.stop()
  }

  /**
   * @zh 注册血氧测量值变化事件监听回调函数
   * @en Register a callback function to listen for blood oxygen measurement change events
   */
  onChange (callback) {
    this.#spo2.addEventListener(hmSensor.event.CHANGE, callback)
  }

  /**
   * @zh 取消血氧测量值变化事件监听回调函数
   * @en Cancel a callback function to listen for blood oxygen measurement change events
   */
  offChange (callback) {
    this.#spo2.removeEventListener(hmSensor.event.CHANGE, callback)
  }

  /**
   * @zh 获取最近 `hour` 个小时的血氧测量数据，结果按照时间顺序排序
   * @en Obtain blood oxygen measurements for the last `hour` and sort the results in chronological order
   * @version 3.0
   */
  getLastFewHour (hour) {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
