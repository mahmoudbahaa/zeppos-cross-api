// #if API==1.0
/* global px, DeviceRuntimeCore */
import { EventBus } from '../zeppos/event'
// #endif
// #if API!=1.0
import * as UTILS from '@zos/utils'
export default UTILS
// #endif
// #if API==1.0
const _UTILS = {}
_UTILS.px = px
// @ts-ignore
_UTILS.log = DeviceRuntimeCore.HmLogger
_UTILS.EventBus = EventBus
_UTILS.assets = (/** @type {string} */ basePath) => (/** @type {string} */ path, /** @type {boolean} */ isRtl = false) => {
  if (!isRtl) return basePath + '/' + path

  const i = path.lastIndexOf('.')
  if (i < 0) return basePath + '/' + path + '@rtl'

  return basePath + '/' + path.substring(0, i) + '@rtl' + path.substring(i)
}
// #put "const UTILS = _UTILS"
// #put "export default UTILS"
// #endif
