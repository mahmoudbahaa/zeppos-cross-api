// #if API==2.0
import { UNSUPPORTED } from '../../util/constants'

export class Screen {
  getStatus () { throw new Error(UNSUPPORTED) }
  getAodMode () { throw new Error(UNSUPPORTED) }
  onChange (callback) { throw new Error(UNSUPPORTED) }
  offChange (callback) { throw new Error(UNSUPPORTED) }
}
// #endif
