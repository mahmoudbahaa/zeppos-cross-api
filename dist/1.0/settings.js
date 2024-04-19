import { U as UNSUPPORTED } from './_constants-DnfQ3JJx.js';

/* global hmSetting */

const DATE_FORMAT_YMD = 0;
const DATE_FORMAT_DMY = 1;
const DATE_FORMAT_MDY = 2;
const TIME_FORMAT_12 = 0;
const TIME_FORMAT_24 = 1;
const DISTANCE_UNIT_METRIC = 0;
const DISTANCE_UNIT_IMPERIAL = 1;
const WEIGHT_UNIT_KILOGRAM = 0;
const WEIGHT_UNIT_JIN = 1;
const WEIGHT_UNIT_POUND = 2;
const WEIGHT_UNIT_STONE = 3;
const TEMPERATURE_UNIT_CENTIGRADE = 0;
const TEMPERATURE_UNIT_FAHRENHEIT = 1;
const getDateFormat = () => hmSetting.getDateFormat();
const getDistanceUnit = () => hmSetting.getMileageUnit();
const getLanguage = () => hmSetting.getLanguage();
const getSleepTarget = () => hmSetting.getSleepTarget();
const getSystemInfo = () => {
	throw new Error(UNSUPPORTED);
};

const getTemperatureUnit = () => {
	throw new Error(UNSUPPORTED);
};

const getTimeFormat = () => hmSetting.getTimeFormat();
const getWeightTarget = () => hmSetting.getWeightTarget();
const getWeightUnit = () => hmSetting.getWeightUnit();
const getSystemMode = () => {
	throw new Error(UNSUPPORTED);
};

export { DATE_FORMAT_DMY, DATE_FORMAT_MDY, DATE_FORMAT_YMD, DISTANCE_UNIT_IMPERIAL, DISTANCE_UNIT_METRIC, TEMPERATURE_UNIT_CENTIGRADE, TEMPERATURE_UNIT_FAHRENHEIT, TIME_FORMAT_12, TIME_FORMAT_24, WEIGHT_UNIT_JIN, WEIGHT_UNIT_KILOGRAM, WEIGHT_UNIT_POUND, WEIGHT_UNIT_STONE, getDateFormat, getDistanceUnit, getLanguage, getSleepTarget, getSystemInfo, getSystemMode, getTemperatureUnit, getTimeFormat, getWeightTarget, getWeightUnit };
