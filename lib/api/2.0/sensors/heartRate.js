// #if API==2.0
import SENSOR from '@zos/sensor'
import { UNSUPPORTED } from '../../_constants'

/**
   * @zh 心率传感器
   * @en HeartRate Sensor
   * @permissionCode data:user.hd.heart_rate
   * @example
   * ```js
   * import { HeartRate } from '@zos/sensor'
   *
   * const heartRate = new HeartRate()
   * const lastValue = heartRate.getLast()
   *
   * const callback = () => {
   *   console.log(heartRate.getCurrent())
   * }
   *
   * heartRate.onCurrentChange(callback)
   *
   * // When not needed for use
   * heartRate.offCurrentChange(callback)
   * ```
   */
export class HeartRate extends SENSOR.HeartRate {
  /**
     * @zh 获取心率日统计数据
     * @en Get daily heart rate statistics
     * @version 3.0
     */
  // @ts-ignore
  getDailySummary () {
    throw new Error(UNSUPPORTED)
  }

  /**
     * @zh 获取当前静息心率
     * @en Get current resting heart rate
     * @version 3.0
     */
  // @ts-ignore
  getResting () {
    throw new Error(UNSUPPORTED)
  }

  /**
     * @zh 获取房颤数据数组
     * @en Get Atrial Fibrillation Data Array
     * @version 3.0
     */
  // @ts-ignore
  getAFibRecord () {
    throw new Error(UNSUPPORTED)
  }

  /**
     * @zh 调用此方法后设备开始实时静息心率测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getResting` 方法可以获取静息心率测量值，如需停止静息心率测量，需要调用 `offRestingChange` 方法
     * @en After calling this method, the device starts real-time resting heart rate measurement and registers a callback function, which is called when there is a measurement result, in which the `getResting` method can be called to get the resting heart rate measurement value, and if you need to stop the resting heart rate measurement, you need to call the `offRestingChange` method
     * @version 3.0
     */
  onRestingChange (callback) {
    throw new Error(UNSUPPORTED)
  }

  /**
     * @zh 取消静息心率持续测量，并取消回调函数监听
     * @en Cancel continuous resting heart rate measurement and cancel callback function listeners
     * @version 3.0
     */
  offRestingChange (callback) {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
