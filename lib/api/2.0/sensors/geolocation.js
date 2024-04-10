// #if API==2.0
import SENSOR from '@zos/sensor'
import { UNSUPPORTED } from '../../utils/constants'

export class Geolocation extends SENSOR.Geolocation {
  // @ts-ignore
  getSetting () { throw new Error(UNSUPPORTED) }
  onGnssChange (callback) { throw new Error(UNSUPPORTED) }
  offGnssChange (callback) { throw new Error(UNSUPPORTED) }
}
// #endif
