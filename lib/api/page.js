// #if API==1.0
// #put "export * from './1.0/page'"
// #endif
// #if API!=1.0
export * from '@zos/page'
// #endif
// #if 1==2
export const done = true
// #endif
