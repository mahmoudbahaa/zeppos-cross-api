// #if API==1.0
// #put "export * from './1.0/fs'"
// #endif
// #if API!=1.0
export * from '@zos/fs'
// #endif
// #if 1==2
export const done = true
// #endif
