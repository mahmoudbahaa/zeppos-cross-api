import { getPackageInfo } from './app.js';
import { openSync, O_APPEND, writeSync, closeSync } from './fs.js';
import { log } from './utils.js';
import { MessageBuilder } from './message.js';
import { w as wrapperMessage } from './message-CpHewxrX.js';
import { h as httpRequest, d as downloadAndTransfer } from './httpRequest-CJ1duHAs.js';
import './_constants-DnfQ3JJx.js';
import './data.js';
import './event-DwQ3RP1v.js';
import './ble.js';
import './defer-CYuMoFqG.js';
import './js-module-BLu70XRo.js';

const appDevicePort = 20;
const appSidePort = 0;

function createDeviceMessage() {
	const messageBuilder = new MessageBuilder({
		appId: getPackageInfo().appId,
		appDevicePort,
		appSidePort,
	});

	const messaging = wrapperMessage(messageBuilder, log.getLogger('message-builder-device'));
  messaging.onCall = (cb) => {
    return messaging.onCall(payload => {
      if (payload.method === "chunk.received") {
        const fd = openSync({ path: cb.fileName, flag: O_APPEND });
        writeSync({
          fd,
          buffer: payload.buffer
        });
        closeSync({ fd });
        return
      }

      cb && cb(payload);
    })
  };

  return messaging
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
