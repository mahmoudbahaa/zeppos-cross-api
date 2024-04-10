// #if API==1.0
/* global hmApp, hmSetting */
import { UNSUPPORTED } from './util/constants'

export const getAutoBrightness = () => { return hmSetting.getScreenAutoBright() }
export const getBrightness = () => { return hmSetting.getBrightness() }
export const pauseDropWristScreenOff = () => { return 1 /* Non zero */ }
export const pausePalmScreenOff = () => { return 1 /* Non zero */ }
export const resetDropWristScreenOff = () => { return 1 /* Non zero */ }
export const resetPageBrightTime = () => { return hmSetting.setBrightScreenCancel() }
export const resetPalmScreenOff = () => { return 1 /* Non zero */ }
export const setAutoBrightness = (option) => { return typeof option === 'boolean' ? hmSetting.setScreenAutoBright(option) : hmSetting.setScreenAutoBright(option.autoBright) }
export const setBrightness = (option) => { return typeof option === 'number' ? hmSetting.setBrightness(option) : hmSetting.setScreenAutoBright(option.brightness) }
export const setPageBrightTime = (option) => { return hmSetting.setBrightScreen(option.brightTime || 10000) }
export const setScreenOff = () => { return hmSetting.setScreenOff() }
export const setWakeUpRelaunch = (option) => { return typeof option === 'boolean' ? hmApp.setScreenKeep(option) : hmApp.setScreenKeep(option.relaunch) }
export const getSettings = () => { throw new Error(UNSUPPORTED) }
// #endif
