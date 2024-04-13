import TransferFile from '../../../bleTransferFile';
import { getFileTransfer } from '../../common/file-transfer';
// @ts-ignore
export const fileTransferLib = getFileTransfer(new TransferFile());
