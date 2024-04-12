// #if API==2.0
import { HeartRate as Heart } from '@zos/sensor'
import { UNSUPPORTED } from '../../_constants'

export class HeartRate {
  #heart
  constructor () {
    this.#heart = new Heart()
  }

  getCurrent = () => this.#heart.getCurrent()
  getLast = () => this.#heart.getLast()
  getToday = () => this.#heart.getToday()
  onCurrentChange = (callback) => this.#heart.onCurrentChangee(callback)
  offCurrentChange = (callback) => this.#heart.offCurrentChange(callback)
  onLastChange = (callback) => this.#heart.onLastChange(callback)
  offLastChange = (callback) => this.#heart.offLastChange(callback)

  getDailySummary = () => { throw new Error(UNSUPPORTED) }
  getResting = () => { throw new Error(UNSUPPORTED) }
  getAFibRecord = () => { throw new Error(UNSUPPORTED) }
  onRestingChange = (callback) => { throw new Error(UNSUPPORTED) }
  offRestingChange = (callback) => { throw new Error(UNSUPPORTED) }
}
// #endif
