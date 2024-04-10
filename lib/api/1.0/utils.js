// #if API==1.0
/* global DeviceRuntimeCore */
export { EventBus } from '../zeppos/event'
// eslint-disable-next-line no-useless-call
export const px = (function (name) { return this[name] }.call(null, 'px'))
// @ts-ignore
export const log = DeviceRuntimeCore.HmLogger
export const assets = (/** @type {string} */ basePath) => (/** @type {string} */ path, /** @type {boolean} */ isRtl = false) => {
  if (!isRtl) return basePath + '/' + path

  const i = path.lastIndexOf('.')
  if (i < 0) return basePath + '/' + path + '@rtl'

  return basePath + '/' + path.substring(0, i) + '@rtl' + path.substring(i)
}
// #endif
