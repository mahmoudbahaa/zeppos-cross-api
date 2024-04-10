// #if API==2.0
import SENSOR from '@zos/sensor'
import { UNSUPPORTED } from '../../utils/constants'
import { Time } from '../1.0/time'

/**
   * @zh 睡眠传感器
   * @en Sleep Sensor
   * @permissionCode data:user.hd.sleep
   * @example
   * ```js
   * import { Sleep } from '@zos/sensor'
   *
   * const sleep = new Sleep()
   * const { score } = sleep.getInfo()
   * const sleepStageConstants = sleep.getStageConstantObj()
   * const stage = sleep.getStage()
   *
   * stage.forEach((i) => {
   *   const { model } = i
   *
   *   if (model === sleepStageConstants.WAKE_STAGE) {
   *     console.log('This stage is awake stage')
   *   }
   * })
   * ```
   */
export class Sleep extends SENSOR.Sleep {
  /**
   * @zh 获取当前睡眠状态，`0` 醒着，`1` 正在睡眠
   * @en Get the current sleep state, 0 'awake, 1' sleeping
   * @version 3.0
   */
  getSleepingStatus () {
    const mins = Math.floor(new Time().getTime() / (60 * 1000)) % (24 * 60)
    const info = this.getInfo()
    return (mins > info.startTime && mins < info.endTime) ? 1 : 0
  }

  /**
   * @zh 获取零星小睡数据
   * @en Get nap data
   * @version 3.0
   */
  // @ts-ignore
  getNap () {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
