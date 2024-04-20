import { getDeviceInfo } from '../api/device';

const info = getDeviceInfo();

export const SCREEN_WIDTH = info.width;
export const SCREEN_HEIGHT = info.height;

const SCREEN_MARGIN_Y = 48;
const SCREEN_MARGIN_X = 48;
const BASE_FONT_SIZE = 24;

export {
  BASE_FONT_SIZE, SCREEN_MARGIN_X, SCREEN_MARGIN_Y,
};

export const WIDGET_WIDTH = SCREEN_WIDTH - (SCREEN_MARGIN_X * 2);
