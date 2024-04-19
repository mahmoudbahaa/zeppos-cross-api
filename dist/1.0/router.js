/* global hmApp */
const SYSTEM_APP_STATUS = undefined;
const SYSTEM_APP_HR = undefined;
const SYSTEM_APP_SPORT = undefined;
const SYSTEM_APP_WEATHER = undefined;
const SYSTEM_APP_ALARM = undefined;
const SYSTEM_APP_CAMERA = undefined;
const SYSTEM_APP_MUSIC = undefined;
const SYSTEM_APP_STOPWATCH = undefined;
const SYSTEM_APP_COUNTDOWN = undefined;
const SYSTEM_APP_FINE_PHONE = undefined;
const SYSTEM_APP_CARD = undefined;
const SYSTEM_APP_ALIPAY = undefined;
const SYSTEM_APP_SETTING = undefined;
const SYSTEM_APP_SPORT_HISTORY = undefined;
const SYSTEM_APP_COMPASS = undefined;
const SYSTEM_APP_PAI = undefined;
const SYSTEM_APP_WORLD_CLOCK = undefined;
const SYSTEM_APP_PRESSURE = undefined;
const SYSTEM_APP_MENSTRUAL = undefined;
const SYSTEM_APP_SPORT_STATUS = undefined;
const SYSTEM_APP_CALENDAR = undefined;
const SYSTEM_APP_SLEEP = undefined;
const SYSTEM_APP_SPO2 = undefined;
const SYSTEM_APP_PHONE = undefined;
const SYSTEM_APP_NETEASE_MUSIC = undefined;
const SYSTEM_APP_WEPAY = undefined;
const SYSTEM_APP_BREATH = undefined;
const SYSTEM_APP_POMODORO = undefined;
const SYSTEM_APP_THERMOMETER = undefined;
const SYSTEM_APP_TODO_LIST = undefined;
const SYSTEM_APP_ALTIMETER = undefined;
const SYSTEM_APP_VOICE_MEMO = undefined;
const SYSTEM_APP_SUN_AND_MOON = undefined;
const SYSTEM_APP_MEASUREMENT = undefined;
const SYSTEM_APP_ZEPP_COACH = undefined;
const SYSTEM_APP_CLUB_CARD = undefined;
const SYSTEM_APP_BODY_COMPOSITION = undefined;
const SYSTEM_APP_READINESS = undefined;
const checkSystemApp = () => { /* NOOP */ };
const launchApp = option => hmApp.startApp({
	appid: option.appId, url: option.url, native: option.native, param: option.params,
});
const push = option => hmApp.gotoPage({url: option.url, param: option.params === undefined ? undefined : (typeof option.params === 'string' ? option.params : JSON.stringify(option.params))});
const replace = option => hmApp.reloadPage({url: option.url, param: option.params === undefined ? undefined : (typeof option.params === 'string' ? option.params : JSON.stringify(option.params))});
const home = () => hmApp.gotoHome();
const back = () => hmApp.goBack();
const exit = () => hmApp.exit();
const setLaunchAppTimeout = option => hmApp.alarmNew({
	appId: option.appId, url: option.url, param: option.params, date: option.utc,
});
const clearLaunchAppTimeout = option => typeof option === 'number' ? hmApp.alarmCancel(option) : hmApp.alarmCancel(option.timeoutId);

export { SYSTEM_APP_ALARM, SYSTEM_APP_ALIPAY, SYSTEM_APP_ALTIMETER, SYSTEM_APP_BODY_COMPOSITION, SYSTEM_APP_BREATH, SYSTEM_APP_CALENDAR, SYSTEM_APP_CAMERA, SYSTEM_APP_CARD, SYSTEM_APP_CLUB_CARD, SYSTEM_APP_COMPASS, SYSTEM_APP_COUNTDOWN, SYSTEM_APP_FINE_PHONE, SYSTEM_APP_HR, SYSTEM_APP_MEASUREMENT, SYSTEM_APP_MENSTRUAL, SYSTEM_APP_MUSIC, SYSTEM_APP_NETEASE_MUSIC, SYSTEM_APP_PAI, SYSTEM_APP_PHONE, SYSTEM_APP_POMODORO, SYSTEM_APP_PRESSURE, SYSTEM_APP_READINESS, SYSTEM_APP_SETTING, SYSTEM_APP_SLEEP, SYSTEM_APP_SPO2, SYSTEM_APP_SPORT, SYSTEM_APP_SPORT_HISTORY, SYSTEM_APP_SPORT_STATUS, SYSTEM_APP_STATUS, SYSTEM_APP_STOPWATCH, SYSTEM_APP_SUN_AND_MOON, SYSTEM_APP_THERMOMETER, SYSTEM_APP_TODO_LIST, SYSTEM_APP_VOICE_MEMO, SYSTEM_APP_WEATHER, SYSTEM_APP_WEPAY, SYSTEM_APP_WORLD_CLOCK, SYSTEM_APP_ZEPP_COACH, back, checkSystemApp, clearLaunchAppTimeout, exit, home, launchApp, push, replace, setLaunchAppTimeout };
