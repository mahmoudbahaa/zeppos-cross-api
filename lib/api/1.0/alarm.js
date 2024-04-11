// #if API==1.0
/* global hmApp */
import { getPackageInfo } from '@zos/app'
import { UNSUPPORTED } from '../_constants'
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
  const alarm = hmApp.alarmNew({
    appId: option.appid,
    url: option.file,
    date: option.time,
    delay: option.delay
  })
  currentAlarms.push(alarm)
  return alarm
}
export const cancel = (alarmId) => {
  const i = currentAlarms.indexOf(alarmId)
  if (i > -1) currentAlarms.splice(i, 1)
  return hmApp.alarmCancel(alarmId)
}
// #endif
