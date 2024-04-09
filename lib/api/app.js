// #if API==1.0
/* global hmApp, hmSetting */
// #endif
// #if API!=1.0 &&  API!=2.0
import * as APP from '@zos/app'
// #endif
// #if API==2.0
// #put "import * as ORG_APP from '@zos/app'"
// #endif
// #if API==1.0 || API==2.0
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0 && API!=2.0
export default APP
// #endif
// #if API==1.0 || API==2.0
const validPermissions = [
  // data:os
  'data:os.device.info',
  // device:os
  'device:os.accelerometer', 'device:os.alarm', 'device:os.barometer', 'device:os.bg_service',
  'device:os.compass', 'device:os.geolocation', 'device:os.gyroscope', 'device:os.notification',
  // data:user
  'data:user.info',
  // data:user.hd
  'data:user.hd.spo2', 'data:user.hd.calorie', 'data:user.hd.distance', 'data:user.hd.fat_burning',
  'data:user.hd.heart_rate', 'data:user.hd.pai', 'data:user.hd.sleep', 'data:user.hd.stand',
  'data:user.hd.step', 'data:user.hd.stress', 'data:user.hd.workout'
]
// #endif
// #if API==1.0
const _APP = {}
// #endif
// #if API==2.0
// #put "const _APP = { ...ORG_APP }"
// #endif
// #if API==1.0
_APP.SCENE_APP = hmSetting.screen_type.APP
_APP.SCENE_WATCHFACE = hmSetting.screen_type.WATCHFACE
_APP.SCENE_SETTINGS = hmSetting.screen_type.SETTINGS
_APP.SCENE_AOD = hmSetting.screen_type.AOD
_APP.getPackageInfo = () => hmApp.packageInfo()
_APP.getScene = () => hmSetting.getScreenType()
// #endif
// #if API==1.0 || API==2.0
_APP.queryPermission = (option) => {
  const result = []
  // #if API==1.0
  // #put "const permissions = hmApp.packageInfo().permissions"
  // #else
  const permissions = APP.getPackageInfo().permissions
  // #endif
  if (!option.permissions) return []
  option.permissions.forEach(permission => {
    if (permissions.indexOf(permission) > -1) {
      result.push(2)
    } else if (validPermissions.indexOf(permission) > -1) {
      result.push(0)
    } else {
      // Can stil be valid. list above can be non-complete
      // Better not to depend on 1 to be unknown
      result.push(1)
    }
  })

  return result
}
_APP.requestPermission = (option) => {
  // queryPermission(option).forEach((result) => {
  //   if (result !== 2) return 1
  // })

  // return 2
  return 1
}
_APP.emitCustomSystemEvent = (Option) => { throw new Error(UNSUPPORTED) }
// #endif
// #if API==1.0 || API==2.0
// #put "const APP = _APP"
// #put "export default APP"
// #endif
