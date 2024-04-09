// #if API==1.0
/* global hmSetting */
// #endif
// #if API==1.0 || API==2.0
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0 && API!=2.0
import * as SETTINGS from '@zos/settings'
export default SETTINGS
// #endif
// #if API==2.0
// #put "import * as ORG_SETTINGS from '@zos/settings'"
// #endif
// #if API==1.0
const _SETTINGS = {}
// #endif
// #if API==2.0
// #put "const _SETTINGS = { ...ORG_SETTINGS }"
// #endif
// #if API==1.0
_SETTINGS.DATE_FORMAT_YMD = 0
_SETTINGS.DATE_FORMAT_DMY = 1
_SETTINGS.DATE_FORMAT_MDY = 2
_SETTINGS.TIME_FORMAT_12 = 0
_SETTINGS.TIME_FORMAT_24 = 1
_SETTINGS.DISTANCE_UNIT_METRIC = 0
_SETTINGS.DISTANCE_UNIT_IMPERIAL = 1
_SETTINGS.WEIGHT_UNIT_KILOGRAM = 0
_SETTINGS.WEIGHT_UNIT_JIN = 1
_SETTINGS.WEIGHT_UNIT_POUND = 2
_SETTINGS.WEIGHT_UNIT_STONE = 3
_SETTINGS.TEMPERATURE_UNIT_CENTIGRADE = 0
_SETTINGS.TEMPERATURE_UNIT_FAHRENHEIT = 1
_SETTINGS.getDateFormat = () => hmSetting.getDateFormat()
_SETTINGS.getDistanceUnit = () => hmSetting.getMileageUnit()
_SETTINGS.getLanguage = () => hmSetting.getLanguage()
_SETTINGS.getSleepTarget = () => hmSetting.getSleepTarget()
_SETTINGS.getSystemInfo = () => { throw new Error(UNSUPPORTED) }
_SETTINGS.getTemperatureUnit = () => { throw new Error(UNSUPPORTED) }
_SETTINGS.getTimeFormat = () => hmSetting.getTimeFormat()
_SETTINGS.getWeightTarget = () => hmSetting.getWeightTarget()
_SETTINGS.getWeightUnit = () => hmSetting.getWeightUnit()
// #endif
// #if API==1.0 || API==2.0
_SETTINGS.getSystemMode = () => { throw new Error(UNSUPPORTED) }
// #put "const SETTINGS = _SETTINGS"
// #put "export default SETTINGS"
// #endif
