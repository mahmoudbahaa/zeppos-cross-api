// #if API==2.0
import { SLEEP as SLP, Time } from '@zos/sensor'
import { UNSUPPORTED } from '../../_constants'

export class Sleep {
  #sleep
  constructor () {
    this.#sleep = new SLP()
  }

  updateInfo = () => this.#sleep.updateInfo()
  getInfo = () => this.#sleep.getInfo()
  getStageConstantObj = () => this.#sleep.getStageConstantObj()
  getStage = () => this.#sleep.getStage()
  getSleepingStatus () {
    const mins = Math.floor(new Time().getTime() / (60 * 1000)) % (24 * 60)
    const info = this.getInfo()
    return (mins > info.startTime && mins < info.endTime) ? 1 : 0
  }

  getNap () {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
