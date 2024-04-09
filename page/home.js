/* global Page */
import { testAlarmCancel, testAlarmSet, testGetAllAlarms } from '../lib/api/tests/alarm'
import { testEmitCustomSystemEvent, testGetPackageInfo, testGetScene, testQueryPermission, testRequestPermission } from '../lib/api/tests/app'
import { testAppServiceExit, testAppServiceStart, testAppServiceStop, testGetAllAppServices } from '../lib/api/tests/app-service'
import { showToast } from '../lib/api/ui'
import { ListScreen } from '../lib/mmk/ListScreen'
import { BASE_FONT_SIZE } from '../lib/mmk/UiParams'

const thisFile = 'page/home'
class HomePage extends ListScreen {
  constructor () {
    super(false)
    this.fontSize = BASE_FONT_SIZE
  }

  /**
   * @param {number[]} result
   */
  reqPermCB (result) {
    showToast({ text: JSON.stringify(result) })
  }

  start () {
    const labels = [
      '@zos/alarm',
      'set',
      'getAlarmList',
      'cancel',
      '@zos/app',
      'getPackageInfo',
      'getScene',
      'queryPermission',
      'requestPermission',
      'emitCustomSystemEvent',
      '@zos/app-service',
      'start',
      'stop',
      'getAllAppServices',
      'exit'
    ]
    const funcs = [
      undefined,
      () => testAlarmSet(thisFile),
      () => testGetAllAlarms(),
      () => testAlarmCancel(),
      undefined,
      () => testGetPackageInfo(),
      () => testGetScene(),
      () => testQueryPermission(['device:os.ble', 'device:unkown_premission', 'data:user.info']),
      () => testRequestPermission(['device:os.ble', 'device:unkown_premission', 'device:os.bg_service'], this.reqPermCB),
      () => testEmitCustomSystemEvent(),
      undefined,
      () => testAppServiceStart(),
      () => testAppServiceStop(),
      () => testGetAllAppServices(),
      () => testAppServiceExit()
    ]

    labels.forEach((label, i) => {
      if (funcs[i] === undefined) {
        this.headlineRow(label)
      } else {
        this.row({
          text: label,
          callback: () => {
            try {
              const result = funcs[i]().split(',')
              if (result.length === 1) {
                showToast({ text: result[0] })
              } else {
                let timeout = 1000
                result.forEach(part => {
                  setTimeout(() => {
                    showToast({ text: part })
                  }, timeout)
                  timeout += 1000
                })
              }
            } catch (e) {
              showToast({ text: e.toString() })
            }
          }
        })
      }
    })
  }
}

Page({
  state: {
    screen: undefined
  },

  onInit () {
    this.state.screen = new HomePage()
    this.state.screen.start()
  },

  onDestroy () {
    console.log('Home page onDestroy')
  }
})
