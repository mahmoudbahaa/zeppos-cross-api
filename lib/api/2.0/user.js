// #if API==2.0
import { UNSUPPORTED } from './util/constants'

export * from '@zos/user'
export const addHealthData = () => { throw new Error(UNSUPPORTED) }
// #endif
