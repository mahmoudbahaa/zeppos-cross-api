import {
 getDeviceInfo, getDiskInfo, SCREEN_SHAPE_ROUND, SCREEN_SHAPE_SQUARE,
} from '../api/device';

export function testGetDeviceInfo() {
  return JSON.stringify(getDeviceInfo());
}

export function testGetDiskInfo() {
  return JSON.stringify(getDiskInfo());
}

export function testScreenShape() {
  switch (getDeviceInfo().screenShape) {
    case SCREEN_SHAPE_ROUND: return 'Round';
    case SCREEN_SHAPE_SQUARE: return 'Square';
    default: return 'Unknow';
  }
}
