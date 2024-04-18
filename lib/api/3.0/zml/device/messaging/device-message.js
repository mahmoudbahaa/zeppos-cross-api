import { MessageBuilder } from '../../common/message.js';
import { wrapperMessage } from '../../common/messageWrapper.js';
import { getPackageInfo } from '../../../app';
import * as ble from '../../../ble';
import { log } from '../../../utils';

const appDevicePort = 20;
const appSidePort = 0;

export function createDeviceMessage() {
  const messageBuilder = new MessageBuilder({
    appId: getPackageInfo().appId,
    appDevicePort,
    appSidePort,
    ble,
    logger: log.getLogger('device-message'),
  });

  return wrapperMessage(messageBuilder, log.getLogger('message-builder-device'));
}
