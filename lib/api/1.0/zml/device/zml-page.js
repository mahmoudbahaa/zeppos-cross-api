import { pagePlugin as messagingPlugin } from './messaging/page-plugin.js'

function BasePage(option) {
  const messagingPlug = messagingPlugin(option)
  return {
    ...option,
    globalData: getApp()._options.globalData,
    ...messagingPlug,
    sendFile(path, opts) { throw new Error("File Transfer need API_LEVEL 3.0") },
    onInit(...opts) {
      messagingPlug.onInit.apply(this)
      option.onInit?.apply(this, opts) 
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts)
      messagingPlug.onDestroy.apply(this)
    },
  }
}


export { BasePage }

