/* global Logger */
import { MessageBuilder } from '../../../zeppos/message-side'
import { wrapperMessage } from '../../common/message.js'

const messageBuilder = new MessageBuilder()

// @ts-ignore
export const messaging = wrapperMessage(messageBuilder, Logger.getLogger('message-builder-side'))
