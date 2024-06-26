/* global Page */
import {
	testGetAutoBrightness,
	testGetBrightness,
	testGetSettings,
	testPauseDropWristScreenOff,
	testPausePalmScreenOff,
	testResetDropWristScreenOff,
	testResetPageBrightTime,
	testResetPalmScreenOff,
	testSetAutoBrightness,
	testSetBrightness,
	testSetPageBrightTime,
	testSetScreenOff,
	testSetWakeUpRelaunch,
} from '../lib/api-tests/display';
import { TestSreen } from '../lib/TestScreen';

Page({
  onInit() {
    new TestSreen().start({
      getAutoBrightness: () => testGetAutoBrightness(),
      getBrightness: () => testGetBrightness(),
      pauseDropWristScreenOff: () => testPauseDropWristScreenOff(),
      pausePalmScreenOff: () => testPausePalmScreenOff(),
      resetDropWristScreenOff: () => testResetDropWristScreenOff(),
      resetPageBrightTime: () => testResetPageBrightTime(),
      resetPalmScreenOff: () => testResetPalmScreenOff(),
      setAutoBrightness: () => testSetAutoBrightness(),
      setBrightness: () => testSetBrightness(),
      setPageBrightTime: () => testSetPageBrightTime(),
      setScreenOff: () => testSetScreenOff(),
      setWakeUpRelaunch: () => testSetWakeUpRelaunch(),
      getSettings: () => testGetSettings(),
    });
  },
});
