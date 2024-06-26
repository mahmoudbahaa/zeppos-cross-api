/* global hmSensor */
/**
   * @zh 世界时钟传感器
   * @en World Clock Sensor
   * @version 3.0
   * @example
   * ```js
   * import { WorldClock } from '@zos/sensor'
   *
   * const worldClock = new WorldClock()
   * const worldClockCount = worldClock.getCount()
   *
   * for (let i = 0; i < worldClockCount; i++) {
   *   const worldClockInfo = worldClock.getInfo(i)
   *   console.log(worldClockInfo.city)
   *   console.log(worldClockInfo.cityCode)
   *   console.log(worldClockInfo.hour)
   *   console.log(worldClockInfo.minute)
   *   console.log(worldClockInfo.timeZoneHour)
   *   console.log(worldClockInfo.timeZoneMinute)
   * }
   *
   * // When not needed for use
   * worldClock.destroy()
   * ```
   */
export class WorldClock {
  constructor() {
    this._worldClock = hmSensor.createSensor(hmSensor.id.WORLD_CLOCK);
  }

  /**
   * @zh 获取配置的世界时钟数量
   * @en Get the number of configured world clocks
   */
  getCount() {
    this._worldClock.init();
    const result = this._worldClock.getWorldClockCount();
    this._worldClock.uninit();
    return result;
  }

  /**
   * @zh 根据索引获取配置的世界时钟信息
   * @en Get the configured world clock information according to the index
   */
  getInfo(index) {
    this._worldClock.init();
    const result = this._worldClock.getWorldClockCountInfo(index);
    this._worldClock.uninit();
    return result;
  }
}
