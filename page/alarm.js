/* global Page */
import { TestSreen } from '../lib/TestScreen'
import { testAlarmCancel, testAlarmSet, testGetAllAlarms } from '../lib/api/tests/alarm'

const thisFile = 'page/home'

Page({
  onInit () {
    new TestSreen().start({
      set: () => testAlarmSet(thisFile),
      getAlarmList: () => testGetAllAlarms(),
      cancel: () => testAlarmCancel()
    })
  }
})
