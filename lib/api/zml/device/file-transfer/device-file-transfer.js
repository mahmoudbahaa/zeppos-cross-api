import TransferFile from '../../../api/transfer-file.js'
import { getFileTransfer } from '../../common/file-transfer.js'
// @ts-ignore
export const fileTransferLib = getFileTransfer(new TransferFile())
