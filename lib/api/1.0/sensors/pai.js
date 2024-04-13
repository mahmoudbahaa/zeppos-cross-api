/* global hmSensor */
/**
   * @zh PAI 传感器
   * @en PAI Sensor
   * @permissionCode data:user.hd.pai
   * @example
   * ```js
   * import { Pai } from '@zos/sensor'
   *
   * const pai = new Pai()
   * const total = pai.getTotal()
   * const today = pai.getToday()
   * const lastWeek = pai.getLastWeek()
   * ```
   */
export class Pai {
  #pai
  constructor () {
    this.#pai = hmSensor.createSensor(hmSensor.id.PAI)
  }

  /**
     * @zh 获取当前累计的 PAI 值
     * @en Get the current cumulative PAI value
     */
  getTotal () {
    return this.#pai.totalpai
  }

  /**
     * @zh 获取今日获取的 PAI 值
     * @en Get the PAI values obtained today
     */
  getToday () {
    return this.#pai.dailypai
  }

  /**
     * @zh 获取一周的 PAI 数据，返回值为长度为 `7` 的数组，数组索引 `0` 的位置为今天的 PAI 值，索引 `1` 的位置为前 1 天的 PAI 值，以此类推
     * @en Get the PAI data for a week, the return value is an array of length `7`, the position of index `0` is the PAI value of today, the position of index `1` is the PAI value of the previous day, and so on
     */
  getLastWeek () {
    return [this.#pai.prepai6, this.#pai.prepai5, this.#pai.prepai4, this.#pai.prepai3, this.#pai.prepai2, this.#pai.prepai1, this.#pai.prepai0]
  }
}
