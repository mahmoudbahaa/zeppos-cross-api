import { h as httpRequest, a as appPlugin$1 } from './httpRequest-DXGwLP5I.js';
import { getPackageInfo } from '@zos/app';
import { log } from '@zos/utils';
import { MessageBuilder } from './message.js';
import { w as wrapperMessage } from './message-Bs_ux96Y.js';
import './bleTransferFile.js';
import './file-transfer-knPiEayp.js';
import '@zos/ble';
import './data.js';
import './defer-CYuMoFqG.js';
import './js-module-CctPB5ss.js';

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
  }
}

function BaseApp(option) {
	const messagingPlug = appPlugin();
	const filePlug = appPlugin$1();
	return {
		...option,
		...messagingPlug,
		...filePlug,
		onCreate(...opts) {
			messagingPlug.onCreate.apply(this);
			filePlug.onCreate.apply(this);
			option.onCreate?.apply(this, opts);
		},
		onDestroy(...opts) {
			option.onDestroy?.apply(this, opts);
			filePlug.onDestroy.apply(this);
			messagingPlug.onDestroy.apply(this);
		},
	};
}

export { BaseApp };
