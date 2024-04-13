// #if API==1.0
// #put "export * from './1.0/app-service'"
// #endif
// #if API==2.0
// #put "export * from './2.0/app-service'"
// #endif
// #if API!=2.0 && API!=1.0
export * from '@zos/app-service'
export { default } from '@zos/app-service'
// #endif
// #if 1==2
export const done = true
// #endif
