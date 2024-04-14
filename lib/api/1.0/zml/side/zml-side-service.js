import { messagingPlugin } from './messaging/messaging-plugin.js'
import { settingsLib } from './settings/settings-plugin.js'
import { settingsPlugin } from './settings/settings-plugin.js'

function BaseSideService(option) {
  const settingsPlug = settingsPlugin()
  const messagingPlug = messagingPlugin()
  return {
    ...option,
    ...settingsPlug,
    ...messagingPlug,
    sendFile(path, opts) { throw new Error("File Transfer need API_LEVEL 3.0") },
    download(url, opts) { throw new Error("Download need API_LEVEL 3.0")},
    conver(opts) { throw new Error("Image Convert need API_LEVEL 3.0") },
    onInit(opts) {
      settingsPlug.onInit.apply(this)
      messagingPlug.onInit.apply(this)
      option.onInit?.apply(this, opts)
    },
    onDestroy(opts) {
      option.onDestroy?.apply(this, opts)
      messagingPlug.onDestroy.apply(this)
      settingsPlug.onDestroy.apply(this)
    },
  }
}

export { BaseSideService, settingsLib }
