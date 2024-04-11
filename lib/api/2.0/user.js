// #if API==2.0
import { UNSUPPORTED } from '../_constants'

export * from '@zos/user'
export const addHealthData = () => { throw new Error(UNSUPPORTED) }
// #endif
