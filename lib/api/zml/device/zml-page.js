import { BasePage } from './base-page.js'
import { pagePlugin as fileTransferPlugin } from './file-transfer/fileTransfer-plugin.js'
import { pagePlugin as messagingPlugin } from './messaging/page-plugin.js'

BasePage.use(messagingPlugin).use(fileTransferPlugin)

export { BasePage }
