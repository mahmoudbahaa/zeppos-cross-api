import { h as httpRequest, d as downloadAndTransfer, p as pagePlugin$1 } from './httpRequest-pU8RatGa.js';
import '@zos/ble/TransferFile';
import './file-transfer-knPiEayp.js';

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
  const filePlug = pagePlugin$1();
  return {
    ...option,
    globalData: getApp()._options.globalData,
    ...messagingPlug,
    ...filePlug,
    onInit(...opts) {
      messagingPlug.onInit.apply(this);
      filePlug.onInit.apply(this);
      option.onInit?.apply(this, opts);
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      filePlug.onDestroy.apply(this);
      messagingPlug.onDestroy.apply(this);
    },
  }
}

export { BasePage };
