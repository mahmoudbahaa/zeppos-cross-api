import { getFileTransfer } from '../../common/file-transfer.js';
import TransferFile from '../../../bleTransferFile.js';

export const fileTransferLib = getFileTransfer(new TransferFile());
