// #if API==1.0
/* global hmApp */
export const SYSTEM_APP_STATUS = undefined
export const SYSTEM_APP_HR = undefined
export const SYSTEM_APP_SPORT = undefined
export const SYSTEM_APP_WEATHER = undefined
export const SYSTEM_APP_ALARM = undefined
export const SYSTEM_APP_CAMERA = undefined
export const SYSTEM_APP_MUSIC = undefined
export const SYSTEM_APP_STOPWATCH = undefined
export const SYSTEM_APP_COUNTDOWN = undefined
export const SYSTEM_APP_FINE_PHONE = undefined
export const SYSTEM_APP_CARD = undefined
export const SYSTEM_APP_ALIPAY = undefined
export const SYSTEM_APP_SETTING = undefined
export const SYSTEM_APP_SPORT_HISTORY = undefined
export const SYSTEM_APP_COMPASS = undefined
export const SYSTEM_APP_PAI = undefined
export const SYSTEM_APP_WORLD_CLOCK = undefined
export const SYSTEM_APP_PRESSURE = undefined
export const SYSTEM_APP_MENSTRUAL = undefined
export const SYSTEM_APP_SPORT_STATUS = undefined
export const SYSTEM_APP_CALENDAR = undefined
export const SYSTEM_APP_SLEEP = undefined
export const SYSTEM_APP_SPO2 = undefined
export const SYSTEM_APP_PHONE = undefined
export const SYSTEM_APP_NETEASE_MUSIC = undefined
export const SYSTEM_APP_WEPAY = undefined
export const SYSTEM_APP_BREATH = undefined
export const SYSTEM_APP_POMODORO = undefined
export const SYSTEM_APP_THERMOMETER = undefined
export const SYSTEM_APP_TODO_LIST = undefined
export const SYSTEM_APP_ALTIMETER = undefined
export const SYSTEM_APP_VOICE_MEMO = undefined
export const SYSTEM_APP_SUN_AND_MOON = undefined
export const SYSTEM_APP_MEASUREMENT = undefined
export const SYSTEM_APP_ZEPP_COACH = undefined
export const SYSTEM_APP_CLUB_CARD = undefined
export const SYSTEM_APP_BODY_COMPOSITION = undefined
export const SYSTEM_APP_READINESS = undefined
export const checkSystemApp = () => { /* NOOP */ }
export const launchApp = (option) => hmApp.startApp({ appid: option.appId, url: option.url, native: option.native, param: option.params })
export const push = (option) => hmApp.gotoPage({ url: option.url, param: option.params })
export const replace = (option) => hmApp.reloadPage({ url: option.url, param: option.params })
export const home = () => hmApp.gotoHome()
export const back = () => hmApp.goBack()
export const exit = () => hmApp.exit()
export const setLaunchAppTimeout = (option) => hmApp.alarmNew({ appId: option.appId, url: option.url, param: option.params, date: option.utc })
export const clearLaunchAppTimeout = (option) => typeof option === 'number' ? hmApp.alarmCancel(option) : hmApp.alarmCancel(option.timeoutId)
// #endif
