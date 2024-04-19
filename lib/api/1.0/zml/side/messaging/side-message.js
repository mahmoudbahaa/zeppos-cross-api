/* global Logger */
import { MessageBuilder } from '../../common/message.js';
import { wrapperMessage } from '../../common/message-wrapper.js';

const messageBuilder = new MessageBuilder({ logger: Logger.getLogger('side-message') });

export const messaging = wrapperMessage(messageBuilder, Logger.getLogger('message-builder-device'));
