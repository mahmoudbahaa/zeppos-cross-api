import { MessageBuilder } from '../../../api/zeppos/message-side'
import { wrapperMessage } from '../../common/message.js'

const messageBuilder = new MessageBuilder()

export const messaging = wrapperMessage(messageBuilder)
