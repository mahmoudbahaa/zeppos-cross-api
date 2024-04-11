// #if API==1.0
import { UNSUPPORTED } from '../../_constants'

export class Geolocation {
  start () { throw new Error(UNSUPPORTED) }
  stop () { throw new Error(UNSUPPORTED) }
  getStatus () { throw new Error(UNSUPPORTED) }
  getLatitude (option) { throw new Error(UNSUPPORTED) }
  getLongitude (option) { throw new Error(UNSUPPORTED) }
  getSetting () { throw new Error(UNSUPPORTED) }
  onChange (callback) { throw new Error(UNSUPPORTED) }
  offChange (callback) { throw new Error(UNSUPPORTED) }
  onGnssChange (callback) { throw new Error(UNSUPPORTED) }
  offGnssChange (callback) { throw new Error(UNSUPPORTED) }
}
// #endif
