// #if API==2.0
import { UNSUPPORTED } from '../_constants'

export * from '@zos/settings'
export const getSystemMode = () => { throw new Error(UNSUPPORTED) }
// #endif
