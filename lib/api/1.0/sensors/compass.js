// #if API==1.0
import { UNSUPPORTED } from '../../_constants'

export class Compass {
  start () { throw new Error(UNSUPPORTED) }
  stop () { throw new Error(UNSUPPORTED) }
  getStatus () { throw new Error(UNSUPPORTED) }
  getDirection () { throw new Error(UNSUPPORTED) }
  getDirectionAngle () { throw new Error(UNSUPPORTED) }
  onChange (callback) { throw new Error(UNSUPPORTED) }
  offChange (callback) { throw new Error(UNSUPPORTED) }
}
// #endif
