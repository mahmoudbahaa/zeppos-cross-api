// #if API==1.0
/* global hmApp */
// #endif
// #if API==2.0
import { clearLaunchAppTimeout, setLaunchAppTimeout } from '@zos/router'
// #endif
// #if API!=1.0 && API!=2.0
import * as Alarm from '@zos/alarm'
// #else
import APP from './app'
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API==2.0
import { Time } from '@zos/sensor'
// #endif
// #if API!=1.0 && API!=2.0
export default Alarm
// #endif
// #if API==1.0 || API==2.0
const currentAlarms = []
const _Alarm = {} 
_Alarm.REPEAT_ONCE = 0
_Alarm.REPEAT_MINUTE = 1
_Alarm.REPEAT_HOUR = 2
_Alarm.REPEAT_DAY = 3
_Alarm.REPEAT_WEEK = 4
_Alarm.REPEAT_MONTH = 5
_Alarm.WEEK_MON = 0
_Alarm.WEEK_TUE = 1
_Alarm.WEEK_WED = 2
_Alarm.WEEK_THU = 3
_Alarm.WEEK_FRI = 4
_Alarm.WEEK_SAT = 5
_Alarm.WEEK_SUN = 6
_Alarm.getAllAlarms = () => { return currentAlarms }
// #endif
// #if API==1.0  
_Alarm.set = (option) => {
  if (option.repeat_type) throw new Error(UNSUPPORTED)
  if (!option.appid) option.appid = APP.getPackageInfo().appId
  if (option.time) option.delay = undefined
  const alarm = hmApp.alarmNew({
    appId: option.appid, 
    url: option.file,
    date: option.time,
    delay: option.delay
  })
  currentAlarms.push(alarm)
  return alarm
}
_Alarm.cancel = (alarmId) => {
  const i = currentAlarms.indexOf(alarmId)
  if (i > -1) currentAlarms.splice(i, 1)
  return hmApp.alarmCancel(alarmId)
}
// #endif
// #if API==2.0
_Alarm.set = (option) => {
  if (option.repeat_type) throw new Error(UNSUPPORTED)
  if (!option.appid) option.appid = APP.getPackageInfo().appId
  if (option.time) option.delay = undefined
  if (option.delay) option.time = new Time().getTime() + option.delay
  const alarm = setLaunchAppTimeout({
    appId: option.appid,
    url: option.file,
    utc: option.time
  })
  currentAlarms.push(alarm)
  return alarm
}
_Alarm.cancel = (alarmId) => {
  const i = currentAlarms.indexOf(alarmId)
  if (i > -1) currentAlarms.splice(i, 1)
  return clearLaunchAppTimeout(alarmId)
}
// #endif
// #if API==1.0 || API==2.0
// #put "const Alarm = _Alarm"
// #put "export default Alarm"
// #endif
