import TransferFile from '@zos/ble/TransferFile';

function getFileTransfer(fileTransfer) {
  /**
   *     start(newfile)------------finished(file)
   *     device supported newfile and file
   *     side supported file
   */
  return {
    canUseFileTransfer() {
      if (typeof fileTransfer === 'undefined') {
        console.log('WARNING: FileTransfer require API_LEVEL 3.0');
        return false
      }
      return true
    },
    onFile(cb) {
      if (!cb) {
        return this
      }

      if (!this.canUseFileTransfer()) {
        return this
      }

      // at file task start
      fileTransfer.inbox.on('newfile', function () {
        const file = fileTransfer.inbox.getNextFile();
        cb && cb(file);
      });
      return this
    },
    onSideServiceFileFinished(cb) {
      if (!cb) {
        return this
      }

      if (!this.canUseFileTransfer()) {
        return this
      }

      // at file task finished
      fileTransfer.inbox.on('file', function () {
        const file = fileTransfer.inbox.getNextFile();
        cb && cb(file);
      });
      return this
    },
    emitFile() {
      fileTransfer.inbox.emit('file');
      return this
    },
    offFile() {
      if (!this.canUseFileTransfer()) {
        return this
      }

      fileTransfer.inbox.off('newfile');
      fileTransfer.inbox.off('file');
      return this
    },
    getFile() {
      if (!this.canUseFileTransfer()) {
        return null
      }

      return fileTransfer.inbox.getNextFile()
    },
    sendFile(path, opts) {
      if (!this.canUseFileTransfer()) {
        throw new Error('fileTransfer is not available')
      }

      return fileTransfer.outbox.enqueueFile(path, opts)
    },
  }
}

// @ts-ignore
const fileTransferLib = getFileTransfer(new TransferFile());

function pagePlugin$1(opts) {
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

function getDeviceMessage() {
  const { messaging } = getApp()._options.globalData;
  return messaging
}

function pagePlugin(opts) {
  const messaging = getDeviceMessage();
  return {
    onInit() {
      this.messaging = this.state.messaging = messaging;
      this._onCall = this.onCall?.bind(this);
      this._onRequest = this.onRequest?.bind(this);
      this.messaging.onCall(this._onCall).onRequest(this._onRequest);
    },
    onDestroy() {
      if (this._onCall) {
        this.messaging.offOnCall(this._onCall);
      }

      if (this._onRequest) {
        this.messaging.offOnRequest(this._onRequest);
      }
    },
    request(data, opts = {}) {
      return this.messaging.request(data, opts)
    },
    call(data) {
      return this.messaging.call(data)
    },
    httpRequest,
  }
}

function BasePage(option) {
  const messagingPlug = pagePlugin();
  const filePlug = pagePlugin$1();
  return {
    ...option,
    globalData: getApp()._options.globalData,
    ...messagingPlug,
    ...filePlug,
    onInit(...opts) {
      messagingPlug.onInit.apply(this);
      filePlug.onInit.apply(this);
      option.onInit?.apply(this, opts);
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      filePlug.onDestroy.apply(this);
      messagingPlug.onDestroy.apply(this);
    },
  }
}

export { BasePage };
