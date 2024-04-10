// #if API==1.0
// #put "export * from './1.0/interaction'"
// #endif
// #if API!=1.0
export * from '@zos/interaction'
// #endif
// #if 1==2
export const done = true
// #endif
