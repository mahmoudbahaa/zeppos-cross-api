import {
  convertLib,
  convertPlugin,
} from './convert-image/convert-image-plugin.js'
import { downloadPlugin } from './download/download-plugin.js'
import { fileTransferPlugin } from './file-transfer/file-transfer-plugin.js'
import { messagingPlugin } from './messaging/messaging-plugin.js'
import { settingsLib } from './settings/settings-plugin.js'

import { settingsPlugin } from './settings/settings-plugin.js'

function BaseSideService(option) {
  const settingsPlug = settingsPlugin()
  const messagingPlug = messagingPlugin()
  const fileTransferPlug = fileTransferPlugin()
  downloadPlugin(option)
  convertPlugin(option)
  return {
    ...option,
    ...settingsPlug,
    ...messagingPlug,
    ...fileTransferPlug,
    onInit(opts) {
      settingsPlug.onInit.apply(this)
      messagingPlug.onInit.apply(this)
      fileTransferPlug.onInit.apply(this)
      option.onInit?.apply(this, opts)
    },
    onDestroy(opts) {
      option.onDestroy?.apply(this, opts)
      fileTransferPlug.onDestroy.apply(this)
      messagingPlug.onDestroy.apply(this)
      settingsPlug.onDestroy.apply(this)
    },
  }
}

export { BaseSideService, convertLib, settingsLib }
