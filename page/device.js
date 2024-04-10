/* global Page */
import { testGetDeviceInfo, testGetDiskInfo, testScreenShape } from '../lib/api-tests/device'
import { TestSreen } from '../lib/TestScreen'

Page({
  onInit () {
    new TestSreen().start({
      getDeviceInfo: () => testGetDeviceInfo(),
      getDiskInfo: () => testGetDiskInfo(),
      screenShape: () => testScreenShape()
    })
  }
})
