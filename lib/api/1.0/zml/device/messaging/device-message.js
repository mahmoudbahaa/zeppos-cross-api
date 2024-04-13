import { getPackageInfo } from '../../../app';
import { log } from '../../../utils';
import { MessageBuilder } from '../../../zeppos/message.js';
import { wrapperMessage } from '../../common/message.js';

const appDevicePort = 20;
const appSidePort = 0;

export function createDeviceMessage() {
	const messageBuilder = new MessageBuilder({
		appId: getPackageInfo().appId,
		appDevicePort,
		appSidePort,
	});

	return wrapperMessage(messageBuilder, log.getLogger('message-builder-device'));
}
