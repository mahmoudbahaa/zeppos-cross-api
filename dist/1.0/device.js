/* global hmSetting */
const SCREEN_SHAPE_SQUARE = 0;
const SCREEN_SHAPE_ROUND = 1;
const getDiskInfo = () => hmSetting.getDiskInfo();
const getDeviceInfo = () => hmSetting.getDeviceInfo();

export { SCREEN_SHAPE_ROUND, SCREEN_SHAPE_SQUARE, getDeviceInfo, getDiskInfo };
