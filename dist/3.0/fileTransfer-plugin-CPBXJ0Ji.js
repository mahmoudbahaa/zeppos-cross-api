import { log } from '@zos/utils';
import { g as getFileTransfer } from './file-transfer-btNVMsMj.js';
import TransferFile from '@zos/ble/TransferFile';

function loggerPlugin() {
  return {
    onInit() {
      this.logger = log.getLogger(this.name || 'Page');

      this.log = (...args) => {
        this.logger.log(...args);
      };

      this.error = (...args) => {
        if (args[0] instanceof Error) {
          this.logger.error(...args);
        } else {
          this.logger.error({}, ...args);
        }
      };

      this.debug = (...args) => {
        this.logger.debug(...args);
      };
    },
    onCreate() {
      this.logger = log.getLogger(this.name || 'app.js');

      this.log = (...args) => {
        this.logger.log(...args);
      };

      this.error = (...args) => {
        if (args[0] instanceof Error) {
          this.logger.error(...args);
        } else {
          this.logger.error({}, ...args);
        }
      };

      this.debug = (...args) => {
        this.logger.debug(...args);
      };
    },
  };
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
      return fileTransferLib.sendFile(path, opts);
    },
  };
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
      return fileTransferLib.sendFile(path, opts);
    },
  };
}

export { appPlugin as a, httpRequest as h, loggerPlugin as l, pagePlugin as p };
