// #if API==1.0
import { UNSUPPORTED } from '../../_constants'

export class Barometer {
  getAirPressure () { throw new Error(UNSUPPORTED) }
  getAltitude () { throw new Error(UNSUPPORTED) }
  onChange (callback) { throw new Error(UNSUPPORTED) }
  offChange (callback) { throw new Error(UNSUPPORTED) }
}
// #endif
