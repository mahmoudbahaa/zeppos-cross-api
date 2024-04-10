// #if API==2.0
import { UNSUPPORTED } from '../../util/constants'

export class WorldClock {
  getCount () { throw new Error(UNSUPPORTED) }
  getInfo (index) { throw new Error(UNSUPPORTED) }
}
// #endif
