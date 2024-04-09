// #if API==1.0
/* global hmSetting */
// #endif
// #if API!=1.0
import * as DEVICE from '@zos/device'
export default DEVICE
// #endif
// #if API==1.0
const _DEVICE = {}
// #endif
// #if API==1.0
_DEVICE.SCREEN_SHAPE_SQUARE = 0
_DEVICE.SCREEN_SHAPE_ROUND = 1
_DEVICE.getDiskInfo = () => hmSetting.getDiskInfo()
_DEVICE.getDeviceInfo = () => hmSetting.getDeviceInfo()
// #put "const DEVICE = _DEVICE"
// #put "export default DEVICE"
// #endif
