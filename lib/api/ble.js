// #if API==1.0
// #put "export * from './1.0/ble'"
// #endif
// #if API==2.0
// #put "export * from './2.0/ble'"
// #endif
// #if API!=2.0 && API!=1.0
export * from '@zos/ble'
// #endif
// #if 1==2
export const done = true
// #endif
