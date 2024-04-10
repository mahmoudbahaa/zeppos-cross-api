import {
  getAutoBrightness, getBrightness, getSettings, pauseDropWristScreenOff,
  pausePalmScreenOff, resetDropWristScreenOff, resetPageBrightTime,
  resetPalmScreenOff, setAutoBrightness, setBrightness,
  setPageBrightTime,
  setScreenOff,
  setWakeUpRelaunch
} from '../display'

export function testGetAutoBrightness () {
  return getAutoBrightness() + ''
}

export function testGetBrightness () {
  return getBrightness() + ''
}

export function testPauseDropWristScreenOff () {
  return pauseDropWristScreenOff({ duration: 10000 }) + ''
}

export function testPausePalmScreenOff () {
  return pausePalmScreenOff({ duration: 10000 }) + ''
}

export function testResetDropWristScreenOff () {
  return resetDropWristScreenOff() + ''
}

export function testResetPageBrightTime () {
  return resetPageBrightTime() + ''
}

export function testResetPalmScreenOff () {
  return resetPalmScreenOff() + ''
}

export function testSetAutoBrightness () {
  return setAutoBrightness({ autoBright: false }) + ''
}

export function testSetBrightness () {
  return setBrightness({ brightness: 1 }) + ''
}

export function testSetPageBrightTime () {
  return setPageBrightTime({ brightTime: 18000 }) + ''
}

export function testSetScreenOff () {
  return setScreenOff() + ''
}

export function testSetWakeUpRelaunch () {
  return setWakeUpRelaunch({ relaunch: true }) + ''
}

export function testGetSettings () {
  return JSON.stringify(getSettings())
}
