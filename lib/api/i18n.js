// #if API==1.0
// #put "export * from './1.0/i18n'"
// #endif
// #if API!=1.0
export * from '@zos/i18n'
// #endif
// #if 1==2
export const done = true
// #endif
