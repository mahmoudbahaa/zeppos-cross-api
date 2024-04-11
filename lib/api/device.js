// #if API==1.0
// #put "export * from './1.0/device'"
// #endif
// #if API!=1.0
export * from '@zos/device'
// #endif
// #if 1==2
export const done = true
// #endif
