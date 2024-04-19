import {
	getAutoBrightness, getBrightness, getSettings, pauseDropWristScreenOff,
	pausePalmScreenOff, resetDropWristScreenOff, resetPageBrightTime,
	resetPalmScreenOff, setAutoBrightness, setBrightness,
	setPageBrightTime,
	setScreenOff,
	setWakeUpRelaunch,
} from '../display';

export function testGetAutoBrightness() {
  return String(getAutoBrightness());
}

export function testGetBrightness() {
  return String(getBrightness());
}

export function testPauseDropWristScreenOff() {
  return String(pauseDropWristScreenOff({ duration: 10000 }));
}

export function testPausePalmScreenOff() {
  return String(pausePalmScreenOff({ duration: 10000 }));
}

export function testResetDropWristScreenOff() {
  return String(resetDropWristScreenOff());
}

export function testResetPageBrightTime() {
  return String(resetPageBrightTime());
}

export function testResetPalmScreenOff() {
  return String(resetPalmScreenOff());
}

export function testSetAutoBrightness() {
  return String(setAutoBrightness({ autoBright: false }));
}

export function testSetBrightness() {
  return String(setBrightness({ brightness: 1 }));
}

export function testSetPageBrightTime() {
  return String(setPageBrightTime({ brightTime: 18000 }));
}

export function testSetScreenOff() {
  return String(setScreenOff());
}

export function testSetWakeUpRelaunch() {
  return String(setWakeUpRelaunch({ relaunch: true }));
}

export function testGetSettings() {
  return JSON.stringify(getSettings());
}
