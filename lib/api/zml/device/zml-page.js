import { pagePlugin as fileTransferPlugin } from './file-transfer/fileTransfer-plugin.js'
import { pagePlugin as messagingPlugin } from './messaging/page-plugin.js'

function BasePage(option) {
  const messagingPlug = messagingPlugin(option)
  const filePlug = fileTransferPlugin(option)
  return {
    ...option,
    globalData: getApp()._options.globalData,
    ...messagingPlug,
    ...filePlug,
    onInit(...opts) {
      messagingPlug.onInit.apply(this)
      filePlug.onInit.apply(this)
      option.onInit?.apply(this, opts)
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts)
      filePlug.onDestroy.apply(this)
      messagingPlug.onDestroy.apply(this)
    },
  }
}


export { BasePage }

