import { h as httpRequest, l as loggerPlugin, a as appPlugin$1 } from './fileTransfer-plugin-DPbj0CWM.js';
import { M as MessageBuilder, w as wrapperMessage } from './message-DvV8XCTS.js';
import { getPackageInfo } from '@zos/app';
import { b as ble } from './ble-DiBLOBfF.js';
import { log } from '@zos/utils';
import './file-transfer-btNVMsMj.js';
import './bleTransferFile.js';
import './data.js';
import './_constants-DnfQ3JJx.js';
import '@zos/ble';

const appDevicePort = 20;
const appSidePort = 0;

function createDeviceMessage() {
  const messageBuilder = new MessageBuilder({
    appId: getPackageInfo().appId,
    appDevicePort,
    appSidePort,
    ble,
    logger: log.getLogger('device-message'),
  });

  return wrapperMessage(messageBuilder, log.getLogger('message-builder-device'));
}

function appPlugin(opts) {
  const messaging = createDeviceMessage();
  return {
    onCreate() {
      this.messaging = this.globalData.messaging = messaging;
      this._onCall = this.onCall?.bind(this);
      this._onRequest = this.onRequest?.bind(this);
      this.messaging.onCall(this._onCall).onRequest(this._onRequest).connect();
    },
    onDestroy() {
      this.messaging.offOnCall().offOnRequest().disConnect();
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
   * @type {{ onCreate?: (opts:any) => void, onDestroy?: (opts:any) => void;}[]}
   */
const plugins = [loggerPlugin(), appPlugin(), appPlugin$1()];

function BaseApp(option) {
  const opts = {};
  plugins.forEach(plugin => Object.assign(opts, plugin));

  return {
    ...option,
    ...opts,
    onCreate(...opts) {
      plugins.forEach(plugin => plugin.onCreate?.apply(this, opts));
      option.onCreate?.apply(this, opts);
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onDestroy?.apply(this, opts));
    },
  };
}

export { BaseApp };
