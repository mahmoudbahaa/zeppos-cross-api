// #if API==1.0
import { UNSUPPORTED } from '../util/constants'
export const create = (id) => {throw new Error(UNSUPPORTED)}
export const id = {
  PLAYER: 0,
  RECORDER: 1
}
// #endif