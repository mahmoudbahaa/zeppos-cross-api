// #if API==1.0
/* global hmApp */
// #endif
// #if API!=1.0
import * as ROUTER from '@zos/router'
export default ROUTER
// #endif
// #if API==1.0 || API==2.0
const _ROUTER = {}
_ROUTER.SYSTEM_APP_STATUS = undefined
_ROUTER.SYSTEM_APP_HR = undefined
_ROUTER.SYSTEM_APP_SPORT = undefined
_ROUTER.SYSTEM_APP_WEATHER = undefined
_ROUTER.SYSTEM_APP_ALARM = undefined
_ROUTER.SYSTEM_APP_CAMERA = undefined
_ROUTER.SYSTEM_APP_MUSIC = undefined
_ROUTER.SYSTEM_APP_STOPWATCH = undefined
_ROUTER.SYSTEM_APP_COUNTDOWN = undefined
_ROUTER.SYSTEM_APP_FINE_PHONE = undefined
_ROUTER.SYSTEM_APP_CARD = undefined
_ROUTER.SYSTEM_APP_ALIPAY = undefined
_ROUTER.SYSTEM_APP_SETTING = undefined
_ROUTER.SYSTEM_APP_SPORT_HISTORY = undefined
_ROUTER.SYSTEM_APP_COMPASS = undefined
_ROUTER.SYSTEM_APP_PAI = undefined
_ROUTER.SYSTEM_APP_WORLD_CLOCK = undefined
_ROUTER.SYSTEM_APP_PRESSURE = undefined
_ROUTER.SYSTEM_APP_MENSTRUAL = undefined
_ROUTER.SYSTEM_APP_SPORT_STATUS = undefined
_ROUTER.SYSTEM_APP_CALENDAR = undefined
_ROUTER.SYSTEM_APP_SLEEP = undefined
_ROUTER.SYSTEM_APP_SPO2 = undefined
_ROUTER.SYSTEM_APP_PHONE = undefined
_ROUTER.SYSTEM_APP_NETEASE_MUSIC = undefined
_ROUTER.SYSTEM_APP_WEPAY = undefined
_ROUTER.SYSTEM_APP_BREATH = undefined
_ROUTER.SYSTEM_APP_POMODORO = undefined
_ROUTER.SYSTEM_APP_THERMOMETER = undefined
_ROUTER.SYSTEM_APP_TODO_LIST = undefined
_ROUTER.SYSTEM_APP_ALTIMETER = undefined
_ROUTER.SYSTEM_APP_VOICE_MEMO = undefined
_ROUTER.SYSTEM_APP_SUN_AND_MOON = undefined
_ROUTER.SYSTEM_APP_MEASUREMENT = undefined
_ROUTER.SYSTEM_APP_ZEPP_COACH = undefined
_ROUTER.SYSTEM_APP_CLUB_CARD = undefined
_ROUTER.SYSTEM_APP_BODY_COMPOSITION = undefined
_ROUTER.SYSTEM_APP_READINESS = undefined
_ROUTER.checkSystemApp = () => { /* NOOP */ }
// #endif
// #if API==1.0
_ROUTER.launchApp = (option) => hmApp.startApp({ appid: option.appId, url: option.url, native: option.native, param: option.params })
_ROUTER.push = (option) => hmApp.gotoPage({ url: option.url, param: option.params })
_ROUTER.replace = (option) => hmApp.reloadPage({ url: option.url, param: option.params })
_ROUTER.home = () => hmApp.gotoHome()
_ROUTER.back = () => hmApp.goBack()
_ROUTER.exit = () => hmApp.exit()
_ROUTER.setLaunchAppTimeout = (option) => hmApp.alarmNew({ appId: option.appId, url: option.url, param: option.params, date: option.utc })
_ROUTER.clearLaunchAppTimeout = (option) => typeof option === 'number' ? hmApp.alarmCancel(option) : hmApp.alarmCancel(option.timeoutId)
// #put "const ROUTER = _ROUTER"
// #put "export default ROUTER"
// #endif
