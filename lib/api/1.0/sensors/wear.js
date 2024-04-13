/* global hmSensor */
/**
   * @zh 佩戴状态传感器
   * @en Wearing status sensor
   * @example
   * ```js
   * import { Wear } from '@zos/sensor'
   *
   * const wear = new Wear()
   * const status = wear.getStatus()
   * const callback = () => {
   *   console.log(wear.getStatus())
   * }
   *
   * wear.onChange(callback)
   *
   * // When not needed for use
   * wear.offChange(callback)
   * ```
   */
export class Wear {
  #wear
  constructor () {
    this.#wear = hmSensor.createSensor(hmSensor.id.WEAR)
  }

  /**
     * @zh 获取当前设备佩戴状态，`0`：未佩戴、`1`：佩戴、`2`：运动中、`3`：不确定
     * @en Get the current device wearing status, `0`: not wearing, `1`: wearing, `2`: in motion, `3`: not sure
     */
  getStatus () {
    return this.#wear.current
  }

  /**
     * @zh 注册设备佩戴状态变化事件监听回调函数
     * @en Register the device wear status change event listening callback function
     */
  onChange (callback) {
    this.#wear.addEventListener(hmSensor.event.CHANGE, callback)
  }

  /**
     * @zh 取消设备佩戴状态变化事件监听回调函数
     * @en Cancel the device wear status change event listening callback function
     */
  offChange (callback) {
    this.#wear.removeEventListener(hmSensor.event.CHANGE, callback)
  }
}
