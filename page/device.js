/* global Page */
import { TestSreen } from '../lib/TestScreen'
import { testGetDeviceInfo, testGetDiskInfo, testScreenShape } from '../lib/api/tests/device'

Page({
  onInit () {
    new TestSreen().start({
      getDeviceInfo: () => testGetDeviceInfo(),
      getDiskInfo: () => testGetDiskInfo(),
      screenShape: () => testScreenShape()
    })
  }
})
