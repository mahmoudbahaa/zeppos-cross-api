// #if API==2.0
import { Geolocation as Geo } from '@zos/sensor'
import { UNSUPPORTED } from '../../_constants'

export class Geolocation {
  #geo
  constructor () {
    this.#geo = new Geo()
  }

  start = () => this.#geo.start()
  stop = () => this.#geo.stop()
  getStatus = () => this.#geo.getStatus()
  getLatitude = (option) => this.#geo.getLatitude(option)
  getLongitude = (option) => this.#geo.getLongitude(option)
  onChange = (callback) => this.#geo.onChange(callback)
  offChange = (callback) => this.#geo.offChange(callback)

  getSetting = () => { throw new Error(UNSUPPORTED) }
  onGnssChange = (callback) => { throw new Error(UNSUPPORTED) }
  offGnssChange = (callback) => { throw new Error(UNSUPPORTED) }
}
// #endif
