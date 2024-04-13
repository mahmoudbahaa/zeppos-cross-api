// #if API==2.0
import { UNSUPPORTED } from '../_constants'
export const exit = () => { throw new Error(UNSUPPORTED) }
export const getAllAppServices = () => { throw new Error(UNSUPPORTED) }
export const start = (option) => { throw new Error(UNSUPPORTED) }
export const stop = (option) => { throw new Error(UNSUPPORTED) }
// #endif
