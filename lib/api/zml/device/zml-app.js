import { appPlugin as fileTransferPlugin } from './file-transfer/fileTransfer-plugin.js'
import { appPlugin as messagingPlugin } from './messaging/app-plugin.js'

function BaseApp(option) {
  const messagingPlug = messagingPlugin(option)
  const filePlug = fileTransferPlugin(option)
  return {
    ...option,
    ...messagingPlug,
    ...filePlug,
    onCreate(...opts) {
      messagingPlug.onCreate.apply(this)
      filePlug.onCreate.apply(this)
      option.onCreate?.apply(this, opts)
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts)
      filePlug.onDestroy.apply(this)
      messagingPlug.onDestroy.apply(this)
    },
  }
}

export { BaseApp }
