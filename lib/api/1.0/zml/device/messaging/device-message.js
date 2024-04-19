import { getPackageInfo } from '../../../app';
import { O_APPEND, closeSync, openSync, writeSync } from '../../../fs.js';
import { log } from '../../../utils';
import { MessageBuilder } from '../../common/message.js';
import { wrapperMessage } from '../../common/messageWrapper.js';

const appDevicePort = 20;
const appSidePort = 0;

export function createDeviceMessage() {
  const messageBuilder = new MessageBuilder({
    appId: getPackageInfo().appId,
    appDevicePort,
    appSidePort,
  });

  const messaging = wrapperMessage(messageBuilder, log.getLogger('message-builder-device'));
  messaging.onCall = (cb) => {
    return messaging.onCall(payload => {
      if (payload.method === "chunk.received") {
        const fd = openSync({ path: cb.fileName, flag: O_APPEND })
        writeSync({
          fd,
          buffer: payload.buffer
        })
        closeSync({ fd })
        return
      }

      cb && cb(payload);
    })
  }

  return messaging
}
