import { h as httpRequest, d as downloadAndTransfer } from './httpRequest-CJ1duHAs.js';

function getDeviceMessage() {
  const { messaging } = getApp()._options.globalData;
  return messaging
}

function pagePlugin(opts) {
  const messaging = getDeviceMessage();
  return {
    onInit() {
      this.messaging = this.state.messaging = messaging;
      this._onCall = this.onCall?.bind(this);
      this._onRequest = this.onRequest?.bind(this);
      this.messaging.onCall(this._onCall).onRequest(this._onRequest);
    },
    onDestroy() {
      if (this._onCall) {
        this.messaging.offOnCall(this._onCall);
      }

      if (this._onRequest) {
        this.messaging.offOnRequest(this._onRequest);
      }
    },
    request(data, opts = {}) {
      return this.messaging.request(data, opts)
    },
    call(data) {
      return this.messaging.call(data)
    },
    httpRequest,
    downloadAndTransfer,
  }
}

function BasePage(option) {
  const messagingPlug = pagePlugin();
  return {
    ...option,
    globalData: getApp()._options.globalData,
    ...messagingPlug,
    sendFile(path, opts) { throw new Error("File Transfer need API_LEVEL 3.0") },
    onInit(...opts) {
      messagingPlug.onInit.apply(this);
      option.onInit?.apply(this, opts); 
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      messagingPlug.onDestroy.apply(this);
    },
  }
}

export { BasePage };
