// #if API==1.0
/* global hmApp, hmSetting */
// #endif
// #if API!=1.0 &&  API!=2.0
import * as DISPLAY from '@zos/display'
// #endif
// #if API==2.0
// #put "import * as ORG_DISPLAY from '@zos/display'"
// #endif
// #if API==1.0 || API==2.0
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0 && API!=2.0
export default DISPLAY
// #endif
// #if API==1.0
const _DISPLAY = {}
// #endif
// #if API==2.0
// #put "const _DISPLAY = { ...ORG_DISPLAY }"
// #endif
// #if API==1.0
_DISPLAY.getAutoBrightness = () => { return hmSetting.getScreenAutoBright() }
_DISPLAY.getBrightness = () => { return hmSetting.getBrightness() }
_DISPLAY.pauseDropWristScreenOff = () => { return 1 /* Non zero */ }
_DISPLAY.pausePalmScreenOff = () => { return 1 /* Non zero */ }
_DISPLAY.resetDropWristScreenOff = () => { return 1 /* Non zero */ }
_DISPLAY.resetPageBrightTime = () => { return hmSetting.setBrightScreenCancel() }
_DISPLAY.resetPalmScreenOff = () => { return 1 /* Non zero */ }
_DISPLAY.setAutoBrightness = (option) => { return typeof option === 'boolean' ? hmSetting.setScreenAutoBright(option) : hmSetting.setScreenAutoBright(option.autoBright) }
_DISPLAY.setBrightness = (option) => { return typeof option === 'number' ? hmSetting.setBrightness(option) : hmSetting.setScreenAutoBright(option.brightness) }
_DISPLAY.setPageBrightTime = (option) => { return hmSetting.setBrightScreen(option.brightTime || 10000) }
_DISPLAY.setScreenOff = () => { return hmSetting.setScreenOff() }
_DISPLAY.setWakeUpRelaunch = (option) => { return typeof option === 'boolean' ? hmApp.setScreenKeep(option) : hmApp.setScreenKeep(option.relaunch) }
// #endif
// #if API==1.0 || API ==2.0
_DISPLAY.getSettings = () => { throw new Error(UNSUPPORTED) }
// #put "const DISPLAY = _DISPLAY"
// #put "export default DISPLAY"
// #endif
