// #if API==2.0
import { UNSUPPORTED } from '../../_constants'

export class Workout {
  getStatus () { throw new Error(UNSUPPORTED) }
  getHistory () { throw new Error(UNSUPPORTED) }
}
// #endif
