import TransferFile from './bleTransferFile.js';
import { g as getFileTransfer } from './file-transfer-knPiEayp.js';

// @ts-ignore
const fileTransferLib = getFileTransfer(new TransferFile());

function appPlugin(opts) {
  return {
    onCreate() {
      fileTransferLib.onFile(this.onReceivedFile?.bind(this));
    },
    onDestroy() {
      fileTransferLib.offFile();
    },
    sendFile(path, opts) {
      return fileTransferLib.sendFile(path, opts)
    },
  }
}

function pagePlugin(opts) {
  return {
    onInit() {
      this._onReceivedFile = this.onReceivedFile?.bind(this);
      fileTransferLib.onFile(this._onReceivedFile);
    },
    onDestroy() {
      if (this._onReceivedFile) {
        fileTransferLib.offFile(this._onReceivedFile);
      }
    },
    sendFile(path, opts) {
      return fileTransferLib.sendFile(path, opts)
    },
  }
}

function httpRequest(data, opts = {}) {
  return this.messaging.request(
    {
      method: 'http.request',
      params: data,
    },
    opts,
  )
}

export { appPlugin as a, httpRequest as h, pagePlugin as p };
