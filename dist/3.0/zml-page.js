import { h as httpRequest, l as loggerPlugin, p as pagePlugin$1 } from './fileTransfer-plugin-CPBXJ0Ji.js';
import '@zos/utils';
import './file-transfer-btNVMsMj.js';
import '@zos/ble/TransferFile';

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
  }
}

/**
  * @type {{ onInit?: (opts:any) => void, onResume?: (opts:any) => void, onPause?: (opts:any) => void,
  * build?: (opts:any) => void, onDestroy?: (opts:any) => void;}[]}
  */
const plugins = [loggerPlugin(), pagePlugin(), pagePlugin$1()];

function BasePage(option) {
  const opts = {};
  plugins.forEach(plugin => Object.assign(opts, plugin));

  return {
    ...option,
    ...opts,
    globalData: getApp()._options.globalData,
    onInit(...opts) {
      plugins.forEach(plugin => plugin.onInit?.apply(this, opts));
      option.onInit?.apply(this, opts);
    },
    onResume(...opts) {
      plugins.forEach(plugin => plugin.onResume?.apply(this, opts));
      option.onResume?.apply(this, opts);
    },
    onPause(...opts) {
      option.onPause?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onPause?.apply(this, opts));
    },
    build(...opts) {
      plugins.forEach(plugin => plugin.build?.apply(this, opts));
      option.build?.apply(this, opts);
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onDestroy?.apply(this, opts));
    },
  };
}

export { BasePage };
