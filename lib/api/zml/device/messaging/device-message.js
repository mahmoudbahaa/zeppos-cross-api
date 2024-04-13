import { getPackageInfo } from '../../../api/app'
import { MessageBuilder } from '../../../api/zeppos/message'
import { wrapperMessage } from '../../common/message.js'

const appDevicePort = 20
const appSidePort = 0

export function createDeviceMessage() {
  const messageBuilder = new MessageBuilder({
    appId: getPackageInfo().appId,
    appDevicePort,
    appSidePort,
  })

  return wrapperMessage(messageBuilder)
}
