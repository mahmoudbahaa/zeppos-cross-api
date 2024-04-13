import TransferFile from '../../../bleTransferFile'
import { getFileTransfer } from '../../common/file-transfer.js'
// @ts-ignore
export const fileTransferLib = getFileTransfer(new TransferFile())
