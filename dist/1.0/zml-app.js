import { getPackageInfo } from './app.js';
import { log } from './utils.js';
import { MessageBuilder } from './message.js';
import { w as wrapperMessage } from './message-CSq473RI.js';
import { h as httpRequest, d as downloadAndTransfer } from './httpRequest-CJ1duHAs.js';
import './_constants-DnfQ3JJx.js';
import './event-DwQ3RP1v.js';
import './ble.js';
import './data.js';
import './defer-CYuMoFqG.js';
import './js-module-BLu70XRo.js';
import './fs.js';

const appDevicePort = 20;
const appSidePort = 0;

function createDeviceMessage() {
	const messageBuilder = new MessageBuilder({
		appId: getPackageInfo().appId,
		appDevicePort,
		appSidePort,
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
    downloadAndTransfer,
  }
}

function BaseApp(option) {
	const messagingPlug = appPlugin();
	return {
		...option,
		...messagingPlug,
    sendFile(path, opts) { throw new Error("File Transfer need API_LEVEL 3.0") },
		onCreate(...opts) {
			messagingPlug.onCreate.apply(this);
			option.onCreate?.apply(this, opts);
		},
		onDestroy(...opts) {
			option.onDestroy?.apply(this, opts);
			messagingPlug.onDestroy.apply(this);
		},
	};
}

export { BaseApp };
