/* global hmApp, hmSetting */
import { UNSUPPORTED } from './_constants';

export const getAutoBrightness = () => hmSetting.getScreenAutoBright();
export const getBrightness = () => hmSetting.getBrightness();
export const pauseDropWristScreenOff = () => 1; /* Non zero */
export const pausePalmScreenOff = () => 1; /* Non zero */
export const resetDropWristScreenOff = () => 1; /* Non zero */
export const resetPageBrightTime = () => hmSetting.setBrightScreenCancel();
export const resetPalmScreenOff = () => 1; /* Non zero */
export const setAutoBrightness = option => typeof option === 'boolean' ? hmSetting.setScreenAutoBright(option) : hmSetting.setScreenAutoBright(option.autoBright);
export const setBrightness = option => typeof option === 'number' ? hmSetting.setBrightness(option) : hmSetting.setScreenAutoBright(option.brightness);
export const setPageBrightTime = option => hmSetting.setBrightScreen(option.brightTime || 10000);
export const setScreenOff = () => hmSetting.setScreenOff();
export const setWakeUpRelaunch = option => typeof option === 'boolean' ? hmApp.setScreenKeep(option) : hmApp.setScreenKeep(option.relaunch);
export const getSettings = () => {
	throw new Error(UNSUPPORTED);
};
