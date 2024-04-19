/* global Logger */
import { MessageBuilder } from '../../common/message-side';
import { wrapperMessage } from '../../common/messageWrapper.js';

const messageBuilder = new MessageBuilder();
export const messaging = wrapperMessage(messageBuilder, Logger.getLogger('message-builder-side'));
