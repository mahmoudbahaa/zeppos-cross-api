/* global Page */
import { push } from '../lib/api/router'
import { ListScreen } from '../lib/mmk/ListScreen'

class HomePage extends ListScreen {
  start (modules) {
    modules.forEach(module => {
      this.row({
        text: '@zos/' + module,
        callback: () => push({
          url: 'page/' + module
        })
      })
    })
  }
}

Page({
  onInit () {
    new HomePage().start([
      'alarm',
      'app',
      'ble',
      'device',
      'display'
    ])
  }
})
