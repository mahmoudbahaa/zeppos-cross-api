import TransferFile from '@zos/ble/TransferFile';
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

function downloadAndTransfer(data, opts = {}) {
	return this.messaging.request(
		{
			method: 'download.transfer',
			params: data,
		},
		opts,
	).then(filePath => {
    this.sendFile(filePath);
  })
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

export { appPlugin as a, downloadAndTransfer as d, httpRequest as h, pagePlugin as p };
