const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

/* global hmApp, hmSetting */

const getAutoBrightness = () => hmSetting.getScreenAutoBright();
const getBrightness = () => hmSetting.getBrightness();
const pauseDropWristScreenOff = () => 1; /* Non zero */
const pausePalmScreenOff = () => 1; /* Non zero */
const resetDropWristScreenOff = () => 1; /* Non zero */
const resetPageBrightTime = () => hmSetting.setBrightScreenCancel();
const resetPalmScreenOff = () => 1; /* Non zero */
const setAutoBrightness = option => typeof option === 'boolean' ? hmSetting.setScreenAutoBright(option) : hmSetting.setScreenAutoBright(option.autoBright);
const setBrightness = option => typeof option === 'number' ? hmSetting.setBrightness(option) : hmSetting.setScreenAutoBright(option.brightness);
const setPageBrightTime = option => hmSetting.setBrightScreen(option.brightTime || 10000);
const setScreenOff = () => hmSetting.setScreenOff();
const setWakeUpRelaunch = option => typeof option === 'boolean' ? hmApp.setScreenKeep(option) : hmApp.setScreenKeep(option.relaunch);
const getSettings = () => {
	throw new Error(UNSUPPORTED);
};

export { getAutoBrightness, getBrightness, getSettings, pauseDropWristScreenOff, pausePalmScreenOff, resetDropWristScreenOff, resetPageBrightTime, resetPalmScreenOff, setAutoBrightness, setBrightness, setPageBrightTime, setScreenOff, setWakeUpRelaunch };
