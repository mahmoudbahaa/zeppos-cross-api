import { fileTransferLib } from './file-transfer/device-file-transfer'
import { createDeviceMessage } from './messaging/device-message'
import { httpRequest } from './messaging/httpRequest'

function BaseApp(option) {
  const messaging = createDeviceMessage()
  const opts = {
    globalData: option.globalData,
    ...option,
    onCreate(...opts) {
      this.messaging = this.globalData.messaging = messaging
      this._onCall = this.onCall?.bind(this)
      this._onRequest = this.onRequest?.bind(this)
      this.messaging.onCall(this._onCall).onRequest(this._onRequest).connect()
      fileTransferLib.onFile(this.onReceivedFile?.bind(this))
      option.onCreate?.apply(this, opts)
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts)
      fileTransferLib.offFile()
      this.messaging.offOnCall().offOnRequest().disConnect()
    },
    sendFile(path, opts) {
      return fileTransferLib.sendFile(path, opts)
    },
    request(data, opts = {}) {
      return this.messaging.request(data, opts)
    },
    call(data) {
      return this.messaging.call(data)
    },
    httpRequest,
  }

  return opts
}

export { BaseApp }
