/* global hmSetting */
import { UNSUPPORTED } from './_constants';

export const DATE_FORMAT_YMD = 0;
export const DATE_FORMAT_DMY = 1;
export const DATE_FORMAT_MDY = 2;
export const TIME_FORMAT_12 = 0;
export const TIME_FORMAT_24 = 1;
export const DISTANCE_UNIT_METRIC = 0;
export const DISTANCE_UNIT_IMPERIAL = 1;
export const WEIGHT_UNIT_KILOGRAM = 0;
export const WEIGHT_UNIT_JIN = 1;
export const WEIGHT_UNIT_POUND = 2;
export const WEIGHT_UNIT_STONE = 3;
export const TEMPERATURE_UNIT_CENTIGRADE = 0;
export const TEMPERATURE_UNIT_FAHRENHEIT = 1;
export const getDateFormat = () => hmSetting.getDateFormat();
export const getDistanceUnit = () => hmSetting.getMileageUnit();
export const getLanguage = () => hmSetting.getLanguage();
export const getSleepTarget = () => hmSetting.getSleepTarget();
export const getSystemInfo = () => {
  throw new Error(UNSUPPORTED);
};

export const getTemperatureUnit = () => {
  throw new Error(UNSUPPORTED);
};

export const getTimeFormat = () => hmSetting.getTimeFormat();
export const getWeightTarget = () => hmSetting.getWeightTarget();
export const getWeightUnit = () => hmSetting.getWeightUnit();
export const getSystemMode = () => {
  throw new Error(UNSUPPORTED);
};
