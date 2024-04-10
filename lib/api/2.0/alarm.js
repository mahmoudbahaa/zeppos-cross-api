// #if API==2.0
import { getPackageInfo } from '@zos/app'
import { clearLaunchAppTimeout, setLaunchAppTimeout } from '@zos/router'
import { Time } from '@zos/sensor'
import { UNSUPPORTED } from '../fs/constants'
const currentAlarms = []
export const REPEAT_ONCE = 0
export const REPEAT_MINUTE = 1
export const REPEAT_HOUR = 2
export const REPEAT_DAY = 3
export const REPEAT_WEEK = 4
export const REPEAT_MONTH = 5
export const WEEK_MON = 0
export const WEEK_TUE = 1
export const WEEK_WED = 2
export const WEEK_THU = 3
export const WEEK_FRI = 4
export const WEEK_SAT = 5
export const WEEK_SUN = 6
export const getAllAlarms = () => { return currentAlarms }
export const set = (option) => {
  if (option.repeat_type) throw new Error(UNSUPPORTED)
  if (!option.appid) option.appid = getPackageInfo().appId
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
export const cancel = (alarmId) => {
  const i = currentAlarms.indexOf(alarmId)
  if (i > -1) currentAlarms.splice(i, 1)
  return clearLaunchAppTimeout(alarmId)
}
// #endif
